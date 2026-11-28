# 개인 포트폴리오·블로그

GitHub Pages에 바로 올릴 수 있는 정적 사이트입니다(HTML·CSS·바닐라 JS). 빌드 과정이 필요하지 않습니다.

화면은 메인(레주메)·블로그·타임라인 세 개이고, 모든 이력과 글 목록은 `data.js` 한 곳에서 나옵니다. 각 화면은 `app.js`가 이 데이터로 그리기 때문에 JavaScript가 켜져 있어야 보입니다.

## 파일 구성

| 경로 | 내용 |
| --- | --- |
| `data.js` | 공통 데이터: 프로필, 이력 항목(`items`), 블로그 글(`posts`), 카테고리, 유형 |
| `app.js` | 화면 그리기(메인·상세·블로그·타임라인·글 목차), 연도 표시, 메일 복사 |
| `styles.css` | 전체 스타일(색·글꼴은 맨 위 `:root` 토큰) |
| `index.html` | 메인: 소개와 경력·활동 → 프로젝트 → 수상 → 연구, 오른쪽에 연락처·기술·학력·자격 |
| `item/index.html` | 항목 상세. 주소는 `item/?id=항목ID` |
| `blog/index.html` | 블로그 목록과 카테고리 필터. 주소는 `blog/?category=카테고리ID` |
| `timeline/index.html` | 연도별 아카이브: 날짜가 있는 항목을 시작 연도별로 묶어 보여줍니다 |
| `pages/` | 블로그 글: `k-guard.html`, `research-one.html`(한국어·영어 전환), `cmc-hackathon.html`, `hackathon-review.html`, `transformer-circuits.html`(논문 리뷰, 수식은 KaTeX) |
| `items/` | 항목 상세 본문: 논문(`k-guard.html`, `slm-coastal.html`)과 프로젝트(`seatcatcher.html`, `stackpot.html`, `mohassu.html`). `data.js` 항목의 `detail.body`로 연결하며, 불러오지 못하면 기본 항목 내용이 보입니다. |
| `portfolio/index.html` | 예전 주소를 메인으로 넘겨 주는 페이지 |
| `assets/`, `files/` | 썸네일·사진, 내려받는 PDF. `cv.pdf`는 `cv-source.html`을 Chrome으로 인쇄해 만들며, 다시 만드는 명령은 그 파일 맨 위 주석에 있습니다. CV를 바꾸면 모든 페이지 CV 버튼의 `cv.pdf?v=` 값도 올립니다 |
| `mockups/` | 블로그 디자인 시안(사이트에 연결되지 않음) |

## 이력 항목 추가·수정 (`data.js`의 `items`)

- `id`: 상세 주소와 관련 글 연결에 쓰는 고유값입니다. 한 번 정하면 바꾸지 않습니다.
- `type`: `activity`·`project`·`award`·`research` 중 하나. 메인 섹션과 타임라인 유형이 여기서 정해집니다.
- `period`: 화면에 그대로 보이는 기간 글자. `start`·`end`는 정렬과 타임라인 위치용으로 `YYYY-MM` 또는 월을 모르면 `YYYY`, 진행 중이면 `end: null`입니다. 날짜를 모르면 `start`를 비워 두면 타임라인에서 빠집니다.
- `detail`: 있으면 메인·타임라인에서 클릭해 상세로 갑니다. 없으면 제목만 보입니다. 상세에는 값이 있는 칸만 나옵니다.
  - 프로젝트: `overview`(개요), `role`(맡은 역할), `contributions`(주요 기여, 배열), `result`(결과), `links`
  - 수상: `contest`(대회명), `prize`(수상 내용), `entry`(출품작), `contributions`(기여), `links`
  - 연구: `overview`, `authors`, `venue`, `method`, `result`, `links`
  - 활동: `role`, `contributions`, `links`
- `posts`: 관련 글의 주소 목록(예: `['pages/k-guard.html']`). 상세 하단 `관련 포스트`에 나오고, 비어 있으면 그 영역은 숨겨집니다.
- 실제로 확인한 내용만 넣습니다. 항목이 없는 섹션은 메인에 "To be updated."가 보입니다.

## 새 글 발행 순서

1. `pages/k-guard.html`을 복사해 새 글을 만듭니다(같은 폴더에 두면 경로를 고칠 필요가 없습니다). 같은 이름의 파일이 이미 있는지 먼저 확인합니다.
2. `data.js`의 `posts` 맨 끝에 `url`, `title`, `category`, `tags`, `summary`를 추가합니다. 블로그 목록은 이 배열을 거꾸로 보여 주므로 맨 끝에 넣은 글이 가장 위에 나옵니다. 새 카테고리가 필요하면 `categories`에도 넣습니다.
3. 글과 관련된 이력 항목이 있으면 그 항목의 `posts`에 글 주소를 넣습니다.
4. 미리보기에서 블로그 목록·카테고리 필터·관련 포스트 링크·글의 목차를 눌러 확인합니다.

글 페이지의 카테고리·태그 줄과 오른쪽 목차(본문 `h2` 기준)는 `app.js`가 자동으로 채웁니다.

## 캐시

GitHub Pages는 파일을 브라우저에 10분 동안 저장해 둡니다. `styles.css`, `app.js`, `data.js`를 고친 뒤에는 모든 HTML 파일의 `?v=날짜` 값을 새 날짜로 바꿔야 방문자 브라우저가 새 파일을 받습니다.

## 미리보기

이 폴더에서 `python3 -m http.server 4173`을 실행하고 `http://localhost:4173`을 여세요.

## GitHub Pages 배포

1. 저장소의 **Settings → Pages**에서 **Deploy from a branch**를 선택합니다.
2. 브랜치를 `main`, 폴더를 `/ (root)`로 설정하고 저장합니다.
3. 몇 분 뒤 `https://rudeore-098.github.io/`에서 확인합니다.
