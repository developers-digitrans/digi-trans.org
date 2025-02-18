import React from "react";
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
import { BarChart, Cloud, Bot, AppWindow } from "lucide-react";

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
}

const defaultServiceCards: ServiceCard[] = [
  {
    title: "Enterprise Data Platform",
    description: "Modern data architecture with real-time analytics",
    icon: <BarChart className="w-12 h-12 text-white" />,
    story: {
      title: "Data Platform Success Story",
      description:
        "Built a cloud-native data platform for a Fortune 100 financial institution, processing 50TB+ daily data with real-time analytics. Reduced data processing time by 80% and enabled ML-driven fraud detection saving $100M annually.",
      metrics: [
        "50TB+ Daily Data",
        "80% Faster Processing",
        "$100M Annual Savings",
      ],
    },
  },
  {
    title: "Cloud Transformation",
    description: "Secure and scalable cloud infrastructure",
    icon: <Cloud className="w-12 h-12 text-white" />,
    story: {
      title: "Cloud Migration Success",
      description:
        "Led cloud transformation for a global healthcare provider, migrating 1000+ applications to AWS with zero downtime. Implemented automated CI/CD pipelines reducing deployment time by 90% while ensuring HIPAA compliance.",
      metrics: [
        "1000+ Apps Migrated",
        "90% Faster Deployments",
        "Zero Downtime",
      ],
    },
  },
  {
    title: "AI/ML Solutions",
    description: "Production-grade machine learning systems",
    icon: <Bot className="w-12 h-12 text-white" />,
    story: {
      title: "AI Implementation Success",
      description:
        "Developed an enterprise-wide ML platform for a retail giant, enabling automated demand forecasting and inventory optimization. Achieved 40% reduction in stockouts and 25% increase in inventory turnover.",
      metrics: [
        "40% Less Stockouts",
        "25% Better Turnover",
        "99.9% Model Accuracy",
      ],
    },
  },
  {
    title: "Data Analytics & BI",
    description: "Advanced analytics and visualization platforms",
    icon: <AppWindow className="w-12 h-12 text-white" />,
    story: {
      title: "Analytics Platform Success",
      description:
        "Created a real-time analytics platform for a telecom leader processing 5M+ events per second. Enabled instant insights across 100M+ customers, reducing churn by 30% through predictive analytics.",
      metrics: ["5M+ Events/Sec", "30% Churn Reduction", "100M+ Customers"],
    },
  },
];

const Hero = ({
  headline:
    initialHeadline = "Enterprise Data & AI Solutions for Digital Transformation",
  subheadline = "Partner with us to unlock the power of your data through advanced analytics, AI/ML solutions, and cloud-native architectures that drive business growth.",
  serviceCards = defaultServiceCards,
  videoUrl = "https://example.com/video.mp4",
  onRegisterInterest = () => {},
  showCards = true,
}: HeroProps) => {
  const [headline, setHeadline] = React.useState<string | JSX.Element>(
    initialHeadline,
  );
  const [selectedCard, setSelectedCard] = React.useState<ServiceCard | null>(
    null,
  );

  React.useEffect(() => {
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
  }, []);

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
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 min-h-[180px] flex items-center justify-center"
        >
          <motion.span
            key={typeof headline === "string" ? headline : "jsx-headline"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {headline}
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl"
        >
          {subheadline}
        </motion.p>

        {showCards && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 mt-8"
          >
            {serviceCards.map((card, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-full sm:w-[300px]"
              >
                <Card
                  className="p-6 bg-blue-950/30 backdrop-blur-lg border-blue-800/30 hover:bg-blue-900/40 transition-all duration-300 ease-in-out cursor-pointer"
                  onClick={() => setSelectedCard(card)}
                >
                  <div className="flex justify-center items-center mb-4">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-300">{card.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -10, scale: 1.02 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12"
        >
          <Button
            size="lg"
            onClick={onRegisterInterest}
            className="p-6 bg-blue-950/30 backdrop-blur-lg border-blue-800/30 hover:bg-blue-900/40 transition-all duration-300 ease-in-out text-white px-8 py-6 text-lg"
          >
            Book a 30-min Call with our CEO
          </Button>
        </motion.div>
      </div>

      <Dialog open={!!selectedCard} onOpenChange={() => setSelectedCard(null)}>
        <DialogContent className="sm:max-w-[600px] bg-slate-900 text-white border-slate-800">
          {selectedCard?.story && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">
                  {selectedCard.story.title}
                </DialogTitle>
                <DialogDescription className="text-slate-300 mt-4">
                  {selectedCard.story.description}
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-3 gap-4 mt-6">
                {selectedCard.story.metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-slate-800 rounded-lg"
                  >
                    <p className="text-blue-400 font-bold">{metric}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Hero;
