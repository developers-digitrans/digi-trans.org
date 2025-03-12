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

const defaultServices = [
  {
    title: "Big Data Analytics",
    description: "Transform your data into actionable insights",
    href: "/services/big-data-analytics",
  },
  {
    title: "Cloud Computing",
    description: "Scalable cloud solutions for your business",
    href: "/services/cloud-computing",
  },
  {
    title: "AI Solutions",
    description: "Cutting-edge artificial intelligence integration",
    href: "/services/ai-solutions",
  },
];

const defaultSolutions = [
  {
    title: "Enterprise Solutions",
    description: "Custom solutions for large organizations",
    href: "/solutions/enterprise-solutions",
  },
  {
    title: "Digital Transformation",
    description: "Modernize your business processes",
    href: "/solutions/digital-transformation",
  },
  {
    title: "Data Security",
    description: "Protect your valuable data assets",
    href: "/solutions/data-security",
  },
];

const defaultProducts = [
  {
    title: "Ledgerly",
    description: "Enterprise-grade financial management platform",
    href: "/products/ledger",
  },
  {
    title: "uTrack",
    description: "Agile project management for high-performing teams",
    href: "/products/utrack",
  },
  // Temporarily hidden
  // {
  //   title: "Ember",
  //   description: "Modern development workflow platform for engineering teams",
  //   href: "/products/ember",
  // },
  // {
  //   title: "GoDash",
  //   description: "Real-time business intelligence platform",
  //   href: "/products/godash",
  // },
  {
    title: "BigBytes",
    description: "Scalable data processing and analytics engine",
    href: "/products/bigbytes",
  },
  {
    title: "Kozmo AI",
    description: "Enterprise AI orchestration and automation",
    href: "/products/kozmo-ai",
  },
];

const defaultClients = [
  {
    name: "Fortune 500 Companies",
    sector: "Various Industries",
    href: "/clients/fortune-500-companies",
  },
  {
    name: "Government Agencies",
    sector: "Public Sector",
    href: "/clients/gov-agencies",
  },
  {
    name: "Tech Startups",
    sector: "Technology",
    href: "/clients/tech-startups",
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
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-black">
                    {defaultServices.map((service) => (
                      <li key={service.title} className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors text-white hover:bg-white/10"
                            href={service.href}
                          >
                            <div className="text-sm font-medium leading-none">
                              {service.title}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                              {service.description}
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors text-white hover:bg-white/10 mt-4 border-t border-white/10 pt-4"
                          href="/services"
                        >
                          <div className="text-sm font-medium leading-none flex items-center">
                            All Services <ArrowRight className="w-4 h-4 ml-2" />
                          </div>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="block select-none rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors bg-transparent">
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-black">
                    {defaultSolutions.map((solution) => (
                      <li key={solution.title} className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors text-white hover:bg-white/10"
                            href={solution.href}
                          >
                            <div className="text-sm font-medium leading-none">
                              {solution.title}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                              {solution.description}
                            </p>
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
                            All Solutions{" "}
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </div>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="block select-none rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors bg-transparent">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-black">
                    {defaultProducts.map((product) => (
                      <li key={product.title} className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors text-white hover:bg-white/10"
                            href={product.href}
                          >
                            <div className="text-sm font-medium leading-none">
                              {product.title}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                              {product.description}
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="block select-none rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors bg-transparent">
                  Clients
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 bg-black">
                    {defaultClients.map((client) => (
                      <li key={client.name}>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors text-white hover:bg-white/10"
                            href={client.href}
                          >
                            <div className="text-sm font-medium leading-none">
                              {client.name}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                              {client.sector}
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors text-white hover:bg-white/10 mt-4 border-t border-white/10 pt-4"
                          href="/clients"
                        >
                          <div className="text-sm font-medium leading-none flex items-center">
                            All Clients <ArrowRight className="w-4 h-4 ml-2" />
                          </div>
                        </a>
                      </NavigationMenuLink>
                    </li>
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
                  href="/careers"
                  className="block select-none rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors"
                >
                  Careers
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
                <span className="relative">Book a Demo</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <BookingModal
        open={showBookingModal}
        onOpenChange={setShowBookingModal}
        title="Book a Demo with Our Team"
        description="Schedule a personalized demo to see how our solutions can transform your business."
      />
    </div>
  );
};

export default Navbar;
