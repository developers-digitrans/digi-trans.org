import React from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import { motion } from "framer-motion";
import { Card } from "../../ui/card";
import { Button } from "../../ui/button";
import SEO from "../../SEO";
import {
  ArrowRight,
  Cloud,
  Zap,
  DollarSign,
  BarChart,
  CheckCircle,
  Server,
  Monitor,
  TrendingUp,
  Shield,
  Clock,
  Cpu,
} from "lucide-react";

const features = [
  {
    title: "Smart Resource Allocation",
    description: "AI-powered algorithms optimize container resources in real-time based on actual usage patterns.",
    icon: <Cpu className="w-6 h-6" />
  },
  {
    title: "Cost Optimization", 
    description: "Reduce infrastructure costs by up to 60% through intelligent resource right-sizing and scheduling.",
    icon: <DollarSign className="w-6 h-6" />
  },
  {
    title: "Auto-Scaling Intelligence",
    description: "Predictive scaling that anticipates demand spikes and scales containers before performance degrades.",
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    title: "Performance Monitoring",
    description: "Real-time monitoring with detailed analytics and alerts for container performance optimization.",
    icon: <Monitor className="w-6 h-6" />
  },
  {
    title: "Multi-Cloud Support",
    description: "Works seamlessly across AWS, Azure, Google Cloud, and hybrid cloud environments.",
    icon: <Cloud className="w-6 h-6" />
  },
  {
    title: "Security Optimization",
    description: "Automated security scanning and compliance monitoring for all container deployments.",
    icon: <Shield className="w-6 h-6" />
  }
];

const benefits = [
  "Reduce infrastructure costs by up to 60%",
  "Improve application performance by 40%",
  "Eliminate resource waste and over-provisioning", 
  "Automate complex container orchestration",
  "Achieve 99.9% uptime with intelligent monitoring",
  "Scale efficiently during traffic spikes"
];

const metrics = [
  {
    label: "Cost Reduction",
    value: "60%",
    description: "Average infrastructure cost savings",
    color: "green"
  },
  {
    label: "Performance Gain",
    value: "40%",
    description: "Application response time improvement",
    color: "blue"
  },
  {
    label: "Deployment Speed",
    value: "5x",
    description: "Faster container deployment and scaling",
    color: "purple"
  },
  {
    label: "Resource Utilization",
    value: "85%",
    description: "Optimal resource utilization rate",
    color: "indigo"
  }
];

const useCases = [
  {
    title: "SaaS Platform Optimization",
    description: "Multi-tenant SaaS applications with varying load patterns benefit from intelligent resource allocation and cost optimization.",
    icon: <Server className="w-8 h-8" />
  },
  {
    title: "Microservices Architecture",
    description: "Complex microservices deployments require sophisticated orchestration and resource management for optimal performance.",
    icon: <Cloud className="w-8 h-8" />
  },
  {
    title: "Development & Testing",
    description: "Optimize development and testing environments with on-demand resource allocation and automated cleanup.",
    icon: <Monitor className="w-8 h-8" />
  },
  {
    title: "High-Traffic Applications",
    description: "Applications with unpredictable traffic patterns benefit from predictive scaling and performance optimization.",
    icon: <TrendingUp className="w-8 h-8" />
  }
];

