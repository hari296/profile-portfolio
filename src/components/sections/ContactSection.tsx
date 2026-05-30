import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaArrowRight,
} from 'react-icons/fa';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { CONTACT } from '../../data/portfolio';
import { fadeUp, staggerContainer } from '../../lib/animations';

const SOCIAL = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    desc: 'Best for opportunities & collaborations',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'harieaswaran-j',
    href: CONTACT.linkedin,
    desc: 'Connect professionally',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'View repositories',
    href: CONTACT.github,
    desc: 'Open-source & project code',
  },
  {
    icon: FaPhone,
    label: 'Phone',
    value: CONTACT.phone,
    href: `tel:${CONTACT.phone.replace(/\s/g, '')}`,
    desc: 'Available during business hours',
  },
];

type ContactSectionProps = {
  onNavigate: (id: string) => void;
};

export function ContactSection({ onNavigate }: ContactSectionProps) {
  return (
    <section id="contact" className="section-pad relative">
      <div className="absolute inset-0 bg-gradient-to-t from-sky-500/[0.03] to-transparent pointer-events-none" aria-hidden />

      <div className="container-main relative">
        <SectionHeading subtitle="Contact" title="Let's Connect" align="center" className="max-w-2xl mx-auto" />

        <motion.p
          className="text-muted text-lg text-center max-w-xl mx-auto mb-16 leading-relaxed"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Open to full-time roles, freelance work, and product collaborations. Reach out through any channel below.
        </motion.p>

        <motion.div
          className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {SOCIAL.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -4, scale: 1.01 }}
                className="group block"
              >
                <GlassCard className="p-6 h-full" glow>
                  <div className="flex items-start gap-4">
                    <span className="w-12 h-12 rounded-xl bg-sky-500/10 dark:bg-sky-500/15 border border-sky-500/20 text-sky-500 dark:text-sky-400 flex items-center justify-center text-xl group-hover:shadow-glow-sm transition-shadow">
                      <Icon />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[10px] font-semibold text-muted uppercase tracking-wider">{item.label}</p>
                      <p className="text-theme font-semibold mt-1 truncate">{item.value}</p>
                      <p className="text-xs text-muted mt-1">{item.desc}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <a href={`mailto:${CONTACT.email}`} className="btn-primary">
            <FaEnvelope />
            Send an Email
          </a>
          <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="btn-outline">
            <FaLinkedin />
            LinkedIn Profile
          </a>
          <button type="button" onClick={() => onNavigate('Projects')} className="btn-ghost">
            View Projects
            <FaArrowRight className="text-sky-500" />
          </button>
        </motion.div>

        <motion.p
          className="flex items-center justify-center gap-2 text-sm text-muted mt-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <FaMapMarkerAlt className="text-sky-500 shrink-0" />
          {CONTACT.location}
        </motion.p>
      </div>
    </section>
  );
}
