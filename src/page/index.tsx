import { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import { MeshBackground } from '../components/background/MeshBackground';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { HeroSection } from '../components/hero/HeroSection';
import { NAV_LINKS } from '../data/portfolio';

const AboutSection = lazy(() => import('../components/sections/AboutSection').then((m) => ({ default: m.AboutSection })));
const SkillsSection = lazy(() => import('../components/sections/SkillsSection').then((m) => ({ default: m.SkillsSection })));
const ExperienceSection = lazy(() => import('../components/sections/ExperienceSection').then((m) => ({ default: m.ExperienceSection })));
const ProjectsSection = lazy(() => import('../components/sections/ProjectsSection').then((m) => ({ default: m.ProjectsSection })));
const ResumeSection = lazy(() => import('../components/sections/ResumeSection').then((m) => ({ default: m.ResumeSection })));
const ContactSection = lazy(() => import('../components/sections/ContactSection').then((m) => ({ default: m.ContactSection })));

function SectionLoader() {
  return <div className="section-pad flex justify-center"><div className="w-8 h-8 rounded-full border-2 border-sky-500/30 border-t-sky-500 animate-spin" /></div>;
}

function SectionDivider() {
  return <div className="section-divider" aria-hidden />;
}

export default function Portfolio() {
  const [active, setActive] = useState<string>('About');

  useEffect(() => {
    const onScroll = () => {
      NAV_LINKS.forEach((n) => {
        const el = document.getElementById(n.toLowerCase());
        if (el && window.scrollY + 120 >= el.offsetTop) setActive(n);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navigate = useCallback((id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen text-theme antialiased">
      <MeshBackground />
      <Header active={active} onNavigate={navigate} />

      <main>
        <HeroSection onNavigate={navigate} />
        <SectionDivider />

        <Suspense fallback={<SectionLoader />}>
          <AboutSection />
          <SectionDivider />
          <SkillsSection />
          <SectionDivider />
          <ExperienceSection />
          <SectionDivider />
          <ProjectsSection />
          <SectionDivider />
          <ResumeSection />
          <SectionDivider />
          <ContactSection onNavigate={navigate} />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
