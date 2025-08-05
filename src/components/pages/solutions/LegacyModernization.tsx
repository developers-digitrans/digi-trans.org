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
  RefreshCw,
  Database,
  Cloud,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  Code2,
  Server,
  Settings,
  Target,
  TrendingUp,
  Clock,
  DollarSign,
  Award,
  Users,
  AlertTriangle,
  Gauge,
  Lock,
  Layers,
  Globe,
  BarChart3,
  Rocket,
  Brain,
} from "lucide-react";

const modernizationServices = [
  {
    title: "Legacy Assessment & Planning",
    description: "Comprehensive analysis and modernization roadmap development",
    icon: <Target className="w-8 h-8" />,
    duration: "2-4 weeks",
    complexity: "Medium",
    features: [
      "Legacy system audit and analysis",
      "Technical debt assessment",
      "Performance and security evaluation",
      "Modernization strategy development",
      "Risk assessment and mitigation planning",
      "ROI and cost-benefit analysis",
    ],
    deliverables: [
      "Legacy assessment report",
      "Modernization roadmap",
      "Risk mitigation strategy",
      "Budget and timeline estimates",
    ],
    benefits: [
      "Clear modernization path",
      "Risk identification",
      "Cost optimization",
      "Strategic planning",
    ],
  },
  {
    title: "Cloud Migration & Infrastructure",
    description: "Migrate legacy systems to modern cloud infrastructure",
    icon: <Cloud className="w-8 h-8" />,
    duration: "6-16 weeks",
    complexity: "High",
    features: [
      "Cloud architecture design",
      "Infrastructure as Code (IaC) implementation",
      "Container orchestration setup",
      "Auto-scaling and load balancing",
      "Disaster recovery planning",
      "Security and compliance migration",
    ],
    deliverables: [
      "Cloud infrastructure",
      "Migration documentation",
      "Monitoring and alerting",
      "Backup and recovery systems",
    ],
    benefits: [
      "99.9% uptime guarantee",
      "Scalable infrastructure",
      "Cost optimization",
      "Enhanced security",
    ],
  },
  {
    title: "Application Modernization",
    description: "Transform legacy applications into modern, scalable solutions",
    icon: <Code2 className="w-8 h-8" />,
    duration: "8-24 weeks",
    complexity: "High",
    features: [
      "Legacy code analysis and refactoring",
      "Modern framework migration",
      "API development and integration",
      "Database modernization",
      "User interface redesign",
      "Performance optimization",
    ],
    deliverables: [
      "Modernized applications",
      "New API endpoints",
      "Updated user interfaces",
      "Performance benchmarks",
    ],
    benefits: [
      "Improved performance",
      "Better user experience",
      "Easier maintenance",
      "Future-proof architecture",
    ],
  },
  {
    title: "Database Modernization",
    description: "Upgrade and optimize legacy database systems",
    icon: <Database className="w-8 h-8" />,
    duration: "4-12 weeks",
    complexity: "High",
    features: [
      "Database assessment and optimization",
      "Schema modernization and normalization",
      "Data migration and validation",
      "Performance tuning and indexing",
      "Backup and recovery optimization",
      "Security enhancement implementation",
    ],
    deliverables: [
      "Modernized database schema",
      "Data migration scripts",
      "Performance optimization",
      "Backup and recovery procedures",
    ],
    benefits: [
      "Faster query performance",
      "Improved data integrity",
      "Enhanced security",
      "Reduced maintenance costs",
    ],
  },
  {
    title: "Security & Compliance Upgrade",
    description: "Implement modern security and compliance standards",
    icon: <Shield className="w-8 h-8" />,
    duration: "3-8 weeks",
    complexity: "Medium",
    features: [
      "Security vulnerability assessment",
      "Modern authentication implementation",
      "Data encryption and protection",
      "Compliance framework implementation",
      "Security monitoring and alerting",
      "Access control and audit logging",
    ],
    deliverables: [
      "Security audit report",
      "Compliance certification",
      "Security monitoring system",
      "Access control policies",
    ],
    benefits: [
      "Enterprise-grade security",
      "Compliance certification",
      "Risk mitigation",
      "Audit readiness",
    ],
  },
  {
    title: "DevOps & Automation",
    description: "Implement modern DevOps practices and automation",
    icon: <Settings className="w-8 h-8" />,
    duration: "4-10 weeks",
    complexity: "Medium",
    features: [
      "CI/CD pipeline implementation",
      "Infrastructure automation",
      "Monitoring and logging setup",
      "Automated testing frameworks",
      "Deployment automation",
      "Performance monitoring and alerting",
    ],
    deliverables: [
      "CI/CD pipelines",
      "Automated deployment",
      "Monitoring dashboards",
      "Testing frameworks",
    ],
    benefits: [
      "Faster deployments",
      "Reduced errors",
      "Improved reliability",
      "Better visibility",
    ],
  },
];

