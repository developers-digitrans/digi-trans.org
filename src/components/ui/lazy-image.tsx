import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholderSrc?: string;
  className?: string;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  placeholderSrc,
  className = '',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(placeholderSrc || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iIzFmMWYzZSIvPjwvc3ZnPg==');

  useEffect(() => {
    // Create a new image to preload
    const img = new Image();
    img.src = src;
    
    // When the image is loaded, update the state
    img.onload = () => {
      setCurrentSrc(src);
      setIsLoaded(true);
    };
    
    // Error handling
    img.onerror = () => {
      console.error(`Error loading image: ${src}`);
    };
  }, [src]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0.5 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden"
    >
      <img
        src={currentSrc}
        alt={alt}
        className={`transition-all duration-500 ${className}`}
        loading="lazy"
        {...props}
      />
    </motion.div>
  );
}; 