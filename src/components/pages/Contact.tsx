import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import BookingModal from "../BookingModal";

const locations = [
  {
    city: "Dubai",
    country: "UAE",
    address: "Downtown Dubai, UAE",
    phone: "+971 50 205 5733",
    email: "info@digi-trans.org",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
  },
  {
    city: "Paris",
    country: "France",
    address: "Paris, France",
    phone: "+33 6 13 70 97 58",
    email: "info@digi-trans.org",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
  },
  {
    city: "London",
    country: "UK",
    address: "London, UK",
    phone: "+44 777 11 51 435",
    email: "info@digi-trans.org",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
  },
  {
    city: "Casablanca",
    country: "Morocco",
    address: "Casablanca, Morocco",
    phone: "+212 6 67 19 71 88",
    email: "info@digi-trans.org",
    image:
      "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?w=800&q=80",
  },
];

export default function Contact() {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="pt-32 pb-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Global Presence
            </h1>
            <p className="text-xl text-gray-300">
              With offices across multiple continents, we're ready to serve your
              business needs wherever you are.
            </p>
          </motion.div>

          {/* Location Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={location.city}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
              >
                <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] bg-gray-900/50 backdrop-blur border-gray-800">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={location.image}
                      alt={`${location.city}, ${location.country}`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {location.city}
                      </h3>
                      <p className="text-gray-300">{location.country}</p>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                      <p className="text-gray-300">{location.address}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                      <p className="text-gray-300">{location.phone}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                      <p className="text-gray-300">{location.email}</p>
                    </div>
                    <Button
                      onClick={() => {
                        setSelectedLocation(location);
                        setShowBookingModal(true);
                      }}
                      className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white mt-4 group"
                    >
                      Book a Meeting
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact Form Section */}
          <section className="py-20 bg-black">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Contact Form */}
                  <div>
                    <div className="flex items-center gap-6 mb-8">
                      <div className="flex-shrink-0 w-1/4">
                        <img
                          src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=400&q=80"
                          alt="Customer support team"
                          className="rounded-lg shadow-xl w-full h-auto"
                        />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold mb-2">
                          Get in Touch
                        </h2>
                        <p className="text-gray-300">
                          Fill out the form below and our team will get back to
                          you shortly.
                        </p>
                      </div>
                    </div>

                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label
                            htmlFor="firstName"
                            className="text-white font-medium"
                          >
                            First Name
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            className="w-full p-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                            placeholder="Your name"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="lastName"
                            className="text-white font-medium"
                          >
                            Last Name
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            className="w-full p-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                            placeholder="Your last name"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-white font-medium"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full p-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          placeholder="Your email"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="subject"
                          className="text-white font-medium"
                        >
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          className="w-full p-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          placeholder="Subject"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="message"
                          className="text-white font-medium"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows={6}
                          className="w-full p-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none resize-none"
                          placeholder="Your message"
                        ></textarea>
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-3 text-lg"
                      >
                        Send Message
                      </Button>
                    </form>
                  </div>

                  {/* Contact Information */}
                  <div>
                    <div className="rounded-xl overflow-hidden shadow-2xl mb-8">
                      <img
                        src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80"
                        alt="Modern office space"
                        className="w-full h-auto object-cover"
                      />
                    </div>

                    <h2 className="text-3xl font-bold mb-6">
                      Contact Information
                    </h2>
                    <p className="text-gray-300 mb-8">
                      Reach out to us directly using the information below.
                    </p>

                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <Mail className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-xl font-semibold mb-2">Email</h3>
                          <a
                            href="mailto:info@digitrans.ai"
                            className="text-gray-300 hover:text-white transition-colors"
                          >
                            info@digitrans.ai
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {showBookingModal && (
        <BookingModal
          isOpen={showBookingModal}
          onClose={() => setShowBookingModal(false)}
          location={selectedLocation}
        />
      )}

      <Footer />
    </div>
  );
}
