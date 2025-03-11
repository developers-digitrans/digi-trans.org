import React from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  srcSet?: string;
  priority?: boolean;
  fetchpriority?: "high" | "low" | "auto";
  decoding?: "async" | "auto" | "sync";
}

export default function LazyImage({
  src,
  alt,
  width,
  height,
  className = "",
  sizes,
  srcSet,
  priority = false,
  fetchpriority = "auto",
  decoding = "async",
}: LazyImageProps) {
  // If this is a priority image (like hero images or above-the-fold content)
  // we don't want to lazy load it
  const loadingAttribute = priority ? "eager" : "lazy";

  // For priority images, set fetchpriority to high
  const fetchPriorityAttribute = priority ? "high" : fetchpriority;

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={loadingAttribute}
      sizes={sizes}
      srcSet={srcSet}
      fetchpriority={fetchPriorityAttribute}
      decoding={decoding}
    />
  );
}