const modernizationApproaches = [
  {
    title: "Lift and Shift",
    description: "Quick migration with minimal changes",
    timeline: "2-6 weeks",
    complexity: "Low",
    cost: "€15,000-€50,000",
    pros: [
      "Fastest implementation",
      "Lowest initial cost",
      "Minimal business disruption",
      "Quick cloud benefits",
    ],
    cons: [
      "Limited optimization",
      "Technical debt remains",
      "Higher long-term costs",
      "Performance limitations",
    ],
    idealFor: "Quick cloud migration with limited budget",
    icon: <Rocket className="w-6 h-6" />,
  },
  {
    title: "Re-platform",
    description: "Cloud optimization with some modernization",
    timeline: "6-16 weeks",
    complexity: "Medium",
    cost: "€50,000-€150,000",
    pros: [
      "Cloud-native features",
      "Some optimization benefits",
      "Balanced approach",
      "Improved scalability",
    ],
    cons: [
      "Moderate complexity",
      "Some technical debt remains",
      "Longer timeline",
      "Higher initial cost",
    ],
    idealFor: "Balanced modernization with cloud benefits",
    icon: <Cloud className="w-6 h-6" />,
  },
  {
    title: "Re-architect",
    description: "Complete application redesign and modernization",
    timeline: "12-36 weeks",
    complexity: "High",
    cost: "€150,000-€500,000",
    pros: [
      "Maximum optimization",
      "Future-proof architecture",
      "Best performance",
      "Technical debt elimination",
    ],
    cons: [
      "Highest complexity",
      "Longest timeline",
      "Highest initial cost",
      "Business disruption risk",
    ],
    idealFor: "Complete transformation for maximum benefits",
    icon: <RefreshCw className="w-6 h-6" />,
  },
];

const modernizationProcess = [
  {
    phase: "Discovery & Assessment",
    duration: "1-2 weeks",
    description: "Comprehensive analysis of current systems and modernization requirements",
    activities: [
      "Legacy system inventory and documentation",
      "Technical architecture assessment",
      "Performance and security evaluation",
      "Business requirement analysis",
      "Stakeholder interviews and workshops",
    ],
    deliverables: [
      "Current state documentation",
      "Technical assessment report",
      "Modernization recommendations",
      "Project scope and timeline",
    ],
    icon: <Target className="w-6 h-6" />,
  },
  {
    phase: "Strategy & Planning",
    duration: "1-3 weeks",
    description: "Detailed modernization strategy and implementation planning",
    activities: [
      "Modernization approach selection",
      "Target architecture design",
      "Migration strategy development",
      "Risk assessment and mitigation planning",
      "Resource allocation and team planning",
    ],
    deliverables: [
      "Modernization strategy document",
      "Target architecture blueprints",
      "Migration plan and timeline",
      "Risk mitigation strategies",
    ],
    icon: <Brain className="w-6 h-6" />,
  },
  {
    phase: "Infrastructure Setup",
    duration: "2-6 weeks",
    description: "Modern infrastructure provisioning and configuration",
    activities: [
      "Cloud infrastructure provisioning",
      "Network and security configuration",
      "Development and staging environments",
      "CI/CD pipeline setup",
      "Monitoring and logging implementation",
    ],
    deliverables: [
      "Production cloud infrastructure",
      "Development environments",
      "CI/CD pipelines",
      "Monitoring and alerting systems",
    ],
    icon: <Cloud className="w-6 h-6" />,
  },
  {
    phase: "Migration & Modernization",
    duration: "4-20 weeks",
    description: "Systematic migration and modernization of applications and data",
    activities: [
      "Application migration and refactoring",
      "Database migration and optimization",
      "API development and integration",
      "Security implementation and testing",
      "Performance optimization and tuning",
    ],
    deliverables: [
      "Migrated and modernized applications",
      "Optimized database systems",
      "New API endpoints",
      "Security implementations",
    ],
    icon: <RefreshCw className="w-6 h-6" />,
  },
  {
    phase: "Testing & Optimization",
    duration: "2-4 weeks",
    description: "Comprehensive testing and performance optimization",
    activities: [
      "System integration testing",
      "Performance testing and optimization",
      "Security testing and validation",
      "User acceptance testing",
      "Load testing and scaling validation",
    ],
    deliverables: [
      "Test results and reports",
      "Performance benchmarks",
      "Security validation results",
      "Optimization recommendations",
    ],
    icon: <Gauge className="w-6 h-6" />,
  },
  {
    phase: "Deployment & Handover",
    duration: "1-2 weeks",
    description: "Production deployment and knowledge transfer",
    activities: [
      "Production deployment and cutover",
      "Team training and knowledge transfer",
      "Documentation and runbooks",
      "Support and monitoring setup",
      "Post-deployment optimization",
    ],
    deliverables: [
      "Live production systems",
      "Training materials and documentation",
      "Support procedures",
      "Monitoring and maintenance guides",
    ],
    icon: <CheckCircle className="w-6 h-6" />,
  },
];

