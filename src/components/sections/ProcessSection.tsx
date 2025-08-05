import { motion, useAnimation } from "framer-motion";
import { Card } from "../ui/card";
import {
  ArrowRight,
  ArrowLeft,
  ArrowDown,
  FileText,
  Code,
  Server,
  CheckCircle,
  Database,
  LineChart,
  Bot,
  GitMerge,
} from "lucide-react";
import React, { useEffect } from "react";

const processes = [
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Discovery & Strategy",
    description:
      "We start by understanding your vision, target market, and business goals. Together, we define user personas, feature requirements, and create a product roadmap.",
    number: "01",
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Design & Prototype",
    description:
      "Our UX/UI team creates wireframes and interactive prototypes. We validate the user experience with real users before any development begins.",
    number: "02",
  },
  {
    icon: <Bot className="w-8 h-8" />,
    title: "MVP Development",
    description: 
      "We build your MVP using modern technologies and agile methodology. You'll see weekly progress demos and can provide feedback throughout the process.",
    number: "03",
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Testing & Refinement",
    description:
      "Comprehensive testing ensures your SaaS works flawlessly. We conduct user testing, performance optimization, and security audits before launch.",
    number: "04",
  },
  {
    icon: <GitMerge className="w-8 h-8" />,
    title: "Launch & Deploy",
    description:
      "We deploy your SaaS to production with enterprise-grade infrastructure. Your product goes live with monitoring, analytics, and performance optimization.",
    number: "05",
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: "Growth & Scaling",
    description:
      "Post-launch, we help you scale based on user feedback and growth metrics. We provide ongoing support, feature development, and technical partnership.",
    number: "06",
  },
];

export default function ProcessSection() {
  const controls = useAnimation();

  useEffect(() => {
    // Start the animation sequence immediately and repeat indefinitely
    const startAnimation = async () => {
      await controls.start("visible");
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Pause at the end
      await controls.start("hidden");
      await new Promise((resolve) => setTimeout(resolve, 500)); // Brief pause before restarting
      startAnimation(); // Restart the animation
    };

    startAnimation();
  }, [controls]);

  // Split processes into two rows
  const firstRow = processes.slice(0, 3);
  const secondRow = processes.slice(3).reverse(); // Reversed for right-to-left flow

  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">How We Build Your SaaS</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From initial concept to scaling success, our proven 6-step process ensures your SaaS launch is a success.
          </p>
        </motion.div>

        {/* Snake layout - first row (left to right) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* First row - Left to right */}
          {firstRow.map((process, index) => (
            <div key={process.title} className="relative">
              {/* Right Arrow for items except the last in first row */}
              {index < 2 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-3 z-10">
                  <motion.div
                    animate={{
                      x: [0, 5, 0],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-purple-500"
                  >
                    <ArrowRight size={24} className="drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                  </motion.div>
                </div>
              )}
              
              {/* Down Arrow for the last item in first row */}
              {index === 2 && (
                <div className="hidden md:block absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-3 z-10">
                  <motion.div
                    animate={{
                      y: [0, 5, 0],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-purple-500"
                  >
                    <ArrowDown size={24} className="drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                  </motion.div>
                </div>
              )}

              {/* Mobile down arrow after each card except the last */}
              {index < 2 && (
                <div className="md:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-3 z-10">
                  <motion.div
                    animate={{
                      y: [0, 5, 0],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-purple-500"
                  >
                    <ArrowDown size={24} className="drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                  </motion.div>
                </div>
              )}

              {/* Card */}
              <motion.div
                variants={{
                  hidden: { opacity: 0.7, y: 10, scale: 0.98 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                initial="hidden"
                animate={controls}
                transition={{
                  duration: 1.5,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
              >
                <Card className="h-[220px] p-6 bg-purple-900/20 backdrop-blur border-purple-500/50 hover:border-purple-400 relative shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_25px_rgba(168,85,247,0.3)] transition-all duration-300 flex flex-col">
                  {/* Step Number */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-purple-900/80 flex items-center justify-center text-sm font-bold text-purple-300 border border-purple-500/30">
                    {process.number}
                  </div>

                  {/* Icon */}
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-purple-400 mb-2"
                  >
                    {process.icon}
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1 text-white">
                      {process.title}
                    </h3>
                    <p className="text-gray-300 text-xs">
                      {process.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            </div>
          ))}

          {/* Second row - Right to left */}
          {secondRow.map((process, index) => (
            <div key={process.title} className="relative md:mt-6">
              {/* Left Arrow for items except the first in second row (which is the last process) */}
              {index != 0 && (
                <div className="hidden md:block absolute top-1/2 left-0 transform -translate-x-3 z-10">
                  <motion.div
                    animate={{
                      x: [0, -5, 0],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-purple-500"
                  >
                    <ArrowLeft size={24} className="drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                  </motion.div>
                </div>
              )}

              {/* Mobile down arrow after each card except the last */}
              {index < 2 && process.number !== "06" && (
                <div className="md:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-3 z-10">
                  <motion.div
                    animate={{
                      y: [0, 5, 0],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-purple-500"
                  >
                    <ArrowDown size={24} className="drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                  </motion.div>
                </div>
              )}

              {/* Card */}
              <motion.div
                variants={{
                  hidden: { opacity: 0.7, y: 10, scale: 0.98 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                initial="hidden"
                animate={controls}
                transition={{
                  duration: 1.5,
                  delay: (index + 3) * 0.1,
                  ease: "easeInOut",
                }}
              >
                <Card className="h-[220px] p-6 bg-purple-900/20 backdrop-blur border-purple-500/50 hover:border-purple-400 relative shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_25px_rgba(168,85,247,0.3)] transition-all duration-300 flex flex-col">
                  {/* Step Number */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-purple-900/80 flex items-center justify-center text-sm font-bold text-purple-300 border border-purple-500/30">
                    {process.number}
                  </div>

                  {/* Icon */}
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-purple-400 mb-2"
                  >
                    {process.icon}
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1 text-white">
                      {process.title}
                    </h3>
                    <p className="text-gray-300 text-xs">
                      {process.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
