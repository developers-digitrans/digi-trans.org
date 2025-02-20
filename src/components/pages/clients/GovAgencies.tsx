import React from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import { motion } from "framer-motion";
import { Card } from "../../ui/card";
import { ShieldCheck, Lock, FileCheck, Scale, CheckCircle } from "lucide-react";
import UniverseLights from "../../UniverseLights";

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "FedRAMP Compliance",
    description:
      "FedRAMP High & IL4 certified cloud solutions with ATO process support",
    metrics: ["FedRAMP High", "IL4/IL5 Ready", "NIST 800-53"],
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: "Zero Trust Security",
    description: "Advanced security architecture with continuous verification",
    metrics: ["FIPS 140-2", "CAC/PIV Ready", "24/7 SOC"],
  },
  {
    icon: <FileCheck className="w-8 h-8" />,
    title: "Compliance Automation",
    description: "Automated compliance monitoring and reporting systems",
    metrics: ["Real-time Audits", "DISA STIG", "RMF Ready"],
  },
  {
    icon: <Scale className="w-8 h-8" />,
    title: "Government Cloud",
    description: "Dedicated government cloud infrastructure and services",
    metrics: ["AWS GovCloud", "Azure Gov", "IL5 Workloads"],
  },
];

const caseStudies = [
  {
    agency: "Department of Defense",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=DOD",
    description:
      "Implemented zero-trust security architecture for classified data systems",
    results: ["100% NIST Compliance", "50% Faster ATO", "Zero Breaches"],
  },
  {
    agency: "Federal Healthcare Agency",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=FHA",
    description:
      "Built HIPAA-compliant data analytics platform for healthcare research",
    results: ["1PB+ Data Processed", "99.99% Uptime", "45% Cost Savings"],
  },
  {
    agency: "State Government",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=SG",
    description:
      "Modernized legacy systems with cloud-native microservices architecture",
    results: [
      "200+ Apps Migrated",
      "60% Performance Gain",
      "$10M Annual Savings",
    ],
  },
];

export default function GovAgencies() {
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
            Government Agency Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl"
          >
            Secure and compliant solutions for government agencies and public
            sector organizations.
          </motion.p>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-12 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-300 leading-relaxed">
              We specialize in delivering secure, compliant solutions for
              government agencies and public sector organizations. Our solutions
              meet the highest security standards including FedRAMP, NIST, and
              CMMC, while providing the modern capabilities needed to serve
              citizens effectively. From classified systems to public services,
              we ensure your technology infrastructure is both secure and
              efficient.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-white">
              Government Solutions
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Secure, compliant, and scalable solutions for government agencies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover:shadow-lg transition-shadow bg-gray-900/50 backdrop-blur border-gray-800">
                  <div className="text-blue-500 mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-6">{feature.description}</p>
                  <div className="grid grid-cols-3 gap-4">
                    {feature.metrics.map((metric, i) => (
                      <div
                        key={i}
                        className="text-center p-3 bg-blue-900/30 rounded-lg"
                      >
                        <p className="text-blue-400 font-semibold text-sm">
                          {metric}
                        </p>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-white">
              Agency Success Stories
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Real results from our government partnerships.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.agency}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow bg-gray-900/50 backdrop-blur border-gray-800">
                  <div className="w-16 h-16 mb-6 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                    {study.agency
                      .split(" ")
                      .map((word) => word[0])
                      .join("")}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white text-center">
                    {study.agency}
                  </h3>
                  <p className="text-gray-400 mb-6 text-center">
                    {study.description}
                  </p>
                  <div className="space-y-2">
                    {study.results.map((result, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-green-400"
                      >
                        <CheckCircle className="w-4 h-4 flex-shrink-0" />
                        <span className="text-sm">{result}</span>
                      </div>
                    ))}
                  </div>
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