const successStories = [
  {
    company: "RetailChain Solutions",
    industry: "Retail & E-commerce",
    challenge: "15-year-old monolithic system causing performance issues and security vulnerabilities",
    solution: "Complete re-architecture to cloud-native microservices with modern security",
    timeline: "16 weeks",
    investment: "€280,000",
    results: [
      "300% improvement in application performance",
      "99.9% uptime achievement (from 94% legacy)",
      "60% reduction in infrastructure costs",
      "Zero security incidents post-modernization",
      "50% faster feature development cycles",
    ],
    metrics: {
      performance: "300% faster",
      uptime: "99.9%",
      cost: "60% savings",
      security: "Zero incidents",
    },
    quote: "The modernization transformed our entire business. We can now compete effectively and scale without technical limitations.",
    executive: "Jennifer Walsh, CTO",
    logo: "/images/10.svg",
  },
  {
    company: "FinanceCore Banking",
    industry: "Financial Services",
    challenge: "Legacy mainframe system with compliance issues and integration difficulties",
    solution: "Phased modernization with API-first architecture and compliance frameworks",
    timeline: "24 weeks",
    investment: "€450,000",
    results: [
      "Achieved SOC 2 and PCI DSS compliance",
      "Implemented real-time transaction processing",
      "Reduced system maintenance costs by 70%",
      "Enabled mobile and web application development",
      "Improved customer satisfaction by 85%",
    ],
    metrics: {
      compliance: "SOC 2 + PCI",
      processing: "Real-time",
      cost: "70% reduction",
      satisfaction: "85% improvement",
    },
    quote: "Modernization enabled us to offer competitive digital banking services while maintaining the highest security standards.",
    executive: "Michael Torres, Head of Technology",
    logo: "/images/11.svg",
  },
  {
    company: "HealthSystem Connect",
    industry: "Healthcare Technology",
    challenge: "Outdated patient management system with HIPAA compliance and interoperability issues",
    solution: "HIPAA-compliant cloud migration with modern API integrations",
    timeline: "20 weeks",
    investment: "€320,000",
    results: [
      "Achieved HIPAA and HITECH compliance",
      "Implemented HL7 FHIR interoperability",
      "Reduced patient data access time by 90%",
      "Enabled telehealth platform integration",
      "Improved physician workflow efficiency by 65%",
    ],
    metrics: {
      compliance: "HIPAA + HITECH",
      access: "90% faster",
      efficiency: "65% improvement",
      integration: "HL7 FHIR",
    },
    quote: "The modernization revolutionized our patient care capabilities while ensuring complete regulatory compliance.",
    executive: "Dr. Rachel Kim, Chief Medical Officer",
    logo: "/images/12.svg",
  },
];

