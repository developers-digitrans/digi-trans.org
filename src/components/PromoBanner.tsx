import React from "react";
import { useNavigate } from "react-router-dom";

export default function PromoBanner() {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 right-0 w-full bg-gradient-to-r from-purple-600 via-sky-500 to-blue-600 animate-gradient-x z-50 bg-[length:200%_200%]">
      <div className="container mx-auto px-4 py-3 text-center text-white flex items-center justify-center gap-2">
        Try our Human Resources Management platform "Efficio", and start
        building your remote team.
        <button
          onClick={() => navigate("/products/ember")}
          className="text-white font-semibold hover:text-purple-200 transition-colors underline underline-offset-2"
        >
          Start here →
        </button>
      </div>
    </div>
  );
}
