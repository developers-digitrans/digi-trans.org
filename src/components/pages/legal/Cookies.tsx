import React from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import UniverseLights from "../../UniverseLights";
import { motion } from "framer-motion";

export default function Cookies() {
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
            <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-400 mb-6">
                Last updated: February 11, 2025
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Who we are</h2>
              <p className="text-gray-300 mb-6">
                Digitrans is a software development company that provides a wide
                range of tech-related services to startups and fast-growing
                businesses worldwide with its registered office address:
                Kentmanni tn 4 // Sakala tn 10, Tallinn, 10116, Estonia.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                Why do we collect information about you?
              </h2>
              <p className="text-gray-300 mb-6">
                We gather your personal data in full compliance with the GDPR,
                and other data privacy legislation acts and utilize it solely
                for the purposes of operating more efficiently and providing the
                best possible client-oriented services.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                What kind of information do we gather?
              </h2>
              <p className="text-gray-300 mb-6">
                We collect and utilize only your basic personal data when you
                use our site. We can also gather and use some open-source
                information, such as addresses to social networking sites.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                How do we collect your personal data?
              </h2>
              <p className="text-gray-300 mb-6">
                We can either gather information by ourselves (through contact
                forms) or utilize various tracking technologies (analytics
                providers like Google Analytics, Statcounter, Yandex Metrika,
                etc.), advertising networks (Google Adwords, Bing Ads, etc.) and
                search engines.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                Data retention time
              </h2>
              <p className="text-gray-300 mb-6">
                We store your personal data for as long as we need it to perform
                marketing analyzes or as long as we run a mutual business
                collaboration with you. We will delete or anonymize such data
                when it is no longer needed, or there is no legal basis to
                process it.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                Your user rights
              </h2>
              <p className="text-gray-300 mb-6">
                All users are treated equally in compliance with the current
                Privacy Policy and existing legal acts, and have the following
                rights regarding data that we gather:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-6">
                <li>
                  The right to request information on how your personal data is
                  collected, processed and utilized
                </li>
                <li>The right to request access to the data that we acquire</li>
                <li>The right to request the erasure of the information</li>
                <li>
                  The right to withdraw consent to the processing of marketing
                  data at any time
                </li>
                <li>
                  The right to object to our operations related to your personal
                  information
                </li>
                <li>
                  The right to restrict the processing of your personal data
                </li>
                <li>The right to data portability</li>
                <li>The right to rectification</li>
                <li>The right to appeal to the supervisory authority</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                Cookies policy
              </h2>
              <p className="text-gray-300 mb-6">
                By pressing the pop-up "Accept" button, you provide your consent
                for our use of cookies and agree to our Cookie policy. We use
                cookies and other tracking technologies on our website to allow
                for smoother user experience and site navigation.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                How to opt-out of cookies
              </h2>
              <div className="text-gray-300 mb-6">
                <h3 className="text-xl font-semibold mb-2">
                  Opting out of cookies in Internet Explorer
                </h3>
                <ol className="list-decimal pl-6 mb-4">
                  <li>Choose "Tools"</li>
                  <li>Click on "Internet Options"</li>
                  <li>Click the "Privacy" tab</li>
                  <li>Move the slider to choose your settings</li>
                </ol>

                <h3 className="text-xl font-semibold mb-2">
                  Opting out of cookies in Safari
                </h3>
                <ol className="list-decimal pl-6 mb-4">
                  <li>Choose "Preferences" from Safari menu</li>
                  <li>Select "Security"</li>
                  <li>Cookie settings are shown</li>
                  <li>Choose your settings</li>
                </ol>

                <h3 className="text-xl font-semibold mb-2">
                  Opting out of cookies in Google Chrome
                </h3>
                <ol className="list-decimal pl-6 mb-4">
                  <li>Click on the "Tools" menu</li>
                  <li>Select "Options"</li>
                  <li>Find the "Privacy and Security" section</li>
                  <li>Click "Cookies and other site data."</li>
                  <li>
                    Click the "Cookie settings" tab and choose your settings
                  </li>
                </ol>

                <h3 className="text-xl font-semibold mb-2">
                  Opting out of cookies in Mozilla Firefox
                </h3>
                <ol className="list-decimal pl-6 mb-4">
                  <li>Click on "Menu", then "Options"</li>
                  <li>Select "Privacy"</li>
                  <li>Select "Cookies"</li>
                  <li>Choose your settings</li>
                </ol>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                Contact information
              </h2>
              <p className="text-gray-300 mb-6">
                Do you have any questions left about this Privacy Policy? We are
                eager to answer your questions and provide you with more info on
                how we handle your data. Please don't hesitate to drop us a line
                at talk@digitrans.ai.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                Cookies declaration
              </h2>
              <p className="text-gray-300 mb-6">
                This website uses cookies. We use our own and third-party
                cookies to perform analysis of use and measurement of our
                website to improve our services. You can change the settings or
                get more information here.
              </p>

              <div className="text-gray-300 mb-6">
                <h3 className="text-xl font-semibold mb-2">
                  Necessary Cookies
                </h3>
                <p>
                  Necessary cookies help make a website usable by enabling basic
                  functions like page navigation and access to secure areas of
                  the website. The website cannot function properly without
                  these cookies.
                </p>
              </div>

              <div className="text-gray-300 mb-6">
                <h3 className="text-xl font-semibold mb-2">
                  Preferences Cookies
                </h3>
                <p>
                  Preference cookies enable a website to remember information
                  that changes the way the website behaves or looks, like your
                  preferred language or the region that you are in.
                </p>
              </div>

              <div className="text-gray-300 mb-6">
                <h3 className="text-xl font-semibold mb-2">
                  Statistics Cookies
                </h3>
                <p>
                  Statistic cookies help website owners to understand how
                  visitors interact with websites by collecting and reporting
                  information anonymously.
                </p>
              </div>

              <div className="text-gray-300 mb-6">
                <h3 className="text-xl font-semibold mb-2">
                  Marketing Cookies
                </h3>
                <p>
                  Marketing cookies are used to track visitors across websites.
                  The intention is to display ads that are relevant and engaging
                  for the individual user and thereby more valuable for
                  publishers and third party advertisers.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