const modernizationBenefits = [
  {
    title: "Performance Improvement",
    description: "3-5x faster application performance and response times",
    icon: <Zap className="w-6 h-6" />,
    metrics: ["300% faster applications", "99.9% uptime", "50% reduced latency"],
  },
  {
    title: "Cost Optimization",
    description: "Significant reduction in infrastructure and maintenance costs",
    icon: <DollarSign className="w-6 h-6" />,
    metrics: ["40-70% cost reduction", "Lower maintenance", "Pay-as-you-scale"],
  },
  {
    title: "Enhanced Security",
    description: "Modern security frameworks and compliance standards",
    icon: <Shield className="w-6 h-6" />,
    metrics: ["Enterprise security", "Compliance ready", "Zero vulnerabilities"],
  },
  {
    title: "Improved Scalability",
    description: "Auto-scaling infrastructure that grows with your business",
    icon: <TrendingUp className="w-6 h-6" />,
    metrics: ["Auto-scaling", "Global availability", "Elastic resources"],
  },
  {
    title: "Faster Development",
    description: "Modern development practices and automation",
    icon: <Rocket className="w-6 h-6" />,
    metrics: ["50% faster delivery", "Automated testing", "CI/CD pipelines"],
  },
  {
    title: "Better User Experience",
    description: "Modern interfaces and improved application performance",
    icon: <Users className="w-6 h-6" />,
    metrics: ["Responsive design", "Faster load times", "Mobile-first approach"],
  },
];

