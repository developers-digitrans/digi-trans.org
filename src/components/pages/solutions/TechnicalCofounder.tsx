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
  Users,
  Brain,
  Target,
  Rocket,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Code2,
  BarChart3,
  Shield,
  Zap,
  Clock,
  Award,
  DollarSign,
  TrendingUp,
  User,
  Globe,
  Database,
  Settings,
  Star,
  MessageSquare,
  Calendar,
  Phone,
  Video,
} from "lucide-react";

const technicalServices = [
  {
    title: "Strategic Technical Leadership",
    description: "High-level technical strategy and architecture guidance",
    icon: <Brain className="w-8 h-8" />,
    features: [
      "Technology stack selection and validation",
      "System architecture design and review",
      "Technical roadmap planning",
      "Risk assessment and mitigation",
      "Scalability planning and optimization",
      "Security and compliance strategy",
    ],
    timeCommitment: "10-15 hours/week",
    deliverables: [
      "Technical strategy document",
      "Architecture blueprints", 
      "Technology recommendations",
      "Risk assessment report",
    ],
  },
  {
    title: "Product Development Oversight",
    description: "End-to-end product development leadership and guidance",
    icon: <Rocket className="w-8 h-8" />,
    features: [
      "MVP planning and development oversight",
      "Feature prioritization and roadmap management",
      "Development team leadership and mentoring",
      "Quality assurance and code review",
      "Performance optimization and monitoring",
      "Launch strategy and execution",
    ],
    timeCommitment: "15-25 hours/week",
    deliverables: [
      "Product development plan",
      "Quality assurance processes",
      "Performance metrics dashboard",
      "Launch readiness checklist",
    ],
  },
  {
    title: "Team Building & Management",
    description: "Building and managing high-performing technical teams",
    icon: <Users className="w-8 h-8" />,
    features: [
      "Technical hiring and recruitment strategy",
      "Team structure and role definition",
      "Development process optimization",
      "Performance management and growth",
      "Technical mentoring and training",
      "Culture and best practices establishment",
    ],
    timeCommitment: "20-30 hours/week",
    deliverables: [
      "Hiring strategy and job descriptions",
      "Team structure recommendations",
      "Development processes documentation",
      "Performance review frameworks",
    ],
  },
  {
    title: "Investor & Stakeholder Relations",
    description: "Technical communication with investors and stakeholders",
    icon: <BarChart3 className="w-8 h-8" />,
    features: [
      "Technical due diligence preparation",
      "Investor pitch technical content",
      "Stakeholder technical reporting",
      "Technology IP and asset valuation",
      "Compliance and security documentation",
      "Technical risk communication",
    ],
    timeCommitment: "5-10 hours/week",
    deliverables: [
      "Due diligence documentation",
      "Technical pitch materials",
      "Stakeholder reports",
      "IP documentation",
    ],
  },
];

const engagementModels = [
  {
    title: "Part-Time CTO",
    commitment: "10-20 hours/week",
    duration: "3-12 months",
    ideal: "Early-stage startups needing strategic technical guidance",
    price: "€3,500-€7,000/month",
    features: [
      "Strategic technical planning",
      "Architecture design and review",
      "Technology stack decisions",
      "Weekly strategic sessions",
      "On-demand technical consultation",
    ],
    icon: <Target className="w-6 h-6" />,
    color: "blue",
  },
  {
    title: "Interim CTO",
    commitment: "30-40 hours/week",
    duration: "6-18 months",
    ideal: "Scale-ups building teams and products rapidly",
    price: "€8,000-€15,000/month",
    features: [
      "Full-time technical leadership",
      "Team building and management",
      "Product development oversight",
      "Investor relations support",
      "Recruitment and hiring",
    ],
    icon: <Rocket className="w-6 h-6" />,
    color: "purple",
  },
  {
    title: "Technical Advisor",
    commitment: "5-10 hours/week",
    duration: "6-24 months",
    ideal: "Established companies needing specialized expertise",
    price: "€2,000-€4,000/month",
    features: [
      "Strategic technical advice",
      "Technology evaluation",
      "Architecture review",
      "Monthly strategic meetings",
      "Ad-hoc consultation",
    ],
    icon: <Lightbulb className="w-6 h-6" />,
    color: "green",
  },
];

