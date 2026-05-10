import { motion } from 'framer-motion';

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-slate-950 to-slate-900">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-blue-950 to-slate-900 opacity-90" />

      {/* Animated blob 1 - Teal blob (top-left area) */}
      <motion.div
        animate={{
          x: [0, 50, -30, 40, 0],
          y: [0, -40, 60, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'loop' as const,
          ease: 'easeInOut',
        }}
        className="absolute -left-40 -top-40 w-96 h-96 bg-gradient-to-br from-teal-900 to-teal-800 rounded-full mix-blend-screen filter blur-3xl opacity-25"
        style={{ willChange: 'transform' }}
      />

      {/* Animated blob 2 - Cyan blob (top-right area) */}
      <motion.div
        animate={{
          x: [0, -40, 50, -35, 0],
          y: [0, 60, -40, 45, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: 'loop' as const,
          ease: 'easeInOut',
        }}
        className="absolute -right-40 top-20 w-80 h-80 bg-gradient-to-br from-cyan-900 to-blue-900 rounded-full mix-blend-screen filter blur-3xl opacity-20"
        style={{ willChange: 'transform' }}
      />

      {/* Animated blob 3 - Blue blob (bottom-left area) */}
      <motion.div
        animate={{
          x: [0, -50, 40, -45, 0],
          y: [0, -60, 50, -40, 0],
        }}
        transition={{
          duration: 21,
          repeat: Infinity,
          repeatType: 'loop' as const,
          ease: 'easeInOut',
        }}
        className="absolute -left-20 bottom-40 w-72 h-72 bg-gradient-to-br from-blue-900 to-indigo-900 rounded-full mix-blend-screen filter blur-3xl opacity-15"
        style={{ willChange: 'transform' }}
      />

      {/* Animated blob 4 - Teal blob accent (bottom-right area) */}
      <motion.div
        animate={{
          x: [0, 60, -50, 55, 0],
          y: [0, 40, -60, 50, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          repeatType: 'loop' as const,
          ease: 'easeInOut',
        }}
        className="absolute -right-32 -bottom-40 w-80 h-80 bg-gradient-to-br from-teal-900 to-teal-800 rounded-full mix-blend-screen filter blur-3xl opacity-18"
        style={{ willChange: 'transform' }}
      />

      {/* Subtle overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[0.5px]" />
    </div>
  );
}



