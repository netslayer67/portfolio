import React, { Fragment, lazy } from 'react';
import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';
import SectionDivider from '@/components/SectionDivider';
import SectionLoader from '@/components/SectionLoader';
import { profile } from '@/data/profile';
import { useAosInit } from '@/hooks/useAos';

const HeroSection = lazy(() => import('@/sections/HeroSection'));
const AboutSection = lazy(() => import('@/sections/AboutSection'));
const ExperienceSection = lazy(() => import('@/sections/ExperienceSection'));
const SkillsSection = lazy(() => import('@/sections/SkillsSection'));
const InterestsSection = lazy(() => import('@/sections/InterestsSection'));
const ProjectsSection = lazy(() => import('@/sections/ProjectsSection'));
const ScopeSection = lazy(() => import('@/sections/ScopeSection'));
const AchievementsSection = lazy(() => import('@/sections/AchievementsSection'));
const DevelopmentSection = lazy(() => import('@/sections/DevelopmentSection'));
const EvidenceHubSection = lazy(() => import('@/sections/EvidenceHubSection'));
const AppreciationSection = lazy(() => import('@/sections/AppreciationSection'));
const DocumentsSection = lazy(() => import('@/sections/DocumentsSection'));
const MediaSection = lazy(() => import('@/sections/MediaSection'));
const WorksSection = lazy(() => import('@/sections/WorksSection'));
const ContactSection = lazy(() => import('@/sections/ContactSection'));

const sections = [
  HeroSection,
  AboutSection,
  ExperienceSection,
  SkillsSection,
  InterestsSection,
  ProjectsSection,
  ScopeSection,
  AchievementsSection,
  DevelopmentSection,
  EvidenceHubSection,
  AppreciationSection,
  DocumentsSection,
  MediaSection,
  WorksSection,
  ContactSection,
];

export default function App() {
  useAosInit();

  return (
    <div className="app-shell min-h-screen w-full bg-gray-900 text-white relative overflow-x-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0f_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0f_1px,transparent_1px)] bg-[size:48px_48px]"
          style={{
            maskImage:
              'radial-gradient(ellipse 80% 50% at 50% 0%, white 0%, transparent 100%)',
          }}
        />
        <div className="glow-orb glow-orb--1 absolute bottom-0 left-[-20%] right-[-20%] top-[10%] h-[560px] rounded-full bg-amber-500/15 blur-[170px]" />
        <div className="glow-orb glow-orb--2 absolute top-[45%] left-[-10%] right-[10%] h-[420px] rounded-full bg-yellow-300/10 blur-[180px]" />
        <div className="glow-orb glow-orb--3 absolute bottom-[-10%] left-[-15%] right-[-15%] h-[520px] rounded-full bg-amber-400/15 blur-[200px]" />
      </div>

      <AppHeader name={profile.name} />

      <main className="relative z-10 pt-28 pb-24 md:pb-0">
        {sections.map((Component, index) => (
          <Fragment key={Component.displayName || Component.name || index}>
            <SectionLoader Component={Component} />
            {index < sections.length - 1 && <SectionDivider />}
          </Fragment>
        ))}
      </main>

      <AppFooter />
    </div>
  );
}
