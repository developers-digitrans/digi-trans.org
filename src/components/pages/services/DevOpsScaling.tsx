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
  Cloud,
  Server,
  Shield,
  Zap,
  BarChart3,
  Settings,
  CheckCircle,
  ArrowRight,
  Monitor,
  Lock,
  TrendingUp,
  Clock,
  AlertTriangle,
  Layers,
  Database,
  Network,
  Gauge,
  Target,
  Award,
  Users,
  DollarSign,
  Globe,
  Rocket,
  Activity,
} from "lucide-react";

const devopsServices = [
  {
    title: "Cloud Infrastructure",
    description: "Scalable, secure cloud infrastructure setup and management",
    icon: <Cloud className="w-8 h-8" />,
    features: [
      "AWS/Azure cloud architecture",
      "Auto-scaling configuration",
      "Load balancing setup",
      "CDN and caching strategies",
      "Multi-region deployment",
      "Disaster recovery planning",
    ],
    benefits: [
      "99.9% uptime guarantee",
      "Auto-scale to demand",
      "Global performance",
      "Cost optimization",
    ],
  },
  {
    title: "Container Orchestration",
    description: "Docker and Kubernetes for scalable application deployment",
    icon: <Layers className="w-8 h-8" />,
    features: [
      "Docker containerization",
      "Kubernetes orchestration",
      "Service mesh implementation",
      "Container security scanning",
      "Rolling deployments",
      "Resource optimization",
    ],
    benefits: [
      "Consistent deployments",
      "Easy scaling",
      "Improved reliability",
      "Resource efficiency",
    ],
  },
  {
    title: "CI/CD Pipeline",
    description: "Automated testing, building, and deployment workflows",
    icon: <Settings className="w-8 h-8" />,
    features: [
      "Automated testing pipelines",
      "Code quality checks",
      "Security vulnerability scanning",
      "Blue-green deployments",
      "Rollback capabilities",
      "Environment management",
    ],
    benefits: [
      "Faster deployments",
      "Reduced errors",
      "Quality assurance",
      "Developer productivity",
    ],
  },
  {
    title: "Monitoring & Alerting",
    description: "Comprehensive monitoring and proactive alerting systems",
    icon: <Monitor className="w-8 h-8" />,
    features: [
      "Application performance monitoring",
      "Infrastructure monitoring",
      "Log aggregation and analysis",
      "Custom alerting rules",
      "Performance dashboards",
      "Error tracking and debugging",
    ],
    benefits: [
      "Proactive issue detection",
      "Performance insights",
      "Reduced downtime",
      "Better user experience",
    ],
  },
  {
    title: "Security & Compliance",
    description: "Enterprise-grade security and compliance implementation",
    icon: <Shield className="w-8 h-8" />,
    features: [
      "Security best practices",
      "Compliance frameworks (SOC 2, GDPR)",
      "Vulnerability management",
      "Access control and IAM",
      "Data encryption",
      "Security monitoring",
    ],
    benefits: [
      "Enterprise-ready security",
      "Compliance certification",
      "Risk mitigation",
      "Customer trust",
    ],
  },
  {
    title: "Performance Optimization",
    description: "Continuous performance tuning and optimization",
    icon: <Zap className="w-8 h-8" />,
    features: [
      "Database performance tuning",
      "Application optimization",
      "Caching strategies",
      "CDN configuration",
      "Load testing",
      "Capacity planning",
    ],
    benefits: [
      "Faster response times",
      "Better user experience",
      "Cost efficiency",
      "Scalable performance",
    ],
  },
];

