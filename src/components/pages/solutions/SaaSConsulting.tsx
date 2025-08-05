import { motion } from "framer-motion";
import { Card } from "../../ui/card";
import { Button } from "../../ui/button";
import { ProgressBar } from "../../ui/progress-bar";
import { BackToTop } from "../../ui/back-to-top";
import { StickyCTA } from "../../ui/sticky-cta";
import SEO from "../../SEO";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import {
  Target,
  TrendingUp,
  Users,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  BarChart3,
  DollarSign,
  Clock,
  Award,
  Brain,
  Rocket,
  Settings,
  Globe,
  Shield,
  Zap,
  Star,
  MessageSquare,
  Calendar,
  FileText,
  PieChart,
  Gauge,
} from "lucide-react";

const consultingServices = [
  {
    title: "SaaS Strategy Development",
    description: "Comprehensive strategic planning for SaaS success",
    icon: <Target className="w-8 h-8" />,
    duration: "2-4 weeks",
    investment: "€5,000-€15,000",
    features: [
      "Market analysis and opportunity assessment",
      "Business model design and validation",
      "Competitive positioning strategy",
      "Go-to-market planning and execution",
      "Pricing strategy optimization",
      "Revenue model development",
    ],
    deliverables: [
      "Strategic roadmap document",
      "Market analysis report",
      "Business model canvas",
      "GTM execution plan",
    ],
    idealFor: "Early-stage startups and companies pivoting to SaaS",
  },
  {
    title: "Product-Market Fit Optimization",
    description: "Achieve and validate product-market fit faster",
    icon: <Rocket className="w-8 h-8" />,
    duration: "3-6 weeks",
    investment: "€7,500-€20,000",
    features: [
      "User research and feedback analysis",
      "Feature prioritization framework",
      "MVP optimization and iteration",
      "Customer validation methodology",
      "Metrics and KPI optimization",
      "Product roadmap refinement",
    ],
    deliverables: [
      "PMF assessment report",
      "User research insights",
      "Feature prioritization matrix",
      "Product roadmap v2.0",
    ],
    idealFor: "Startups struggling to find PMF or validate market demand",
  },
  {
    title: "Scaling Strategy & Operations",
    description: "Operational excellence for rapid SaaS growth",
    icon: <TrendingUp className="w-8 h-8" />,
    duration: "4-8 weeks",
    investment: "€10,000-€30,000",
    features: [
      "Operational efficiency optimization",
      "Team structure and hiring strategy",
      "Process automation and workflows",
      "Customer success framework",
      "Revenue operations setup",
      "Performance monitoring systems",
    ],
    deliverables: [
      "Scaling strategy document",
      "Operations playbook",
      "Hiring and team plan",
      "Customer success framework",
    ],
    idealFor: "Growing SaaS companies ready to scale operations",
  },
  {
    title: "Funding & Investment Readiness",
    description: "Prepare for successful funding rounds",
    icon: <DollarSign className="w-8 h-8" />,
    duration: "3-5 weeks",
    investment: "€8,000-€25,000",
    features: [
      "Financial model development",
      "Pitch deck creation and optimization",
      "Due diligence preparation",
      "Investor targeting and strategy",
      "Valuation analysis and benchmarking",
      "Fundraising process optimization",
    ],
    deliverables: [
      "Financial projections model",
      "Investor-ready pitch deck",
      "Due diligence documentation",
      "Fundraising strategy plan",
    ],
    idealFor: "SaaS companies preparing for Series A, B, or beyond",
  },
  {
    title: "Technical Architecture Review",
    description: "Optimize your SaaS technical foundation",
    icon: <Settings className="w-8 h-8" />,
    duration: "2-4 weeks",
    investment: "€6,000-€18,000",
    features: [
      "Architecture assessment and audit",
      "Scalability and performance analysis",
      "Security and compliance review",
      "Technology stack optimization",
      "Infrastructure cost optimization",
      "Technical debt assessment",
    ],
    deliverables: [
      "Technical audit report",
      "Architecture recommendations",
      "Security assessment",
      "Optimization roadmap",
    ],
    idealFor: "SaaS companies facing technical challenges or preparing to scale",
  },
  {
    title: "International Market Expansion",
    description: "Successfully expand your SaaS globally",
    icon: <Globe className="w-8 h-8" />,
    duration: "4-6 weeks",
    investment: "€12,000-€35,000",
    features: [
      "International market analysis",
      "Localization strategy development",
      "Regulatory and compliance planning",
      "Pricing strategy for new markets",
      "Partnership and distribution strategy",
      "Launch strategy and execution",
    ],
    deliverables: [
      "Market expansion strategy",
      "Localization roadmap",
      "Compliance checklist",
      "Launch execution plan",
    ],
    idealFor: "Successful SaaS companies expanding to new markets",
  },
];

