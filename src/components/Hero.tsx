import React, { useState } from "react";
import UniverseLights from "./UniverseLights";
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { BarChart, Cloud, Bot, AppWindow, ArrowRight } from "lucide-react";
import BookingModal from "./BookingModal";

interface ServiceCardStory {
  title: string;
  description: string;
  metrics: string[];
}

interface ServiceCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  story?: ServiceCardStory;
}

interface HeroProps {
  headline?: string;
  subheadline?: string;
  serviceCards?: ServiceCard[];
  videoUrl?: string;
  onRegisterInterest?: () => void;
  showCards?: boolean;
  showBookCallButton?: boolean;
}

const defaultServiceCards: ServiceCard[] = [
  {
    title: "Big Data & AI Consultancy",
    description: "Transform your business with intelligent data strategies and AI-powered insights",
    icon: <BarChart className="w-12 h-12 text-white" />,
    story: {
      title: "Enterprise AI & Data Transformation",
      description:
        "We help businesses unlock the power of their data through advanced analytics, machine learning, and AI solutions. Our consultants design and implement data architectures that drive actionable insights and competitive advantage.",
      metrics: [
        "300% ROI Improvement",
        "85% Faster Insights",
        "200+ AI Models Deployed",
      ],
    },
  },
  {
    title: "AI-Assisted Accounting SaaS",
    description: "Intelligent accounting software that automates bookkeeping and financial insights",
    icon: <Bot className="w-12 h-12 text-white" />,
    story: {
      title: "Smart Financial Management",
      description:
        "Our AI-powered accounting platform automatically categorizes transactions, detects anomalies, and provides real-time financial insights. Perfect for businesses that want to eliminate manual bookkeeping and gain predictive financial analytics.",
      metrics: [
        "95% Automation Rate",
        "60% Time Savings",
        "99.9% Accuracy",
      ],
    },
  },
  {
    title: "AI Project Management SaaS",
    description: "Intelligent collaboration platform that predicts project outcomes and optimizes workflows",
    icon: <Cloud className="w-12 h-12 text-white" />,
    story: {
      title: "Predictive Project Intelligence",
      description:
        "Our AI-enhanced project management platform learns from your team's patterns to predict delays, suggest optimal resource allocation, and automate routine tasks. Built for teams that want to work smarter, not harder.",
      metrics: [
        "40% Faster Delivery",
        "85% Risk Reduction",
        "200% Productivity Gain",
      ],
    },
  },
  {
    title: "AI Platform Integration",
    description: "Connect your apps, docs, and team with intelligent automation (like Onyx.app)",
    icon: <AppWindow className="w-12 h-12 text-white" />,
    story: {
      title: "Unified AI Ecosystem",
      description:
        "We build custom AI platforms that integrate with your existing tools and documents, creating a unified intelligence layer for your business. Our solutions connect teams, automate workflows, and provide insights across all your business systems.",
      metrics: [
        "100+ App Integrations",
        "50% Workflow Efficiency",
        "Real-time Intelligence",
      ],
    },
  },
];

