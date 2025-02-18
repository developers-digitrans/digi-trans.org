import React, { useRef, useEffect } from "react";
import type { Map as LeafletMap } from "leaflet";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { MapPin, Phone, Mail } from "lucide-react";
import Cal, { getCalApi } from "@calcom/embed-react";

const locations = [
  {
    city: "Dubai",
    country: "UAE",
    address: "Downtown Dubai, Business Center",
    phone: "+971 4 123 4567",
    email: "dubai@digitrans.ai",
    coordinates: { lat: 25.2048, lng: 55.2708 },
  },
  {
    city: "Paris",
    country: "France",
    address: "15 Avenue des Champs-Élysées",
    phone: "+33 1 23 45 67 89",
    email: "paris@digitrans.ai",
    coordinates: { lat: 48.8566, lng: 2.3522 },
  },
  {
    city: "London",
    country: "UK",
    address: "30 St Mary Axe",
    phone: "+44 20 7123 4567",
    email: "london@digitrans.ai",
    coordinates: { lat: 51.5074, lng: -0.1278 },
  },
  {
    city: "Casablanca",
    country: "Morocco",
    address: "Marina Business District",
    phone: "+212 5 2234 5678",
    email: "casablanca@digitrans.ai",
    coordinates: { lat: 33.5731, lng: -7.5898 },
  },
];

export default function Contact() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current || typeof window === "undefined") return;

    const L = window.L;
    const map: LeafletMap = L.map(mapRef.current).setView([30, 0], 2);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    locations.forEach((location) => {
      L.marker([location.coordinates.lat, location.coordinates.lng])
        .bindPopup(`${location.city}, ${location.country}`)
        .addTo(map);
    });

    return () => {
      map.remove();
    };
  }, []);

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
            <p className="text-xl text-slate-600">
              With offices across multiple continents, we're ready to serve your
              business needs wherever you are.
            </p>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full h-[400px] rounded-xl overflow-hidden mb-16 shadow-lg"
          >
            <div ref={mapRef} className="w-full h-full" />
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
                <Card className="p-6 h-full hover:shadow-lg transition-shadow bg-gray-900/50 backdrop-blur border-gray-800">
                  <div className="flex items-start gap-4 mb-4">
                    <MapPin className="h-5 w-5 text-blue-500 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-1">
                        {location.city}, {location.country}
                      </h3>
                      <p className="text-slate-600 text-sm">
                        {location.address}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-slate-400" />
                      <span className="text-sm text-slate-600">
                        {location.phone}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-slate-400" />
                      <span className="text-sm text-slate-600">
                        {location.email}
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() =>
                      (window.location.href = `/contact/${location.city.toLowerCase()}`)
                    }
                  >
                    Get in Touch
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Calendar Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-24 max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Schedule a Meeting</h2>
              <p className="text-slate-600">
                Book a 30-minute consultation with our team to discuss your
                project needs.
              </p>
            </div>
            <Card className="p-8 bg-white">
              <Cal
                calLink="your-organization/30min"
                style={{ width: "100%", height: "600px" }}
                config={{
                  theme: "light",
                  layout: "month_view",
                }}
              />
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
