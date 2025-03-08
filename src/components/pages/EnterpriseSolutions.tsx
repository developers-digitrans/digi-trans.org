import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import UniverseLights from "../UniverseLights";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { ProgressBar } from "../ui/progress-bar";
import { BackToTop } from "../ui/back-to-top";
import { StickyCTA } from "../ui/sticky-cta";
import {
  Building2,
  Network,
  Database,
  Settings,
  CheckCircle,
  ArrowRight,
  FileText,
  Users,
  TrendingUp,
  Layers,
  Code,
  Cloud,
  Shield,
  Zap,
  LineChart,
  BarChart,
} from "lucide-react";

const features = [
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Enterprise Architecture",
    description: "Scalable solutions designed for large organizations.",
  },
  {
    icon: <Network className="w-8 h-8" />,
    title: "System Integration",
    description: "Seamless integration with existing enterprise systems.",
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Data Management",
    description: "Enterprise-grade data storage and processing solutions.",
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Custom Solutions",
    description: "Tailored enterprise software for specific business needs.",
  },
];

export default function EnterpriseSolutions() {
  return (
    <div className="min-h-screen bg-black text-white">
      <ProgressBar />
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
            Enterprise Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl"
          >
            Comprehensive enterprise-grade solutions designed to address complex
            business challenges and drive digital transformation at scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg rounded-lg"
              onClick={() => (window.location.href = "/contact")}
            >
              Request a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-3 text-lg rounded-lg"
              onClick={() =>
                document
                  .getElementById("enterprise-challenges")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Enterprise Challenges Section */}
      <section
        id="enterprise-challenges"
        className="py-20 bg-black scroll-mt-20"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Enterprise Challenges in the Digital Age
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Large enterprises today face unprecedented challenges as they
              navigate digital transformation, market disruption, and evolving
              customer expectations. Traditional approaches to IT and business
              operations are often insufficient to address these challenges,
              requiring new strategies, technologies, and ways of working.
              According to research by McKinsey, only 16% of digital
              transformations successfully improve performance and equip
              companies for long-term changes, highlighting the complexity of
              enterprise-scale transformation.
            </p>

            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              One of the primary challenges enterprises face is the burden of
              legacy systems and technical debt. Many organizations operate
              hundreds or even thousands of applications, many of which were
              developed decades ago using outdated technologies and
              architectures. These systems often lack the flexibility,
              scalability, and integration capabilities needed to support modern
              digital business models. According to Gartner, by 2025, technical
              debt will consume more than 40% of current IT budgets, up from 20%
              in 2021, underscoring the growing impact of this challenge.
            </p>

            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Enterprises also struggle with organizational silos that impede
              collaboration, innovation, and agility. These silos—whether
              functional, geographical, or technological—create barriers to
              information sharing, slow decision-making processes, and hinder
              the end-to-end customer experience. Breaking down these silos
              requires not only technological solutions but also changes to
              organizational structures, processes, and culture.
            </p>

            <p className="text-xl text-gray-300 leading-relaxed">
              Data complexity presents another significant challenge for
              enterprises. The volume, variety, and velocity of data continue to
              grow exponentially, making it increasingly difficult to integrate,
              govern, and derive value from data assets. Many organizations
              struggle with data quality issues, inconsistent data definitions,
              and the inability to create a unified view of customers, products,
              and operations. According to IDC, by 2025, the global datasphere
              will grow to 175 zettabytes, and enterprises will need robust data
              management capabilities to harness this data effectively.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
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
                  <p className="text-gray-300">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Enterprise Solutions Approach */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Our Enterprise Solutions Approach
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              At Digitrans, we understand the unique challenges that large
              enterprises face in today's rapidly evolving business landscape.
              Our enterprise solutions are designed to address these challenges
              through a comprehensive approach that combines strategic
              consulting, technology expertise, and implementation capabilities.
              We work with you to develop and implement solutions that drive
              business value, enhance operational efficiency, and enable digital
              transformation at scale.
            </p>

            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Our approach to enterprise solutions is built on three key
              principles: business-driven technology decisions, architectural
              excellence, and sustainable transformation. We believe that
              technology investments should be guided by clear business
              objectives and measurable outcomes. Our solutions are architected
              for scalability, flexibility, and long-term sustainability,
              avoiding quick fixes that create future technical debt. And we
              recognize that successful transformation requires changes to
              people, processes, and technology, with a focus on building
              internal capabilities for ongoing evolution.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white mt-10">
              1. Discovery and Strategy
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              We begin by developing a deep understanding of your business
              objectives, challenges, and current technology landscape. This
              involves stakeholder interviews, process analysis, technology
              assessments, and market research to identify opportunities for
              improvement and innovation. Based on these insights, we work with
              you to develop a strategic roadmap that aligns technology
              investments with business priorities and defines a clear path for
              implementation.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Our strategy development process includes defining the business
              case for change, establishing key performance indicators (KPIs) to
              measure success, and identifying quick wins that can deliver early
              value while building momentum for larger transformation
              initiatives. We also help you develop a governance framework that
              ensures ongoing alignment between business and technology
              stakeholders and provides mechanisms for managing scope,
              resources, and risks throughout the implementation journey.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white">
              2. Solution Architecture and Design
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              With a clear strategy in place, we design enterprise solutions
              that address your specific business requirements while adhering to
              architectural best practices. Our solution architecture approach
              emphasizes modularity, scalability, and interoperability, enabling
              your organization to adapt to changing business needs and
              technology trends. We leverage reference architectures and design
              patterns that have been proven in enterprise environments, while
              tailoring the solution to your unique context.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Our design process includes defining functional and non-functional
              requirements, selecting appropriate technologies and platforms,
              designing integration patterns, and establishing security and
              compliance controls. We create detailed architecture
              documentation, including component diagrams, data models,
              integration specifications, and deployment topologies. Throughout
              the design phase, we conduct architecture reviews and validation
              sessions to ensure that the solution meets business requirements
              and technical standards.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white">
              3. Implementation and Delivery
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              We implement enterprise solutions using agile and iterative
              approaches that deliver value incrementally while managing risk.
              Our delivery methodology combines the structure and governance
              needed for enterprise projects with the flexibility and
              adaptability of agile practices. We establish cross-functional
              teams that bring together business and technology expertise,
              ensuring that solutions meet user needs and business requirements.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Our implementation approach includes continuous integration and
              delivery practices, automated testing, and regular stakeholder
              reviews to ensure quality and alignment. We implement robust
              project management processes that provide visibility into
              progress, risks, and issues, enabling timely decision-making and
              course corrections. Throughout the implementation phase, we focus
              on knowledge transfer and capability building, ensuring that your
              team has the skills and understanding needed to maintain and
              evolve the solution.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white">
              4. Transition and Adoption
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Successful enterprise solutions require effective transition and
              adoption strategies to ensure that users embrace new systems and
              processes. We help you develop and implement change management
              programs that address the human aspects of technology change,
              including communication, training, and organizational alignment.
              Our approach focuses on building understanding, capability, and
              commitment among stakeholders at all levels of the organization.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              We also provide comprehensive transition support, including data
              migration, cutover planning, hypercare, and operational readiness.
              Our transition approach emphasizes risk mitigation and business
              continuity, ensuring that critical business functions continue to
              operate smoothly during the transition period. We establish clear
              success criteria and metrics for the transition phase, providing
              objective measures of readiness and adoption.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white">
              5. Continuous Improvement and Evolution
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              Enterprise solutions are not static—they must evolve to address
              changing business needs, emerging technologies, and new
              opportunities. We help you establish mechanisms for continuous
              improvement and evolution, including performance monitoring, user
              feedback collection, and regular solution reviews. We work with
              you to develop a roadmap for future enhancements and extensions,
              ensuring that your investment continues to deliver value over
              time.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              Our continuous improvement approach includes establishing centers
              of excellence, communities of practice, and governance structures
              that support ongoing innovation and evolution. We help you
              implement metrics and analytics capabilities that provide insights
              into solution performance and usage, enabling data-driven
              decisions about future investments. We also provide ongoing
              advisory services to help you navigate technology trends and
              identify opportunities for further optimization and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Enterprise Solution Areas */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Enterprise Solution Areas
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Our enterprise solutions address a wide range of business and
              technology challenges across various domains. While each solution
              is tailored to your specific needs, our offerings fall into
              several key solution areas that leverage our expertise and proven
              approaches.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white">
              Enterprise Application Modernization
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Legacy applications often constrain business agility, increase
              operational costs, and limit innovation potential. Our application
              modernization solutions help you transform your application
              portfolio to support current and future business needs. We assess
              your application landscape, identify modernization candidates, and
              develop tailored strategies for each application—whether that
              involves rehosting, replatforming, refactoring, replacing, or
              retiring.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Our modernization approach emphasizes business value, risk
              management, and sustainable architecture. We help you implement
              modern application architectures such as microservices,
              containerization, and cloud-native designs that enhance
              flexibility, scalability, and maintainability. We also focus on
              modernizing the user experience, implementing responsive designs,
              intuitive interfaces, and omnichannel capabilities that meet the
              expectations of today's users.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white">
              Enterprise Integration
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              In today's complex enterprise environments, effective integration
              is essential for connecting applications, data, and processes
              across the organization and beyond. Our enterprise integration
              solutions help you implement robust, scalable, and secure
              integration architectures that enable seamless information flow
              and process orchestration. We design and implement integration
              patterns such as API-led connectivity, event-driven architecture,
              and hybrid integration platforms.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Our integration approach emphasizes reusability, governance, and
              business agility. We help you implement API management platforms,
              integration hubs, and service meshes that provide the foundation
              for your integration strategy. We also focus on implementing
              effective integration governance, including API lifecycle
              management, security controls, and monitoring capabilities that
              ensure the reliability and security of your integration ecosystem.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white">
              Enterprise Data Management
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Data is a strategic asset that can drive competitive advantage
              through improved decision-making, enhanced customer experiences,
              and operational optimization. Our enterprise data management
              solutions help you develop and implement comprehensive strategies
              for managing, governing, and deriving value from your data assets.
              We design and implement modern data architectures that address the
              volume, variety, and velocity of today's data landscape.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Our data management approach emphasizes data quality, governance,
              and business value. We help you implement data platforms that
              integrate data from multiple sources, enable real-time processing,
              and support advanced analytics and AI/ML workloads. We also focus
              on implementing effective data governance, including data quality
              management, metadata management, and data security controls that
              ensure the trustworthiness and compliance of your data assets.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white">
              Enterprise Cloud Transformation
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Cloud computing offers unprecedented opportunities for enhancing
              agility, scalability, and innovation while optimizing costs and
              operational efficiency. Our enterprise cloud transformation
              solutions help you develop and implement comprehensive cloud
              strategies that align with your business objectives and technology
              landscape. We assess your current environment, define your target
              state, and develop a roadmap for cloud adoption and migration.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Our cloud transformation approach emphasizes business value, risk
              management, and operational excellence. We help you implement
              cloud operating models, governance frameworks, and security
              controls that ensure effective cloud management and compliance. We
              also focus on building cloud capabilities within your
              organization, including cloud architecture, DevOps practices, and
              cloud financial management that enable sustainable cloud adoption
              and optimization.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white">
              Enterprise Security and Compliance
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              In today's threat landscape, robust security and compliance
              capabilities are essential for protecting your business,
              customers, and reputation. Our enterprise security and compliance
              solutions help you develop and implement comprehensive strategies
              for managing security risks and meeting regulatory requirements.
              We assess your current security posture, identify vulnerabilities
              and compliance gaps, and develop tailored strategies for enhancing
              your security and compliance capabilities.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              Our security and compliance approach emphasizes risk-based
              decision making, defense-in-depth, and operational integration. We
              help you implement security architectures, controls, and processes
              that protect your critical assets while enabling business
              operations. We also focus on building security and compliance
              capabilities within your organization, including security
              governance, incident response, and compliance management that
              enable sustainable security and compliance programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Industry-Specific Enterprise Solutions
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              While our enterprise solutions share common principles and
              approaches, we recognize that different industries face unique
              challenges and opportunities. Our industry-specific solutions
              combine our enterprise expertise with deep domain knowledge to
              address the specific needs of key industries.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white mt-10">
              Financial Services
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Financial institutions face unique challenges related to
              regulatory compliance, security, legacy modernization, and digital
              disruption. Our enterprise solutions for financial services help
              banks, insurers, and investment firms modernize their technology
              landscapes, enhance customer experiences, and optimize operations
              while managing risk and compliance. Key focus areas include core
              banking modernization, payment systems transformation, wealth
              management platforms, and regulatory technology (RegTech)
              solutions that address the specific requirements of financial
              institutions.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white">
              Healthcare
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Healthcare organizations face complex challenges related to
              interoperability, patient experience, clinical workflows, and
              regulatory compliance. Our enterprise solutions for healthcare
              help providers, payers, and life sciences companies modernize
              their technology landscapes, enhance care delivery, and optimize
              operations while ensuring compliance with healthcare regulations.
              Key focus areas include electronic health record (EHR)
              optimization, healthcare interoperability, population health
              management, and digital health platforms that address the specific
              requirements of healthcare organizations.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white">
              Manufacturing
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Manufacturing companies face evolving challenges related to supply
              chain resilience, operational efficiency, product innovation, and
              digital transformation. Our enterprise solutions for manufacturing
              help manufacturers modernize their technology landscapes, enhance
              operational visibility, and optimize processes while enabling
              innovation and agility. Key focus areas include manufacturing
              execution systems (MES), supply chain visibility platforms,
              product lifecycle management (PLM), and Industry 4.0 initiatives
              that address the specific requirements of manufacturing
              organizations.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white">
              Retail and Consumer Goods
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              Retail and consumer goods companies face intense competition,
              changing consumer expectations, and supply chain challenges. Our
              enterprise solutions for retail help retailers and consumer goods
              companies modernize their technology landscapes, enhance customer
              experiences, and optimize operations while enabling innovation and
              agility. Key focus areas include omnichannel commerce platforms,
              supply chain optimization, customer data platforms, and
              personalization engines that address the specific requirements of
              retail and consumer goods organizations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Why Choose Digitrans for Enterprise Solutions
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Selecting the right partner for your enterprise solutions is a
              critical decision that can significantly impact the success of
              your initiatives. Here's why leading organizations choose
              Digitrans for their enterprise solution needs:
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center text-blue-500 flex-shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    Enterprise Expertise
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Our team brings decades of experience working with large
                    enterprises across industries. We understand the unique
                    challenges of enterprise-scale transformation and have
                    developed proven approaches for navigating complexity,
                    managing risk, and delivering sustainable results. Our
                    consultants combine deep technical expertise with business
                    acumen, enabling us to develop solutions that address both
                    technical and organizational challenges.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center text-blue-500 flex-shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    Business-Driven Approach
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    We believe that technology should serve business objectives,
                    not the other way around. Our approach starts with
                    understanding your business goals, challenges, and
                    opportunities, and then developing technology solutions that
                    deliver measurable business value. We focus on outcomes
                    rather than outputs, ensuring that our solutions address the
                    real needs of your business and deliver tangible results.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center text-blue-500 flex-shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    Architectural Excellence
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Our solutions are built on solid architectural foundations
                    that ensure scalability, flexibility, and long-term
                    sustainability. We leverage industry best practices,
                    reference architectures, and design patterns that have been
                    proven in enterprise environments. Our architects bring deep
                    expertise in modern architectural approaches such as
                    microservices, API-first design, and cloud-native
                    architecture, enabling us to design solutions that meet both
                    current and future needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center text-blue-500 flex-shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    Delivery Excellence
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    We have a proven track record of delivering complex
                    enterprise solutions on time, within budget, and to the
                    highest quality standards. Our delivery methodology combines
                    the structure and governance needed for enterprise projects
                    with the flexibility and adaptability of agile practices. We
                    establish clear success criteria, transparent progress
                    reporting, and effective risk management processes that
                    ensure successful delivery and stakeholder satisfaction.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center text-blue-500 flex-shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    Partnership Approach
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    We view our client relationships as long-term partnerships
                    rather than transactional engagements. We work
                    collaboratively with your team, transferring knowledge and
                    building capabilities that enable you to sustain and evolve
                    the solutions we deliver. Our goal is not just to implement
                    technology but to help you build the organizational
                    capabilities needed for long-term success in the digital
                    economy.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us to discuss how our enterprise solutions can help you
              address your most pressing business and technology challenges.
            </p>
            <Button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg rounded-lg"
              onClick={() => (window.location.href = "/contact")}
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <BackToTop />
      <StickyCTA />
    </div>
  );
}
