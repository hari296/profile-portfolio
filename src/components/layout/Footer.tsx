import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import { CONTACT } from '../../data/portfolio';

const SOCIAL = [
  { icon: FaGithub, href: CONTACT.github, label: 'GitHub' },
  { icon: FaLinkedin, href: CONTACT.linkedin, label: 'LinkedIn' },
  { icon: FaEnvelope, href: `mailto:${CONTACT.email}`, label: 'Email' },
];

export function Footer() {
  return (
    <footer className="border-t border-theme glass">
      <div className="container-main py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-sm font-semibold text-theme">Hari Easwaran</p>
          <p className="text-xs text-muted mt-1">Full Stack Developer · Chennai, India</p>
        </div>

        <div className="flex gap-3">
          {SOCIAL.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              aria-label={label}
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-11 h-11 rounded-xl glass flex items-center justify-center text-muted hover:text-sky-600 dark:hover:text-sky-300 hover:shadow-glow-sm transition-colors"
            >
              <Icon className="text-lg" />
            </motion.a>
          ))}
        </div>

        <p className="text-xs text-muted flex items-center gap-1">
          © {new Date().getFullYear()} · React & Tailwind
          <FaHeart className="text-red-500/80 text-[10px]" aria-hidden />
        </p>
      </div>
    </footer>
  );
}
