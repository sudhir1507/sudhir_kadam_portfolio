export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export const stats = [
  { value: '2+', label: 'Years of Experience' },
  { value: '5+', label: 'Projects Completed' },
];

export const services = [
  {
    title: 'Full-Stack Web Apps',
    icon: 'Code2',
    description:
      'End-to-end products with React and Node.js — storefronts, dashboards, and internal tools built for real users.',
  },
  {
    title: 'API & Backend Engineering',
    icon: 'Server',
    description:
      'REST APIs, queues, and service layers in Node.js, Flask, and FastAPI designed for reliability and clean architecture.',
  },
  {
    title: 'Database Design',
    icon: 'Database',
    description:
      'MySQL, PostgreSQL, and MongoDB schemas, indexing, and query tuning — including a 35% latency cut on production reads.',
  },
  {
    title: 'Auth & Security',
    icon: 'Lock',
    description:
      'JWT, RBAC, PHI encryption, and session controls for apps that handle payments, medical data, and user identity.',
  },
];

export const skillGroups = [
  { title: 'Programming Languages', items: ['JavaScript', 'TypeScript', 'Python', 'PHP', 'Java', 'C'] },
  {
    title: 'Backend Development',
    items: [
      'Node.js',
      'Express.js',
      'Flask',
      'FastAPI',
      'REST APIs',
      'Middleware',
      'MVC Architecture',
      'JSON',
      'Authentication (JWT)',
    ],
  },
  {
    title: 'Frontend Development',
    items: ['React.js', 'JavaScript (ES6+)', 'HTML', 'CSS', 'Bootstrap'],
  },
  { title: 'Databases', items: ['MySQL', 'MongoDB', 'PostgreSQL', 'SQL Server'] },
  { title: 'DevOps & Tools', items: ['Git', 'GitHub', 'Docker', 'AWS', 'Jira', 'Postman'] },
  {
    title: 'AI Tools',
    items: ['ChatGPT', 'GitHub Copilot', 'Cursor', 'Claude', 'Gemini'],
  },
  {
    title: 'Other',
    items: [
      'Caching (Redis)',
      'Rate Limiting',
      'API Design',
      'API Security',
      'Error Handling',
      'Async Programming',
    ],
  },
];

export const projects = [
  {
    title: 'Dealer Commander',
    kicker: 'E-commerce',
    subtitle: 'Office Supply E-Commerce Platform',
    description:
      'Full-stack e-commerce platform for office supply dealers — dynamic React UI, multi-tier promotions, secure JWT authentication, Redis session caching, and MySQL query optimization that cut latency by 35%.',
    highlights: [
      'React storefront with dynamic promotions and catalog flows',
      'JWT auth, role-based access, and Redis-backed sessions',
      'MySQL tuning that reduced query latency by 35%',
      'Razorpay payment integration for secure checkout',
    ],
    tags: ['React.js', 'Node.js', 'Express', 'MySQL', 'JWT', 'Redis', 'Razorpay'],
  },
  {
    title: 'Medicle Coding System',
    kicker: 'Healthcare',
    subtitle: 'Medical Coding Operations & Risk Adjustment Platform',
    description:
      'Full-stack medical coding platform for HCC risk adjustment — featuring a three-tier review pipeline, granular per-page RBAC, PHI encryption, and an optimized chart store engine for rapid audit workflows.',
    highlights: [
      'Three-level pipeline supporting L1 coding, L2 auditor review, and L3 final approval',
      'Fine-grained page-level permissions with user override controls',
      'Fernet PHI encryption, access logging, and optional device/MFA security controls',
      'Integrated PDF workspace with workspace time-tracking and automated Excel exports',
    ],
    tags: ['Python', 'Flask', 'PostgreSQL', 'SQLAlchemy', 'Bootstrap', 'Gunicorn', 'Docker'],
  },
  {
    title: 'NeedMate',
    kicker: 'Marketplace',
    subtitle: 'On-Demand Home Services Marketplace Platform',
    description:
      'Full-stack on-demand home services marketplace — dynamic multi-language catalog, instant provider matching algorithms, non-blocking order queues, and real-time WebSocket location tracking.',
    highlights: [
      'Shared FastAPI backend powering Jinja2 web interfaces and a cross-platform Flutter mobile app',
      'JWT authentication with mobile OTP verification and code-driven MongoDB RBAC',
      'Non-blocking immediate job matching engine using background queue workers and geo-location scoring',
      'Real-time WebSocket tracking and chat with AWS S3 storage and FCM push notifications',
    ],
    tags: ['FastAPI', 'Python', 'MongoDB', 'Flutter', 'WebSocket', 'Celery', 'Redis', 'AWS S3'],
  },
];

export const experience = [
  {
    role: 'Software Developer',
    company: 'Sparken IT Solutions Private Ltd',
    period: 'Nov 2024 – Present',
    bullets: [
      'Architecting full-stack e-commerce platforms with secure JWT authentication, RBAC, and optimized MySQL queries (35% latency reduction).',
      'Designed RESTful APIs and integrated Razorpay payment gateway for production checkout flows.',
    ],
  },
  {
    role: 'Software Developer Intern',
    company: 'G Soft Solutions Private Ltd',
    period: 'May 2024 – Oct 2024',
    bullets: [
      'Developed responsive React.js and Node.js web applications with clean REST APIs and asynchronous communication.',
      'Implemented efficient middleware patterns to reduce server load and improve request handling.',
    ],
  },
];

export const education = [
  {
    title: 'Bachelor of Technology (Electronics & Telecommunication)',
    school: 'Shri Guru Gobind Singhji Institute of Engineering & Technology, Nanded, Maharashtra',
    period: 'Aug 2018 – July 2022',
    detail: 'CGPA: 8.35',
  },
];