export default function LegacyModernization() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="Legacy Modernization Services | Transform Legacy Systems to Modern SaaS"
        description="Expert legacy system modernization and cloud migration. Transform outdated systems into modern, scalable SaaS solutions. 300% performance improvement."
        keywords={[
          "legacy modernization",
          "legacy system migration",
          "cloud migration",
          "application modernization",
          "system transformation",
          "legacy to SaaS",
          "infrastructure modernization",
          "digital transformation",
        ]}
        canonicalUrl="/solutions/legacy-modernization"
      />
      
      <ProgressBar />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-950 via-amber-950 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 to-orange-900/10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block mb-4 px-4 py-2 bg-amber-900/30 rounded-full border border-amber-500/30">
              <span className="text-amber-300 text-sm font-medium">Legacy Modernization Solution</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-500 to-red-400">
              Transform Legacy to Modern SaaS
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Modernize outdated systems into scalable, secure, and high-performance SaaS solutions. 
              300% performance improvement, 60% cost reduction, and future-proof architecture.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-6 text-lg"
              >
                Start Modernization Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-amber-500/30 text-amber-300 hover:bg-amber-900/20 px-8 py-6 text-lg"
              >
                View Transformation Examples
              </Button>
            </div>

            {/* Key Benefits */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-400" />
                <span>300% Performance Boost</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-400" />
                <span>60% Cost Reduction</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-400" />
                <span>Modern Security</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-400" />
                <span>Future-Proof Architecture</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modernization Approaches */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400">
              Modernization Approaches
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the right modernization strategy based on your timeline, budget, and business goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {modernizationApproaches.map((approach, index) => (
              <motion.div
                key={approach.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-amber-600/50 transition-all duration-300 relative">
                  {index === 1 && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Recommended
                      </span>
                    </div>
                  )}
                  
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-600/30 to-orange-600/30 rounded-full flex items-center justify-center mb-6 border border-amber-500/30">
                    <div className="text-amber-400">
                      {approach.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{approach.title}</h3>
                  <p className="text-gray-300 mb-6">{approach.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div>
                      <span className="text-gray-400">Timeline:</span>
                      <div className="text-amber-400 font-medium">{approach.timeline}</div>
                    </div>
                    <div>
                      <span className="text-gray-400">Complexity:</span>
                      <div className="text-amber-400 font-medium">{approach.complexity}</div>
                    </div>
                    <div className="col-span-2">
                      <span className="text-gray-400">Investment:</span>
                      <div className="text-green-400 font-bold">{approach.cost}</div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Pros</h4>
                    <div className="space-y-2">
                      {approach.pros.map((pro, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm">{pro}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Considerations</h4>
                    <div className="space-y-2">
                      {approach.cons.map((con, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <AlertTriangle className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm">{con}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-700/30 pt-4">
                    <div className="text-gray-400 text-sm mb-2">Ideal for:</div>
                    <div className="text-amber-300 text-sm">{approach.idealFor}</div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modernization Services */}
      <section className="py-24 bg-gradient-to-br from-gray-950 via-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400">
              Complete Modernization Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end modernization services covering every aspect of your legacy transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {modernizationServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-amber-600/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-600/30 to-orange-600/30 rounded-full flex items-center justify-center mb-6 border border-amber-500/30">
                    <div className="text-amber-400">
                      {service.icon}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    <div className="flex flex-col items-end text-xs">
                      <span className="text-amber-400 font-medium bg-amber-900/20 px-2 py-1 rounded border border-amber-500/20">
                        {service.duration}
                      </span>
                      <span className="text-gray-400 mt-1">{service.complexity}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Services</h4>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">Deliverables</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.deliverables.map((deliverable, idx) => (
                        <div key={idx} className="text-orange-300 text-xs bg-orange-900/20 px-3 py-1 rounded border border-orange-500/20">
                          {deliverable}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-700/30 pt-4">
                    <h4 className="text-white font-semibold mb-2">Benefits</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="text-amber-300 text-xs bg-amber-900/20 px-2 py-1 rounded border border-amber-500/20">
                          {benefit}
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

      {/* Modernization Process */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400">
              Modernization Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven 6-phase approach to successful legacy system transformation
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {modernizationProcess.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="mb-12"
              >
                <Card className="p-8 bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-amber-600/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row items-start gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-600/30 to-orange-600/30 rounded-full flex items-center justify-center border border-amber-500/30">
                        <div className="text-amber-400">
                          {phase.icon}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{phase.phase}</h3>
                          <div className="text-amber-400 font-semibold text-sm">{phase.duration}</div>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed">{phase.description}</p>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-white font-semibold mb-3">Key Activities</h4>
                          <div className="space-y-2">
                            {phase.activities.map((activity, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <Settings className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
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

      {/* Success Stories */}
      <section className="py-24 bg-gradient-to-br from-gray-950 via-amber-950 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400">
              Transformation Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real legacy modernization projects that delivered exceptional results
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
                <Card className="p-8 h-full bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-amber-600/50 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <img src={story.logo} alt={story.company} className="w-12 h-12 rounded-lg" />
                    <div>
                      <h3 className="text-xl font-bold text-white">{story.company}</h3>
                      <p className="text-amber-400 text-sm">{story.industry}</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-amber-400" />
                      <span className="text-amber-400">{story.timeline}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-green-400" />
                      <span className="text-green-400 font-medium">{story.investment}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="text-center p-3 bg-gray-800/50 rounded-lg border border-amber-800/30">
                      <div className="text-lg font-bold text-green-400">{story.metrics.performance}</div>
                      <div className="text-gray-400 text-xs">Performance</div>
                    </div>
                    <div className="text-center p-3 bg-gray-800/50 rounded-lg border border-amber-800/30">
                      <div className="text-lg font-bold text-blue-400">{story.metrics.uptime}</div>
                      <div className="text-gray-400 text-xs">Uptime</div>
                    </div>
                    <div className="text-center p-3 bg-gray-800/50 rounded-lg border border-amber-800/30">
                      <div className="text-lg font-bold text-purple-400">{story.metrics.cost}</div>
                      <div className="text-gray-400 text-xs">Cost</div>
                    </div>
                    <div className="text-center p-3 bg-gray-800/50 rounded-lg border border-amber-800/30">
                      <div className="text-lg font-bold text-orange-400">{story.metrics.security}</div>
                      <div className="text-gray-400 text-xs">Security</div>
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

                  <blockquote className="text-gray-300 italic mb-4 border-l-2 border-amber-500/30 pl-4">
                    "{story.quote}"
                  </blockquote>

                  <p className="text-amber-300 text-sm font-medium">{story.executive}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modernization Benefits */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400">
              Modernization Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Measurable improvements across performance, cost, security, and user experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {modernizationBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-amber-600/50 transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-600/30 to-orange-600/30 rounded-lg flex items-center justify-center mb-4 mx-auto border border-amber-500/30">
                    <div className="text-amber-400">
                      {benefit.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 mb-4">{benefit.description}</p>
                  
                  <div className="space-y-2">
                    {benefit.metrics.map((metric, idx) => (
                      <div key={idx} className="text-amber-300 text-sm bg-amber-900/20 px-3 py-1 rounded border border-amber-500/20">
                        {metric}
                      </div>
                    ))}
                  </div>
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
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Modernize Your Legacy Systems?</h3>
              <p className="text-xl text-gray-300 mb-8">
                Transform outdated systems into modern, scalable solutions with our proven modernization expertise
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-6 text-lg"
                >
                  Start Free Assessment
                  <RefreshCw className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-amber-500/30 text-amber-300 hover:bg-amber-900/20 px-8 py-6 text-lg"
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