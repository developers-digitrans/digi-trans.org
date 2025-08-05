import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const ProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const progress = (scrollPosition / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 w-full h-1.5 bg-gray-900 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-600 relative"
        style={{ width: `${scrollProgress}%` }}
        initial={{ width: "0%" }}
        animate={{ 
          width: `${scrollProgress}%`,
          boxShadow: isHovered ? "0 0 10px rgba(147, 51, 234, 0.7)" : "none"
        }}
        transition={{ duration: 0.1 }}
      >
        {/* Glow effect */}
        <motion.div 
          className="absolute top-0 right-0 w-12 h-full bg-white opacity-30 blur-sm"
          animate={{
            x: [12, -12, 12],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Pulse indicator at the end of progress */}
        <motion.div 
          className="absolute top-1/2 right-0 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
      
      {/* Percentage tooltip on hover */}
      <AnimatedTooltip scrollProgress={scrollProgress} isHovered={isHovered} />
    </div>
  );
};

const AnimatedTooltip: React.FC<{ scrollProgress: number, isHovered: boolean }> = ({ scrollProgress, isHovered }) => {
  return (
    <motion.div
      className="absolute right-4 top-6 bg-purple-900 text-white text-xs px-2 py-1 rounded shadow-lg pointer-events-none"
      initial={{ opacity: 0, y: -10 }}
      animate={{ 
        opacity: isHovered ? 1 : 0,
        y: isHovered ? 0 : -10
      }}
      transition={{ duration: 0.2 }}
    >
      {Math.round(scrollProgress)}%
    </motion.div>
  );
};
