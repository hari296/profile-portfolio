import { motion } from 'framer-motion';
import { FaReact, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiPython, SiDjango, SiNextdotjs } from 'react-icons/si';

const ICONS = [
  { Icon: FaReact, label: 'React', color: 'text-sky-400', pos: 'top-4 right-8' },
  { Icon: SiTypescript, label: 'TS', color: 'text-blue-400', pos: 'top-24 left-4' },
  { Icon: SiPython, label: 'Python', color: 'text-emerald-400', pos: 'bottom-20 right-4' },
  { Icon: SiDjango, label: 'Django', color: 'text-green-500', pos: 'bottom-8 left-12' },
  { Icon: SiNextdotjs, label: 'Next', color: 'text-white', pos: 'top-1/2 right-0' },
  { Icon: FaGitAlt, label: 'Git', color: 'text-orange-400', pos: 'bottom-1/3 left-0' },
];

export function FloatingTechIcons() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block" aria-hidden>
      {ICONS.map(({ Icon, label, color, pos }, i) => (
        <motion.div
          key={label}
          className={`absolute ${pos} glass rounded-xl p-3 shadow-glow-sm`}
          animate={{ y: [0, -12, 0], rotate: [0, i % 2 ? 4 : -4, 0] }}
          transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
        >
          <Icon className={`text-xl ${color}`} />
          <span className="block text-[9px] text-slate-500 mt-1 font-medium">{label}</span>
        </motion.div>
      ))}
    </div>
  );
}