const successStories = [
  {
    company: "FinanceFlow",
    founder: "Alex Chen, CEO",
    challenge: "Non-technical founder needed technical leadership for fintech startup",
    solution: "6-month Interim CTO engagement with full product development oversight",
    results: [
      "Built MVP in 4 months with regulatory compliance",
      "Assembled team of 8 senior developers",
      "Secured €5M Series A funding",
      "Achieved €2M ARR in first year",
      "Successfully transitioned to permanent CTO",
    ],
    metrics: {
      funding: "€5M",
      team: "8 devs",
      timeline: "4 months",
      arr: "€2M",
    },
    quote: "Having a technical co-founder from day one was game-changing. They built not just our product, but our entire technical foundation and team.",
    industry: "Fintech",
    logo: "/images/4.svg",
  },
  {
    company: "EduTech Pro",
    founder: "Dr. Sarah Martinez, Founder",
    challenge: "Academic with revolutionary EdTech idea but no technical background",
    solution: "12-month Part-time CTO engagement with strategic oversight",
    results: [
      "Validated technical feasibility of AI-powered platform",
      "Designed scalable architecture for 100K+ students",
      "Recruited and managed remote development team",
      "Launched beta with 5,000 active users",
      "Prepared technical documentation for Series A",
    ],
    metrics: {
      funding: "€3M",
      team: "12 devs",
      timeline: "8 months",
      users: "5K",
    },
    quote: "They transformed my academic research into a scalable SaaS platform. Their technical guidance was invaluable throughout our journey.",
    industry: "Education Technology",
    logo: "/images/5.svg",
  },
  {
    company: "HealthConnect",
    founder: "Dr. Michael Thompson, CEO",
    challenge: "Healthcare startup needed HIPAA-compliant platform development",
    solution: "9-month Interim CTO with healthcare compliance expertise",
    results: [
      "Designed HIPAA-compliant architecture",
      "Implemented end-to-end encryption and security",
      "Built telehealth platform serving 10K+ patients",
      "Achieved SOC 2 Type II certification",
      "Scaled team from 2 to 15 developers",
    ],
    metrics: {
      funding: "€4M",
      team: "15 devs",
      timeline: "6 months",
      patients: "10K+",
    },
    quote: "Their healthcare technology expertise and compliance knowledge saved us months of development and regulatory challenges.",
    industry: "Healthcare Technology",
    logo: "/images/6.svg",
  },
];

const cofounderProcess = [
  {
    phase: "Discovery & Assessment",
    duration: "1 week",
    description: "Understanding your vision, challenges, and technical requirements",
    activities: [
      "Business model and vision analysis",
      "Technical requirements assessment",
      "Current technology stack evaluation",
      "Team and resource assessment",
      "Market and competitive analysis",
    ],
    deliverables: [
      "Technical assessment report",
      "Engagement recommendation",
      "Resource requirements plan",
      "Timeline and milestone roadmap",
    ],
    icon: <Target className="w-6 h-6" />,
  },
  {
    phase: "Strategic Planning",
    duration: "1-2 weeks",
    description: "Developing comprehensive technical and product strategy",
    activities: [
      "Technical roadmap development",
      "Architecture design and planning",
      "Technology stack finalization",
      "Team structure and hiring plan",
      "Budget and resource allocation",
    ],
    deliverables: [
      "Technical strategy document",
      "Product development roadmap",
      "Architecture blueprints",
      "Hiring and team plan",
    ],
    icon: <Brain className="w-6 h-6" />,
  },
  {
    phase: "Implementation & Oversight",
    duration: "Ongoing",
    description: "Active leadership and hands-on technical guidance",
    activities: [
      "Development team leadership",
      "Code review and quality assurance",
      "Sprint planning and management",
      "Technical decision making",
      "Stakeholder communication",
    ],
    deliverables: [
      "Regular progress reports",
      "Quality metrics dashboard",
      "Stakeholder updates",
      "Technical documentation",
    ],
    icon: <Rocket className="w-6 h-6" />,
  },
  {
    phase: "Growth & Transition",
    duration: "3-6 months",
    description: "Scaling the team and preparing for transition",
    activities: [
      "Team scaling and development",
      "Process optimization and automation",
      "Knowledge transfer and documentation",
      "Permanent CTO recruitment support",
      "Smooth transition planning",
    ],
    deliverables: [
      "Scalable team structure",
      "Process documentation",
      "Knowledge transfer materials",
      "Transition plan",
    ],
    icon: <TrendingUp className="w-6 h-6" />,
  },
];