export default function ContainerOptimizer() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="SaaS Container Optimizer | Digitrans Solutions Hub"
        description="Say goodbye to wasted resources, improve performance, and reduce infrastructure costs for your SaaS platform with our intelligent container optimization solution."
        canonicalUrl="/solutions-hub/container-optimizer"
        keywords={[
          "container optimization",
          "SaaS infrastructure",
          "cloud cost optimization",
          "container orchestration",
          "resource optimization",
          "cloud efficiency",
        ]}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-black via-gray-900 to-black relative">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-green-900/10 rounded-full filter blur-[120px] -z-10"></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-green-600/20 rounded-lg border border-green-500/30 p-3 flex items-center justify-center">
                  <Cloud className="w-10 h-10 text-green-400" />
                </div>
                <div>
                  <span className="text-sm text-green-400 font-medium">PoC</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-blue-900/30 text-blue-300 border border-blue-500/20">
                      Software products
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-green-900/30 text-green-300 border border-green-500/20">
                      SaaS
                    </span>
                  </div>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                SaaS Container Optimizer: Load more efficiency for less money
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Say goodbye to wasted resources, improve performance, and reduce infrastructure costs for your SaaS platform.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3"
                  onClick={() => (window.location.href = "/contact")}
                >
                  Request a demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3"
                >
                  View Cost Calculator
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-video rounded-xl overflow-hidden border border-green-500/20">
                <img
                  src="/assets/products/product3.webp"
                  alt="Container Optimizer Dashboard"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Proven Results</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real performance improvements and cost savings from our container optimization platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-green-500/50 transition-all duration-300">
                  <div className={`text-4xl font-bold mb-2 text-${metric.color}-400`}>
                    {metric.value}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{metric.label}</h3>
                  <p className="text-gray-300 text-sm">{metric.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Optimization Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced capabilities that maximize your container efficiency and minimize costs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-green-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-green-600/20 rounded-lg border border-green-500/30 p-2 flex items-center justify-center text-green-400 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Perfect For</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ideal scenarios where container optimization delivers maximum impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full bg-gradient-to-br from-green-900/20 via-gray-900/50 to-blue-900/20 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-green-600/20 rounded-lg border border-green-500/30 p-3 flex items-center justify-center text-green-400 flex-shrink-0">
                      {useCase.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                      <p className="text-gray-300">{useCase.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & ROI Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Transform Your Infrastructure Economics
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Stop overpaying for unused resources and start optimizing for performance and cost
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="p-8 bg-gradient-to-br from-green-900/20 via-gray-900/50 to-blue-900/20 border border-green-500/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <DollarSign className="w-6 h-6 text-green-400" />
                  Cost Savings Calculator
                </h3>
                
                <div className="space-y-6">
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <div className="text-sm text-gray-400 mb-1">Current Monthly Infrastructure Cost</div>
                    <div className="text-2xl font-bold text-white">$10,000</div>
                  </div>
                  
                  <div className="bg-green-900/30 rounded-lg p-4 border border-green-500/20">
                    <div className="text-sm text-green-400 mb-1">Optimized Monthly Cost</div>
                    <div className="text-2xl font-bold text-green-400">$4,000</div>
                  </div>
                  
                  <div className="bg-blue-900/30 rounded-lg p-4 border border-blue-500/20">
                    <div className="text-sm text-blue-400 mb-1">Annual Savings</div>
                    <div className="text-3xl font-bold text-blue-400">$72,000</div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-600">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">ROI in 3 months</span>
                      <span className="text-2xl font-bold text-yellow-400">400%</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Quick Implementation</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get started with container optimization in just a few steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Assessment", description: "Analyze your current container infrastructure and identify optimization opportunities" },
              { step: "2", title: "Integration", description: "Deploy our optimization agents with minimal disruption to existing workflows" },
              { step: "3", title: "Optimization", description: "AI-powered optimization begins immediately with real-time resource adjustments" },
              { step: "4", title: "Monitoring", description: "Continuous monitoring and reporting on cost savings and performance improvements" }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-green-500/50 transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center text-green-400 mx-auto mb-4 border border-green-500/30 text-xl font-bold">
                    {phase.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{phase.title}</h3>
                  <p className="text-gray-300 text-sm">{phase.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-green-900/20 via-gray-900 to-blue-900/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Saving on Infrastructure Costs Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of companies that have reduced their container costs by up to 60% while improving performance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3 text-lg"
                onClick={() => (window.location.href = "/contact")}
              >
                Start Free Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 text-lg"
              >
                Calculate Your Savings
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}