import { motion } from 'framer-motion';
import { FaCode, FaServer, FaTools } from 'react-icons/fa';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { SKILLS } from '../../data/portfolio';
import { fadeUp, staggerContainer } from '../../lib/animations';

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="group">
      <div className="flex justify-between text-sm mb-2">
        <span className="text-theme font-medium group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors">{name}</span>
        <span className="text-muted font-mono text-xs">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-slate-200 dark:bg-white/[0.06] overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-sky-500 to-violet-500 shadow-glow-sm"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        />
      </div>
    </div>
  );
}

const GROUPS = [
  { icon: FaCode, label: 'Frontend', skills: SKILLS.frontend, accent: 'text-sky-400' },
  { icon: FaServer, label: 'Backend', skills: SKILLS.backend, accent: 'text-emerald-400' },
  { icon: FaTools, label: 'Tools & Methods', skills: SKILLS.tools, accent: 'text-violet-400' },
];

export function SkillsSection() {
  return (
    <section id="skills" className="section-pad relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-500/[0.02] to-transparent pointer-events-none" />
      <div className="container-main relative">
        <SectionHeading subtitle="Skills" title="Technical Toolkit" />

        <motion.div
          className="grid md:grid-cols-3 gap-6 md:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {GROUPS.map((group, gi) => {
            const Icon = group.icon;
            return (
            <motion.div key={group.label} variants={fadeUp} custom={gi}>
              <GlassCard className="p-8 h-full" glow>
                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-theme">
                  <span className={`text-2xl ${group.accent}`}><Icon /></span>
                  <h3 className="font-semibold text-theme text-lg">{group.label}</h3>
                </div>
                <div className="space-y-5">
                  {group.skills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          );
          })}
        </motion.div>
      </div>
    </section>
  );
}
