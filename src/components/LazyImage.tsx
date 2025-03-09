import React from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  srcSet?: string;
}

export default function LazyImage({
  src,
  alt,
  width,
  height,
  className = "",
  sizes,
  srcSet,
}: LazyImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading="lazy"
      sizes={sizes}
      srcSet={srcSet}
    />
  );
}