const consultingProcess = [
  {
    phase: "Discovery & Assessment",
    duration: "1 week",
    description: "Deep dive into your business, challenges, and objectives",
    activities: [
      "Stakeholder interviews and workshops",
      "Business model and strategy analysis",
      "Market and competitive landscape review",
      "Current performance metrics analysis",
      "Challenge identification and prioritization",
    ],
    deliverables: [
      "Current state assessment",
      "Challenge and opportunity matrix",
      "Stakeholder insights report",
      "Project scope refinement",
    ],
    icon: <Target className="w-6 h-6" />,
  },
  {
    phase: "Strategic Analysis",
    duration: "1-2 weeks",
    description: "In-depth analysis and strategic framework development",
    activities: [
      "Market research and analysis",
      "Competitive intelligence gathering",
      "Customer research and validation",
      "Financial and operational analysis",
      "Strategic framework development",
    ],
    deliverables: [
      "Market analysis report",
      "Competitive landscape map",
      "Customer insights document",
      "Strategic framework outline",
    ],
    icon: <Brain className="w-6 h-6" />,
  },
  {
    phase: "Strategy Development",
    duration: "1-3 weeks",
    description: "Comprehensive strategy creation and optimization",
    activities: [
      "Strategic roadmap development",
      "Implementation planning",
      "Risk assessment and mitigation",
      "Success metrics definition",
      "Stakeholder alignment sessions",
    ],
    deliverables: [
      "Complete strategic plan",
      "Implementation roadmap",
      "Risk mitigation strategies",
      "Success measurement framework",
    ],
    icon: <Lightbulb className="w-6 h-6" />,
  },
  {
    phase: "Implementation Support",
    duration: "2-4 weeks",
    description: "Hands-on support for strategy execution",
    activities: [
      "Implementation guidance and oversight",
      "Team training and enablement",
      "Process optimization and refinement",
      "Progress monitoring and adjustment",
      "Ongoing strategic consultation",
    ],
    deliverables: [
      "Implementation progress reports",
      "Team training materials",
      "Process documentation",
      "Performance dashboards",
    ],
    icon: <Rocket className="w-6 h-6" />,
  },
];

const successMetrics = [
  {
    metric: "€200M+",
    description: "Total funding raised by clients",
    icon: <DollarSign className="w-6 h-6" />,
  },
  {
    metric: "95%",
    description: "Strategy implementation success rate",
    icon: <Target className="w-6 h-6" />,
  },
  {
    metric: "3.2x",
    description: "Average revenue growth achieved",
    icon: <TrendingUp className="w-6 h-6" />,
  },
  {
    metric: "40+",
    description: "Successful SaaS consultations completed",
    icon: <Award className="w-6 h-6" />,
  },
];

