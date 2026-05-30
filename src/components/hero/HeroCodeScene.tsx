import { motion } from 'framer-motion';
import { FaReact, FaPython, FaDatabase } from 'react-icons/fa';
import { SiDjango, SiNextdotjs } from 'react-icons/si';

const CODE_LINES = [
  { indent: 0, parts: [{ t: 'const', c: 'text-violet-600 dark:text-violet-400' }, { t: ' App', c: 'text-slate-800 dark:text-slate-200' }, { t: ' = () => {', c: 'text-slate-500 dark:text-slate-400' }] },
  { indent: 1, parts: [{ t: 'const', c: 'text-violet-600 dark:text-violet-400' }, { t: ' { data }', c: 'text-slate-800 dark:text-slate-200' }, { t: ' = useApi(', c: 'text-slate-500 dark:text-slate-400' }, { t: "'/leads'", c: 'text-emerald-600 dark:text-emerald-400' }, { t: ');', c: 'text-slate-500 dark:text-slate-400' }] },
  { indent: 1, parts: [{ t: 'return', c: 'text-violet-600 dark:text-violet-400' }, { t: ' <Dashboard data={data} />;', c: 'text-sky-600 dark:text-sky-300' }] },
  { indent: 0, parts: [{ t: '};', c: 'text-slate-500 dark:text-slate-400' }] },
];

export function HeroCodeScene() {
  return (
    <div className="relative w-full max-w-md mx-auto lg:mx-0">
      <div className="absolute -inset-4 bg-gradient-to-r from-sky-500/20 via-violet-500/10 to-cyan-500/20 rounded-3xl blur-2xl opacity-60" />

      <motion.div
        className="relative glass rounded-2xl overflow-hidden shadow-glass"
        initial={{ opacity: 0, y: 30, rotateX: 8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="flex items-center gap-2 px-4 py-3 border-b border-theme bg-black/[0.02] dark:bg-white/[0.02]">
          <span className="w-3 h-3 rounded-full bg-red-400/80" />
          <span className="w-3 h-3 rounded-full bg-amber-400/80" />
          <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
          <span className="ml-2 text-xs font-mono text-muted">App.tsx — workspace</span>
        </div>

        <div className="p-4 font-mono text-[11px] sm:text-xs leading-relaxed min-h-[120px]">
          {CODE_LINES.map((line, li) => (
            <motion.div
              key={li}
              className="flex flex-wrap gap-0"
              style={{ paddingLeft: line.indent * 16 }}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + li * 0.12 }}
            >
              <span className="text-muted select-none mr-3">{li + 1}</span>
              {line.parts.map((p, pi) => (
                <span key={pi} className={p.c}>
                  {p.t}
                </span>
              ))}
            </motion.div>
          ))}
          <motion.span
            className="inline-block w-2 h-4 bg-sky-400 ml-1 align-middle"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </div>

        <div className="px-4 pb-4 flex items-center justify-between border-t border-theme pt-3">
          <div className="flex items-center gap-2 text-[10px] text-muted">
            <motion.span
              className="flex items-center gap-1 text-emerald-400"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              API connected
            </motion.span>
          </div>
          <span className="text-[10px] font-mono text-muted">200 OK · 42ms</span>
        </div>
      </motion.div>

      {/* API flow mini animation */}
      <motion.div
        className="absolute -bottom-6 -left-4 glass rounded-xl px-3 py-2 flex items-center gap-2 text-xs"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <FaDatabase className="text-violet-400" />
        <motion.div className="flex gap-0.5">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1 h-1 rounded-full bg-sky-400"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </motion.div>
        <FaPython className="text-emerald-400" />
      </motion.div>

      <motion.div
        className="absolute -top-4 -right-2 glass rounded-xl p-2.5"
        animate={{ y: [-8, 8, -8], rotate: [0, 3, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <FaReact className="text-2xl text-sky-400" />
      </motion.div>

      <motion.div
        className="absolute top-1/2 -right-8 glass rounded-lg p-2 hidden sm:flex"
        animate={{ x: [-4, 4, -4] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        <SiNextdotjs className="text-xl text-slate-800 dark:text-white" />
      </motion.div>

      <motion.div
        className="absolute top-8 -left-6 glass rounded-lg p-2 hidden sm:flex"
        animate={{ y: [6, -6, 6] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      >
        <SiDjango className="text-lg text-emerald-500" />
      </motion.div>
    </div>
  );
}