const Hero = ({
  headline:
    initialHeadline = "Enterprise AI & Data Intelligence Solutions",
  subheadline = "Transform your business with cutting-edge AI platforms, intelligent automation, and data-driven insights. We build custom AI solutions that connect your team, apps, and data into one intelligent ecosystem.",
  serviceCards = defaultServiceCards,
  videoUrl = "/videos/financial-ai.mp4",
  onRegisterInterest = () => {},
  showCards = true,
  showBookCallButton = false,
}: HeroProps) => {
  const [headline, setHeadline] = React.useState<string | JSX.Element>(
    initialHeadline,
  );
  const [selectedCard, setSelectedCard] = React.useState<ServiceCard | null>(
    null,
  );
  const [showCalPopup, setShowCalPopup] = React.useState(false);

  React.useEffect(() => {
    // Only run the headline animation on the home page
    if (
      initialHeadline ===
      "Enterprise Data & AI Solutions for Digital Transformation"
    ) {
      const interval = setInterval(() => {
        setHeadline((current) => {
          if (
            typeof current === "string" &&
            current ===
              "On-demand Technical Team for SaaS Products and Midsize Businesses"
          ) {
            return (
              <>
                Not just a Vendor.{" "}
                <span className="relative">
                  <span className="text-yellow-400">Your Partner</span>
                  <svg
                    className="absolute w-full -bottom-6 left-0"
                    viewBox="0 0 100 12"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,12 Q50,0 100,12"
                      stroke="rgba(252, 211, 77, 0.5)"
                      strokeWidth="3"
                      fill="none"
                    />
                  </svg>
                </span>
              </>
            );
          }
          return "On-demand Technical Team for SaaS Products and Midsize Businesses";
        });
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [initialHeadline]);

  return (
    <div className="relative w-full h-[800px] bg-black overflow-hidden pt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-10" />
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      >
        <source
          src={
            videoUrl ||
            "https://cdn.coverr.co/videos/coverr-an-aerial-view-of-a-business-district-1573/1080p.mp4"
          }
          type="video/mp4"
        />
      </video>
      <UniverseLights />

      {/* Add subtle particle effects */}
      <div className="absolute inset-0 z-5 opacity-40 pointer-events-none">
        <div className="absolute h-3 w-3 rounded-full bg-purple-500 animate-float-slow left-[10%] top-[20%]"></div>
        <div className="absolute h-4 w-4 rounded-full bg-blue-500 animate-float-medium left-[20%] top-[50%]"></div>
        <div className="absolute h-2 w-2 rounded-full bg-indigo-500 animate-float-fast left-[30%] top-[70%]"></div>
        <div className="absolute h-5 w-5 rounded-full bg-purple-500/50 animate-float-slow left-[70%] top-[15%]"></div>
        <div className="absolute h-2 w-2 rounded-full bg-blue-500/50 animate-float-medium left-[80%] top-[35%]"></div>
        <div className="absolute h-3 w-3 rounded-full bg-indigo-500/50 animate-float-fast left-[90%] top-[60%]"></div>
      </div>

      {/* Financial AI tagline - repositioned and enlarged */}
      <div className="relative z-20 w-full text-center pt-12 pb-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl lg:text-6xl tracking-wider text-violet-300 font-bold uppercase leading-tight mb-2"
        >
Building Tomorrow's<br />
          AI Intelligence Today
        </motion.div>
      </div>

      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-start items-center text-center pt-3">
        {/* Remove headline and divider - directly show paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-200 mb-6 max-w-3xl leading-relaxed"
        >
          {subheadline}
        </motion.p>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center items-center gap-6 mb-8 text-sm text-gray-300"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>ISO 27001 Certified</span>
          </div>
          <div className="w-px h-4 bg-gray-600"></div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>SOC 2 Compliant</span>
          </div>
          <div className="w-px h-4 bg-gray-600"></div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>GDPR Ready</span>
          </div>
          <div className="w-px h-4 bg-gray-600"></div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>AWS Partner</span>
          </div>
        </motion.div>

        {/* CTA buttons with improved styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 ease-in-out transform hover:scale-[1.02] relative group"
            onClick={() => window.open("/contact", "_self")}
          >
            <span className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></span>
            <span className="relative flex items-center">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
          
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 ease-in-out transform hover:scale-[1.02] relative group"
            onClick={() => setShowCalPopup(true)}
          >
            <span className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></span>
            <span className="relative flex items-center">
              Schedule a Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
        </motion.div>

        {showCards && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 w-full max-w-7xl"
          >
            {serviceCards.map((card, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-full"
              >
                <Card
                  className="py-3 px-4 bg-gradient-to-br from-purple-900/40 to-indigo-950/30 backdrop-blur-md border border-purple-500/25 hover:border-purple-400/40 transition-all duration-300 ease-in-out cursor-pointer transform hover:shadow-[0_5px_15px_-5px_rgba(167,139,250,0.3)] group"
                  onClick={() => setSelectedCard(card)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-gradient-to-br from-purple-700/30 to-violet-800/30 p-2.5 rounded-lg">
                        {card.icon}
                      </div>
                      <h3 className="text-base font-medium text-white ml-3">
                        {card.title}
                      </h3>
                    </div>
                    <ArrowRight className="h-4 w-4 text-purple-300/80 group-hover:text-purple-300 transition-colors" />
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}

        {showBookCallButton && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12"
          >
            <Button
              size="lg"
              onClick={() => setShowCalPopup(true)}
              className="p-6 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 ease-in-out text-white px-8 py-6 text-lg relative group overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span className="animate-pulse bg-white rounded-full w-2 h-2 mr-1"></span>
                Book a 30-min Call with our CEO
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
            </Button>
          </motion.div>
        )}
      </div>

      {/* Enhanced dialog styling */}
      <Dialog open={!!selectedCard} onOpenChange={() => setSelectedCard(null)}>
        <DialogContent className="sm:max-w-[600px] bg-gradient-to-br from-gray-900 to-gray-950 text-white border border-blue-800/30 shadow-[0_0_30px_rgba(139,92,246,0.2)]">
          {selectedCard?.story && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  {selectedCard.story.title}
                </DialogTitle>
                <DialogDescription className="text-gray-300 mt-4 text-base">
                  {selectedCard.story.description}
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-3 gap-4 mt-6">
                {selectedCard.story.metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-lg border border-blue-800/30"
                  >
                    <p className="text-purple-300 font-bold">{metric}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-purple-500/20">
                <Button
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                  onClick={() => {
                    setSelectedCard(null);
                    window.open("/contact", "_self");
                  }}
                >
                  Learn More About This Solution
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Booking Modal for Schedule a Demo */}
      <BookingModal
        open={showCalPopup}
        onOpenChange={setShowCalPopup}
        title="Schedule a Demo"
        description="Book a free 30-minute consultation to discuss your SaaS idea. We'll provide expert feedback on product strategy, technical requirements, and development timeline."
      />
    </div>
  );
};

export default Hero;
