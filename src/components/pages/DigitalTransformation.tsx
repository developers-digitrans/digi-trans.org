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
  RefreshCw,
  Laptop,
  Zap,
  LineChart,
  CheckCircle,
  ArrowRight,
  FileText,
  Users,
  TrendingUp,
  Layers,
  Code,
  Database,
  Network,
  BarChart,
} from "lucide-react";

const features = [
  {
    icon: <RefreshCw className="w-8 h-8" />,
    title: "Process Automation",
    description: "Streamline operations with intelligent automation solutions.",
  },
  {
    icon: <Laptop className="w-8 h-8" />,
    title: "Digital Workplace",
    description: "Modern tools and platforms for enhanced collaboration.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Agile Transformation",
    description: "Adopt agile methodologies for faster delivery.",
  },
  {
    icon: <LineChart className="w-8 h-8" />,
    title: "Performance Analytics",
    description: "Track and optimize digital transformation metrics.",
  },
];

export default function DigitalTransformation() {
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
            Digital Transformation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl"
          >
            Transform your business with cutting-edge digital solutions and
            strategies that drive innovation, efficiency, and competitive
            advantage.
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
                  .getElementById("understanding")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Understanding Digital Transformation Section */}
      <section id="understanding" className="py-20 bg-black scroll-mt-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Understanding Digital Transformation
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Digital transformation represents a fundamental reimagining of how
              an organization uses technology, people, and processes to
              radically improve business performance. It's not merely about
              implementing new technologies—it's about leveraging these
              technologies to transform business models, enhance customer
              experiences, and create new value propositions in an increasingly
              digital world.
            </p>

            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              In today's rapidly evolving business landscape, digital
              transformation has become an imperative rather than an option.
              Organizations that fail to embrace digital transformation risk
              being disrupted by more agile competitors who can better meet
              changing customer expectations and market demands. The COVID-19
              pandemic has only accelerated this trend, forcing businesses to
              rapidly digitize operations and customer interactions.
            </p>

            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              At Digitrans, we view digital transformation as a continuous
              journey rather than a one-time project. This journey involves the
              integration of digital technology into all areas of a business,
              fundamentally changing how you operate and deliver value to
              customers. It also requires a cultural change that challenges
              organizations to experiment, become comfortable with failure, and
              continually question the status quo.
            </p>

            <p className="text-xl text-gray-300 leading-relaxed">
              Our approach to digital transformation is holistic, addressing the
              four key dimensions that must be aligned for successful
              transformation: technology, data, process, and organizational
              change. By addressing all these dimensions simultaneously, we help
              organizations achieve sustainable transformation that delivers
              lasting business value.
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

      {/* The Digital Transformation Imperative */}
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
              The Digital Transformation Imperative
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              The business landscape is undergoing a profound shift driven by
              technological innovation, changing customer expectations, and
              disruptive business models. According to McKinsey, the COVID-19
              pandemic accelerated digital adoption by seven years, with
              companies digitizing customer and supply-chain interactions and
              internal operations by three to four years. This acceleration has
              created both opportunities and challenges for businesses across
              all industries.
            </p>

            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Organizations that successfully navigate digital transformation
              can achieve significant competitive advantages. Research by the
              MIT Center for Digital Business found that digitally mature
              companies are 26% more profitable than their industry peers. They
              also generate 9% more revenue from their physical assets and
              achieve significantly higher market valuations.
            </p>

            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              However, digital transformation is not without challenges.
              According to Boston Consulting Group, 70% of digital
              transformations fall short of their objectives. Common obstacles
              include resistance to change, lack of digital skills, siloed
              organizational structures, legacy technology constraints, and
              unclear transformation strategy. Overcoming these challenges
              requires a comprehensive approach that addresses both the
              technological and human aspects of transformation.
            </p>

            <p className="text-xl text-gray-300 leading-relaxed">
              At Digitrans, we help organizations navigate these challenges by
              providing a structured yet flexible approach to digital
              transformation. Our methodology combines strategic vision with
              practical implementation, ensuring that transformation initiatives
              deliver tangible business outcomes while building the capabilities
              needed for long-term success in the digital economy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Digital Transformation Framework */}
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
              Our Digital Transformation Framework
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Successful digital transformation requires a structured approach
              that balances strategic vision with practical implementation. Our
              comprehensive framework guides organizations through the
              transformation journey, from initial assessment to continuous
              evolution. This framework is built on our extensive experience
              helping organizations across various industries navigate their
              digital transformation journeys.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white mt-10">
              1. Digital Maturity Assessment
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              We begin by assessing your organization's current digital
              capabilities across key dimensions: strategy, culture, customer
              experience, operations, technology, and data. This assessment
              provides a baseline understanding of your digital maturity and
              identifies areas of strength and opportunity. Using our
              proprietary Digital Maturity Model, we benchmark your organization
              against industry peers and digital leaders, providing valuable
              context for your transformation journey.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white mt-10">
              2. Vision and Strategy Development
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Based on the assessment findings, we work with your leadership
              team to develop a compelling digital vision and strategy. This
              involves defining the desired future state, articulating the
              business value of transformation, and establishing clear strategic
              objectives. We help you identify the digital capabilities needed
              to achieve your business goals and prioritize transformation
              initiatives based on business impact and feasibility. The strategy
              development process also includes defining key performance
              indicators (KPIs) to measure transformation success.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white mt-10">
              3. Roadmap and Implementation Planning
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              With the strategy in place, we develop a detailed transformation
              roadmap that outlines the initiatives, timelines, resources, and
              dependencies required to achieve your digital vision. The roadmap
              typically spans 18-36 months and is organized into waves of
              initiatives that deliver incremental business value while building
              toward the long-term vision. We also help you establish the
              governance structures, decision-making processes, and change
              management approaches needed to guide the transformation journey.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white mt-10">
              4. Agile Delivery and Implementation
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              We employ agile methodologies to implement transformation
              initiatives, allowing for rapid delivery of value and continuous
              adaptation based on feedback and changing requirements. Our
              delivery approach combines cross-functional teams, iterative
              development, and continuous integration and deployment to
              accelerate time-to-market for new capabilities. We also help you
              establish the technical foundations for transformation, including
              modern architecture patterns, DevOps practices, and cloud
              infrastructure.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white mt-10">
              5. Organizational Change and Capability Building
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Digital transformation requires significant changes to
              organizational structures, processes, and ways of working. We help
              you design and implement these changes, addressing aspects such as
              organizational structure, roles and responsibilities, performance
              management, and incentive systems. We also focus on building the
              digital capabilities your organization needs through training,
              coaching, recruitment, and strategic partnerships. Our change
              management approach ensures that employees at all levels
              understand, support, and actively contribute to the
              transformation.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white mt-10">
              6. Continuous Evolution and Optimization
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              Digital transformation is not a one-time event but a continuous
              journey of evolution and optimization. We help you establish
              mechanisms for monitoring transformation progress, measuring
              business outcomes, and continuously improving your digital
              capabilities. This includes implementing data-driven
              decision-making processes, fostering a culture of experimentation
              and learning, and regularly reassessing your digital strategy in
              light of changing business conditions and technological
              advancements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Key Focus Areas
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Our digital transformation services address several key focus
              areas that are critical for success in the digital economy. While
              the specific priorities vary by organization and industry, these
              areas represent common themes across successful digital
              transformations.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white">
              Customer Experience Transformation
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              In the digital age, customer expectations are continuously
              evolving, driven by experiences across industries and channels. We
              help organizations reimagine and redesign customer journeys to
              deliver seamless, personalized, and engaging experiences across
              all touchpoints. This involves mapping current customer journeys,
              identifying pain points and opportunities, and designing
              future-state journeys that leverage digital capabilities to
              enhance customer satisfaction and loyalty.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Our approach to customer experience transformation combines design
              thinking methodologies, customer research, journey mapping,
              service design, and digital experience platforms. We help you
              implement technologies such as customer data platforms,
              personalization engines, and omnichannel engagement solutions to
              deliver consistent and contextual experiences. We also establish
              metrics and feedback mechanisms to continuously measure and
              improve customer experience performance.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white">
              Operational Excellence and Automation
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Digital technologies offer unprecedented opportunities to enhance
              operational efficiency, agility, and resilience. We help
              organizations streamline and automate business processes, reduce
              manual effort, minimize errors, and accelerate cycle times. Our
              approach begins with process analysis and redesign, identifying
              opportunities to eliminate non-value-added activities, standardize
              processes, and apply automation technologies.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              We implement a range of automation technologies, including robotic
              process automation (RPA), business process management (BPM),
              workflow automation, and intelligent document processing. For more
              complex scenarios, we apply artificial intelligence and machine
              learning to enable intelligent automation that can handle
              unstructured data, make decisions, and continuously improve
              performance. Our operational excellence initiatives also focus on
              building the capabilities needed to sustain and scale automation,
              including governance frameworks, centers of excellence, and
              training programs.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white">
              Data-Driven Decision Making
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Data is a strategic asset that can drive competitive advantage
              through improved decision making, personalized customer
              experiences, and optimized operations. We help organizations
              develop and implement comprehensive data strategies that address
              data governance, architecture, quality, analytics, and activation.
              Our approach begins with assessing your current data capabilities
              and defining a target state that aligns with your business
              objectives.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              We implement modern data platforms that integrate data from
              multiple sources, enable real-time processing, and support
              advanced analytics and AI/ML workloads. These platforms typically
              leverage cloud-native technologies, data lakes, and purpose-built
              analytics services to provide scalability, flexibility, and
              cost-effectiveness. We also help you build the organizational
              capabilities needed for data-driven decision making, including
              data literacy programs, analytics centers of excellence, and data
              governance frameworks.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white">
              Digital Workplace and Collaboration
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              The way people work is evolving rapidly, with remote and hybrid
              work models becoming increasingly common. We help organizations
              create digital workplaces that enhance employee productivity,
              collaboration, and engagement regardless of location. Our approach
              addresses both the technological and cultural aspects of workplace
              transformation, ensuring that digital tools are effectively
              adopted and integrated into daily work practices.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              We implement modern workplace technologies such as collaboration
              platforms, communication tools, knowledge management systems, and
              workflow automation solutions. We also help you redesign physical
              workspaces to complement digital capabilities and support
              different work modes. Our workplace transformation initiatives
              include change management programs, training and adoption
              campaigns, and measurement frameworks to track the impact on
              employee experience and productivity.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white">
              Technology Modernization
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Legacy technology systems often constrain digital transformation
              efforts due to their inflexibility, high maintenance costs, and
              limited integration capabilities. We help organizations modernize
              their technology landscapes to create the foundation for digital
              innovation and agility. Our approach includes assessing the
              current technology estate, defining a target architecture, and
              developing a phased modernization roadmap.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              We implement modern architecture patterns such as microservices,
              API-first design, and event-driven architectures that enable
              flexibility, scalability, and speed of delivery. We help you
              migrate applications and infrastructure to the cloud, leveraging
              platform-as-a-service (PaaS) and infrastructure-as-a-service
              (IaaS) offerings to reduce operational overhead and increase
              agility. Our modernization initiatives also include implementing
              DevOps practices, continuous integration/continuous deployment
              (CI/CD) pipelines, and automated testing to accelerate software
              delivery and improve quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry-Specific Digital Transformation */}
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
              Industry-Specific Digital Transformation
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              While digital transformation shares common principles across
              industries, the specific opportunities, challenges, and priorities
              vary significantly by sector. Our industry-specific digital
              transformation approaches combine deep domain knowledge with
              digital expertise to address the unique needs of different
              industries.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white mt-10">
              Financial Services
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              The financial services industry is experiencing profound
              disruption from fintech startups, changing customer expectations,
              and regulatory pressures. Our digital transformation solutions for
              financial institutions focus on enhancing customer experience
              through omnichannel engagement, personalized offerings, and
              seamless digital journeys. We help banks, insurers, and asset
              managers modernize core systems, implement data-driven decision
              making, and develop new digital products and business models.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Key areas of focus include digital banking platforms, intelligent
              automation for middle and back-office processes, advanced
              analytics for risk management and customer insights, and cloud
              migration strategies that balance innovation with security and
              compliance requirements. We also help financial institutions
              explore emerging technologies such as blockchain, artificial
              intelligence, and open banking to create new value propositions
              and revenue streams.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white">
              Healthcare and Life Sciences
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Healthcare organizations face increasing pressure to improve
              patient outcomes, enhance access to care, and reduce costs. Our
              digital transformation solutions for healthcare focus on creating
              connected health ecosystems that integrate data and workflows
              across the care continuum. We help providers, payers, and life
              sciences companies implement technologies such as electronic
              health records, telehealth platforms, remote patient monitoring,
              and healthcare analytics.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Key areas of focus include patient engagement platforms, clinical
              decision support systems, population health management,
              value-based care enablement, and digital clinical trials. We also
              help healthcare organizations leverage emerging technologies such
              as artificial intelligence for diagnostic support, predictive
              analytics for early intervention, and blockchain for secure health
              information exchange. Our solutions address the unique regulatory,
              privacy, and interoperability challenges of the healthcare
              industry.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white">
              Manufacturing and Supply Chain
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Manufacturing companies are embracing digital technologies to
              enhance operational efficiency, product quality, and supply chain
              resilience. Our digital transformation solutions for manufacturers
              focus on implementing Industry 4.0 capabilities such as smart
              factories, connected products, and digital supply networks. We
              help manufacturing companies integrate operational technology (OT)
              with information technology (IT) to enable real-time visibility,
              predictive maintenance, and autonomous operations.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Key areas of focus include industrial IoT platforms, digital twins
              for products and processes, advanced analytics for quality and
              yield optimization, and end-to-end supply chain visibility
              solutions. We also help manufacturers develop new business models
              based on product-as-a-service, outcome-based contracts, and data
              monetization. Our solutions address the unique challenges of
              manufacturing environments, including legacy equipment
              integration, cybersecurity for operational technology, and change
              management in traditional industrial cultures.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white">
              Retail and Consumer Goods
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              Retail and consumer goods companies face intense competition from
              digital-native players and changing consumer expectations. Our
              digital transformation solutions for retailers and consumer goods
              companies focus on creating seamless omnichannel experiences,
              personalizing customer interactions, and optimizing supply chain
              operations. We help retailers implement technologies such as
              e-commerce platforms, customer data platforms, and inventory
              optimization solutions.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              Key areas of focus include unified commerce platforms,
              personalization engines, demand forecasting and inventory
              optimization, and last-mile delivery solutions. We also help
              retailers leverage emerging technologies such as computer vision
              for cashierless checkout, augmented reality for virtual try-on,
              and blockchain for supply chain transparency. Our solutions
              address the unique challenges of retail, including legacy system
              integration, store operations transformation, and building digital
              capabilities in traditional retail organizations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Digital Transformation Success Factors */}
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
              Digital Transformation Success Factors
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Based on our experience helping organizations across industries
              navigate their digital transformation journeys, we have identified
              several critical success factors that differentiate successful
              transformations from those that fall short of expectations.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white mt-10">
              Clear Vision and Strategy
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Successful digital transformations start with a clear vision of
              the desired future state and a well-defined strategy for achieving
              it. This vision should articulate how digital technologies will
              create value for customers, employees, and shareholders. The
              strategy should identify specific business outcomes, prioritize
              initiatives based on value and feasibility, and establish clear
              metrics for measuring success. Without a compelling vision and
              strategy, transformation efforts often lack direction and struggle
              to maintain momentum.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white">
              Leadership Commitment and Alignment
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Digital transformation requires strong leadership commitment and
              alignment across the executive team. Leaders must not only provide
              resources and remove obstacles but also model the behaviors and
              mindsets needed for successful transformation. This includes
              embracing experimentation, accepting calculated risks, and
              demonstrating resilience in the face of setbacks. Executive
              alignment is particularly important, as disagreements about
              priorities or approaches can significantly impede transformation
              progress.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white">
              Customer-Centric Approach
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Successful digital transformations maintain a relentless focus on
              customer needs and expectations. This involves deeply
              understanding customer journeys, pain points, and unmet needs, and
              designing digital solutions that address these effectively.
              Organizations that take a customer-centric approach to
              transformation are more likely to create solutions that drive
              adoption and satisfaction, leading to improved business outcomes.
              This approach also helps prioritize transformation initiatives
              based on customer impact rather than internal considerations.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white">
              Agile and Iterative Approach
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Digital transformation is inherently uncertain and complex, making
              traditional waterfall approaches less effective. Successful
              transformations adopt agile and iterative approaches that enable
              rapid experimentation, continuous learning, and frequent delivery
              of value. This involves breaking down large initiatives into
              smaller, manageable pieces, establishing feedback loops to gather
              insights, and being willing to pivot based on what is learned.
              Agile approaches also help manage risk by allowing course
              corrections before significant resources are committed.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white">
              Talent and Culture
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Digital transformation requires new skills, capabilities, and ways
              of working. Successful transformations invest in building these
              capabilities through hiring, training, and strategic partnerships.
              They also recognize the importance of culture in enabling
              transformation, fostering attributes such as customer-centricity,
              agility, data-driven decision making, and continuous learning.
              Cultural change is often the most challenging aspect of
              transformation, requiring sustained effort and attention from
              leadership.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white">
              Technology Foundation
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              While digital transformation is about more than technology, a
              solid technology foundation is essential for success. This
              includes modern, flexible architecture patterns, cloud
              infrastructure, data platforms, and development practices that
              enable rapid innovation and scaling. Successful transformations
              address technical debt and legacy constraints that could impede
              progress, while also implementing governance mechanisms to ensure
              security, compliance, and operational stability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Getting Started with Digital Transformation */}
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
              Getting Started with Digital Transformation
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Embarking on a digital transformation journey can seem daunting,
              especially for organizations with limited digital experience or
              resources. We offer several engagement models to help you get
              started, regardless of your current digital maturity or
              transformation ambitions.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white mt-10">
              Digital Maturity Assessment
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Our Digital Maturity Assessment provides a comprehensive
              evaluation of your organization's digital capabilities across key
              dimensions: strategy, culture, customer experience, operations,
              technology, and data. The assessment typically takes 4-6 weeks and
              involves stakeholder interviews, process reviews, technology
              assessments, and benchmarking against industry peers. The output
              includes a detailed maturity assessment, identification of key
              opportunity areas, and recommendations for improvement. This
              assessment provides valuable insights to inform your digital
              transformation strategy and roadmap.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white">
              Digital Transformation Strategy
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Our Digital Transformation Strategy engagement helps you develop a
              comprehensive strategy and roadmap for your transformation
              journey. This typically takes 8-12 weeks and builds on the
              insights from the Digital Maturity Assessment. The engagement
              involves defining your digital vision, identifying strategic
              priorities, developing business cases for key initiatives, and
              creating a phased implementation roadmap. The output includes a
              detailed transformation strategy, business case, governance model,
              and implementation plan. This strategy provides the foundation for
              your transformation journey, ensuring alignment across
              stakeholders and clear direction for implementation.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white">
              Digital Quick Wins
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Our Digital Quick Wins engagement helps you identify and implement
              high-impact, low-complexity digital initiatives that can deliver
              value in 3-6 months. This approach is particularly valuable for
              organizations looking to build momentum and demonstrate the value
              of digital transformation before committing to larger initiatives.
              The engagement involves identifying candidate quick wins,
              prioritizing based on business impact and feasibility, and
              implementing selected initiatives using agile methodologies. The
              output includes implemented solutions that deliver tangible
              business value, as well as learnings and capabilities that can
              inform larger transformation efforts.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white">
              Digital Innovation Workshop
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              Our Digital Innovation Workshop is a 2-3 day facilitated session
              that helps you explore digital opportunities and develop
              innovative solutions to business challenges. The workshop brings
              together cross-functional teams from your organization with our
              digital experts to identify pain points, generate solution ideas,
              and develop concepts for further development. We use design
              thinking methodologies and innovation frameworks to stimulate
              creative thinking and ensure solutions address real customer and
              business needs. The output includes prioritized solution concepts,
              high-level implementation plans, and recommendations for next
              steps. This workshop is an excellent way to kickstart your digital
              transformation journey and build alignment around specific
              opportunities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto text-center mt-16"
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Start Your Digital Transformation Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us to discuss how we can help you navigate the
              complexities of digital transformation and unlock new value for
              your business.
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
