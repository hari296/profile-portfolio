import { motion } from 'framer-motion';

export function MeshBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[var(--color-bg)] transition-colors duration-300" aria-hidden>
      <div className="absolute inset-0 bg-mesh-hero" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-bg)]/40 to-[var(--color-bg)]" />

      <motion.div
        className="absolute -top-1/2 left-1/4 w-[600px] h-[600px] rounded-full bg-sky-500/10 dark:bg-sky-500/10 blur-[120px]"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 -right-20 w-[500px] h-[500px] rounded-full bg-violet-600/8 dark:bg-violet-600/10 blur-[100px]"
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-32 left-1/3 w-[400px] h-[400px] rounded-full bg-cyan-500/6 dark:bg-cyan-500/8 blur-[90px]"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div
        className="absolute inset-0 opacity-[0.4] dark:opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--grid-line) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />
    </div>
  );
}
