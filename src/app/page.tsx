"use client"
import TeamSection from '../components/TeamSection';
import SocialSection from '../components/SocialSection';
import AnimatedBackground from '../components/AnimatedBackground';
import CustomCursor from '../components/CustomCursor';
import SectionTransition from '../components/SectionTransition';
import ProjectsSection from '../components/ProjectsSection';
import { NavBarDemo } from '@/components/nav2';
import { Connect } from '@/components/contact';
import SplineSceneBasic from '@/components/Hero2';

export default function Home() {
  return (
    <main className="min-h-screen relative cursor-none">
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>
      <CustomCursor />
      <AnimatedBackground />
      <NavBarDemo />
      <SectionTransition from="dark" to="dark">
        <SplineSceneBasic />
      </SectionTransition>
      
      <SectionTransition from="dark" to="dark">
        <ProjectsSection />
      </SectionTransition>

      <SectionTransition from="dark" to="dark">
        <Connect />
      </SectionTransition>

      <SectionTransition from="dark" to="dark">
        <TeamSection />
      </SectionTransition>
      
      <SectionTransition from="dark" to="dark">
        <SocialSection />
      </SectionTransition>
    </main>
  );
}