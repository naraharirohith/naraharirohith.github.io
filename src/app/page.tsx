'use client';

import { ThemeProvider } from '@/components/ThemeProvider';
import ShockwaveBackground from '@/components/ShockwaveBackground';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import AchievementsSection from '@/components/AchievementsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <ThemeProvider>
      <main className="relative min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-blue-50 dark:from-temple-950 dark:via-temple-900 dark:to-temple-950 transition-colors duration-500">
        {/* Shockwave background with epicenter */}
        <ShockwaveBackground />

        {/* Navigation */}
        <Navigation />

        {/* Main content */}
        <div className="relative z-10">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ExperienceSection />
          <AchievementsSection />
          <ContactSection />
        </div>
      </main>
    </ThemeProvider>
  );
}
