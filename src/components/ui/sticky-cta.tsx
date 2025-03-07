import React from "react";
import { Button } from "./button";

interface StickyCTAProps {
  onTryEfficio?: () => void;
}

export function StickyCTA({
  onTryEfficio = () => window.open("https://app.getefficio.com", "_blank"),
}: StickyCTAProps) {
  // No popup functionality
  return null;
}
