import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Search, Code, TestTube, Rocket } from "lucide-react";

const steps = [
  {
    icon: <Search className="w-8 h-8" />,
    title: "Assessment & Strategy",
    description:
      "Deep-dive technical assessment and strategic roadmap development aligned with business goals.",
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Architecture & Design",
    description:
      "Scalable architecture design and technology selection based on enterprise requirements.",
  },
  {
    icon: <TestTube className="w-8 h-8" />,
    title: "Implementation",
    description:
      "Agile development with continuous integration, testing, and stakeholder feedback.",
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Optimization & Scale",
    description:
      "Performance optimization, monitoring setup, and continuous improvement cycles.",
  },
];

export default function ProcessSection() {
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
              {/* Connecting Arrows */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 z-10">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: [0, 1, 0], x: [0, 10, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: index * 1.5,
                    }}
                    className="text-blue-600 text-4xl"
                  >
                    →
                  </motion.div>
                </div>
              )}

              {/* Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  scale: [0.8, 1, 1, 0.8],
                }}
                transition={{
                  duration: 6,
                  times: [0, 0.1, 0.9, 1],
                  repeat: Infinity,
                  delay: index * 1.5,
                }}
              >
                <Card className="w-full h-[300px] p-8 bg-gray-900 border-gray-800 relative shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_25px_rgba(0,0,0,0.2)] transition-shadow flex flex-col">
                  {/* Step Number */}
                  <div className="absolute top-6 right-6 text-sm font-medium text-blue-600">
                    {(index + 1).toString().padStart(2, "0")}
                  </div>

                  {/* Icon */}
                  <div className="text-blue-600 mb-6">{step.icon}</div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-white">
                      {step.title}
                    </h3>
                    <p className="text-gray-400">{step.description}</p>
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
