import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCode, FaServer, FaTools } from "react-icons/fa";
import { AnimatedBackground } from "../components/AnimatedBackground";

const NAV_LINKS = ["About", "Skills", "Experience", "Projects", "Contact"];

const SKILLS = {
  frontend: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Next.js"],
  backend: ["Python", "Django", "REST API Design & Integration"],
  additional: ["Angular (HR/CRM modules)", "Frontend Architecture", "Performance Optimisation", "SEO", "Responsive Design", "RBAC"],
  tools: ["Git", "GitHub", "Claude AI", "Stitch", "Agile / Sprint Workflows"],
};

const PROJECTS = [
  {
    title: "Ledgers Pro Platform",
    stack: "React.js · Django · REST APIs",
    bullets: [
      "Architected front-end component structure for a multi-module business platform serving lead management, catalog, and user access control.",
      "Implemented RBAC to enforce granular permissions across user roles, improving security and auditability.",
    ],
    color: "#2563eb",
  },
  {
    title: "Ledgers Pro Landing Page",
    stack: "React.js · CSS3 · SEO",
    bullets: [
      "Delivered production-ready, SEO-optimised marketing pages with measurable Lighthouse score improvements.",
      "Applied lazy loading, code splitting, and responsive grid layouts for cross-device consistency.",
    ],
    color: "#2563eb",
  },
  {
    title: "IndiaFilings Career Portal",
    stack: "React.js · CSS3",
    bullets: [
      "Rebuilt the portal UI from the ground up with an improved component hierarchy, responsive layout, and streamlined candidate-facing UX.",
    ],
    color: "#2563eb",
  },
  {
    title: "CRM HR Modules",
    stack: "Angular · REST APIs",
    bullets: [
      "Implemented HR-specific modules covering debit penalty tracking, incentive credit logic, and expense management within a CRM system.",
      "Collaborated with back-end team to design and consume REST endpoints for real-time data operations.",
    ],
    color: "#2563eb",
  },
];

const EXPERIENCE = [
  {
    role: "Full Stack Developer",
    company: "IndiaFiling Pvt. Ltd.",
    location: "Chennai",
    period: "Jul 2022 – Present",
    points: [
      "Led React.js development across multiple production platforms including Ledgers Pro and the company career portal, owning component architecture and performance optimisation.",
      "Built and maintained the Ledgers Pro platform (React.js + Django): custom lead management workflows, dynamic catalog features, and role-based access control (RBAC).",
      "Engineered SEO-optimised, fully responsive landing pages for Ledgers Pro using React.js, improving page load scores and organic discoverability.",
      "Redesigned the IndiaFilings career portal UI with React.js, enhancing mobile responsiveness and improving candidate experience.",
      "Developed Angular-based HR/CRM modules for debit penalties, credit incentives, and expense tracking.",
      "Integrated Python/Django REST APIs across front-end applications, ensuring robust data flow and error handling.",
      "Collaborated within Agile sprints using Git for version control; leveraged AI tools (Claude, Stitch) to accelerate development velocity.",
    ],
  },
];

const EDUCATION = [
  { degree: "B.E. Instrumentation & Control Engineering", school: "St. Joseph's College of Engineering, OMR, Chennai", year: "2021", grade: "CGPA: 7.32" },
  { degree: "Higher Secondary Certificate (HSC)", school: "Little Jacky Matriculation Hr. Sec. School, Chengalpattu", year: "2016", grade: "63%" },
  { degree: "Secondary School Leaving Certificate (SSLC)", school: "St. Pauls Matriculation Hr. Sec. School, Tambaram", year: "2015", grade: "76%" },
];

