import { motion } from 'framer-motion';
import { ORBIT_KEYWORDS } from '../../data/portfolio';

type OrbitRingProps = {
  items: string[];
  radius: number;
  ringClass: string;
  labelClass: string;
  size: 'sm' | 'md';
};

function OrbitRing({ items, radius, ringClass, labelClass, size }: OrbitRingProps) {
  const n = items.length;
  const pillClass =
    size === 'sm'
      ? 'px-2 py-0.5 text-[10px]'
      : 'px-2.5 py-1 text-[11px] sm:text-xs';

  return (
    <div
      className={`absolute inset-0 flex items-center justify-center pointer-events-none ${ringClass}`}
      aria-hidden
    >
      {items.map((label, i) => {
        const angle = (360 / n) * i;
        return (
          <div
            key={label}
            className="absolute left-1/2 top-1/2"
            style={{
              width: 0,
              height: 0,
              transform: `rotate(${angle}deg) translateX(${radius}px)`,
            }}
          >
            <div className={labelClass}>
              <span
                className={`inline-block glass rounded-full font-medium text-muted whitespace-nowrap shadow-glow-sm ${pillClass}`}
              >
                {label}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function OrbitProfile() {
  const inner = ORBIT_KEYWORDS.slice(0, 4);
  const outer = ORBIT_KEYWORDS.slice(4);

  return (
    <motion.div
      className="relative mx-auto w-[min(100%,340px)] aspect-square sm:w-[380px] md:w-[420px]"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Ambient glow */}
      <div className="absolute inset-[12%] rounded-full bg-gradient-to-br from-sky-500/20 via-violet-500/10 to-cyan-500/20 blur-3xl" />

      {/* Outer dashed orbit path */}
      <div className="absolute inset-2 rounded-full border border-dashed border-sky-500/20 dark:border-sky-400/15" />
      <div className="absolute inset-10 sm:inset-12 rounded-full border border-dashed border-violet-500/15 dark:border-violet-400/10" />

      {/* Outer ring — slower, reverse */}
      <OrbitRing
        items={outer.length ? outer : ORBIT_KEYWORDS}
        radius={155}
        ringClass="orbit-ring-slow hidden sm:block"
        labelClass="orbit-label-slow"
        size="md"
      />

      {/* Inner ring */}
      <OrbitRing
        items={inner}
        radius={118}
        ringClass="orbit-ring hidden sm:block"
        labelClass="orbit-label hidden sm:block"
        size="sm"
      />

      {/* Mobile: single ring with all keywords */}
      <OrbitRing
        items={ORBIT_KEYWORDS}
        radius={130}
        ringClass="orbit-ring sm:hidden"
        labelClass="orbit-label sm:hidden"
        size="sm"
      />

      {/* Center profile */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-sky-500 to-violet-600 opacity-50 blur-md" />
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full glass p-1 shadow-glow">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-700 to-slate-900 dark:from-slate-800 dark:to-slate-950 flex items-center justify-center overflow-hidden border-2 border-white/10">
              <span className="text-4xl sm:text-5xl font-bold text-gradient select-none">HE</span>
            </div>
          </div>
          <motion.div
            className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full glass text-[10px] font-semibold text-sky-500 dark:text-sky-300 whitespace-nowrap shadow-glow-sm"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Full Stack Dev
          </motion.div>
        </motion.div>
      </div>

      {/* Pulse rings */}
      <motion.div
        className="absolute inset-[18%] rounded-full border border-sky-500/20"
        animate={{ scale: [1, 1.06, 1], opacity: [0.4, 0.15, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.div>
  );
}
