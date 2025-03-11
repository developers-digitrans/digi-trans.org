import React from "react";
import { HelmetProvider } from "react-helmet-async";

interface SEOWrapperProps {
  children: React.ReactNode;
}

// This component wraps the entire application to provide helmet context
export default function SEOWrapper({ children }: SEOWrapperProps) {
  return <HelmetProvider>{children}</HelmetProvider>;
}
