import React from "react";

interface StickyCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  dismissible?: boolean;
}

export const StickyCTA: React.FC<StickyCTAProps> = () => {
  // Completely disabled - won't show any popups
  return null;
};
