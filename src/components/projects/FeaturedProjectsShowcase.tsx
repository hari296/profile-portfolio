import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { FEATURED_PROJECTS } from '../../data/portfolio';
import { ProjectMockupByType } from './ProjectMockups';

const SLIDE_COUNT = FEATURED_PROJECTS.length;
const AUTO_INTERVAL_MS = 6000;

function ProjectDetails({
  project,
  index,
  total,
}: {
  project: (typeof FEATURED_PROJECTS)[0];
  index: number;
  total: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -14 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="w-full"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs font-semibold tracking-[0.2em] text-sky-600 dark:text-sky-400 uppercase">
          Project {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-sky-500/50 to-transparent" aria-hidden />
      </div>

      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-theme tracking-tight mb-3">{project.title}</h3>
      <p className="text-muted text-base lg:text-lg leading-relaxed mb-6 max-w-3xl">{project.tagline}</p>

      <div className="flex flex-wrap gap-2.5 mb-6">
        {project.stack.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-100 dark:bg-white/5 text-muted border border-theme"
          >
            {tag}
          </span>
        ))}
      </div>

      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
        {project.bullets.map((b) => (
          <li
            key={b}
            className="flex items-start gap-3 text-sm text-muted leading-relaxed p-4 rounded-xl glass border border-theme"
          >
            <span className="w-2 h-2 rounded-full bg-sky-500 mt-2 flex-shrink-0" aria-hidden />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function FeaturedProjectsShowcase() {
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((index: number) => {
    setActiveIndex(((index % SLIDE_COUNT) + SLIDE_COUNT) % SLIDE_COUNT);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || paused) return;

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLIDE_COUNT);
    }, AUTO_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [paused, prefersReducedMotion, activeIndex]);

  const activeProject = FEATURED_PROJECTS[activeIndex];

  if (prefersReducedMotion) {
    return (
      <div className="container-main w-full space-y-16 py-4">
        {FEATURED_PROJECTS.map((project, i) => (
          <article key={project.id} className="space-y-8">
            <ProjectDetails project={project} index={i} total={SLIDE_COUNT} />
            <div className="project-mockup-stage project-mockup-stage--hero">
              <ProjectMockupByType type={project.mockup} />
            </div>
          </article>
        ))}
      </div>
    );
  }

  return (
    <div
      className="container-main w-full py-4"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Featured projects"
    >
      <div
        className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8"
        role="tablist"
        aria-label="Select project"
      >
        {FEATURED_PROJECTS.map((p, i) => (
          <button
            key={p.id}
            type="button"
            role="tab"
            aria-selected={i === activeIndex}
            aria-controls={`project-panel-${p.id}`}
            onClick={() => goTo(i)}
            className={`relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 ${
              i === activeIndex
                ? 'text-sky-700 dark:text-sky-200 glass shadow-glow-sm'
                : 'text-muted hover:text-theme hover:bg-slate-100/80 dark:hover:bg-white/5'
            }`}
          >
            {i === activeIndex && (
              <span
                key={`progress-${activeIndex}`}
                className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-gradient-to-r from-sky-500 to-violet-500 origin-left animate-carousel-progress"
                aria-hidden
              />
            )}
            {p.title}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-8 lg:gap-10">
        <div id={`project-panel-${activeProject.id}`} role="tabpanel">
          <AnimatePresence mode="wait">
            <ProjectDetails
              key={activeProject.id}
              project={activeProject}
              index={activeIndex}
              total={SLIDE_COUNT}
            />
          </AnimatePresence>
        </div>

        <div className="relative w-full">
          <div
            className={`absolute -inset-4 md:-inset-6 rounded-3xl bg-gradient-to-br ${activeProject.accent} blur-3xl opacity-60 pointer-events-none transition-all duration-700`}
            aria-hidden
          />

          <div className="project-mockup-stage project-mockup-stage--hero relative w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="w-full"
                whileHover={{ scale: 1.005 }}
              >
                <ProjectMockupByType type={activeProject.mockup} />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-3 mt-6">
            {FEATURED_PROJECTS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to project ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === activeIndex ? 'w-12 bg-gradient-to-r from-sky-500 to-violet-500' : 'w-2.5 bg-slate-300 dark:bg-white/25 hover:bg-sky-400/50'
                }`}
              />
            ))}
            <span className="text-xs text-muted ml-2 hidden sm:inline">
              {paused ? 'Paused' : 'Auto · 6s'}
            </span>
            <span className="text-xs text-muted sm:ml-1">
              {activeIndex + 1} / {SLIDE_COUNT}
            </span>
          </div>
        </div>
      </div>

      <div className="sr-only" aria-live="polite">
        Showing project {activeIndex + 1} of {SLIDE_COUNT}: {activeProject.title}
      </div>
    </div>
  );
}
