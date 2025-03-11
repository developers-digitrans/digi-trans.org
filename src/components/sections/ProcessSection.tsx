import { motion, useAnimation } from "framer-motion";
import { Card } from "../ui/card";
import { Search, Code, TestTube, Rocket } from "lucide-react";
import React, { useEffect } from "react";

const steps = [
  {
    icon: <Search className="w-8 h-8" />,
    title: "Discovery & Strategy",
    description:
      "We conduct comprehensive technical assessments and develop strategic roadmaps perfectly aligned with your business objectives and growth targets.",
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Architecture & Design",
    description:
      "Our experts design scalable, future-proof architectures and select optimal technologies based on your specific enterprise requirements.",
  },
  {
    icon: <TestTube className="w-8 h-8" />,
    title: "Agile Implementation",
    description:
      "We employ agile methodologies with continuous integration, rigorous testing, and regular stakeholder feedback to ensure quality and alignment.",
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Optimization & Scale",
    description:
      "Post-launch, we focus on performance optimization, comprehensive monitoring, and continuous improvement to maximize ROI and scalability.",
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
          <h2 className="text-3xl font-bold mb-4">Our Process</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We follow a proven development process to deliver high-quality
            solutions on time and within budget.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.title} className="relative w-full">
              {/* Connecting Arrows - Now appearing before the cards */}
              {index > 0 && (
                <div className="hidden lg:block absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    animate={{
                      x: [0, 10, 0],
                      opacity: [0.7, 1, 0.7],
                      textShadow: [
                        "0 0 5px rgba(168,85,247,0.5)",
                        "0 0 15px rgba(168,85,247,0.8)",
                        "0 0 5px rgba(168,85,247,0.5)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-purple-500 text-4xl drop-shadow-[0_0_5px_rgba(168,85,247,0.8)]"
                  >
                    →
                  </motion.div>
                </div>
              )}

              {/* Card with continuous animation */}
              <motion.div
                variants={{
                  hidden: { opacity: 0.7, y: 10, scale: 0.98 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                initial="hidden"
                animate={controls}
                transition={{
                  duration: 1.5,
                  delay: index * 0.3,
                  ease: "easeInOut",
                }}
                className="w-full"
              >
                <Card className="w-full h-[350px] p-8 bg-purple-900/20 backdrop-blur border-purple-500/50 hover:border-purple-400 relative shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_25px_rgba(168,85,247,0.3)] transition-all duration-300 flex flex-col">
                  {/* Step Number */}
                  <div className="absolute top-6 right-6 text-sm font-medium text-purple-400">
                    {(index + 1).toString().padStart(2, "0")}
                  </div>

                  {/* Icon with continuous pulse */}
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
                    className="text-purple-400 mb-6"
                  >
                    {step.icon}
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-white">
                      {step.title}
                    </h3>
                    <p className="text-gray-300">{step.description}</p>
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
