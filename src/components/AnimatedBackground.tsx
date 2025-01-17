"use client"
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Main gradient blobs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-blue-500/30 blur-[100px]"
        animate={{
          x: ["-25%", "25%", "-25%"],
          y: ["-25%", "25%", "-25%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          top: "20%",
          left: "30%",
        }}
      />
      
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-purple-500/20 blur-[100px]"
        animate={{
          x: ["25%", "-25%", "25%"],
          y: ["25%", "-25%", "25%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          top: "40%",
          right: "30%",
        }}
      />

      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-cyan-500/20 blur-[100px]"
        animate={{
          x: ["-20%", "20%", "-20%"],
          y: ["20%", "-20%", "20%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          bottom: "10%",
          left: "40%",
        }}
      />

      {/* Overlay to control the intensity */}
      <div className="absolute inset-0 bg-gray-900/70" />
    </div>
  );
};

export default AnimatedBackground;