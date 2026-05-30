import { motion } from 'framer-motion';
import { fadeUp } from '../../lib/animations';

type SectionHeadingProps = {
  subtitle: string;
  title: string;
  align?: 'left' | 'center';
  className?: string;
};

export function SectionHeading({ subtitle, title, align = 'left', className = '' }: SectionHeadingProps) {
  return (
    <motion.div
      className={`mb-14 ${align === 'center' ? 'text-center' : 'text-center md:text-left'} ${className}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
    >
      <p className="text-xs font-semibold tracking-[0.2em] text-sky-600 dark:text-sky-400 uppercase mb-3">{subtitle}</p>
      <h2 className="text-3xl md:text-4xl font-bold text-theme tracking-tight">{title}</h2>
      <div
        className={`mt-4 h-px w-16 bg-gradient-to-r from-sky-500 to-violet-500 dark:from-sky-400 dark:to-violet-400 opacity-70 ${
          align === 'center' ? 'mx-auto' : 'mx-auto md:mx-0'
        }`}
      />
    </motion.div>
  );
}
