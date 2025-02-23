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
                Enabling our client to maximise the business value from IT
              </h1>
            </div>

            <div className="prose prose-lg prose-invert max-w-none">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-300">Challenge</h2>
                <p>
                  This retailer was looking for a new finance system and during
                  initial discussions we jointly identified the need for a
                  fundamental review of their IT landscape to understand how IT
                  delivered value and how future investment in IT should be
                  approached
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-300">Approach</h2>
                <ul>
                  <li>
                    Our approach consisted of a small multi-disciplinary team
                    with specialisms in architecture, change and data focused on
                    a comprehensive evaluation of the IT environment with
                    specific focus on the proprietary retail operations system.
                  </li>
                  <li>
                    We identified obstacles, risks, and issues to be overcome
                    how they delivered business and IT change.
                  </li>
                  <li>
                    We produced a target architecture and roadmap that was
                    aligned to the clients' strategic priorities.
                  </li>
                  <li>
                    By creating a holistic IT architecture blueprint, we have
                    been able to identify other areas which can be strengthened
                    and improved.
                  </li>
                  <li>
                    We developed an action plan to transition to the target
                    state with focus on quick wins and creating momentum.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-300">Outcome</h2>
                <ul>
                  <li>
                    Clear understanding of future needs and map of prioritised
                    business objectives to be underpinned by technology.
                  </li>
                  <li>
                    An immediate uplift in business value and business agility.
                  </li>
                  <li>
                    The new architecture blueprint as identified a series of
                    opportunities which are now in the roadmap.
                  </li>
                  <li>Our client is now better equipped to manage IT risk.</li>
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
