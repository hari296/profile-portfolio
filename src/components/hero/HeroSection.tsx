import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaLinkedin, FaArrowRight, FaDownload } from 'react-icons/fa';
import { RotatingRoles } from './RotatingRoles';
import { HeroCodeScene } from './HeroCodeScene';
import { OrbitProfile } from './OrbitProfile';
import { CONTACT } from '../../data/portfolio';
import { fadeUp } from '../../lib/animations';

type HeroSectionProps = {
  onNavigate: (id: string) => void;
};

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center section-pad pt-28 md:pt-32 overflow-hidden"
    >
      {/* Hero ambient orbs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-sky-500/10 blur-[80px] pointer-events-none" aria-hidden />
      <div className="absolute bottom-1/4 -right-32 w-72 h-72 rounded-full bg-violet-500/10 blur-[80px] pointer-events-none" aria-hidden />

      <div className="container-main w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Copy */}
          <div className="order-1">
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm font-medium text-sky-600 dark:text-sky-300 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Available for opportunities
              </span>
            </motion.div>

            <motion.p
              className="text-muted text-lg mb-2"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              Hi, I&apos;m <span className="text-theme font-semibold">Hari Easwaran</span>
            </motion.p>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-theme leading-[1.08] tracking-tight mb-5"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              I&apos;m a{' '}
              <br className="hidden sm:block" />
              <RotatingRoles />
            </motion.h1>

            <motion.p
              className="text-lg text-muted mb-10 max-w-xl leading-relaxed"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
            >
              3.5+ years crafting scalable web products with{' '}
              <span className="text-theme font-medium">React.js</span>,{' '}
              <span className="text-theme font-medium">Next.js</span>, and{' '}
              <span className="text-theme font-medium">Python REST APIs</span> — from architecture to production.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3 sm:gap-4 mb-12"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
            >
              <motion.button
                type="button"
                onClick={() => onNavigate('Projects')}
                className="btn-primary group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Projects
                <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                type="button"
                onClick={() => onNavigate('Contact')}
                className="btn-outline"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Let&apos;s Connect
              </motion.button>
              <motion.a
                href="#resume"
                className="btn-ghost"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('Experience');
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaDownload className="text-sky-500 dark:text-sky-400" />
                Resume
              </motion.a>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted min-w-0"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={5}
            >
              <span className="flex items-center gap-2 hover:text-theme transition-colors">
                <FaMapMarkerAlt className="text-sky-500" /> {CONTACT.location}
              </span>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2 hover:text-sky-600 dark:hover:text-sky-300 transition-colors break-all min-w-0"
              >
                <FaEnvelope className="text-sky-500" /> {CONTACT.email}
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-sky-600 dark:hover:text-sky-300 transition-colors"
              >
                <FaLinkedin className="text-sky-500" /> LinkedIn
              </a>
            </motion.div>
          </div>

          {/* Visual: orbit + code */}
          <div className="order-2 flex flex-col items-center gap-8 lg:gap-6 w-full max-w-full overflow-hidden">
            <OrbitProfile />
            <motion.div
              className="w-full max-w-md"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <HeroCodeScene />
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-hidden
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-400 to-transparent dark:from-slate-600" />
      </motion.div>
    </section>
  );
}
