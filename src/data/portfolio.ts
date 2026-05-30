export const NAV_LINKS = ["About", "Skills", "Experience", "Projects", "Contact"] as const;

export const ROLES = [
  "Full Stack Developer",
  "React.js Specialist",
  "API Integration Engineer",
  "Product-Focused Engineer",
];

export const ORBIT_KEYWORDS = [
  "React",
  "Python",
  "Django",
  "REST API",
  "Frontend",
  "Backend",
  "UI/UX",
  "Next.js",
];

export const SKILLS = {
  frontend: [
    { name: "React.js", level: 92 },
    { name: "JavaScript (ES6+)", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "HTML5 / CSS3", level: 88 },
  ],
  backend: [
    { name: "Python", level: 82 },
    { name: "Django", level: 80 },
    { name: "REST API Design", level: 88 },
  ],
  tools: [
    { name: "Git & GitHub", level: 90 },
    { name: "Agile / Sprints", level: 85 },
    { name: "Performance & SEO", level: 84 },
    { name: "RBAC & Architecture", level: 82 },
  ],
};

export type FeaturedProject = {
  id: string;
  title: string;
  tagline: string;
  stack: string[];
  bullets: string[];
  github: string;
  demo: string;
  accent: string;
  mockup: "crm-hr" | "career-portal" | "platform-dashboard" | "saas-landing";
};

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: "crm-hr",
    title: "CRM HR Modules",
    tagline: "HR wallet, incentives, and expense workflows inside a CRM suite.",
    stack: ["Angular", "REST APIs", "CRM"],
    bullets: [
      "Built HR modules for debit penalties, incentive credits, and expense tracking with role-aware views.",
      "Designed data-dense tables, filters, and wallet summaries for finance and ops teams.",
      "Integrated REST endpoints for real-time balances and audit-friendly transaction history.",
    ],
    github: "#",
    demo: "#",
    accent: "from-amber-500/20 to-orange-500/10",
    mockup: "crm-hr",
  },
  {
    id: "career-portal",
    title: "IndiaFilings Career Portal",
    tagline: "Candidate-facing career hub with responsive layouts and clear hiring paths.",
    stack: ["React.js", "Responsive UI", "UX"],
    bullets: [
      "Rebuilt portal UI with improved component hierarchy and mobile-first job discovery.",
      "Streamlined application flows, department browsing, and content sections for candidates.",
      "Improved accessibility, spacing, and visual hierarchy across listing and detail views.",
    ],
    github: "#",
    demo: "#",
    accent: "from-emerald-500/20 to-teal-500/10",
    mockup: "career-portal",
  },
  {
    id: "platform-dashboard",
    title: "Ledgers Pro Platform",
    tagline: "Multi-module business platform with leads, catalog, and access control.",
    stack: ["React.js", "Django", "REST APIs", "RBAC"],
    bullets: [
      "Architected front-end structure for lead management, service catalog, and dashboards.",
      "Implemented RBAC with granular permissions across roles and modules.",
      "Delivered KPI widgets, funnel charts, and service tables backed by Django REST APIs.",
    ],
    github: "#",
    demo: "#",
    accent: "from-blue-500/20 to-cyan-500/10",
    mockup: "platform-dashboard",
  },
  {
    id: "saas-landing",
    title: "Ledgers Pro Landing Page",
    tagline: "High-performance marketing site with SEO and conversion-focused layout.",
    stack: ["React.js", "CSS3", "SEO", "Performance"],
    bullets: [
      "Shipped production-ready landing pages with measurable Lighthouse gains.",
      "Applied lazy loading, code splitting, and responsive grids for all breakpoints.",
      "Balanced hero storytelling with product preview sections and clear CTAs.",
    ],
    github: "#",
    demo: "#",
    accent: "from-violet-500/20 to-blue-500/10",
    mockup: "saas-landing",
  },
];

/** @deprecated Use FEATURED_PROJECTS — kept for any legacy imports */
export const PROJECTS = FEATURED_PROJECTS;

export const EXPERIENCE = [
  {
    role: "Full Stack Developer",
    company: "IndiaFiling Pvt. Ltd.",
    location: "Chennai",
    period: "Jul 2022 – Present",
    points: [
      "React.js development across multiple production platforms including Ledgers Pro and the company career portal.",
      "Built and maintained the Ledgers Pro platform (React.js + Django): lead management, catalog features, and RBAC.",
      "Engineered SEO-optimised, fully responsive landing pages improving page load scores and discoverability.",
      "Redesigned the IndiaFilings career portal UI with enhanced mobile responsiveness.",
      "Developed Angular-based HR/CRM modules for penalties, incentives, and expense tracking.",
      "Integrated Python/Django REST APIs across front-end applications with robust error handling.",
    ],
  },
];

export const EDUCATION = [
  { degree: "B.E. Instrumentation & Control Engineering", school: "St. Joseph's College of Engineering, OMR, Chennai", year: "2021", grade: "CGPA: 7.32" },
  { degree: "Higher Secondary Certificate (HSC)", school: "Little Jacky Matriculation Hr. Sec. School, Chengalpattu", year: "2016", grade: "63%" },
  { degree: "Secondary School Leaving Certificate (SSLC)", school: "St. Pauls Matriculation Hr. Sec. School, Tambaram", year: "2015", grade: "76%" },
];

export const STATS = [
  { n: "3.5+", l: "Years Experience" },
  { n: "4+", l: "Production Apps" },
  { n: "20+", l: "Features Shipped" },
  { n: "2", l: "Core Stacks" },
];

export const CONTACT = {
  email: "harishwaran862@gmail.com",
  phone: "+91 8925433774",
  linkedin: "https://linkedin.com/in/harieaswaran-j-aa1b3920a",
  location: "Chengalpattu, Tamil Nadu",
  github: "#",
};

export const ACHIEVEMENTS = [
  "React.js Certification – Besant Institute (foundation through advanced component patterns).",
  "Delivered multiple full-stack features across production deployments within Agile sprint cycles.",
  "Contributed to measurable SEO and performance improvements on Ledgers Pro and the career portal.",
];
