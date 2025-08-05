import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg flex items-center justify-center z-40 hover:shadow-[0_0_20px_rgba(147,51,234,0.5)] group overflow-hidden"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20 
          }}
          whileTap={{ scale: 0.9 }}
          aria-label="Back to top"
        >
          {/* Background animation */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-tr from-purple-700 to-indigo-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{ 
                rotate: [0, 360],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>
          
          {/* Icon with animation */}
          <motion.div
            className="relative z-10"
            animate={{ y: [0, -3, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ChevronUp className="w-6 h-6" />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
