// Single source for the résumé (main), item detail pages, timeline and blog list.
// Only content that already existed on the site lives here: do not add new facts.
// Paths are relative to the site root. Items link posts by post URL, so post titles can change freely.
// Dates: start/end are 'YYYY-MM' or 'YYYY' (year only, month unknown); end: null means present.
window.SITE = {
  profile: {
    name: 'Wonseok Choi',
    role: 'Computer Science Engineer & Researcher',
    summary: 'I aim to be a developer who doesn’t fear change and backs every choice with evidence.',
    email: 'rudeore0928@gmail.com',
    links: [
      { label: 'GitHub', text: 'rudeore-098', url: 'https://github.com/rudeore-098' },
      { label: 'Velog', text: 'velog.io/@rude_ore098', url: 'https://velog.io/@rude_ore098/posts' },
    ],
    cv: 'files/cv.pdf',
    location: 'Seoul, Korea',
    skills: ['PyTorch', 'Python', 'Spring Boot', 'C', 'C++'],
    education: [{ title: 'Soongsil University', meta: 'Computer Science and Engineering', period: '2023 – Present' }],
    certifications: [
      { title: 'SQL Developer (SQLD)', meta: 'Korea Data Agency', period: 'Jun 2026' },
      { title: 'Advanced Data Analytics Semi-Professional (ADsP)', meta: 'Korea Data Agency', period: 'Jun 2026' },
      { title: 'Craftsman Information Processing', meta: 'HRD Korea' },
    ],
  },

  categories: [{ id: 'ai-research', name: 'AI·연구' }, { id: 'project', name: '프로젝트' }, { id: 'review', name: '후기' }],

  posts: [
    {
      url: 'pages/k-guard.html',
      title: 'Building a Military Domain-Specific LLM Guardrail and Benchmark',
      category: 'ai-research',
      tags: ['LLM 가드레일', '벤치마크', 'QLoRA'],
      summary: 'A Korean military-domain safety benchmark (military secrets, military discipline, ideology) and K-Guard, a guard model fine-tuned from kanana-safeguard-8b with QLoRA.',
    },
    {
      url: 'pages/research-one.html',
      title: 'Small Language Model-Based Risk Classification of Coastal Surveillance Events',
      category: 'ai-research',
      tags: ['SLM', 'PEFT', 'QLoRA'],
      summary: 'Seon Hong Lee, Wonseok Choi, Woojoon Lee, Yuchan Kim. Korea Institute of Military Science and Technology (KIMST) Annual Conference, 2026.',
    },
    {
      url: 'pages/seatcatcher.html', lang: 'ko',
      title: 'SeatCatcher | 백엔드 개발',
      category: 'project',
      tags: ['Spring Boot', 'JPA', 'FCM'],
      summary: '이용 경로 이력과 신고 API, FCM 푸시·알림함을 개발하고 사용자별 접근 제한과 서비스 테스트를 구현했습니다.',
    },
    {
      url: 'pages/stackpot.html', lang: 'ko',
      title: 'STACKPOT | 백엔드 개발·배포 자동화',
      category: 'project',
      tags: ['Spring Boot', 'JWT', 'Redis', 'GitHub Actions'],
      summary: '가입 상태를 반영한 인증 구조와 서비스 API를 개발하고, 배포 과정을 자동화했습니다.',
    },
    {
      url: 'pages/mohassu.html', lang: 'ko',
      title: 'MohaSSU | Android·Firebase 개발',
      category: 'project',
      tags: ['Android', 'Firebase'],
      summary: 'Firebase 인증과 사용자 데이터를 Android 화면에 연결하고, 친구 관계·시간표·현재 수업 확인 기능을 개발했습니다.',
    },
    {
      url: 'pages/cmc-hackathon.html', lang: 'ko',
      title: 'CMC 11th Hackathon Team 4 | Backend',
      category: 'project',
      tags: ['AWS', 'Spring Boot', 'Swagger', 'GitHub Actions'],
      summary: '집안일을 나누는 서비스의 AWS 인프라를 구성하고, API 서버에서 Swagger 에러 문서 자동화, QA 결함 수정, 문서·코드 일치 검사를 맡았습니다.',
    },
    {
      url: 'pages/hackathon-review.html', lang: 'ko',
      title: '11th NE(O)RDINARY HACKATHON 대회 후기',
      category: 'review',
      tags: ['해커톤', '대상', 'AWS'],
      summary: 'CMC와 UMC가 함께한 무박 2일 해커톤에서 서버와 AWS 인프라를 맡아 대상을 받기까지의 기록입니다.',
    },
  ],

  // Section order on the main page, and labels used everywhere.
  types: [
    { id: 'activity', name: '활동' , section: '경력·활동' },
    { id: 'project', name: '프로젝트', section: '프로젝트' },
    { id: 'award', name: '수상', section: '수상' },
    { id: 'research', name: '연구', section: '연구' },
  ],

  items: [
    {
      id: 'aitf', type: 'activity', title: 'AI Developer', org: 'AITF, ROK Marine Corps Headquarters',
      period: 'Feb 2026 – Nov 2026', start: '2026-02', end: '2026-11',
      summary: 'Built AI agents, enhanced the RAG system and set up servers.',
      detail: {
        role: 'AI Developer',
        contributions: ['Built AI agents.', 'Enhanced the RAG (retrieval-augmented generation) system.', 'Set up servers.'],
      },
    },
    {
      id: 'umc', type: 'activity', title: 'UMC 7th', org: 'Spring Boot',
      period: 'Sep 2024 – Feb 2025', start: '2024-09', end: '2025-02',
      summary: 'Completed Spring Boot training and participated in team projects.',
      detail: {
        contributions: ['Completed Spring Boot training.', 'Participated in team projects.'],
        links: [{ label: 'STACKPOT', url: 'item/?id=stackpot' }],
      },
    },
    {
      id: 'comet', type: 'activity', title: 'President', org: 'COM:et, 28th Student Council',
      period: 'Nov 2023 – Dec 2024', start: '2023-11', end: '2024-12',
      summary: 'School of Computer Science and Engineering, Soongsil University',
    },

    {
      id: 'seatcatcher', type: 'project', title: 'SeatCatcher', thumb: 'assets/projects/seatcatcher-thumb.png',
      period: 'May – Aug 2025', start: '2025-05', end: '2025-08', stack: 'Spring Boot, JPA, FCM',
      summary: 'Backend for a subway seat-sharing app.',
      detail: {
        overview: 'Backend for a subway seat-sharing app.',
        role: 'Backend',
        contributions: ['Report and route-history APIs.', 'FCM push notifications and in-app inbox.', 'Per-user access control and service tests.'],
        links: [{ label: 'Notion', url: 'https://rudeor0928.notion.site/SeatCatcher-3f5f535510f781be9b8efd3d3f18e90b?source=copy_link' }],
      },
      posts: ['pages/seatcatcher.html'],
    },
    {
      id: 'stackpot', type: 'project', title: 'STACKPOT', thumb: 'assets/projects/stackpot-thumb.png',
      period: '2024 – Feb 2025', start: '2024', end: '2025-02', stack: 'Spring Boot, JWT, Redis, Docker',
      summary: 'Backend for a team-activity service.',
      detail: {
        overview: 'Backend for a team-activity service.',
        role: 'Backend',
        contributions: ['Kakao login with JWT and Redis.', 'Sign-up flow for temporary users.', 'Feed and task APIs.', 'Blue/Green deployment with GitHub Actions.'],
        links: [{ label: 'Notion', url: 'https://rudeor0928.notion.site/STACKPOT-3f5f535510f781cc9f51e587cd4b8b2f?source=copy_link' }],
      },
      posts: ['pages/stackpot.html'],
    },
    {
      id: 'mohassu', type: 'project', title: 'MohaSSU', thumb: 'assets/projects/mohassu-thumb.png',
      period: 'Nov – Dec 2024', start: '2024-11', end: '2024-12', stack: 'Android, Java, Firebase',
      summary: 'Android app for checking friends’ profiles and timetables.',
      detail: {
        overview: 'Android app for checking friends’ profiles and timetables.',
        contributions: ['Firebase Authentication and Firestore integration.', 'Two-way friend relationships.', 'A live current-class indicator built from timetables.'],
        links: [{ label: 'Notion', url: 'https://rudeor0928.notion.site/MohaSSU-Android-Firebase-3f5f535510f7812a9a82ca604d71166d?source=copy_link' }],
      },
      posts: ['pages/mohassu.html'],
    },

    {
      id: 'neordinary-hackathon', type: 'award', title: 'Grand Prize, 11th NE(O)RDINARY HACKATHON', org: 'CMC × UMC',
      period: 'Nov 2026', start: '2026-11', end: '2026-11',
      summary: 'Grand Prize (대상) at a two-day CMC × UMC hackathon; built the AWS infrastructure and worked on the backend for Team 4.',
      detail: {
        contest: '11th NE(O)RDINARY HACKATHON, hosted by CMC and UMC at Chung-Ang University (Nov 21–22, 2026, overnight).',
        prize: 'Grand Prize (대상), among 8 teams.',
        entry: 'A service for people who share a home to share how they feel and take over each other’s chores (topic: 권태 + 집 × 덜어내기).',
        contributions: ['Built the AWS infrastructure: EC2 reached through SSM, RDS and S3.', 'Reviewed the ERD and API spec with the other server developer (7 tables, 36 APIs).', 'Focused on QA after the APIs were built, using tools to automate testing.'],
        links: [{ label: 'GitHub (team-4-backend)', url: 'https://github.com/cmc-11th-hackathon-Team-4/team-4-backend' }],
      },
      posts: ['pages/hackathon-review.html', 'pages/cmc-hackathon.html'],
    },

    {
      id: 'k-guard', type: 'research', title: 'Building a Military Domain-Specific LLM Guardrail and Benchmark',
      status: 'In progress', org: 'ROK Marine Corps Headquarters and Hanyang University ERICA',
      period: 'Aug 2026 – Present', start: '2026-08', end: null,
      summary: 'A Korean military-domain safety benchmark (military secrets, military discipline, ideology) and K-Guard, a guard model fine-tuned from kanana-safeguard-8b with QLoRA.',
      detail: {
        overview: 'A Korean military-domain safety benchmark (military secrets, military discipline, ideology) and K-Guard, a guard model fine-tuned from kanana-safeguard-8b with QLoRA.',
        method: 'K-Guard, fine-tuned from kanana-safeguard-8b with QLoRA.',
      },
      posts: ['pages/k-guard.html'],
    },
    {
      id: 'slm-coastal', type: 'research', title: 'Small Language Model-Based Risk Classification of Coastal Surveillance Events',
      period: '2026', start: '2026',
      summary: 'An SLM-based model for classifying coastal surveillance events and generating brief situation reports.',
      detail: {
        overview: 'This study proposes an SLM-based model for classifying coastal surveillance events and generating brief situation reports.',
        authors: 'Seon Hong Lee, Wonseok Choi, Woojoon Lee, Yuchan Kim',
        venue: 'Korea Institute of Military Science and Technology (KIMST) Annual Conference, 2026',
        method: 'QLoRA fine-tuning of kanana-1.5-2.1b-instruct-2505 on 926 generalized event samples.',
        result: 'The QLoRA model reached a macro F1 of 0.9461 on the test set, against 0.6007 for the baseline.',
        links: [{ label: 'Paper (PDF)', url: 'files/slm-coastal-surveillance-risk-classification.pdf', download: true }],
      },
      posts: ['pages/research-one.html'],
    },
  ],
};
