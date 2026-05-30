import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { FeaturedProjectsShowcase } from '../projects/FeaturedProjectsShowcase';

export function ProjectsSection() {
  return (
    <section id="projects" className="section-pad relative">
      <div className="absolute top-1/3 -right-40 w-80 h-80 rounded-full bg-violet-500/10 blur-[100px] pointer-events-none" aria-hidden />
      <div className="absolute bottom-1/4 -left-32 w-64 h-64 rounded-full bg-sky-500/10 blur-[80px] pointer-events-none" aria-hidden />

      <div className="container-main relative z-10 mb-10 md:mb-12">
        <SectionHeading subtitle="Work" title="Featured Projects" className="mb-4" />
        <motion.p
          className="text-muted text-center md:text-left max-w-2xl -mt-6 md:mt-0 mx-auto md:mx-0 text-sm md:text-base leading-relaxed"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects rotate automatically every 6 seconds — hover to pause. High-fidelity mockups with realistic business data.
        </motion.p>
      </div>

      <FeaturedProjectsShowcase />
    </section>
  );
}