const scalingMilestones = [
  {
    stage: "Startup Scale",
    users: "100-1K",
    infrastructure: "Single server setup with basic monitoring",
    challenges: ["Initial deployment", "Basic monitoring", "Cost optimization"],
    solutions: [
      "Docker containerization",
      "Basic CI/CD pipeline", 
      "Simple monitoring setup",
      "Automated backups",
    ],
    icon: <Rocket className="w-6 h-6" />,
  },
  {
    stage: "Growth Scale", 
    users: "1K-10K",
    infrastructure: "Load-balanced multi-server architecture",
    challenges: ["Traffic spikes", "Database scaling", "Performance issues"],
    solutions: [
      "Load balancing setup",
      "Database optimization",
      "Caching implementation",
      "Auto-scaling groups",
    ],
    icon: <TrendingUp className="w-6 h-6" />,
  },
  {
    stage: "Enterprise Scale",
    users: "10K-100K",
    infrastructure: "Microservices with container orchestration",
    challenges: ["Complex deployments", "Service reliability", "Security compliance"],
    solutions: [
      "Kubernetes orchestration",
      "Service mesh deployment",
      "Advanced monitoring",
      "Security hardening",
    ],
    icon: <Award className="w-6 h-6" />,
  },
  {
    stage: "Global Scale",
    users: "100K+",
    infrastructure: "Multi-region, highly available architecture",
    challenges: ["Global latency", "Data consistency", "Compliance"],
    solutions: [
      "Multi-region deployment",
      "Global CDN setup",
      "Data replication",
      "Compliance frameworks",
    ],
    icon: <Globe className="w-6 h-6" />,
  },
];

const devopsProcess = [
  {
    phase: "Assessment & Planning",
    duration: "1 week",
    description: "Current infrastructure analysis and scaling strategy development",
    activities: [
      "Infrastructure audit",
      "Performance analysis",
      "Security assessment",
      "Scaling roadmap creation",
    ],
    deliverables: [
      "Infrastructure assessment report",
      "Scaling strategy document",
      "Security recommendations",
      "Implementation timeline",
    ],
    icon: <Target className="w-6 h-6" />,
  },
  {
    phase: "Infrastructure Setup",
    duration: "1-2 weeks",
    description: "Cloud infrastructure provisioning and configuration",
    activities: [
      "Cloud environment setup",
      "Network configuration",
      "Security group setup",
      "Database deployment",
    ],
    deliverables: [
      "Production infrastructure",
      "Network architecture",
      "Security configurations",
      "Database cluster",
    ],
    icon: <Cloud className="w-6 h-6" />,
  },
  {
    phase: "CI/CD Implementation",
    duration: "1-2 weeks",
    description: "Automated deployment pipeline setup and testing",
    activities: [
      "Pipeline configuration",
      "Testing automation",
      "Quality gates setup",
      "Deployment automation",
    ],
    deliverables: [
      "CI/CD pipelines",
      "Automated testing",
      "Quality controls",
      "Deployment scripts",
    ],
    icon: <Settings className="w-6 h-6" />,
  },
  {
    phase: "Monitoring Setup",
    duration: "1 week",
    description: "Comprehensive monitoring and alerting implementation",
    activities: [
      "Monitoring tools setup",
      "Custom dashboards",
      "Alerting rules",
      "Log aggregation",
    ],
    deliverables: [
      "Monitoring dashboards",
      "Alert configurations",
      "Log analysis setup",
      "Performance metrics",
    ],
    icon: <Monitor className="w-6 h-6" />,
  },
  {
    phase: "Optimization & Handover",
    duration: "1 week",
    description: "Performance optimization and team training",
    activities: [
      "Performance tuning",
      "Cost optimization",
      "Team training",
      "Documentation",
    ],
    deliverables: [
      "Optimized infrastructure",
      "Cost analysis report",
      "Training materials",
      "Operations documentation",
    ],
    icon: <Zap className="w-6 h-6" />,
  },
];

