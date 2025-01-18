'use client'

import { memo, useCallback, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card } from "@/components/ui/card"
import { SplineScene } from "@/components/ui/splite"
import { DotPattern } from "@/components/ui/dot-pattern"

// Animation variants remain the same
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

// Previous components remain the same
const GradientOverlay = memo(function GradientOverlay() {
  return (
    <>
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-transparent to-gray-900" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-transparent via-gray-900/50 to-transparent" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-gray-900/50 via-transparent to-gray-900/50" />
    </>
  )
})

const Logo = memo(function Logo() {
  return (
    <motion.div
      variants={fadeInUpVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8 }}
      className="mb-4 md:mb-6"
    >
      <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 relative">
        <Image
          src="/images/logo.png"
          alt="OYAPS Studio Logo"
          fill
          className="object-contain"
          priority
          sizes="(max-width: 768px) 96px, (max-width: 1024px) 128px, 160px"
        />
      </div>
    </motion.div>
  )
})

const HeroContent = memo(function HeroContent({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <>
      <motion.div
        variants={fadeInUpVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          OYAPS Studio
        </h1>
        <p className="mt-3 md:mt-4 text-cyan-300 max-w-lg text-sm md:text-base lg:text-lg">
          Professional Web Design & Cybersecurity Solutions
        </p>
      </motion.div>

      <motion.div
        variants={fadeInUpVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-6 md:mt-8"
      >
        <button 
          onClick={onGetStarted}
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 md:px-8 py-2 md:py-3 text-sm md:text-base rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95"
        >
          Get Started
        </button>
      </motion.div>
    </>
  )
})

// Updated SplineWrapper component with conditional rendering
const SplineWrapper = memo(function SplineWrapper() {
  const [isMobile, setIsMobile] = useState(true)
  
  useEffect(() => {
    // Function to check if viewport is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768) // 768px is our md breakpoint
    }
    
    // Initial check
    checkMobile()
    
    // Add event listener for resize
    window.addEventListener('resize', checkMobile)
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div className="w-full md:w-1/2 h-[300px] md:h-full relative z-10">
      <div className="absolute bottom-0 left-0 right-0 h-32 z-20 bg-gradient-to-t from-gray-900 to-transparent" />
      
      {isMobile ? (
        // Image for mobile devices
        <div className="relative w-full h-full">
          <Image
            src="/images/hero-3d.png" // Make sure to export your 3D scene as an image and save it here
            alt="OYAPS Studio 3D Scene"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      ) : (
        // 3D model for larger screens
        <SplineScene 
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      )}
    </div>
  )
})

// Main component remains the same
function SplineSceneBasic() {
  const scrollToProjects = useCallback(() => {
    const projectsSection = document.getElementById('projects')
    projectsSection?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }, [])

  return (
    <Card className="w-full min-h-[500px] md:h-[600px] lg:h-[700px] bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <DotPattern
          cy={1}
          cr={1}
          cx={1}
          className="[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)] opacity-90"
        />
      </div>

      <GradientOverlay />

      <div className="flex flex-col md:flex-row h-full">
        <div className="w-full md:w-1/2 p-4 md:p-8 lg:p-12 relative z-10 flex flex-col justify-center mt-8 md:mt-0 items-center">
          <Logo />
          <HeroContent onGetStarted={scrollToProjects} />
        </div>

        <SplineWrapper />
      </div>
    </Card>
  )
}

export default memo(SplineSceneBasic)