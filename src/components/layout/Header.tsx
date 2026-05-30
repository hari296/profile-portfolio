import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NAV_LINKS } from '../../data/portfolio';

type HeaderProps = {
  active: string;
  onNavigate: (id: string) => void;
};

export function Header({ active, onNavigate }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    onNavigate(id);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 md:h-[72px] flex items-center justify-between px-6 md:px-10 lg:px-12 transition-all duration-300 ${
        scrolled ? 'glass shadow-glass border-b border-theme' : 'bg-transparent'
      }`}
    >
      <motion.button
        type="button"
        className="flex items-center gap-3 group"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setMenuOpen(false);
        }}
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-violet-600 text-white flex items-center justify-center font-bold text-sm shadow-glow-sm group-hover:scale-105 transition-transform">
          HE
        </div>
        <span className="font-semibold text-theme text-lg hidden sm:block tracking-tight">Hari Easwaran</span>
      </motion.button>

      <nav className="hidden md:flex items-center gap-1 p-1 rounded-xl glass">
        {NAV_LINKS.map((link, i) => (
          <motion.button
            key={link}
            type="button"
            onClick={() => go(link)}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 + 0.15 }}
            className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
              active === link
                ? 'text-theme bg-sky-500/10 dark:bg-white/10 shadow-glow-sm'
                : 'text-muted hover:text-theme hover:bg-black/5 dark:hover:bg-white/5'
            }`}
          >
            {link}
          </motion.button>
        ))}
      </nav>

      <button
        type="button"
        className="md:hidden p-2.5 rounded-lg text-muted hover:text-theme hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
        onClick={() => setMenuOpen((o) => !o)}
        aria-expanded={menuOpen}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      >
        {menuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
      </button>

      {menuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 glass border-t border-theme py-3 px-4 flex flex-col gap-1 shadow-glass">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              type="button"
              onClick={() => go(link)}
              className={`w-full text-left px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
                active === link
                  ? 'text-theme bg-sky-500/10 dark:bg-white/10'
                  : 'text-muted hover:text-theme hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              {link}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