const successStories = [
  {
    company: "TechFlow SaaS",
    challenge: "Manual deployments causing downtime and scaling issues",
    solution: "Implemented Kubernetes with automated CI/CD and monitoring",
    results: [
      "Zero-downtime deployments",
      "50% faster deployment cycles",
      "99.9% uptime achievement",
      "60% reduction in operational costs",
    ],
    metrics: {
      uptime: "99.9%",
      deployment: "10x faster",
      cost: "60% savings",
      scaling: "Auto-scale",
    },
    quote: "The DevOps transformation enabled us to scale seamlessly from 100 to 10,000 users without any infrastructure issues.",
    engineer: "Sarah Chen, DevOps Lead",
    logo: "/images/1.svg",
  },
  {
    company: "DataSync Pro",
    challenge: "Performance bottlenecks and manual scaling processes",
    solution: "Cloud-native architecture with auto-scaling and performance monitoring",
    results: [
      "300% performance improvement",
      "Automated scaling to 50K users",
      "Real-time performance insights",
      "Proactive issue resolution",
    ],
    metrics: {
      uptime: "99.8%",
      deployment: "5x faster",
      cost: "40% savings",
      scaling: "Auto-scale",
    },
    quote: "Our infrastructure now handles traffic spikes automatically, allowing our team to focus on product development.",
    engineer: "Mike Rodriguez, CTO",
    logo: "/images/2.svg",
  },
  {
    company: "MedCare Connect",
    challenge: "HIPAA compliance and security requirements for healthcare data",
    solution: "Enterprise-grade security with compliance automation and monitoring",
    results: [
      "HIPAA compliance certification",
      "SOC 2 Type II compliance",
      "Zero security incidents",
      "Automated compliance reporting",
    ],
    metrics: {
      uptime: "99.95%",
      deployment: "8x faster",
      cost: "30% savings",
      scaling: "Auto-scale",
    },
    quote: "The security implementation exceeded our compliance requirements and gave our healthcare clients complete confidence.",
    engineer: "Dr. Lisa Wang, CISO",
    logo: "/images/3.svg",
  },
];

const guarantees = [
  "99.9% uptime SLA",
  "Automated disaster recovery",
  "Security best practices",
  "Performance monitoring",
  "24/7 support during migration",
  "Cost optimization strategies",
  "Scalability planning",
  "Compliance assistance",
];

