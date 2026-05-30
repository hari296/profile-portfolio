import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ROLES } from '../../data/portfolio';

export function RotatingRoles() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % ROLES.length), 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="inline-block min-h-[1.2em] text-gradient">
      <AnimatePresence mode="wait">
        <motion.span
          key={ROLES[index]}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35 }}
          className="inline-block"
        >
          {ROLES[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
