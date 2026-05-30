import { motion } from 'framer-motion';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaCode, FaRocket, FaUsers } from 'react-icons/fa';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { EXPERIENCE } from '../../data/portfolio';

const HIGHLIGHTS = [
  { icon: FaCode, label: 'React.js & Next.js', desc: 'Production UI across multiple platforms' },
  { icon: FaRocket, label: 'Full-stack delivery', desc: 'Django REST APIs & front-end integration' },
  { icon: FaUsers, label: 'Agile sprints', desc: 'Features shipped in cross-functional teams' },
];

export function ExperienceSection() {
  const exp = EXPERIENCE[0];

  return (
    <section id="experience" className="section-pad relative">
      <div className="absolute top-0 right-0 w-[420px] h-[420px] rounded-full bg-violet-500/[0.06] blur-[100px] pointer-events-none" aria-hidden />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-sky-500/[0.06] blur-[80px] pointer-events-none" aria-hidden />

      <div className="container-main relative">
        <SectionHeading subtitle="Work History" title="Professional Experience" />

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Role summary card */}
          <motion.div
            className="lg:col-span-4 lg:sticky lg:top-28"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55 }}
          >
            <GlassCard className="p-8 md:p-10 h-full" glow>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500 to-violet-600 flex items-center justify-center text-white shadow-glow-sm mb-6">
                <FaBriefcase className="text-xl" />
              </div>

              <p className="text-xs font-semibold tracking-[0.2em] text-sky-600 dark:text-sky-400 uppercase mb-3">
                Current Role
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-theme leading-tight mb-2">{exp.role}</h3>
              <p className="text-lg font-semibold text-theme/90 mb-6">{exp.company}</p>

              <div className="flex flex-col gap-3 text-sm text-muted mb-8">
                <span className="inline-flex items-center gap-2.5">
                  <FaMapMarkerAlt className="text-sky-500 shrink-0" />
                  {exp.location}
                </span>
                <span className="inline-flex items-center gap-2.5">
                  <FaCalendarAlt className="text-sky-500 shrink-0" />
                  {exp.period}
                </span>
              </div>

              <div className="pt-6 border-t border-theme space-y-4">
                {HIGHLIGHTS.map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="flex gap-3">
                    <span className="w-9 h-9 rounded-lg glass flex items-center justify-center text-sky-500 dark:text-sky-400 shrink-0">
                      <Icon className="text-sm" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-theme">{label}</p>
                      <p className="text-xs text-muted mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Impact timeline */}
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <div className="mb-6 flex items-center justify-between gap-4 flex-wrap">
              <h4 className="text-lg font-bold text-theme">Key contributions &amp; impact</h4>
              <span className="text-xs font-medium px-3 py-1.5 rounded-full glass text-sky-600 dark:text-sky-300">
                {exp.points.length} highlights
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
              {exp.points.map((pt, pi) => (
                <motion.div
                  key={pi}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.4, delay: pi * 0.05 }}
                  className="group"
                >
                  <GlassCard className="p-5 md:p-6 h-full" glow>
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500/20 to-violet-500/20 flex items-center justify-center text-xs font-bold text-sky-600 dark:text-sky-300 border border-sky-500/20">
                        {String(pi + 1).padStart(2, '0')}
                      </span>
                      <p className="text-sm md:text-[15px] text-muted leading-relaxed group-hover:text-theme transition-colors duration-300">
                        {pt}
                      </p>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>

            {/* Full-width summary strip */}
            <motion.div
              className="mt-6 md:mt-8 p-6 md:p-8 rounded-2xl border border-theme glass"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-sm md:text-base text-muted leading-relaxed">
                Delivering end-to-end features across{' '}
                <span className="text-theme font-medium">Ledgers Pro</span>, the{' '}
                <span className="text-theme font-medium">career portal</span>,{' '}
                <span className="text-theme font-medium">CRM HR modules</span>, and marketing surfaces — from
                architecture and RBAC to SEO-optimised landing pages and API integration.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
