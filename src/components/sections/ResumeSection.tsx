import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { EDUCATION, ACHIEVEMENTS } from '../../data/portfolio';
import { fadeUp, staggerContainer } from '../../lib/animations';

export function ResumeSection() {
  return (
    <section id="resume" className="section-pad relative">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-500/[0.02] via-transparent to-transparent pointer-events-none" aria-hidden />
      <div className="container-main relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <SectionHeading subtitle="Education" title="Academic Background" />
            <motion.div className="space-y-4" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {EDUCATION.map((e, i) => (
                <motion.div key={e.degree} variants={fadeUp} custom={i}>
                  <GlassCard className="p-5 md:p-6" glow>
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <h4 className="font-semibold text-theme leading-snug text-[15px]">{e.degree}</h4>
                      <span className="text-sm font-mono text-sky-600 dark:text-sky-400 whitespace-nowrap">{e.year}</span>
                    </div>
                    <div className="flex justify-between items-end gap-4">
                      <p className="text-sm text-muted">{e.school}</p>
                      <span className="text-sm font-medium text-theme">{e.grade}</span>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <SectionHeading subtitle="Highlights" title="Achievements & Training" />
            <GlassCard className="p-6 md:p-8 h-full min-h-[280px]" glow>
              <motion.ul className="space-y-5" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                {ACHIEVEMENTS.map((a, i) => (
                  <motion.li key={i} variants={fadeUp} custom={i} className="flex items-start gap-3 text-[15px] text-muted leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-sky-500/10 border border-sky-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 dark:bg-sky-400" />
                    </span>
                    <span>{a}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
