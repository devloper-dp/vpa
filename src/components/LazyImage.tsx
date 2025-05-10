import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: string | number;
  height?: string | number;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className, width, height }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState('');
  const [error, setError] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: '50px 0px'
  });

  useEffect(() => {
    if (inView && !isLoaded && !error) {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImageSrc(src);
        setIsLoaded(true);
      };
      img.onerror = () => {
        setError(true);
      };
    }
  }, [inView, src, isLoaded, error]);

  return (
    <div 
      ref={ref}
      className={`lazy-image-wrapper ${className || ''}`}
      style={{ 
        width: width || '100%',
        height: height || 'auto',
        background: '#f0f0f0'
      }}
    >
      {!isLoaded && !error && (
        <Skeleton
          height={height || '100%'}
          width={width || '100%'}
          baseColor="#f0f0f0"
          highlightColor="#e0e0e0"
        />
      )}
      {error && (
        <div className="error-placeholder">
          Failed to load image
        </div>
      )}
      {imageSrc && !error && (
        <img
          src={imageSrc}
          alt={alt}
          className={`lazy-image ${isLoaded ? 'loaded' : ''}`}
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out'
          }}
          loading="lazy"
        />
      )}
    </div>
  );
};

export default LazyImage;