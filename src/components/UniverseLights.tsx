import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function UniverseLights() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-30">
      {/* Main glow */}
      <motion.div
        className="absolute h-[300px] w-[300px] rounded-full bg-purple-500/30 blur-3xl"
        animate={{ x: mousePosition.x - 150, y: mousePosition.y - 150 }}
        transition={{ type: "spring", damping: 25, stiffness: 700 }}
      />

      {/* Secondary glows */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-[200px] w-[200px] rounded-full blur-3xl"
          style={{
            background: `radial-gradient(circle, rgba(147, 51, 234, ${0.15 - i * 0.05}) 0%, transparent 70%)`,
          }}
          animate={{
            x: mousePosition.x - 100,
            y: mousePosition.y - 100,
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            x: { type: "spring", damping: 25, stiffness: 700 },
            y: { type: "spring", damping: 25, stiffness: 700 },
            scale: { duration: 2, repeat: Infinity },
            opacity: { duration: 2, repeat: Infinity },
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
}
