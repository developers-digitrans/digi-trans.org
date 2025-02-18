import React from "react";
import { motion } from "framer-motion";

const Line = ({ delay }: { delay: number }) => (
  <motion.div
    initial={{ opacity: 1, top: "-2%", left: `${Math.random() * 100}%` }}
    animate={{
      opacity: [0.8, 1, 0.8],
      top: ["-2%", "104%"],
    }}
    transition={{
      duration: 8,
      delay,
      repeat: Infinity,
      ease: "linear",
    }}
    style={{
      position: "absolute",
      width: "1px",
      height: "100px",
      background: `linear-gradient(180deg, 
        transparent 0%, 
        rgba(167, 139, 250, 0.3) 10%,
        rgba(167, 139, 250, 0.8) 50%,
        rgba(167, 139, 250, 0.3) 90%,
        transparent 100%
      )`,
      filter: "blur(0.3px)",
    }}
  />
);

export default function GridBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      {/* Falling Lines */}
      {Array.from({ length: 50 }).map((_, i) => (
        <Line key={`line-${i}`} delay={i * 0.2} />
      ))}
    </div>
  );
}
