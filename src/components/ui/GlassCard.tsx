import { motion, type HTMLMotionProps } from 'framer-motion';
import type { ReactNode } from 'react';

type GlassCardProps = HTMLMotionProps<'div'> & {
  children: ReactNode;
  className?: string;
  glow?: boolean;
};

export function GlassCard({ children, className = '', glow = false, ...props }: GlassCardProps) {
  return (
    <motion.div
      className={`glass rounded-2xl ${glow ? 'hover:shadow-glow-sm' : ''} glass-hover ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
