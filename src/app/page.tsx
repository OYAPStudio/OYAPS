"use client"
import Hero from '../components/Hero';
import TeamSection from '../components/TeamSection';
import SocialSection from '../components/SocialSection';
import Navbar from '../components/Navbar';
import AnimatedBackground from '../components/AnimatedBackground';
import CustomCursor from '../components/CustomCursor';
import SectionTransition from '../components/SectionTransition';
import ProjectsSection from '../components/ProjectsSection';


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
      <Navbar />
      
      <SectionTransition from="dark" to="dark">
        <Hero />
      </SectionTransition>
      
      <SectionTransition from="dark" to="dark">
      <ProjectsSection />
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