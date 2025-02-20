import React from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import { motion } from "framer-motion";
import { Card } from "../../ui/card";
import { Building2, Globe, TrendingUp, Users, CheckCircle } from "lucide-react";
import UniverseLights from "../../UniverseLights";

const features = [
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Enterprise Data Platform",
    description:
      "Unified data platform processing 50TB+ daily with real-time analytics",
    metrics: [
      "50TB+ Daily Data",
      "80% Faster Processing",
      "$100M Annual Savings",
    ],
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Cloud Infrastructure",
    description: "Multi-region cloud architecture with 99.99% uptime SLA",
    metrics: ["99.99% Uptime", "30+ Global Regions", "40% Cost Reduction"],
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "AI/ML Solutions",
    description: "Enterprise-grade ML models for predictive analytics",
    metrics: [
      "95% Model Accuracy",
      "10x Faster Insights",
      "5M+ Predictions/Day",
    ],
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "24/7 Enterprise Support",
    description: "Dedicated support team with 15-minute response time",
    metrics: ["15min Response Time", "99.9% Resolution Rate", "24/7 Coverage"],
  },
];

const caseStudies = [
  {
    company: "Global Financial Institution",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=GFI",
    description:
      "Implemented a real-time fraud detection system processing 1M+ transactions per second",
    results: ["$200M saved annually", "99.99% accuracy", "<10ms latency"],
  },
  {
    company: "Fortune 100 Retailer",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=FR",
    description:
      "Built an ML-powered inventory optimization system across 2000+ stores",
    results: ["30% less stockouts", "25% inventory reduction", "$150M savings"],
  },
  {
    company: "Global Telecom Leader",
    logo: "https://api.dicebear.com/7.x/initials/svg?seed=GTL",
    description:
      "Developed a customer churn prediction platform for 100M+ subscribers",
    results: [
      "40% churn reduction",
      "85% prediction accuracy",
      "$300M revenue impact",
    ],
  },
];

export default function Fortune500() {
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
            Fortune 500 Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl"
          >
            Enterprise-grade solutions for industry leaders and global
            organizations.
          </motion.p>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-12 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-300 leading-relaxed">
              Our Fortune 500 solutions are designed to meet the complex needs
              of global enterprises. With a proven track record of delivering
              mission-critical systems, we help industry leaders leverage
              cutting-edge technology to maintain their competitive advantage.
              Our enterprise-grade solutions combine scalability, security, and
              innovation to drive digital transformation at scale.
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
              Enterprise Solutions
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Scalable, secure, and innovative solutions for Fortune 500
              companies.
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
              Success Stories
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Real results from our Fortune 500 partnerships.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow bg-gray-900/50 backdrop-blur border-gray-800">
                  <div className="w-16 h-16 mb-6 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                    {study.company
                      .split(" ")
                      .map((word) => word[0])
                      .join("")}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white text-center">
                    {study.company}
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
