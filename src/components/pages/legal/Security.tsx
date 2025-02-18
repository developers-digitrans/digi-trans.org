import React from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import UniverseLights from "../../UniverseLights";
import { motion } from "framer-motion";

export default function Security() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="relative pt-32 pb-16">
        <UniverseLights />
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-8">Security Policy</h1>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-400 mb-6">Last updated: March 20, 2024</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                1. Data Protection
              </h2>
              <p className="text-gray-300 mb-4">
                We implement industry-standard security measures including:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-6">
                <li>End-to-end encryption</li>
                <li>Regular security audits</li>
                <li>Access control systems</li>
                <li>24/7 monitoring</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                2. Infrastructure Security
              </h2>
              <p className="text-gray-300 mb-4">
                Our infrastructure security includes:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-6">
                <li>DDoS protection</li>
                <li>Firewall configuration</li>
                <li>Regular penetration testing</li>
                <li>Vulnerability scanning</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                3. Compliance
              </h2>
              <p className="text-gray-300 mb-6">
                We maintain compliance with major security standards including
                ISO 27001, SOC 2, and GDPR.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                4. Incident Response
              </h2>
              <p className="text-gray-300 mb-6">
                We have a comprehensive incident response plan and dedicated
                security team available 24/7.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Contact</h2>
              <p className="text-gray-300 mb-6">
                For security concerns or to report vulnerabilities, contact
                security@digitrans.ai
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