const whyChooseUs = [
  {
    title: "Proven Track Record",
    description: "15+ successful CTO engagements with €50M+ total funding raised",
    icon: <Award className="w-6 h-6" />,
  },
  {
    title: "Industry Expertise",
    description: "Deep experience across fintech, healthtech, edtech, and enterprise SaaS",
    icon: <Brain className="w-6 h-6" />,
  },
  {
    title: "Full-Stack Leadership",
    description: "Technical strategy, team building, product development, and investor relations",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Flexible Engagement",
    description: "Part-time, interim, or advisory roles tailored to your specific needs",
    icon: <Settings className="w-6 h-6" />,
  },
  {
    title: "Rapid Impact",
    description: "Immediate technical leadership with measurable results in 30-60 days",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: "Smooth Transition",
    description: "Comprehensive handover and support for permanent CTO recruitment",
    icon: <CheckCircle className="w-6 h-6" />,
  },
];

export default function TechnicalCofounder() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="Technical Co-founder Services | On-Demand CTO for Startups"
        description="Expert technical co-founder and CTO services for non-technical founders. Strategic leadership, team building, and product development. €50M+ funding success."
        keywords={[
          "technical co-founder",
          "CTO as a service",
          "startup CTO",
          "technical leadership",
          "interim CTO",
          "part-time CTO",
          "technical advisor",
          "startup technical strategy",
        ]}
        canonicalUrl="/solutions/technical-cofounder"
      />
      
      <ProgressBar />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-950 via-indigo-950 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/10 to-purple-900/10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block mb-4 px-4 py-2 bg-indigo-900/30 rounded-full border border-indigo-500/30">
              <span className="text-indigo-300 text-sm font-medium">Technical Co-founder Solution</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400">
              Your Technical Co-founder, On-Demand
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Expert technical leadership for non-technical founders. From strategic planning to team building 
              and product development. 15+ successful engagements with €50M+ total funding raised.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-6 text-lg"
              >
                Find Your Technical Co-founder
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-indigo-500/30 text-indigo-300 hover:bg-indigo-900/20 px-8 py-6 text-lg"
              >
                Schedule Strategy Call
              </Button>
            </div>

            {/* Key Benefits */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-indigo-400" />
                <span>15+ Successful CTOs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-indigo-400" />
                <span>€50M+ Funding Raised</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-indigo-400" />
                <span>Flexible Engagement</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-indigo-400" />
                <span>Immediate Impact</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              Flexible Engagement Models
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the technical leadership model that fits your stage and needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {engagementModels.map((model, index) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-indigo-600/50 transition-all duration-300 relative">

                  
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-600/30 to-purple-600/30 rounded-full flex items-center justify-center mb-6 border border-indigo-500/30">
                    <div className="text-indigo-400">
                      {model.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{model.title}</h3>
                  <p className="text-gray-300 mb-6">{model.ideal}</p>
                  
                  <div className="mb-6 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Commitment:</span>
                      <span className="text-indigo-400 font-medium">{model.commitment}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Duration:</span>
                      <span className="text-indigo-400 font-medium">{model.duration}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Investment:</span>
                      <span className="text-green-400 font-bold">{model.price}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {model.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                  >
                    Choose {model.title}
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Services */}
      <section className="py-24 bg-gradient-to-br from-gray-950 via-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              Complete Technical Leadership
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technical services that cover every aspect of your startup's technical needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {technicalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-indigo-600/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-600/30 to-purple-600/30 rounded-full flex items-center justify-center mb-6 border border-indigo-500/30">
                    <div className="text-indigo-400">
                      {service.icon}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    <span className="text-indigo-400 text-sm font-medium bg-indigo-900/20 px-3 py-1 rounded-full border border-indigo-500/20">
                      {service.timeCommitment}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Services</h4>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-700/30 pt-4">
                    <h4 className="text-white font-semibold mb-2">Deliverables</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.deliverables.map((deliverable, idx) => (
                        <div key={idx} className="text-purple-300 text-xs bg-purple-900/20 px-2 py-1 rounded border border-purple-500/20">
                          {deliverable}
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real transformations achieved through expert technical co-founder partnerships
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {successStories.map((story, index) => (
              <motion.div
                key={story.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-indigo-600/50 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <img src={story.logo} alt={story.company} className="w-12 h-12 rounded-lg" />
                    <div>
                      <h3 className="text-xl font-bold text-white">{story.company}</h3>
                      <p className="text-indigo-400 text-sm">{story.industry}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="text-center p-3 bg-gray-800/50 rounded-lg border border-indigo-800/30">
                      <div className="text-lg font-bold text-green-400">{story.metrics.funding}</div>
                      <div className="text-gray-400 text-xs">Funding</div>
                    </div>
                    <div className="text-center p-3 bg-gray-800/50 rounded-lg border border-indigo-800/30">
                      <div className="text-lg font-bold text-blue-400">{story.metrics.team}</div>
                      <div className="text-gray-400 text-xs">Team</div>
                    </div>
                    <div className="text-center p-3 bg-gray-800/50 rounded-lg border border-indigo-800/30">
                      <div className="text-lg font-bold text-purple-400">{story.metrics.timeline}</div>
                      <div className="text-gray-400 text-xs">Timeline</div>
                    </div>
                    <div className="text-center p-3 bg-gray-800/50 rounded-lg border border-indigo-800/30">
                      <div className="text-lg font-bold text-orange-400">{story.metrics.arr || story.metrics.users}</div>
                      <div className="text-gray-400 text-xs">{story.metrics.arr ? 'ARR' : 'Users'}</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">Challenge</h4>
                    <p className="text-gray-300 text-sm mb-4">{story.challenge}</p>
                    
                    <h4 className="text-white font-semibold mb-2">Solution</h4>
                    <p className="text-gray-300 text-sm mb-4">{story.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Results</h4>
                    <div className="space-y-2">
                      {story.results.map((result, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <blockquote className="text-gray-300 italic mb-4 border-l-2 border-indigo-500/30 pl-4">
                    "{story.quote}"
                  </blockquote>

                  <p className="text-indigo-300 text-sm font-medium">{story.founder}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-gradient-to-br from-gray-950 via-indigo-950 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              Our Co-founder Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven approach to becoming your technical partner and driving success
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {cofounderProcess.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="mb-12"
              >
                <Card className="p-8 bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-indigo-600/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row items-start gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-indigo-600/30 to-purple-600/30 rounded-full flex items-center justify-center border border-indigo-500/30">
                        <div className="text-indigo-400">
                          {phase.icon}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{phase.phase}</h3>
                          <div className="text-indigo-400 font-semibold text-sm">{phase.duration}</div>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed">{phase.description}</p>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-white font-semibold mb-3">Key Activities</h4>
                          <div className="space-y-2">
                            {phase.activities.map((activity, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <Brain className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
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

      {/* Why Choose Us */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              Why Choose Our Technical Leadership
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The expertise and experience you need to build and scale your startup successfully
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-indigo-600/50 transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-600/30 to-purple-600/30 rounded-lg flex items-center justify-center mb-4 mx-auto border border-indigo-500/30">
                    <div className="text-indigo-400">
                      {reason.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                  <p className="text-gray-300">{reason.description}</p>
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
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Find Your Technical Co-founder?</h3>
              <p className="text-xl text-gray-300 mb-8">
                Join 15+ successful founders who accelerated their startups with our technical leadership
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-6 text-lg"
                >
                  Schedule Strategy Call
                  <Calendar className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-indigo-500/30 text-indigo-300 hover:bg-indigo-900/20 px-8 py-6 text-lg"
                >
                  View Case Studies
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