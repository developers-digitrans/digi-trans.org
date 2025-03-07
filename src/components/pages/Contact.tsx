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
    address: "Downtown Dubai, Business Center",
    phone: "+971 4 123 4567",
    email: "dubai@digitrans.ai",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
  },
  {
    city: "Paris",
    country: "France",
    address: "15 Avenue des Champs-Élysées",
    phone: "+33 1 23 45 67 89",
    email: "paris@digitrans.ai",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
  },
  {
    city: "London",
    country: "UK",
    address: "30 St Mary Axe",
    phone: "+44 20 7123 4567",
    email: "london@digitrans.ai",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
  },
  {
    city: "Casablanca",
    country: "Morocco",
    address: "Marina Business District",
    phone: "+212 5 2234 5678",
    email: "casablanca@digitrans.ai",
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
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 mt-4 group"
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-24 max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-gray-300">
                Have a question or want to learn more about our services? Send
                us a message and we'll get back to you as soon as possible.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-white font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-white font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-white font-medium">
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
                <label htmlFor="message" className="text-white font-medium">
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
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-3 text-lg"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
      <BookingModal
        open={showBookingModal}
        onOpenChange={setShowBookingModal}
        title={
          selectedLocation
            ? `Book a Meeting in ${selectedLocation.city}`
            : "Book a Meeting"
        }
        description={
          selectedLocation
            ? `Schedule a meeting with our team in ${selectedLocation.city}, ${selectedLocation.country}.`
            : "Schedule a meeting with our team."
        }
      />
    </div>
  );
}
