import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { Reveal } from '../ui/Reveal';
import { STATS } from '../../data/portfolio';
import { staggerContainer, fadeUp } from '../../lib/animations';

const TIMELINE = [
  { year: '2022', label: 'Joined IndiaFiling' },
  { year: '2023', label: 'Ledgers Pro Platform' },
  { year: '2024', label: 'Career Portal Redesign' },
  { year: '2025', label: 'Full Stack Leadership' },
];

export function AboutSection() {
  return (
    <section className="section-pad relative" aria-labelledby="about-summary">
      <div className="container-main">
        <SectionHeading subtitle="About Me" title="Professional Summary" />

        <div className="grid lg:grid-cols-[1fr_300px] gap-12 lg:gap-20 items-start">
          <Reveal>
            <GlassCard className="p-8 md:p-10" glow>
              <div className="text-muted leading-relaxed space-y-5 text-[15px] md:text-base">
                <p>
                  Full Stack Developer with{' '}
                  <span className="text-theme font-semibold">3.5+ years of experience</span> specialising in{' '}
                  <span className="text-sky-600 dark:text-sky-300 font-medium">React.js, Next.js,</span> and{' '}
                  <span className="text-sky-600 dark:text-sky-300 font-medium">Python REST API</span> development.
                  Proven track record delivering scalable, SEO-optimised web applications in production.
                </p>
                <p>
                  Strong front-end architecture skills with working knowledge of Angular. Experienced in Agile teams,
                  Git workflows, and AI-assisted development tools.
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-theme">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-6">Career Timeline</p>
                <div className="relative pl-6 space-y-6">
                  <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-sky-500 via-violet-500 to-transparent opacity-50" />
                  {TIMELINE.map((item, i) => (
                    <motion.div
                      key={item.year}
                      variants={fadeUp}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="relative flex gap-4"
                    >
                      <div className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-sky-500 border-2 border-[var(--color-bg)] shadow-glow-sm" />
                      <div>
                        <span className="text-xs font-mono text-sky-600 dark:text-sky-400">{item.year}</span>
                        <p className="text-sm text-theme font-medium mt-0.5">{item.label}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </Reveal>

          <div className="flex flex-col items-center gap-6">
            <Reveal delay={1}>
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-sky-500 to-violet-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="relative w-52 h-52 md:w-60 md:h-60 rounded-3xl glass p-1.5 overflow-hidden shadow-glow">
                  <div className="w-full h-full rounded-[1.25rem] bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-950 flex items-center justify-center">
                    <span className="text-6xl font-bold text-gradient">HE</span>
                  </div>
                </div>
              </div>
              <p className="text-center text-sm text-muted mt-5 font-medium">Hari Easwaran</p>
              <p className="text-center text-xs text-sky-600 dark:text-sky-400">Full Stack Developer</p>
            </Reveal>

            <motion.div
              className="grid grid-cols-2 gap-3 w-full"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {STATS.map((stat, i) => (
                <motion.div key={stat.l} variants={fadeUp} custom={i}>
                  <GlassCard className="p-4 text-center" glow>
                    <div className="text-2xl font-bold text-gradient">{stat.n}</div>
                    <div className="text-[11px] text-muted mt-1 font-medium">{stat.l}</div>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
