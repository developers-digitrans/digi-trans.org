import React from "react";
import { motion } from "framer-motion";

// Enhanced floating animation with multiple variants
export const FloatingCard = ({ children, delay = 0, duration = 20 }) => (
  <motion.div
    initial={{ y: 0, rotate: 0 }}
    animate={{
      y: [-10, 10, -10],
      rotate: [-1, 1, -1],
    }}
    transition={{
      duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
  >
    {children}
  </motion.div>
);

// Magnetic hover effect for buttons and cards
export const MagneticHover = ({ children, strength = 0.3 }) => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;
    
    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {children}
    </motion.div>
  );
};

// Staggered reveal animation for lists
export const StaggeredReveal = ({ children, staggerDelay = 0.1 }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 30, scale: 0.9 },
            visible: { opacity: 1, y: 0, scale: 1 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

// Morphing background gradient
export const MorphingGradient = ({ className = "" }) => (
  <motion.div
    className={`absolute inset-0 opacity-30 ${className}`}
    style={{
      background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
      backgroundSize: "400% 400%",
    }}
    animate={{
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    }}
    transition={{
      duration: 15,
      repeat: Infinity,
      ease: "linear",
    }}
  />
);

// Particle system background
export const ParticleField = ({ particleCount = 50 }) => {
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 10,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Text reveal animation
export const TextReveal = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      whileInView={{ clipPath: "inset(0 0% 0 0)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

// Glitch effect for text
export const GlitchText = ({ children, intensity = 1 }) => {
  return (
    <motion.div
      animate={{
        x: [0, intensity, -intensity, 0],
        textShadow: [
          "0 0 0 #ff00ff, 0 0 0 #00ffff",
          `${intensity}px 0 0 #ff00ff, -${intensity}px 0 0 #00ffff`,
          `${-intensity}px 0 0 #ff00ff, ${intensity}px 0 0 #00ffff`,
          "0 0 0 #ff00ff, 0 0 0 #00ffff",
        ],
      }}
      transition={{
        duration: 0.2,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

// Loading spinner with pulse
export const PulseLoader = ({ size = 40, color = "#8b5cf6" }) => (
  <motion.div
    className="rounded-full"
    style={{
      width: size,
      height: size,
      border: `2px solid ${color}20`,
      borderTop: `2px solid ${color}`,
    }}
    animate={{ rotate: 360 }}
    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
  />
);

// Ripple effect on click
export const RippleEffect = ({ children, color = "rgba(139, 92, 246, 0.3)" }) => {
  const [ripples, setRipples] = React.useState([]);

  const addRipple = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = {
      id: Date.now(),
      x,
      y,
    };
    
    setRipples(prev => [...prev, newRipple]);
    
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);
  };

  return (
    <div className="relative overflow-hidden" onClick={addRipple}>
      {children}
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: ripple.x - 1,
            top: ripple.y - 1,
            backgroundColor: color,
          }}
          initial={{ width: 2, height: 2, opacity: 1 }}
          animate={{ width: 300, height: 300, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      ))}
    </div>
  );
};

// Scroll-triggered counter animation
export const AnimatedCounter = ({ from = 0, to, duration = 2, suffix = "" }) => {
  const [count, setCount] = React.useState(from);
  const [hasAnimated, setHasAnimated] = React.useState(false);

  React.useEffect(() => {
    if (!hasAnimated) return;
    
    const increment = (to - from) / (duration * 60);
    let current = from;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 1000 / 60);
    
    return () => clearInterval(timer);
  }, [hasAnimated, from, to, duration]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setHasAnimated(true)}
    >
      {count}{suffix}
    </motion.div>
  );
};

// Typewriter effect
export const TypewriterText = ({ text, speed = 50, delay = 0 }) => {
  const [displayText, setDisplayText] = React.useState("");
  
  React.useEffect(() => {
    const timer = setTimeout(() => {
      let i = 0;
      const typeTimer = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(typeTimer);
        }
      }, speed);
      
      return () => clearInterval(typeTimer);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [text, speed, delay]);
  
  return (
    <span>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-0.5 h-5 bg-current ml-1"
      />
    </span>
  );
};

// Hover glow effect
export const HoverGlow = ({ children, glowColor = "purple" }) => (
  <motion.div
    className="relative"
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.2 }}
  >
    <motion.div
      className={`absolute -inset-0.5 bg-gradient-to-r from-${glowColor}-600 to-blue-600 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-1000`}
      whileHover={{ opacity: 0.75 }}
    />
    <div className="relative">{children}</div>
  </motion.div>
);

export default {
  FloatingCard,
  MagneticHover,
  StaggeredReveal,
  MorphingGradient,
  ParticleField,
  TextReveal,
  GlitchText,
  PulseLoader,
  RippleEffect,
  AnimatedCounter,
  TypewriterText,
  HoverGlow,
};