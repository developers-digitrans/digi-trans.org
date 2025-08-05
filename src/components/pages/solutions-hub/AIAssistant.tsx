import React from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import { motion } from "framer-motion";
import { Card } from "../../ui/card";
import { Button } from "../../ui/button";
import SEO from "../../SEO";
import {
  ArrowRight,
  Bot,
  Zap,
  Brain,
  BarChart,
  CheckCircle,
  MessageSquare,
  Users,
  TrendingUp,
  Clock,
  Shield,
  Globe,
} from "lucide-react";

const features = [
  {
    title: "Natural Language Processing",
    description: "Advanced NLP capabilities for understanding context, intent, and complex business queries.",
    icon: <MessageSquare className="w-6 h-6" />
  },
  {
    title: "Multi-Modal Integration", 
    description: "Seamlessly integrate with existing SaaS tools, databases, and business systems.",
    icon: <Globe className="w-6 h-6" />
  },
  {
    title: "Intelligent Automation",
    description: "Automate routine tasks, data analysis, and decision-making processes with AI-driven insights.",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "Real-time Analytics",
    description: "Get instant insights from your data with real-time analysis and predictive capabilities.",
    icon: <BarChart className="w-6 h-6" />
  },
  {
    title: "Scalable Architecture",
    description: "Cloud-native design that scales with your business from startup to enterprise.",
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade security with encryption, compliance, and audit trails for enterprise use.",
    icon: <Shield className="w-6 h-6" />
  }
];

const useCases = [
  {
    title: "Customer Support Automation",
    description: "Handle 80% of customer inquiries automatically with intelligent routing and response generation.",
    metrics: "80% reduction in support tickets"
  },
  {
    title: "Data Analysis & Reporting",
    description: "Generate comprehensive business reports and insights from complex datasets in natural language.",
    metrics: "10x faster report generation"
  },
  {
    title: "Process Optimization",
    description: "Identify bottlenecks, suggest improvements, and automate workflow optimizations.",
    metrics: "35% efficiency improvement"
  },
  {
    title: "Sales Intelligence",
    description: "Analyze sales patterns, predict opportunities, and provide actionable insights for growth.",
    metrics: "25% increase in conversion rates"
  }
];

const benefits = [
  "Reduce operational costs by up to 40%",
  "Improve response times by 85%",
  "Increase team productivity by 60%", 
  "Enhance customer satisfaction scores",
  "Streamline decision-making processes",
  "Scale operations without proportional staff increases"
];

const industries = [
  "SaaS & Technology",
  "Financial Services", 
  "Healthcare",
  "E-commerce & Retail",
  "Manufacturing",
  "Professional Services",
  "Education",
  "Real Estate"
];

export default function AIAssistant() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="AI-Powered Virtual Assistant | Digitrans Solutions Hub"
        description="Exceed your KPIs and streamline operations with our AI-powered virtual assistant optimized for SaaS businesses and enterprise operations."
        canonicalUrl="/solutions-hub/ai-assistant"
        keywords={[
          "AI assistant",
          "virtual assistant",
          "AI automation",
          "business AI",
          "intelligent automation",
          "SaaS AI",
        ]}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-black via-gray-900 to-black relative">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-blue-900/10 rounded-full filter blur-[120px] -z-10"></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-600/20 rounded-lg border border-blue-500/30 p-3 flex items-center justify-center">
                  <Bot className="w-10 h-10 text-blue-400" />
                </div>
                <div>
                  <span className="text-sm text-blue-400 font-medium">PoC</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-purple-900/30 text-purple-300 border border-purple-500/20">
                      Industry agnostic
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-blue-900/30 text-blue-300 border border-blue-500/20">
                      AI
                    </span>
                  </div>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                An AI-powered virtual assistant to optimize your operations
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Exceed your KPIs and streamline operations with the AI-powered Digitrans virtual assistant designed for modern SaaS businesses.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
                  onClick={() => (window.location.href = "/contact")}
                >
                  Request a demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3"
                >
                  View Use Cases
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-video rounded-xl overflow-hidden border border-blue-500/20">
                <img
                  src="/assets/products/product2.webp"
                  alt="AI Assistant Interface"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Intelligent Capabilities</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI features designed to transform your business operations
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
                <Card className="p-6 h-full bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg border border-blue-500/30 p-2 flex items-center justify-center text-blue-400 mb-4">
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
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Key Use Cases</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-world applications that deliver measurable business impact
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
                <Card className="p-8 h-full bg-gradient-to-br from-blue-900/20 via-gray-900/50 to-purple-900/20 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300 mb-6">{useCase.description}</p>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    <span className="text-green-400 font-semibold">{useCase.metrics}</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & ROI Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Measurable Business Impact
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Transform your operations with AI that delivers real ROI
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
              <Card className="p-8 bg-gradient-to-br from-blue-900/20 via-gray-900/50 to-purple-900/20 border border-blue-500/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <BarChart className="w-6 h-6 text-blue-400" />
                  ROI Calculator
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-300">Cost Reduction</span>
                      <span className="text-2xl font-bold text-green-400">40%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full w-2/5"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-300">Productivity Gain</span>
                      <span className="text-2xl font-bold text-blue-400">60%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full w-3/5"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-300">Response Time Improvement</span>
                      <span className="text-2xl font-bold text-purple-400">85%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full w-5/6"></div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-600">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300 font-medium">Typical ROI in 12 months</span>
                      <span className="text-3xl font-bold text-yellow-400">300%</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Industries We Serve</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI assistant adapts to diverse industry requirements and workflows
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-500/50 transition-all duration-300">
                  <Users className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <h3 className="text-white font-medium">{industry}</h3>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-16 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Implementation Timeline</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From proof of concept to full deployment in record time
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { phase: "Discovery & Setup", duration: "Week 1-2", description: "Requirements analysis and initial configuration" },
              { phase: "Custom Training", duration: "Week 3-4", description: "AI model training on your specific data and workflows" },
              { phase: "Integration", duration: "Week 5-6", description: "Connect with existing systems and tools" },
              { phase: "Deployment", duration: "Week 7-8", description: "Go live with monitoring and optimization" }
            ].map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-500/50 transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-400 mx-auto mb-4 border border-blue-500/30">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{phase.phase}</h3>
                  <p className="text-blue-400 font-medium mb-3">{phase.duration}</p>
                  <p className="text-gray-300 text-sm">{phase.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900/20 via-gray-900 to-purple-900/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to transform your operations with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              See how our AI assistant can optimize your specific business processes with a personalized demo.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg"
                onClick={() => (window.location.href = "/contact")}
              >
                Request a demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 text-lg"
              >
                Download Case Study
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}