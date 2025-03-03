import React from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import { motion } from "framer-motion";
import { Linkedin, Mail, Facebook, Twitter } from "lucide-react";
import UniverseLights from "../../UniverseLights";

export default function EnablingClientMaximizeIT() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <UniverseLights />

      <article className="pt-32 pb-16 bg-black">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-12">
              <h1 className="text-7xl font-bold text-white mb-12">
                How We Helped a $3.5B Retailer Transform Their IT into a
                Strategic Asset
              </h1>
            </div>

            <div className="prose prose-lg prose-invert max-w-none">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-300">Challenge</h2>
                <p>
                  A leading global retailer with $3.5B in annual revenue was
                  seeking a new finance system. During our initial strategic
                  consultation, we identified a critical opportunity to conduct
                  a comprehensive review of their entire IT landscape. This
                  assessment would reveal how their technology investments were
                  delivering business value and establish a strategic framework
                  for future IT investments to maximize ROI and competitive
                  advantage.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-300">Approach</h2>
                <ul>
                  <li>
                    We assembled an elite multi-disciplinary team of enterprise
                    architects, change management specialists, and data
                    scientists to conduct a 360° evaluation of the client's IT
                    ecosystem, with particular focus on their mission-critical
                    proprietary retail operations platform.
                  </li>
                  <li>
                    Through rigorous analysis, we identified critical
                    bottlenecks, security vulnerabilities, scalability
                    limitations, and process inefficiencies that were hindering
                    business agility and innovation velocity.
                  </li>
                  <li>
                    We designed a future-proof target architecture and strategic
                    roadmap meticulously aligned with the client's 5-year
                    business plan and market differentiation strategy.
                  </li>
                  <li>
                    Our comprehensive IT architecture blueprint revealed
                    previously unidentified opportunities for system
                    integration, automation, and data monetization that could
                    create significant competitive advantages.
                  </li>
                  <li>
                    We developed a phased implementation plan with prioritized
                    quick wins to generate immediate business value while
                    building momentum for the broader transformation initiative.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-300">Outcome</h2>
                <ul>
                  <li>
                    The client gained unprecedented clarity on their technology
                    landscape, with a strategic roadmap directly linking IT
                    investments to specific business outcomes and competitive
                    advantages.
                  </li>
                  <li>
                    Our quick-win implementations delivered a 28% improvement in
                    system performance and a 35% reduction in incident
                    resolution time within the first 90 days.
                  </li>
                  <li>
                    The architecture blueprint identified $4.2M in immediate
                    cost-saving opportunities and revealed new revenue streams
                    that could generate an estimated $12M annually.
                  </li>
                  <li>
                    We established a robust IT governance framework that reduced
                    technology risk exposure by 65% while improving the client's
                    cybersecurity posture across all critical systems.
                  </li>
                  <li>
                    The client's executive team now has a technology roadmap
                    that serves as a strategic asset, enabling them to make
                    confident investment decisions aligned with long-term
                    business objectives.
                  </li>
                </ul>
              </div>

              <div className="mt-12 flex items-center gap-4">
                <p className="font-semibold text-white">Share</p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