const caseStudies = [
  {
    company: "CloudOps Solutions",
    industry: "DevOps & Infrastructure",
    challenge: "Struggled to scale beyond €1M ARR despite strong product-market fit",
    solution: "Comprehensive scaling strategy with operations optimization",
    results: [
      "Scaled from €1M to €5M ARR in 18 months",
      "Improved operational efficiency by 60%",
      "Reduced customer churn by 40%",
      "Successfully raised €15M Series B",
      "Expanded to 3 new European markets",
    ],
    metrics: {
      growth: "400% ARR",
      efficiency: "60% ops",
      funding: "€15M",
      expansion: "3 markets",
    },
    quote: "Their scaling strategy transformed our operations and enabled us to achieve sustainable, profitable growth across multiple markets.",
    executive: "Anna Kowalski, CEO & Co-founder",
    logo: "/images/7.svg",
  },
  {
    company: "EduFlow Platform",
    industry: "Education Technology",
    challenge: "Great product but unclear go-to-market strategy and pricing model",
    solution: "Complete SaaS strategy development with GTM optimization",
    results: [
      "Defined clear value proposition and positioning",
      "Optimized pricing strategy (increased ARPU by 85%)",
      "Launched successful B2B enterprise offering",
      "Achieved product-market fit in 6 months",
      "Secured €8M Series A funding",
    ],
    metrics: {
      growth: "85% ARPU",
      timeline: "6 months PMF",
      funding: "€8M",
      expansion: "B2B launch",
    },
    quote: "The strategic guidance was invaluable. They helped us find our true north and build a sustainable, scalable business model.",
    executive: "David Chen, Founder & CTO",
    logo: "/images/8.svg",
  },
  {
    company: "RetailTech Pro",
    industry: "Retail Technology",
    challenge: "Technical debt and architecture issues limiting growth potential",
    solution: "Technical architecture review with scaling roadmap",
    results: [
      "Redesigned architecture for 10x scale",
      "Reduced infrastructure costs by 45%",
      "Improved application performance by 300%",
      "Achieved SOC 2 compliance certification",
      "Enabled international market expansion",
    ],
    metrics: {
      scale: "10x capacity",
      cost: "45% savings",
      performance: "300% faster",
      compliance: "SOC 2",
    },
    quote: "Their technical expertise saved us from a potential architecture crisis and positioned us for massive scale.",
    executive: "Sarah Williams, VP Engineering",
    logo: "/images/9.svg",
  },
];

const consultingApproaches = [
  {
    title: "Data-Driven Insights",
    description: "All recommendations backed by comprehensive data analysis and market research",
    icon: <BarChart3 className="w-6 h-6" />,
  },
  {
    title: "Industry Expertise",
    description: "Deep SaaS knowledge across verticals: fintech, healthtech, edtech, enterprise",
    icon: <Brain className="w-6 h-6" />,
  },
  {
    title: "Hands-On Implementation",
    description: "Not just strategy - we provide hands-on support during execution",
    icon: <Settings className="w-6 h-6" />,
  },
  {
    title: "Proven Methodologies",
    description: "Battle-tested frameworks and processes from 40+ successful engagements",
    icon: <Award className="w-6 h-6" />,
  },
  {
    title: "Rapid Results",
    description: "Immediate impact with measurable results within 30-60 days",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: "Long-term Partnership",
    description: "Ongoing support and advisory relationship beyond initial engagement",
    icon: <Users className="w-6 h-6" />,
  },
];

