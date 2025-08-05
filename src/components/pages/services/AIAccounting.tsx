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
  Calculator,
  TrendingUp,
  Shield,
  CheckCircle,
  Zap,
  BarChart,
  DollarSign,
  Clock,
  AlertCircle,
  FileText,
} from "lucide-react";

const features = [
  {
    title: "Automated Transaction Categorization",
    description: "AI automatically categorizes transactions with 99.9% accuracy, eliminating manual data entry.",
    icon: <Bot className="w-8 h-8" />,
    benefit: "95% Time Savings"
  },
  {
    title: "Intelligent Anomaly Detection",
    description: "Advanced algorithms detect unusual patterns, potential fraud, and accounting errors in real-time.",
    icon: <AlertCircle className="w-8 h-8" />,
    benefit: "100% Error Detection"
  },
  {
    title: "Predictive Cash Flow",
    description: "Machine learning models forecast cash flow patterns with seasonal adjustments and trend analysis.",
    icon: <TrendingUp className="w-8 h-8" />,
    benefit: "90% Accuracy"
  },
  {
    title: "Smart Tax Optimization",
    description: "AI suggests tax-saving strategies and automatically tracks deductible expenses throughout the year.",
    icon: <Calculator className="w-8 h-8" />,
    benefit: "25% Tax Savings"
  },
  {
    title: "Real-time Financial Insights",
    description: "Generate comprehensive financial reports and KPI dashboards with natural language explanations.",
    icon: <BarChart className="w-8 h-8" />,
    benefit: "Instant Reporting"
  },
  {
    title: "Compliance Automation",
    description: "Automated compliance checks ensure adherence to accounting standards and regulatory requirements.",
    icon: <Shield className="w-8 h-8" />,
    benefit: "100% Compliance"
  }
];

const pricing = [
  {
    plan: "Startup",
    price: "€99",
    period: "/month",
    description: "Perfect for small businesses and startups",
    features: [
      "Up to 1,000 transactions/month",
      "Basic AI categorization",
      "Monthly financial reports",
      "Email support",
      "Bank reconciliation"
    ],
    cta: "Start Free Trial"
  },
  {
    plan: "Professional",
    price: "€299",
    period: "/month",
    description: "Ideal for growing businesses",
    features: [
      "Up to 10,000 transactions/month",
      "Advanced AI insights",
      "Real-time dashboards",
      "Priority support",
      "Multi-currency support",
      "API integrations",
      "Custom reports"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    plan: "Enterprise", 
    price: "Custom",
    period: "",
    description: "For large organizations with complex needs",
    features: [
      "Unlimited transactions",
      "White-label solution",
      "Dedicated account manager",
      "Custom AI models",
      "Advanced security",
      "SLA guarantees",
      "On-premise deployment"
    ],
    cta: "Contact Sales"
  }
];

const integrations = [
  "QuickBooks", "Xero", "Sage", "FreshBooks", "Wave", "Zoho Books",
  "Stripe", "PayPal", "Square", "Chase", "Bank of America", "Wells Fargo"
];

const testimonials = [
  {
    quote: "Our accounting team went from spending 20 hours a week on bookkeeping to just 2 hours. The AI is incredibly accurate and has eliminated virtually all manual data entry.",
    author: "Sarah Chen",
    title: "CFO at TechFlow",
    company: "SaaS Startup"
  },
  {
    quote: "The predictive cash flow feature helped us identify potential shortfalls 3 months in advance, allowing us to secure funding before it became critical.",
    author: "Marcus Weber",
    title: "Finance Director",
    company: "E-commerce Platform"
  },
  {
    quote: "We saved over €50K in taxes last year thanks to the AI's tax optimization suggestions. It pays for itself many times over.",
    author: "Elena Rodriguez",
    title: "Business Owner",
    company: "Digital Agency"
  }
];

export default function AIAccounting() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="AI-Assisted Accounting SaaS | Digitrans Smart Financial Management"
        description="Intelligent accounting software that automates bookkeeping, detects anomalies, and provides predictive financial insights. Transform your financial operations with AI."
        canonicalUrl="/services/ai-accounting"
        keywords={[
          "AI accounting software",
          "automated bookkeeping",
          "intelligent financial management",
          "AI accounting platform",
          "smart accounting SaaS",
          "automated financial reporting",
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
                  <Calculator className="w-10 h-10 text-green-400" />
                </div>
                <div>
                  <span className="text-sm text-green-400 font-medium">SaaS Platform</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-blue-900/30 text-blue-300 border border-blue-500/20">
                      AI-Powered
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-green-900/30 text-green-300 border border-green-500/20">
                      Accounting
                    </span>
                  </div>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                AI-Assisted Accounting SaaS
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Intelligent financial management platform that automates bookkeeping, detects anomalies, and provides predictive analytics for smarter business decisions.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3"
                  onClick={() => (window.location.href = "/contact")}
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3"
                >
                  Watch Demo
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
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=60"
                  alt="AI Accounting Dashboard"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Intelligent Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI-powered capabilities that transform how you manage your finances
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
                <Card className="p-6 h-full bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-green-500/50 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-4 right-4">
                    <span className="text-xs px-2 py-1 rounded-full bg-green-900/30 text-green-300 border border-green-500/20">
                      {feature.benefit}
                    </span>
                  </div>
                  
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

      {/* Testimonials Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from businesses transforming their financial operations with AI
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-green-500/50 transition-all duration-300">
                  <blockquote className="text-gray-300 mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center">
                      <span className="text-green-400 font-semibold">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">{testimonial.author}</p>
                      <p className="text-green-400 text-sm">{testimonial.title}</p>
                      <p className="text-gray-400 text-xs">{testimonial.company}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business size and requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.plan}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`p-8 h-full relative ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-green-900/20 via-gray-900/50 to-blue-900/20 border border-green-500/50' 
                    : 'bg-gray-900/50 backdrop-blur-sm border border-blue-800/30'
                } hover:border-green-500/50 transition-all duration-300`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-4xl font-bold text-green-400">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? 'bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700'
                        : 'bg-gray-800 hover:bg-gray-700'
                    } text-white py-3`}
                  >
                    {plan.cta}
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Seamless Integrations</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your existing accounting software and banking systems
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {integrations.map((integration, index) => (
              <motion.span
                key={integration}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-full text-gray-300 hover:border-green-500/50 hover:text-green-300 transition-all duration-300"
              >
                {integration}
              </motion.span>
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
              Transform Your Financial Operations Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses using AI to automate their accounting and gain predictive financial insights.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3 text-lg"
                onClick={() => (window.location.href = "/contact")}
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 text-lg"
              >
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}