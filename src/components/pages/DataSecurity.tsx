import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import UniverseLights from "../UniverseLights";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Shield, Lock, Key, Eye } from "lucide-react";

const features = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Data Protection",
    description:
      "Enterprise-grade security measures to protect sensitive data.",
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: "Access Control",
    description: "Advanced authentication and authorization systems.",
  },
  {
    icon: <Key className="w-8 h-8" />,
    title: "Encryption",
    description: "End-to-end encryption for data at rest and in transit.",
  },
  {
    icon: <Eye className="w-8 h-8" />,
    title: "Security Monitoring",
    description: "24/7 monitoring and threat detection systems.",
  },
];

export default function DataSecurity() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="relative w-full h-[800px] bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-an-aerial-view-of-a-business-district-1573/1080p.mp4"
            type="video/mp4"
          />
        </video>
        <UniverseLights />

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Data Security
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl"
          >
            Protect your valuable data assets with our comprehensive security
            solutions.
          </motion.p>
        </div>
      </div>

      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-xl text-gray-300 leading-relaxed">
              In today's digital landscape, protecting your data is more
              critical than ever. Our comprehensive data security solutions
              combine advanced encryption, access control systems, and
              continuous monitoring to safeguard your valuable information
              assets. We ensure compliance with global security standards while
              maintaining the flexibility your business needs to operate
              efficiently.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover:shadow-lg transition-shadow bg-gray-900 border-gray-800">
                  <div className="text-blue-600 mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
