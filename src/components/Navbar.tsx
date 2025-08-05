import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Logo } from "./ui/logo";
import BookingModal from "./BookingModal";

interface NavbarProps {
  logo?: string;
  onBookConsultation?: () => void;
  onRegisterInterest?: () => void;
}

const businessApplications = [
  // Core AI & Data Services
  {
    title: "Big Data & AI Consultancy",
    description: "Transform your business with intelligent data strategies",
    href: "/services/ai-consultancy",
    type: "service",
  },
  {
    title: "AI-Assisted Accounting SaaS",
    description: "Intelligent financial management with automated insights",
    href: "/services/ai-accounting",
    type: "service",
  },
  {
    title: "AI Project Management SaaS",
    description: "Smart collaboration platform with predictive analytics",
    href: "/services/ai-project-management",
    type: "service",
  },
  {
    title: "AI Platform Integration",
    description: "Connect apps, docs, and workflows with AI intelligence",
    href: "/services/ai-platform-integration",
    type: "service",
  },
  // AI Solutions
  {
    title: "Enterprise AI Strategy",
    description: "Strategic AI roadmap and implementation consulting",
    href: "/solutions/ai-strategy",
    type: "solution",
  },
  {
    title: "AI System Integration",
    description: "Seamlessly integrate AI into existing business workflows",
    href: "/solutions/ai-integration",
    type: "solution",
  },
  {
    title: "Custom AI Development",
    description: "Build bespoke AI solutions for your unique needs",
    href: "/solutions/custom-ai",
    type: "solution",
  },
  // Solutions Hub Products
  {
    title: "IoT Data Platform",
    description: "Halve your IoT product's time to market",
    href: "/solutions-hub/iot-accelerator",
    type: "product",
  },
  {
    title: "AI Virtual Assistant",
    description: "Optimize operations with AI-powered automation",
    href: "/solutions-hub/ai-assistant",
    type: "product",
  },
  {
    title: "Container Optimizer",
    description: "Reduce infrastructure costs by up to 60%",
    href: "/solutions-hub/container-optimizer",
    type: "product",
  },
  {
    title: "DevOps Accelerator",
    description: "Deploy infrastructure 4x faster",
    href: "/solutions-hub/devops-accelerator",
    type: "product",
  },
];

const developerDocs = [
  {
    name: "Youtrack Docs",
    description: "Project management tool documentation",
    href: "https://docsyoutrack.netlify.app/",
    external: true
  },
  {
    name: "Kozmo Docs",
    description: "LLM orchestration documentation",
    href: "https://docskozmo.netlify.app/",
    external: true
  },
  {
    name: "Ledgerly Docs",
    description: "Financial analytics platform documentation",
    href: "https://docsledgerly.netlify.app/",
    external: true
  },
];

const Navbar = ({
  logo = "Digitrans",
  onBookConsultation = () => console.log("Book Consultation clicked"),
  onRegisterInterest = () => console.log("Register Interest clicked"),
}: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed top-12 left-0 right-0 z-40 bg-black/90 backdrop-blur-lg",
        "border-b border-white/10 py-2",
        isScrolled ? "shadow-lg" : "",
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="/" className="text-white">
          <Logo />
        </a>

        <div className="flex items-center gap-8">
          <NavigationMenu>
            <NavigationMenuList className="text-white">
              <NavigationMenuItem>
                <a
                  href="/about"
                  className="block select-none rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors"
                >
                  About Us
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="block select-none rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors bg-transparent">
                  Solutions Hub
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[600px] md:grid-cols-2 bg-black">
                    {businessApplications
                      .filter(app => app.type === "product")
                      .map((app) => (
                        <li key={app.title} className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors text-white hover:bg-white/10"
                              href={app.href}
                            >
                              <div className="text-sm font-medium leading-none">
                                {app.title}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                                {app.description}
                              </p>
                              <div className="mt-2">
                                <span className="text-xs px-2 py-1 rounded-full bg-purple-900/30 text-purple-300">
                                  {app.type}
                                </span>
                              </div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors text-white hover:bg-white/10 mt-4 border-t border-white/10 pt-4"
                          href="/solutions-hub"
                        >
                          <div className="text-sm font-medium leading-none flex items-center">
                            All Solutions <ArrowRight className="w-4 h-4 ml-2" />
                          </div>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="block select-none rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors bg-transparent">
                  Use Cases
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[600px] md:grid-cols-2 lg:w-[800px] lg:grid-cols-3 bg-black">
                    {businessApplications
                      .filter(app => app.type === "service" || app.type === "solution")
                      .map((app) => (
                        <li key={app.title} className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors text-white hover:bg-white/10"
                              href={app.href}
                            >
                              <div className="text-sm font-medium leading-none">
                                {app.title}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                                {app.description}
                              </p>
                              <div className="mt-2">
                                <span className="text-xs px-2 py-1 rounded-full bg-purple-900/30 text-purple-300">
                                  {app.type}
                                </span>
                              </div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors text-white hover:bg-white/10 mt-4 border-t border-white/10 pt-4"
                          href="/solutions"
                        >
                          <div className="text-sm font-medium leading-none flex items-center">
                            All Solutions <ArrowRight className="w-4 h-4 ml-2" />
                          </div>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="block select-none rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors bg-transparent">
                  Developers
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 bg-black">
                    {developerDocs.map((doc) => (
                      <li key={doc.name}>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors text-white hover:bg-white/10"
                            href={doc.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className="text-sm font-medium leading-none flex items-center">
                              {doc.name}
                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                              </svg>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                              {doc.description}
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a
                  href="/blog"
                  className="block select-none rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors"
                >
                  Blog
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a
                  href="/contact"
                  className="block select-none rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors"
                >
                  Contact Us
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4">
              <Button
                onClick={() => setShowBookingModal(true)}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 transition-colors relative group"
              >
                <span className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></span>
                <span className="relative">Schedule a Demo</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <BookingModal
        open={showBookingModal}
        onOpenChange={setShowBookingModal}
        title="Schedule a Demo"
        description="Experience our drag-and-drop interface for creating sophisticated financial AI applications. See how you can build multi-agent systems without code."
      />
    </div>
  );
};

export default Navbar;