export default function DevOpsScaling() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="DevOps & Scaling Services | Cloud Infrastructure & Automation"
        description="Professional DevOps and scaling services for SaaS applications. AWS, Kubernetes, CI/CD automation, monitoring, and security. 99.9% uptime guarantee."
        keywords={[
          "DevOps services",
          "cloud infrastructure",
          "AWS deployment",
          "Kubernetes",
          "CI/CD automation",
          "application scaling",
          "infrastructure monitoring",
          "cloud security",
        ]}
        canonicalUrl="/services/devops-scaling"
      />
      
      <ProgressBar />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-950 via-orange-950 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/10 to-red-900/10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block mb-4 px-4 py-2 bg-orange-900/30 rounded-full border border-orange-500/30">
              <span className="text-orange-300 text-sm font-medium">DevOps & Scaling Service</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-pink-400">
              Scale Without Limits
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Professional DevOps and infrastructure scaling that grows with your SaaS business. 
              From startup to enterprise scale with 99.9% uptime and automated operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-6 text-lg"
              >
                Scale Your Infrastructure
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-orange-500/30 text-orange-300 hover:bg-orange-900/20 px-8 py-6 text-lg"
              >
                View Scaling Examples
              </Button>
            </div>

            {/* Key Metrics */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-orange-400" />
                <span>99.9% Uptime SLA</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-orange-400" />
                <span>Auto-Scaling Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-orange-400" />
                <span>24/7 Monitoring</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-orange-400" />
                <span>Enterprise Security</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scaling Milestones */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400">
              Scaling Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We support your growth at every stage, from startup to enterprise scale
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {scalingMilestones.map((milestone, index) => (
                <motion.div
                  key={milestone.stage}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-orange-600/50 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-600/30 to-red-600/30 rounded-full flex items-center justify-center mb-6 border border-orange-500/30">
                      <div className="text-orange-400">
                        {milestone.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">{milestone.stage}</h3>
                    <div className="text-orange-400 font-semibold mb-4">{milestone.users} users</div>
                    
                    <p className="text-gray-300 text-sm mb-4">{milestone.infrastructure}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-white font-medium mb-2 text-sm">Challenges</h4>
                      <div className="space-y-1">
                        {milestone.challenges.map((challenge, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <AlertTriangle className="w-3 h-3 text-yellow-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-400 text-xs">{challenge}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-white font-medium mb-2 text-sm">Solutions</h4>
                      <div className="space-y-1">
                        {milestone.solutions.map((solution, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300 text-xs">{solution}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DevOps Services */}
      <section className="py-24 bg-gradient-to-br from-gray-950 via-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400">
              Complete DevOps Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end DevOps solutions that ensure reliability, security, and scalability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {devopsServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-orange-600/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-600/30 to-red-600/30 rounded-full flex items-center justify-center mb-6 border border-orange-500/30">
                    <div className="text-orange-400">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-3 text-sm">Features</h4>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-3 h-3 text-orange-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-700/30 pt-4">
                    <h4 className="text-white font-medium mb-2 text-sm">Benefits</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="text-orange-300 text-xs bg-orange-900/20 px-2 py-1 rounded border border-orange-500/20">
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

      {/* DevOps Process */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400">
              DevOps Implementation Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A systematic approach to transforming your infrastructure and operations
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {devopsProcess.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="mb-12"
              >
                <Card className="p-8 bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-orange-600/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row items-start gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-600/30 to-red-600/30 rounded-full flex items-center justify-center border border-orange-500/30">
                        <div className="text-orange-400">
                          {phase.icon}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{phase.phase}</h3>
                          <div className="text-orange-400 font-semibold text-sm">{phase.duration}</div>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed">{phase.description}</p>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-white font-semibold mb-3">Key Activities</h4>
                          <div className="space-y-2">
                            {phase.activities.map((activity, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <Settings className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
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
      <section className="py-24 bg-gradient-to-br from-gray-950 via-orange-950 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400">
              Scaling Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real transformations achieved through professional DevOps implementation
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
                <Card className="p-8 h-full bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-orange-600/50 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <img src={story.logo} alt={story.company} className="w-12 h-12 rounded-lg" />
                    <div>
                      <h3 className="text-xl font-bold text-white">{story.company}</h3>
                      <p className="text-orange-400 text-sm">DevOps Transformation</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">Challenge</h4>
                    <p className="text-gray-300 text-sm mb-4">{story.challenge}</p>
                    
                    <h4 className="text-white font-semibold mb-2">Solution</h4>
                    <p className="text-gray-300 text-sm mb-4">{story.solution}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="text-center p-3 bg-gray-800/50 rounded-lg border border-orange-800/30">
                      <div className="text-lg font-bold text-green-400">{story.metrics.uptime}</div>
                      <div className="text-gray-400 text-xs">Uptime</div>
                    </div>
                    <div className="text-center p-3 bg-gray-800/50 rounded-lg border border-orange-800/30">
                      <div className="text-lg font-bold text-blue-400">{story.metrics.deployment}</div>
                      <div className="text-gray-400 text-xs">Deployments</div>
                    </div>
                    <div className="text-center p-3 bg-gray-800/50 rounded-lg border border-orange-800/30">
                      <div className="text-lg font-bold text-purple-400">{story.metrics.cost}</div>
                      <div className="text-gray-400 text-xs">Cost</div>
                    </div>
                    <div className="text-center p-3 bg-gray-800/50 rounded-lg border border-orange-800/30">
                      <div className="text-lg font-bold text-orange-400">{story.metrics.scaling}</div>
                      <div className="text-gray-400 text-xs">Scaling</div>
                    </div>
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

                  <blockquote className="text-gray-300 italic mb-4 border-l-2 border-orange-500/30 pl-4">
                    "{story.quote}"
                  </blockquote>

                  <p className="text-orange-300 text-sm font-medium">{story.engineer}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DevOps Guarantees */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400">
                DevOps Guarantees
              </h2>
              <p className="text-xl text-gray-300">
                Service level agreements and guarantees for your DevOps transformation
              </p>
            </div>

            <Card className="p-8 bg-gray-900/50 backdrop-blur-sm border border-blue-800/30">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {guarantees.map((guarantee, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                    <span className="text-gray-300">{guarantee}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-blue-800/30 pt-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Scale Your Infrastructure?</h3>
                <p className="text-gray-300 mb-6">
                  Transform your operations with professional DevOps implementation and 24/7 support
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-6 text-lg"
                  >
                    Start DevOps Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-orange-500/30 text-orange-300 hover:bg-orange-900/20 px-8 py-6 text-lg"
                  >
                    Schedule Infrastructure Audit
                  </Button>
                </div>
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