import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { MapPin, Phone, Mail, ArrowRight, Calendar, MessageCircle, Rocket, Clock, CheckCircle, Star } from "lucide-react";
import BookingModal from "../BookingModal";
import SEO from "../SEO";

const locations = [
  {
    city: "Dubai",
    country: "UAE",
    address: "Downtown Dubai, UAE",
    phone: "+971 50 205 5733",
    email: "info@digi-trans.org",
    image: "/assets/offices/dubai.webp",
  },
  {
    city: "Paris",
    country: "France",
    address: "Paris, France",
    phone: "+33 6 13 70 97 58",
    email: "info@digi-trans.org",
    image: "/assets/offices/paris.webp",
  },
  {
    city: "London",
    country: "UK",
    address: "London, UK",
    phone: "+44 777 11 51 435",
    email: "info@digi-trans.org",
    image: "/assets/offices/london.webp",
  },
  {
    city: "Casablanca",
    country: "Morocco",
    address: "Casablanca, Morocco",
    phone: "+212 6 67 19 71 88",
    email: "info@digi-trans.org",
    image: "/assets/offices/casa.webp",
  },
];

const contactOptions = [
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Free Strategy Call",
    description: "30-minute consultation to discuss your SaaS idea and roadmap",
    cta: "Book Free Call",

    color: "purple",
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "MVP Demo Request", 
    description: "See how we've built successful SaaS products for other founders",
    cta: "Request Demo",
    color: "blue",
  },
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "Quick Question",
    description: "Have a specific question? Get a quick response from our team",
    cta: "Send Message",
    color: "indigo",
  },
];

const whyChooseUs = [
  "8-12 week MVP delivery guarantee",
  "80% of our MVPs raise funding",
  "50+ successful SaaS launches",
  "99.9% uptime track record",
  "SOC 2 & ISO 27001 compliant",
  "Dedicated EMEA team",
];

export default function Contact() {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedContactType, setSelectedContactType] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="Contact Digitrans | Free SaaS Development Consultation"
        description="Ready to build your SaaS product? Book a free consultation with our EMEA team. 8-12 week MVP delivery, 80% funding success rate, 50+ launches."
        canonicalUrl="/contact"
        keywords={[
          "SaaS development consultation",
          "MVP development quote",
          "SaaS development contact",
          "technical co-founder consultation",
          "SaaS product development quote",
          "startup development consultation",
        ]}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-purple-900/10 rounded-full filter blur-[120px] -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-blue-900/10 rounded-full filter blur-[120px] -z-10"></div>
        
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <span className="inline-block mb-4 px-4 py-1 bg-purple-900/40 text-purple-300 text-sm rounded-full border border-purple-500/30">
              Ready to Build Your SaaS?
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-400">
              Let's Turn Your Idea Into Reality
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join 50+ successful SaaS founders who've built and scaled their products with our help. 
              Book a free consultation to discuss your project and get expert guidance.
            </p>
            
            {/* Trust signals */}
            <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-green-400" />
                <span>8-12 Week Delivery</span>
              </div>
              <div className="w-px h-4 bg-gray-600"></div>
              <div className="flex items-center gap-2">
                <Rocket className="w-4 h-4 text-green-400" />
                <span>80% Funding Success</span>
              </div>
              <div className="w-px h-4 bg-gray-600"></div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-green-400" />
                <span>98% Client Satisfaction</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {contactOptions.map((option, index) => (
              <motion.div
                key={option.title}
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative"
              >

                <Card className={`p-8 h-full bg-gradient-to-br from-gray-900/80 via-${option.color}-900/20 to-gray-900/80 backdrop-blur-sm border border-${option.color}-500/20 hover:border-${option.color}-400/40 transition-all duration-300 text-center group cursor-pointer`}>
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-${option.color}-600/30 to-${option.color}-700/30 flex items-center justify-center text-${option.color}-400 group-hover:scale-110 transition-transform duration-300`}>
                    {option.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{option.title}</h3>
                  <p className="text-gray-300 mb-6">{option.description}</p>
                  <Button
                    className={`w-full bg-gradient-to-r from-${option.color}-600 to-${option.color}-700 hover:from-${option.color}-700 hover:to-${option.color}-800 text-white transition-all duration-300 group`}
                    onClick={() => {
                      setSelectedContactType(option);
                      setShowBookingModal(true);
                    }}
                  >
                    {option.cta}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-indigo-900/20 backdrop-blur-sm rounded-2xl border border-blue-500/10 p-8">
              <h3 className="text-2xl font-bold text-white text-center mb-8">Why SaaS Founders Choose Digitrans</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {whyChooseUs.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Offices Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet Us Across EMEA
            </h2>
            <p className="text-xl text-gray-300">
              Local presence with global expertise. Our teams across Europe, Middle East, and Africa 
              are ready to help you build your SaaS product.
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
                <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-indigo-900/20 border border-blue-500/10 backdrop-blur-sm hover:border-blue-400/20">
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
                      Book SaaS Consultation
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-gradient-to-br from-gray-950 via-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Card className="p-8 bg-gray-900/50 backdrop-blur-sm border border-blue-800/30">
              <div className="mb-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl text-white font-light leading-relaxed mb-6">
                  "Digitrans transformed our MVP idea into a market-ready SaaS platform in just 10 weeks. 
                  We've already secured €2M in funding and onboarded 500+ customers. They didn't just build 
                  our product - they became our strategic partner."
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img 
                      src="/images/testimonials/ayoub.jpeg" 
                      alt="Marcus Weber" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <p className="text-white font-medium">Marcus Weber</p>
                    <p className="text-purple-300 text-sm">CEO & Founder, TechFlow SaaS</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {showBookingModal && (
        <BookingModal
          open={showBookingModal}
          onOpenChange={() => setShowBookingModal(false)}
          title={selectedContactType ? selectedContactType.title : `Book a Meeting in ${selectedLocation?.city || 'our office'}`}
          description={selectedContactType ? 
            selectedContactType.description : 
            `Schedule a meeting at our ${selectedLocation?.city || ''} location to discuss your SaaS project.`}
        />
      )}

      <Footer />
    </div>
  );
}
