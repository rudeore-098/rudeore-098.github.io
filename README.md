# 개인 포트폴리오·개발 블로그

GitHub Pages에 바로 올릴 수 있는 정적 사이트입니다(HTML·CSS·바닐라 JS). 빌드 과정이 필요하지 않습니다.

## 파일 구성

| 경로 | 내용 |
| --- | --- |
| `index.html` | 홈: 소개 → 프로젝트·활동 카드 → 최신 글 |
| `portfolio/index.html` | 포트폴리오: 프로젝트·연구·대회·수상·경력, 사이드바에 연락처·기술·학력·자격 |
| `blog/index.html` | 블로그 목록: 프로젝트(`#project`)·연구(`#research`)·대회(`#competition`)·수상(`#award`)·공부(`#study`) |
| `blog/{slug}/index.html` | 새 블로그 글(아직 없음) |
| `styles.css` | 전체 스타일(색·글꼴은 맨 위 `:root` 토큰) |
| `script.js` | 연도 표시, 메일 주소 복사 |
| `assets/profile.jpg` | 프로필 사진(지금은 자리 표시 이미지) |
| `assets/projects/` | 메인 Projects 목록 썸네일(프로젝트 로고): `seatcatcher-thumb.png`, `stackpot-thumb.png`, `mohassu-thumb.png` |
| `assets/news/` | 논문 페이지 In the News 사진: `kimst-2026.jpg` (출처: 한양대 ERICA, 중앙일보 기사) |
| `files/` | 내려받는 파일: `cv.pdf`(지금은 예시 PDF), `slm-coastal-surveillance-risk-classification.pdf`(논문) |
| `pages/` | 연구 글(블로그 상세 서식, 기존 주소 유지): `research-one.html`(SLM 기반 해안 경계 이벤트 위험도 분류), `k-guard.html`(군사 도메인 특화 LLM 가드레일 및 벤치마크, 진행 중) |

## 내용 바꾸기

1. **기본 정보**: 이름(`Wonseok Choi`), 직함, 소개 문단은 `index.html`에 있습니다. 다른 페이지 메뉴와 푸터에도 이름이 들어 있습니다.
2. **메일 주소**: 지금은 `rudeore0928@gmail.com`입니다. `portfolio/index.html`의 `mailto:` 링크, 화면 글자, 복사 버튼의 `data-email`을 모두 바꿉니다.
3. **사진**: `assets/profile.jpg`는 개편 후 화면에서 쓰지 않습니다(자리 표시 이미지라 뺐습니다). 실제 사진이 생기면 다시 넣습니다.
4. **PDF 파일**: `files/`의 예시 PDF를 같은 이름의 실제 파일로 교체합니다. 이름을 바꾸면 HTML의 링크도 함께 바꿔 주세요.
5. **프로젝트 썸네일**: `assets/projects/`의 `*-thumb.png`가 홈 카드와 포트폴리오 목록에 나옵니다. 칸이 가로 3:2라서, 정사각형 로고는 로고 배경색으로 채운 600×400 캔버스 가운데에 놓아 저장했습니다. 다른 비율의 이미지는 칸에 맞게 잘려서 채워집니다. 썸네일이 없는 항목은 카드에서 `<img>`를, 포트폴리오에서 `has-thumb` 클래스와 `item-thumb` 이미지를 지웁니다.
6. **항목 추가**: 포트폴리오 각 섹션의 `<article class="item">` 블록, 홈은 `<ul class="cards">`의 `<li>`를 복사합니다. 실제 확인한 대회·수상만 등록합니다.

## 항목 클릭 목적지

홈 카드와 포트폴리오 항목은 같은 곳을 엽니다. 우선순위는 다음과 같습니다.

1. 공개 글이 1편이면 그 글.
2. 관련 글이 여러 편이면 전체 소개 글(세부 글은 소개 본문에서 연결).
3. 글이 없고 기존 링크가 있으면 기존 링크. 지금 세 프로젝트는 Notion(새 탭)입니다.
4. 둘 다 없으면 링크 없이 설명만 표시합니다.

## 새 글 발행 순서

한 변경 안에서 아래를 모두 하고 함께 확인합니다.

1. `pages/k-guard.html`을 `blog/{slug}/index.html`로 복사해 본문을 바꿉니다. 경로가 한 단계 깊어지므로 `../`를 `../../`로 바꾸고, `post-type`에 유형을, 날짜가 확인됐으면 `<time>`을 넣습니다. 같은 slug가 이미 있는지 먼저 확인합니다.
2. `blog/index.html`의 해당 유형 그룹에 행을 추가합니다(게시일 있는 글이 위, 최신순). 그 그룹에 첫 글이면 상단 유형 링크도 추가합니다.
3. 게시일이 확인된 글이면 홈 `최신 글`에 추가합니다(주석의 행 예시 참고).
4. 해당 프로젝트·활동이 있으면 홈 카드와 포트폴리오 항목의 링크를 함께 바꿉니다.
5. 미리보기 서버에서 새 주소, 목록 링크, `#유형` 앵커, 홈·포트폴리오 링크를 눌러 확인합니다.

## 메일 복사

포트폴리오 연락처의 메일 주소는 `mailto:` 링크이고, 옆 **복사** 버튼을 누르면 클립보드에 복사되고 안내가 잠깐 뜹니다. 브라우저가 복사를 막으면 안내창에 주소를 대신 보여줍니다.

## 캐시

GitHub Pages는 파일을 브라우저에 10분 동안 저장해 둡니다. `styles.css`나 `script.js`를 고친 뒤에는 모든 HTML 파일의 `?v=날짜` 값을 새 날짜로 바꿔야 방문자 브라우저가 새 파일을 받습니다.

## 미리보기

이 폴더에서 `python3 -m http.server 4173`을 실행하고 `http://localhost:4173`을 여세요.

## GitHub Pages 배포

1. 저장소의 **Settings → Pages**에서 **Deploy from a branch**를 선택합니다.
2. 브랜치를 `main`, 폴더를 `/ (root)`로 설정하고 저장합니다.
3. 몇 분 뒤 `https://rudeore-098.github.io/`에서 확인합니다.
