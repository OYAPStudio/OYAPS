"use client"
import { motion } from 'framer-motion';

interface SectionTransitionProps {
  children: React.ReactNode;
  className?: string;
  from?: "dark" | "light";
  to?: "dark" | "light";
}

const SectionTransition = ({ children, className = "", from = "dark", to = "dark" }: SectionTransitionProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* Top transition */}
      <div 
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, 
            ${from === "dark" ? "rgb(17 24 39)" : "rgb(31 41 55)"} 0%, 
            transparent 100%
          )`
        }}
      />

      {/* Content */}
      {children}

      {/* Bottom transition */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: `linear-gradient(to top, 
            ${to === "dark" ? "rgb(17 24 39)" : "rgb(31 41 55)"} 0%, 
            transparent 100%
          )`
        }}
      />
    </div>
  );
};

export default SectionTransition;