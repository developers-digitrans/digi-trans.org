import React from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import UniverseLights from "../../UniverseLights";
import { motion } from "framer-motion";

export default function Terms() {
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
            <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-400 mb-6">Last updated: March 20, 2024</p>

              <p className="text-gray-300 mb-6">
                These Terms of Use ("Terms") are a legal contract between you
                and/or the entity or company that you represent ("you" or
                "your") and Digitrans, Inc. ("we", "us" or "Digitrans"), and
                govern your use of all the text, data, information, software,
                graphics, and other content (collectively "Content") that we and
                our affiliates may make available to you.
              </p>

              <p className="text-gray-300 mb-6">
                Please read these Terms and Conditions ("Terms", "Terms and
                Conditions") carefully before browsing the https://digitrans.ai
                website (the "Website") operated by Digitrans, Inc. ("us", "we",
                "Digitrans" or "our").
              </p>

              <p className="text-gray-300 mb-6">
                Your access to and use of the Website is conditioned on your
                acceptance of and compliance with these Terms. These Terms apply
                to all visitors, users and others who access or use the Website.
              </p>

              <p className="text-gray-300 mb-6">
                By accessing or using the Website you agree to be bound by these
                Terms. If you disagree with any part of the terms then you may
                not access the Website.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                Website owner and administrator
              </h2>
              <p className="text-gray-300 mb-6">
                The digitrans.ai website's ("Website") owner and administrator
                is Digitrans, Inc.
              </p>

              <p className="text-gray-300 mb-6">
                We may modify, suspend or discontinue this website and/or the
                Content at any time and without notifying you. We reserve the
                right, at our sole discretion, to modify or replace these Terms
                at any time.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Copyright</h2>
              <p className="text-gray-300 mb-6">
                Use of any part of or content from this website for commercial
                purposes of any kind is expressly prohibited. To request
                permission to use any of the content on this website for
                commercial purposes, please contact our company at
                talk@digitrans.ai.
              </p>

              <p className="text-gray-300 mb-6">
                Under no circumstances may any of the content on this website be
                displayed on either a commercial or personal website without
                obtaining prior permission. Unauthorized use of any information
                from this website may violate copyright, trademark and other
                laws.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Disclaimer</h2>
              <p className="text-gray-300 mb-6">
                This website and all information contained herein is provided
                "as is", without warranty of any kind, either express or
                implied, including but not limited to any implied warranty of
                merchantability or fitness for a particular purpose.
              </p>

              <p className="text-gray-300 mb-6">
                The content, texts, documents, and related illustrations
                published on this website could include technical inaccuracies
                or typographical mistakes. Digitrans, Inc. may make changes
                and/or enhancements in the content of this website at any time,
                without notification.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                Limitation of Liability
              </h2>
              <p className="text-gray-300 mb-6">
                In no event shall Digitrans, Inc. be liable for any direct,
                indirect, special, or consequential damages, or any other
                damages whatsoever, for any use of or reliance on this website,
                or any linked or referenced website, including, without
                limitation, any lost opportunity, lost profits, business
                interruption, loss of programs or data, even if expressly
                advised or otherwise aware of the possibility of such damages,
                whether in an action of contract, negligence, tort, or
                otherwise.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                Applicable law
              </h2>
              <p className="text-gray-300 mb-6">
                By using this Website, you agree that the laws of the United
                States, without regard to principles of conflict of laws, will
                govern these Terms of Use and any dispute of any sort that might
                arise between you and Digitrans.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Local laws</h2>
              <p className="text-gray-300 mb-6">
                We control and operate the website from our headquarters in the
                United States, and the entirety of the website may not be
                appropriate or available for use in other locations. If you use
                our websites outside the United States, you are solely
                responsible for following applicable local laws.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Contact us</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about these Terms or otherwise need to
                contact us for any reason, you can reach us at
                talk@digitrans.ai.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                Links To Other Web Sites
              </h2>
              <p className="text-gray-300 mb-6">
                Our Service may contain links to third-party web sites or
                services that are not owned or controlled by Digitrans, Inc.
              </p>

              <p className="text-gray-300 mb-6">
                Digitrans, Inc. has no control over, and assumes no
                responsibility for, the content, privacy policies, or practices
                of any third party web sites or services. You further
                acknowledge and agree that Digitrans, Inc. shall not be
                responsible or liable, directly or indirectly, for any damage or
                loss caused or alleged to be caused by or in connection with use
                of or reliance on any such content, goods or services available
                on or through any such web sites or services.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