export default function SaaSConsulting() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="SaaS Consulting Services | Strategic Growth & Scaling Expertise"
        description="Expert SaaS consulting for strategy, scaling, and growth. €200M+ funding raised for clients. 95% implementation success rate. Proven methodologies."
        keywords={[
          "SaaS consulting",
          "SaaS strategy",
          "startup consulting",
          "growth strategy",
          "product market fit",
          "SaaS scaling",
          "business strategy",
          "startup advisor",
        ]}
        canonicalUrl="/solutions/saas-consulting"
      />
      
      <ProgressBar />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-950 via-emerald-950 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/10 to-teal-900/10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block mb-4 px-4 py-2 bg-emerald-900/30 rounded-full border border-emerald-500/30">
              <span className="text-emerald-300 text-sm font-medium">SaaS Consulting Solution</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-400">
              Strategic SaaS Consulting
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Expert consulting for SaaS strategy, growth, and scaling. Data-driven insights and proven methodologies 
              that have generated €200M+ in client funding and 3.2x average revenue growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-6 text-lg"
              >
                Start Strategy Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-emerald-500/30 text-emerald-300 hover:bg-emerald-900/20 px-8 py-6 text-lg"
              >
                View Success Stories
              </Button>
            </div>

            {/* Success Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {successMetrics.map((metric, index) => (
                <motion.div
                  key={metric.metric}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-emerald-600/30 to-teal-600/30 rounded-full flex items-center justify-center border border-emerald-500/30">
                    <div className="text-emerald-400">
                      {metric.icon}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-emerald-400 mb-1">{metric.metric}</div>
                  <div className="text-gray-400 text-sm">{metric.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Consulting Services */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">
              Comprehensive SaaS Consulting
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Strategic consulting services that address every aspect of SaaS growth and success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {consultingServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-emerald-600/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-600/30 to-teal-600/30 rounded-full flex items-center justify-center mb-6 border border-emerald-500/30">
                    <div className="text-emerald-400">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="flex justify-between items-center mb-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">{service.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-green-400" />
                      <span className="text-green-400 font-medium">{service.investment}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Services</h4>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">Deliverables</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.deliverables.map((deliverable, idx) => (
                        <div key={idx} className="text-teal-300 text-xs bg-teal-900/20 px-3 py-1 rounded border border-teal-500/20">
                          {deliverable}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-700/30 pt-4">
                    <div className="text-gray-400 text-sm mb-3">Ideal for:</div>
                    <div className="text-emerald-300 text-sm">{service.idealFor}</div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Process */}
      <section className="py-24 bg-gradient-to-br from-gray-950 via-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">
              Our Consulting Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that delivers measurable results and strategic clarity
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {consultingProcess.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="mb-12"
              >
                <Card className="p-8 bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-emerald-600/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row items-start gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald-600/30 to-teal-600/30 rounded-full flex items-center justify-center border border-emerald-500/30">
                        <div className="text-emerald-400">
                          {phase.icon}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{phase.phase}</h3>
                          <div className="text-emerald-400 font-semibold text-sm">{phase.duration}</div>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed">{phase.description}</p>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-white font-semibold mb-3">Key Activities</h4>
                          <div className="space-y-2">
                            {phase.activities.map((activity, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <Brain className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-300 text-sm">{activity}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-white font-semibold mb-3">Deliverables</h4>
                          <div className="space-y-2">
                            {phase.deliverables.map((deliverable, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-300 text-sm">{deliverable}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">
              Consulting Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real transformations achieved through strategic SaaS consulting
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-emerald-600/50 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <img src={study.logo} alt={study.company} className="w-12 h-12 rounded-lg" />
                    <div>
                      <h3 className="text-xl font-bold text-white">{study.company}</h3>
                      <p className="text-emerald-400 text-sm">{study.industry}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="text-center p-3 bg-gray-800/50 rounded-lg border border-emerald-800/30">
                      <div className="text-lg font-bold text-green-400">{study.metrics.growth}</div>
                      <div className="text-gray-400 text-xs">Growth</div>
                    </div>
                    <div className="text-center p-3 bg-gray-800/50 rounded-lg border border-emerald-800/30">
                      <div className="text-lg font-bold text-blue-400">{study.metrics.efficiency || study.metrics.timeline}</div>
                      <div className="text-gray-400 text-xs">{study.metrics.efficiency ? 'Efficiency' : 'Timeline'}</div>
                    </div>
                    <div className="text-center p-3 bg-gray-800/50 rounded-lg border border-emerald-800/30">
                      <div className="text-lg font-bold text-purple-400">{study.metrics.funding}</div>
                      <div className="text-gray-400 text-xs">Funding</div>
                    </div>
                    <div className="text-center p-3 bg-gray-800/50 rounded-lg border border-emerald-800/30">
                      <div className="text-lg font-bold text-orange-400">{study.metrics.expansion}</div>
                      <div className="text-gray-400 text-xs">Expansion</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">Challenge</h4>
                    <p className="text-gray-300 text-sm mb-4">{study.challenge}</p>
                    
                    <h4 className="text-white font-semibold mb-2">Solution</h4>
                    <p className="text-gray-300 text-sm mb-4">{study.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Results</h4>
                    <div className="space-y-2">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <blockquote className="text-gray-300 italic mb-4 border-l-2 border-emerald-500/30 pl-4">
                    "{study.quote}"
                  </blockquote>

                  <p className="text-emerald-300 text-sm font-medium">{study.executive}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-gradient-to-br from-gray-950 via-emerald-950 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">
              Our Consulting Approach
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proven methodologies and frameworks that drive measurable SaaS success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {consultingApproaches.map((approach, index) => (
              <motion.div
                key={approach.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-emerald-600/50 transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-600/30 to-teal-600/30 rounded-lg flex items-center justify-center mb-4 mx-auto border border-emerald-500/30">
                    <div className="text-emerald-400">
                      {approach.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{approach.title}</h3>
                  <p className="text-gray-300">{approach.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-8 bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 text-center">
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Accelerate Your SaaS Growth?</h3>
              <p className="text-xl text-gray-300 mb-8">
                Join 40+ successful SaaS companies that achieved breakthrough results with our strategic guidance
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-6 text-lg"
                >
                  Schedule Strategy Session
                  <Calendar className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-emerald-500/30 text-emerald-300 hover:bg-emerald-900/20 px-8 py-6 text-lg"
                >
                  Download Case Studies
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
      <BackToTop />
      <StickyCTA />
    </div>
  );
}