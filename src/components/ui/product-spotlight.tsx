import React from "react";

interface Product {
  title: string;
  description: string;
  image: string;
  url: string;
}

interface ProductSpotlightProps {
  products: Product[];
}

// Completely disabled - will never show any popups
export function ProductSpotlight({ products }: ProductSpotlightProps) {
  // Always return null to prevent rendering
  return null;
}
