// Renders every page from window.SITE (data.js). Each page sets <body data-page="..." data-root="../">.
const S = window.SITE;
const page = document.body.dataset.page;
const root = document.body.dataset.root || '';
const params = new URLSearchParams(location.search);

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const typeOf = (id) => S.types.find((t) => t.id === id);
const catOf = (id) => S.categories.find((c) => c.id === id);
const postOf = (url) => S.posts.find((p) => p.url === url);
const itemUrl = (it) => `${root}item/?id=${encodeURIComponent(it.id)}`;
const newTab = '<span class="sr-only">(새 탭에서 열림)</span>';
const $ = (sel) => document.querySelector(sel);

// 'YYYY' or 'YYYY-MM' -> month index; year-only dates are flagged so nothing pretends to know the month.
function month(s) {
  const [y, m] = s.split('-');
  return { i: +y * 12 + (m ? +m - 1 : 0), yearOnly: !m };
}
const dated = S.items.filter((it) => it.start).sort((a, b) => month(b.start).i - month(a.start).i);

// One post row: title, summary, category and tags (blog list and 관련 포스트)
const postRow = (p) => `
    <li>
      <a class="title" href="${root}${p.url}" lang="${p.lang || 'en'}">${esc(p.title)}</a>
      <p class="summary" lang="${p.lang || 'en'}">${esc(p.summary)}</p>
      <p class="post-meta"><span class="cat">${esc(catOf(p.category).name)}</span>${p.tags.map((t) => `<span class="tag">#${esc(t)}</span>`).join('')}</p>
    </li>`;

function titleHtml(it) {
  return it.detail ? `<a href="${itemUrl(it)}">${esc(it.title)}</a>` : esc(it.title);
}

/* ---------- Main: clickable résumé ---------- */
function renderHome() {
  const p = S.profile;
  $('#sections').innerHTML = S.types.map((t) => {
    const items = S.items.filter((it) => it.type === t.id);
    const rows = items.map((it) => `
      <article class="item type-${it.type}${it.detail ? ' has-link' : ''}${it.thumb ? ' has-thumb' : ''}" lang="en">
        ${it.thumb ? `<img class="item-thumb" src="${root}${it.thumb}" alt="" width="600" height="400" loading="lazy" />` : ''}
        <div class="item-body">
          <h3 class="item-title">${titleHtml(it)}${it.status ? ` <span class="status">${esc(it.status)}</span>` : ''}</h3>
          ${it.org || it.stack ? `<p class="item-meta">${esc(it.org || it.stack)}</p>` : ''}
          <p class="item-summary">${esc(it.summary)}</p>
        </div>
        <p class="item-date">${esc(it.period || '')}</p>
      </article>`).join('');
    return `<section aria-labelledby="sec-${t.id}"><h2 id="sec-${t.id}">${esc(t.section)}</h2>${rows || '<p class="empty" lang="en">To be updated.</p>'}</section>`;
  }).join('');

  const list = (arr) => arr.map((e) => `<div class="side-item" lang="en"><p class="side-title">${esc(e.title)}</p><p>${esc(e.meta)}</p>${e.period ? `<p class="side-date">${esc(e.period)}</p>` : ''}</div>`).join('');
  $('#profile').innerHTML = `
    <section aria-labelledby="contact-title"><h2 id="contact-title">연락처</h2>
      <dl class="contact-list">
        <div><dt>Email</dt><dd><a href="mailto:${esc(p.email)}">${esc(p.email)}</a> <button type="button" class="copy-email" data-email="${esc(p.email)}">복사</button></dd></div>
        ${p.links.map((l) => `<div><dt>${esc(l.label)}</dt><dd><a href="${esc(l.url)}" target="_blank" rel="noopener noreferrer">${esc(l.text)}${newTab}</a></dd></div>`).join('')}
        <div><dt>CV</dt><dd><a href="${root}${p.cv}" download>CV (PDF)</a></dd></div>
        <div><dt>Location</dt><dd lang="en">${esc(p.location)}</dd></div>
      </dl></section>
    <section aria-labelledby="skills-title"><h2 id="skills-title">기술</h2><ul class="skill-list" lang="en">${p.skills.map((s) => `<li>${esc(s)}</li>`).join('')}</ul></section>
    <section aria-labelledby="edu-title"><h2 id="edu-title">학력</h2>${list(p.education)}</section>
    <section aria-labelledby="cert-title"><h2 id="cert-title">자격</h2>${list(p.certifications)}</section>`;
}

/* ---------- Item detail ---------- */
const FIELDS = {
  project: [['개요', 'overview'], ['기간', 'period'], ['맡은 역할', 'role'], ['기술', 'stack'], ['주요 기여', 'contributions'], ['결과', 'result'], ['자료', 'links']],
  award: [['대회명', 'contest'], ['수상 내용', 'prize'], ['기간', 'period'], ['출품작', 'entry'], ['기여', 'contributions'], ['자료', 'links']],
  research: [['개요', 'overview'], ['기간', 'period'], ['상태', 'status'], ['소속·발표', 'org'], ['저자', 'authors'], ['발표', 'venue'], ['방법', 'method'], ['결과', 'result'], ['자료', 'links']],
  activity: [['소속', 'org'], ['기간', 'period'], ['역할', 'role'], ['활동 내용', 'contributions'], ['자료', 'links']],
};

function fieldHtml(key, v) {
  if (key === 'links') {
    return `<ul class="plain">${v.map((l) => {
      const ext = /^https?:/.test(l.url);
      return `<li><a href="${ext ? esc(l.url) : root + l.url}"${l.download ? ' download' : ''}${ext ? ' target="_blank" rel="noopener noreferrer"' : ''}>${esc(l.label)}${ext ? newTab : ''}</a></li>`;
    }).join('')}</ul>`;
  }
  if (Array.isArray(v)) return `<ul>${v.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>`;
  return `<p>${esc(v)}</p>`;
}

function renderItem() {
  const it = S.items.find((i) => i.id === params.get('id') && i.detail);
  const main = $('#item');
  if (!it) {
    main.innerHTML = `<h1>항목을 찾을 수 없습니다</h1><p class="center">주소가 바뀌었거나 상세 페이지가 없는 항목입니다. <a href="${root}">메인</a>에서 다시 골라 주세요.</p>`;
    return;
  }
  document.title = `${it.title} · ${S.profile.name}`;
  const rows = FIELDS[it.type].map(([label, key]) => {
    const v = it.detail[key] ?? it[key];
    if (v == null || v === '' || (Array.isArray(v) && !v.length)) return '';
    return `<div class="field"><dt>${label}</dt><dd lang="en">${fieldHtml(key, v)}</dd></div>`;
  }).join('');
  const related = (it.posts || []).map(postOf).filter(Boolean);
  main.innerHTML = `
    <p class="post-type">${esc(typeOf(it.type).name)}</p>
    <h1 lang="en">${esc(it.title)}</h1>
    <dl class="fields">${rows}</dl>
    ${related.length ? `<section class="related" aria-labelledby="related-title"><h2 id="related-title">관련 포스트</h2>
      <ul class="post-list">${related.map(postRow).join('')}</ul></section>` : ''}`;
}

/* ---------- Blog list with category filter ---------- */
function renderBlog() {
  const current = catOf(params.get('category')) ? params.get('category') : 'all';
  const count = (id) => S.posts.filter((p) => id === 'all' || p.category === id).length;
  const chip = (id, name) => `<li><a href="${id === 'all' ? './' : `?category=${id}`}"${id === current ? ' aria-current="true"' : ''}>${esc(name)}<span class="count">${count(id)}</span></a></li>`;
  $('#filters').innerHTML = chip('all', '전체') + S.categories.map((c) => chip(c.id, c.name)).join('');
  const posts = S.posts.filter((p) => current === 'all' || p.category === current);
  $('#posts').innerHTML = posts.length ? posts.map(postRow).join('') : '<li class="empty">이 카테고리에는 아직 글이 없습니다. <a href="./">전체 글 보기</a></li>';
}

/* ---------- Timeline: dated items grouped by start year ---------- */
function renderTimeline() {
  const years = [...new Set(dated.map((it) => it.start.slice(0, 4)))];
  $('#timeline').innerHTML = years.map((y) => `
    <section class="tl-year" aria-labelledby="y${y}"><h2 id="y${y}">${y}</h2>
      <ul>${dated.filter((it) => it.start.startsWith(y)).map((it) => `
        <li><span class="tl-date" lang="en">${esc(it.period)}</span><span class="tl-title" lang="en">${titleHtml(it)}</span><span class="tl-type">${esc(typeOf(it.type).name)}</span></li>`).join('')}
      </ul></section>`).join('');
  const undated = S.items.filter((it) => !it.start);
  if (undated.length) $('#timeline').insertAdjacentHTML('beforeend', `<p class="empty">날짜가 없는 항목 ${undated.length}개는 타임라인에서 뺐습니다.</p>`);
}

/* ---------- Post pages: category, tags and a sticky table of contents ---------- */
function renderPost() {
  const post = S.posts.find((p) => location.pathname.endsWith('/' + p.url));
  if (post) {
    $('.post-type').innerHTML = `<a href="${root}blog/?category=${post.category}">${esc(catOf(post.category).name)}</a>${post.tags.map((t) => ` <span class="tag">#${esc(t)}</span>`).join('')}`;
  }
  const article = $('main article');
  const toc = document.createElement('nav');
  toc.className = 'toc';
  article.after(toc);
  let observer;

  // Contents list for one language version (or the whole article); rebuilt when the language changes.
  function buildToc(scope) {
    observer?.disconnect();
    const heads = [...scope.querySelectorAll('h2')];
    toc.hidden = heads.length < 2;
    if (toc.hidden) return;
    const title = scope.lang === 'en' ? 'Contents' : '목차';
    toc.setAttribute('aria-label', title);
    // tabindex -1 lets a TOC jump move keyboard focus to the section
    heads.forEach((h, i) => { h.id ||= `${scope.lang || 's'}-${i + 1}`; h.tabIndex = -1; });
    toc.innerHTML = `<p>${title}</p><ol>${heads.map((h) => `<li><a href="#${h.id}">${esc(h.textContent)}</a></li>`).join('')}</ol>`;
    // Mark the section currently near the top of the screen.
    const links = toc.querySelectorAll('a');
    observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        links.forEach((a) => a.toggleAttribute('aria-current', a.hash === '#' + e.target.id));
      });
    }, { rootMargin: '0px 0px -70% 0px' });
    heads.forEach((h) => observer.observe(h));
  }

  // Posts with a Korean and an English version get a switch; Korean shows first.
  const versions = [...article.querySelectorAll(':scope > .post-lang')];
  if (versions.length < 2) return buildToc(article);
  const names = { ko: '한국어', en: 'English' };
  const sw = document.createElement('div');
  sw.className = 'lang-switch';
  sw.setAttribute('role', 'group');
  sw.setAttribute('aria-label', '언어 선택');
  sw.innerHTML = versions.map((v) => `<button type="button" lang="${v.lang}" data-lang="${v.lang}">${names[v.lang] || v.lang}</button>`).join('');
  article.prepend(sw);
  const show = (lang) => {
    const current = versions.find((v) => v.lang === lang) || versions[0];
    versions.forEach((v) => { v.hidden = v !== current; });
    sw.querySelectorAll('button').forEach((b) => b.setAttribute('aria-pressed', b.dataset.lang === current.lang));
    buildToc(current);
  };
  sw.addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b) return;
    show(b.dataset.lang);
    try { localStorage.setItem('post-lang', b.dataset.lang); } catch {}
  });
  let saved = 'ko';
  try { saved = localStorage.getItem('post-lang') || 'ko'; } catch {}
  show(saved);
}

({ home: renderHome, item: renderItem, blog: renderBlog, timeline: renderTimeline, post: renderPost })[page]?.();

/* ---------- Shared: footer year, email copy ---------- */
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const toast = document.getElementById('toast');
let toastTimer;
document.addEventListener('click', async (e) => {
  const button = e.target.closest('.copy-email');
  if (!button || !toast) return;
  const email = button.dataset.email;
  try {
    await navigator.clipboard.writeText(email);
    toast.textContent = `복사했습니다: ${email}`;
  } catch {
    toast.textContent = `이메일: ${email}`;
  }
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2000);
});
