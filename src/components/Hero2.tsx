'use client'
import { SplineScene } from "@/components/ui/splite"
import { Card } from "@/components/ui/card"
import Image from 'next/image'
import { motion } from 'framer-motion'
 
export function SplineSceneBasic() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <Card className="w-full min-h-[500px] md:h-[600px] lg:h-[700px] bg-gray-900 relative overflow-hidden ">
      <div className="flex flex-col md:flex-row h-full">
        {/* Left content */}
        <div className="w-full md:w-1/2 p-4 md:p-8 lg:p-12 relative z-10 flex flex-col justify-center mt-8 md:mt-0 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 md:mb-6"
          >
            {/* Logo */}
            <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 relative">
              <Image
            src="/images/logo.png"
            alt="OYAPS Studio Logo"
            fill
            className="object-contain"
            priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 md:mt-8"
          >
            <button 
              onClick={scrollToProjects}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 md:px-8 py-2 md:py-3 text-sm md:text-base rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95"
            >
              Get Started
            </button>
          </motion.div>
        </div>

        {/* Right content */}
        <div className="w-full md:w-1/2 h-[300px] md:h-full relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}

export default SplineSceneBasic