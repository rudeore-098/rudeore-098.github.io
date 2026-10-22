# 개인 포트폴리오

GitHub Pages에 바로 올릴 수 있는 이력서형 정적 사이트입니다. 빌드 과정이 필요하지 않습니다.

## 파일 구성

| 경로 | 내용 |
| --- | --- |
| `index.html` | 메인 페이지(이력서). 본문은 Experience → Projects → Honours & Awards → Publications & Research, 오른쪽 사이드바는 Contact → Key Skills → Education → Certifications → Activities |
| `styles.css` | 전체 스타일 |
| `script.js` | 연도 표시, 메일 주소 복사 |
| `assets/profile.jpg` | 프로필 사진(지금은 자리 표시 이미지) |
| `assets/projects/` | 메인 Projects 목록 썸네일(프로젝트 로고): `seatcatcher-thumb.png`, `stackpot-thumb.png`, `mohassu-thumb.png` |
| `files/` | 내려받는 파일: `cv.pdf`(지금은 예시 PDF), `paper-one.pdf`(예시 PDF, 현재 어디에도 연결되지 않음) |
| `pages/` | 논문 소개 페이지: `research-one.html`(SLM 기반 해안 경계 이벤트 위험도 분류) |

## 내용 바꾸기

1. **기본 정보**: 이름(`Wonseok Choi`), 직함, 소개 문단은 `index.html`에 있습니다. `pages/` 안의 페이지에도 이름이 들어 있습니다.
2. **메일 주소**: 지금은 `rudeore0928@gmail.com`입니다. 바꿀 때는 모든 HTML 파일에서 이 주소를 찾아 바꿉니다. `data-email` 속성과 화면에 보이는 글자 모두 바꿔야 합니다.
3. **사진**: `assets/profile.jpg`를 본인 사진으로 교체합니다. 세로 3:4 비율이 가장 잘 맞고, 다른 비율도 칸에 맞게 잘려서 채워집니다.
4. **PDF 파일**: `files/`의 예시 PDF를 같은 이름의 실제 파일로 교체합니다. 이름을 바꾸면 HTML의 링크도 함께 바꿔 주세요.
5. **프로젝트 썸네일**: `assets/projects/`의 `*-thumb.png`가 메인 Projects 목록 왼쪽에 나옵니다. 칸이 가로 3:2라서, 정사각형 로고는 로고 배경색으로 채운 600×400 캔버스 가운데에 놓아 저장했습니다. 다른 비율의 이미지는 칸에 맞게 잘려서 채워집니다. 썸네일이 필요 없는 항목은 `has-thumb` 클래스와 `item-thumb` 링크를 지우면 됩니다.
6. **항목 추가**: 각 섹션의 `<article class="item">` 블록을 복사해서 내용을 바꿉니다.

## 프로젝트·연구 링크 방식

- **외부 페이지로 이동**: Projects 항목(SeatCatcher, STACKPOT, MohaSSU)은 제목·썸네일·`Notion` 표시가 각 Notion 페이지로 새 탭에서 열립니다.
- **소개 페이지로 이동**: 사이트 안에 소개 페이지를 두려면 `pages/research-one.html`을 복사해서 만들고 링크를 그 파일로 바꿉니다.
- **파일 다운로드**: 제목과 `PDF` 표시에 `download` 속성이 붙은 링크로 `files/` 안의 파일을 내려받습니다.

## 메일 복사

상단 메뉴의 **Contact**와 사이드바의 메일 주소를 누르면 주소가 클립보드에 복사되고 "Copied" 안내가 잠깐 뜹니다. 브라우저가 복사를 막으면 안내창에 주소를 대신 보여줍니다.

## 미리보기

이 폴더에서 `python -m http.server 4173`을 실행하고 `http://localhost:4173`을 여세요.

## GitHub Pages 배포

1. 저장소의 **Settings → Pages**에서 **Deploy from a branch**를 선택합니다.
2. 브랜치를 `main`, 폴더를 `/ (root)`로 설정하고 저장합니다.
3. 몇 분 뒤 `https://rudeore-098.github.io/`에서 확인합니다.