function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const visuals = [
    // Visual 1: Dashboard/Layout mockup
    <div key="v1" className="w-full h-full bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-[160px] aspect-video bg-white rounded-lg shadow-sm border border-slate-200 flex flex-col overflow-hidden">
        <div className="h-3 bg-slate-100 border-b border-slate-200 flex items-center px-2 gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
        </div>
        <div className="flex-1 flex p-2 gap-2">
          <div className="w-1/3 h-full bg-slate-100 rounded-sm"></div>
          <div className="w-2/3 h-full flex flex-col gap-2">
            <div className="w-full h-1/2 bg-blue-50 rounded-sm"></div>
            <div className="w-full h-1/2 bg-slate-100 rounded-sm"></div>
          </div>
        </div>
      </div>
    </div>,
    // Visual 2: Landing page mockup
    <div key="v2" className="w-full h-full bg-blue-50 flex items-center justify-center p-4">
      <motion.div animate={{ y: [-2, 2, -2] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="w-full max-w-[120px] aspect-[3/4] bg-white rounded-lg shadow-sm border border-blue-100 flex flex-col p-2 gap-2">
         <div className="w-full h-1/3 bg-blue-100 rounded-md"></div>
         <div className="w-3/4 h-2 bg-slate-200 rounded-full"></div>
         <div className="w-1/2 h-2 bg-slate-100 rounded-full"></div>
         <div className="w-full h-1/2 bg-slate-50 rounded-md mt-auto border border-slate-100"></div>
      </motion.div>
    </div>,
    // Visual 3: List/Portal mockup
    <div key="v3" className="w-full h-full bg-emerald-50 flex items-center justify-center p-4 relative overflow-hidden">
      <motion.div className="flex flex-col gap-2 w-full max-w-[160px]">
        {[1, 2, 3].map((i) => (
           <motion.div key={i} animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }} className="w-full h-8 bg-white rounded-md shadow-sm border border-emerald-100 flex items-center px-2 gap-2">
             <div className="w-4 h-4 rounded-full bg-emerald-100"></div>
             <div className="w-1/2 h-1.5 bg-slate-100 rounded-full"></div>
           </motion.div>
        ))}
      </motion.div>
    </div>,
    // Visual 4: API/Data flow mockup
    <div key="v4" className="w-full h-full bg-purple-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-[120px] aspect-square flex items-center justify-center">
        <div className="absolute w-12 h-12 bg-white rounded-full shadow-sm border border-purple-100 z-10 flex items-center justify-center text-purple-500">
           <FaServer />
        </div>
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute inset-4 border-2 border-dashed border-purple-300 rounded-full"></motion.div>
        <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="absolute w-24 h-24 bg-purple-200/40 rounded-full"></motion.div>
      </div>
    </div>
  ];

  const currentVisual = visuals[index % visuals.length];

  return (
    <motion.div
      ref={ref}
      className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 flex flex-col h-full group"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div className="h-40 w-full border-b border-slate-100 relative overflow-hidden bg-slate-50/50">
        {currentVisual}
        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-300 pointer-events-none"></div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-slate-900 mb-1">{project.title}</h3>
        <p className="text-sm font-medium text-blue-600 mb-4">{project.stack}</p>
        <ul className="flex flex-col gap-2 mt-auto">
          {project.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("About");
  const { scrollY } = useScroll();
  const headerBg = useTransform(scrollY, [0, 50], ["rgba(255,255,255,0.8)", "rgba(255,255,255,0.95)"]);
  const headerShadow = useTransform(scrollY, [0, 50], ["0 0px 0px rgba(0,0,0,0)", "0 1px 2px rgba(0,0,0,0.05)"]);
  const headerBackdrop = useTransform(scrollY, [0, 50], ["blur(8px)", "blur(12px)"]);

  useEffect(() => {
    const fn = () => {
      NAV_LINKS.forEach((n) => {
        const el = document.getElementById(n.toLowerCase());
        if (el && window.scrollY + 100 >= el.offsetTop) setActive(n);
      });
    };
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (id: string) => document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });

  const SectionHeading = ({ title, subtitle }: { title: string, subtitle: string }) => (
    <div className="mb-12 text-center md:text-left">
      <motion.p 
        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-sm font-semibold tracking-wider text-blue-600 uppercase mb-2"
      >
        {subtitle}
      </motion.p>
      <motion.h2 
        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
        className="text-2xl md:text-3xl font-semibold text-slate-900"
      >
        {title}
      </motion.h2>
    </div>
  );

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <AnimatedBackground />

      {/* HEADER */}
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 h-16 md:h-20 flex items-center justify-between border-b border-slate-200/50 transition-colors"
        style={{ background: headerBg, boxShadow: headerShadow, backdropFilter: headerBackdrop }}
      >
        <motion.div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-semibold text-lg shadow-sm">
            HE
          </div>
          <span className="font-semibold text-slate-800 text-lg hidden sm:block tracking-tight">Hari Easwaran</span>
        </motion.div>

        <nav className="hidden md:flex items-center gap-2">
          {NAV_LINKS.map((link, i) => (
            <motion.button
              key={link}
              onClick={() => go(link)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.2 }}
              className={`relative px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                active === link ? "text-blue-700 bg-blue-50" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/50"
              }`}
            >
              {link}
            </motion.button>
          ))}
        </nav>
      </motion.header>

      <main className="pt-20 overflow-x-hidden">
        {/* HERO */}
        <section id="about" className="relative flex flex-col justify-center min-h-[90vh] px-6 md:px-12 max-w-6xl mx-auto">
          <div className="max-w-4xl pt-12 md:pt-20 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6 border border-blue-100">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                Available for opportunities
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 leading-tight tracking-tight mb-6"
            >
              Full Stack Developer <br className="hidden md:block"/> building modern web experiences.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed"
            >
              3.5+ years of experience specialising in <span className="font-medium text-slate-800">React.js</span>, <span className="font-medium text-slate-800">Next.js</span>, and <span className="font-medium text-slate-800">Python REST APIs</span>. Proven track record delivering scalable, SEO-optimised web applications.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <button onClick={() => go("Projects")} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-sm">
                View Projects
              </button>
              <button onClick={() => go("Contact")} className="px-6 py-3 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-medium rounded-lg transition-colors shadow-sm">
                Get in Touch
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-slate-600"
            >
              <span className="flex items-center gap-2"><FaMapMarkerAlt className="text-slate-400" /> Chengalpattu, Tamil Nadu</span>
              <a href="mailto:harishwaran862@gmail.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors"><FaEnvelope className="text-slate-400" /> harishwaran862@gmail.com</a>
              <a href="https://linkedin.com/in/harieaswaran-j-aa1b3920a" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-600 transition-colors"><FaLinkedin className="text-slate-400" /> LinkedIn Profile</a>
            </motion.div>
          </div>

          {/* Animated Hero Visuals */}
          <div className="hidden lg:block absolute right-4 top-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none z-0">
            <div className="relative w-full h-full">
              <motion.div 
                animate={{ y: [-15, 15, -15], rotate: [0, 4, 0] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center gap-2"
              >
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-3xl">
                  <FaCode />
                </div>
                <span className="text-sm font-semibold text-slate-700">React.js</span>
              </motion.div>

              <motion.div 
                animate={{ y: [15, -15, 15], x: [-10, 10, -10] }} 
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-16 left-8 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center gap-2"
              >
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center text-2xl">
                  <FaServer />
                </div>
                <span className="text-xs font-semibold text-slate-700">Python APIs</span>
              </motion.div>

              <motion.div 
                animate={{ y: [-10, 10, -10], rotate: [0, -4, 0] }} 
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-48 left-32 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center gap-2"
              >
                <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center text-xl">
                  <FaTools />
                </div>
                <span className="text-[10px] font-semibold text-slate-700">Next.js</span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SUMMARY / STATS */}
        <section className="py-20 bg-white border-y border-slate-200/50">
          <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <SectionHeading title="Professional Summary" subtitle="About Me" />
              <div className="text-slate-600 leading-relaxed space-y-4 text-[15px] md:text-base">
                <p>
                  Full Stack Developer with <span className="font-medium text-slate-800">3.5+ years of experience</span> specialising in <span className="font-medium text-slate-800">React.js, Next.js,</span> and <span className="font-medium text-slate-800">Python REST API</span> development. Proven track record delivering scalable, SEO-optimised web applications and CRM platforms in production environments.
                </p>
                <p>
                  Strong front-end architecture skills with working knowledge of Angular for secondary module development. Experienced in Agile teams, Git-based workflows, and AI-assisted development tools. Seeking to apply deep React.js expertise and end-to-end development capabilities in a high-impact engineering role.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {[
                { n: "3.5+", l: "Years Experience" },
                { n: "4+", l: "Production Apps" },
                { n: "20+", l: "Features Shipped" },
                { n: "2", l: "Tech Stacks" }
              ].map((stat, i) => (
                <motion.div 
                  key={stat.l} 
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="bg-slate-50 border border-slate-100 rounded-xl p-6 text-center"
                >
                  <div className="text-3xl font-semibold text-blue-600 mb-2">{stat.n}</div>
                  <div className="text-sm font-medium text-slate-600">{stat.l}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-20">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <SectionHeading title="Technical Toolkit" subtitle="Skills" />
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {[
                { icon: <FaCode />, label: "Frontend (Primary)", tags: SKILLS.frontend },
                { icon: <FaServer />, label: "Backend", tags: SKILLS.backend },
                { icon: <FaTools />, label: "Tools & Methods", tags: [...SKILLS.additional, ...SKILLS.tools] },
              ].map((group, i) => (
                <motion.div 
                  key={group.label}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                    <span className="text-blue-600 text-xl">{group.icon}</span>
                    <h3 className="font-semibold text-slate-900">{group.label}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.tags.map(tag => (
                      <span key={tag} className="px-3 py-1.5 bg-slate-50 border border-slate-100 text-slate-600 text-sm font-medium rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="py-20 bg-white border-y border-slate-200/50">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <SectionHeading title="Professional Experience" subtitle="Work History" />
            <div className="space-y-8 max-w-4xl mx-auto">
              {EXPERIENCE.map((exp, i) => (
                <motion.div 
                  key={exp.company}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="relative pl-8 md:pl-0"
                >
                  <div className="hidden md:block absolute left-[-40px] top-1.5 w-3 h-3 rounded-full bg-blue-500 border-4 border-white shadow-sm"></div>
                  <div className="md:border-l md:border-slate-200 md:pl-10 pb-8 last:pb-0 relative">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900">{exp.role}</h3>
                        <div className="text-slate-600 font-medium mt-1">{exp.company} <span className="mx-2 text-slate-300">|</span> {exp.location}</div>
                      </div>
                      <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-sm font-medium rounded-full whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-3 mt-6">
                      {exp.points.map((pt, pi) => (
                        <li key={pi} className="flex items-start gap-3 text-[15px] text-slate-600 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 flex-shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-20">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <SectionHeading title="Featured Projects" subtitle="Work" />
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
              {PROJECTS.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
            </div>
          </div>
        </section>

        {/* EDUCATION & ACHIEVEMENTS */}
        <section className="py-20 bg-white border-y border-slate-200/50">
          <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <SectionHeading title="Academic Background" subtitle="Education" />
              <div className="space-y-4">
                {EDUCATION.map((e, i) => (
                  <motion.div 
                    key={e.degree}
                    initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    className="p-5 border border-slate-100 bg-slate-50 rounded-xl"
                  >
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <h4 className="font-semibold text-slate-900 leading-snug">{e.degree}</h4>
                      <span className="text-sm font-medium text-blue-600 whitespace-nowrap">{e.year}</span>
                    </div>
                    <div className="flex justify-between items-end gap-4">
                      <p className="text-sm text-slate-500">{e.school}</p>
                      <span className="text-sm font-medium text-slate-700">{e.grade}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading title="Achievements & Training" subtitle="Highlights" />
              <div className="space-y-4 bg-slate-50 border border-slate-100 rounded-xl p-6 md:p-8 h-[calc(100%-80px)]">
                {[
                  "React.js Certification – Besant Institute (foundation through advanced component patterns).",
                  "Delivered multiple full-stack features across production deployments within Agile sprint cycles at IndiaFiling.",
                  "Contributed to measurable SEO and performance improvements on Ledgers Pro and the career portal.",
                ].map((a, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 text-[15px] text-slate-600 leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span>{a}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-sm font-semibold tracking-wider text-blue-600 uppercase mb-4">Contact</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6">Let's Connect</h2>
              <p className="text-slate-600 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
                Open to full-time roles, freelance contracts, and exciting product collaborations. If you have an opportunity or just want to talk tech, I'd love to hear from you.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
              {[
                { icon: <FaEnvelope />, label: "Email", val: "harishwaran862@gmail.com", href: "mailto:harishwaran862@gmail.com" },
                { icon: <FaPhone />, label: "Phone", val: "+91 8925433774", href: "tel:+918925433774" },
                { icon: <FaLinkedin />, label: "LinkedIn", val: "harieaswaran-j", href: "https://linkedin.com/in/harieaswaran-j-aa1b3920a" },
                { icon: <FaMapMarkerAlt />, label: "Location", val: "Chengalpattu, Tamil Nadu", href: "#" },
              ].map((c, i) => (
                <motion.a 
                  key={c.label} href={c.href} target={c.href?.startsWith("http") ? "_blank" : undefined}
                  initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all group text-left"
                >
                  <span className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {c.icon}
                  </span>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">{c.label}</div>
                    <div className="text-sm font-medium text-slate-900">{c.val}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="flex justify-center gap-4">
              {[
                { icon: <FaGithub />, href: "#" },
                { icon: <FaLinkedin />, href: "https://linkedin.com/in/harieaswaran-j-aa1b3920a" },
                { icon: <FaEnvelope />, href: "mailto:harishwaran862@gmail.com" },
              ].map((s, i) => (
                <motion.a 
                  key={i} href={s.href} target={s.href?.startsWith("http") ? "_blank" : undefined}
                  whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-white border border-slate-200 text-slate-600 flex items-center justify-center text-xl hover:text-blue-600 hover:border-blue-300 shadow-sm transition-colors"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="py-8 px-6 border-t border-slate-200 bg-white text-center md:flex md:justify-between md:px-12 items-center">
        <div className="text-sm font-medium text-slate-800 mb-2 md:mb-0">Hari Easwaran · Full Stack Developer</div>
        <div className="text-sm text-slate-500">© {new Date().getFullYear()} · Built with React & Tailwind CSS</div>
      </footer>
    </div>
  );
}
