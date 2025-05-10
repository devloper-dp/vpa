import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface LazyVideoProps {
  src: string;
  poster?: string;
  className?: string;
  width?: string | number;
  height?: string | number;
}

const LazyVideo: React.FC<LazyVideoProps> = ({ src, poster, className, width, height }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: '100px 0px'
  });

  useEffect(() => {
    if (inView && !isLoaded && !error && videoRef.current) {
      videoRef.current.src = src;
      
      const handleCanPlay = () => {
        setIsLoaded(true);
      };
      
      const handleError = () => {
        setError(true);
      };
      
      videoRef.current.addEventListener('canplay', handleCanPlay);
      videoRef.current.addEventListener('error', handleError);
      
      videoRef.current.load();
      
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('canplay', handleCanPlay);
          videoRef.current.removeEventListener('error', handleError);
        }
      };
    }
  }, [inView, isLoaded, src, error]);

  return (
    <div 
      ref={ref} 
      className={`video-wrapper ${className || ''}`}
      style={{ 
        width: width || '100%',
        height: height || 'auto'
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
          Failed to load video
        </div>
      )}
      <video
        ref={videoRef}
        poster={poster}
        controls
        playsInline
        preload="none"
        className={`lazy-video ${isLoaded ? 'loaded' : ''}`}
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
          display: error ? 'none' : 'block'
        }}
      >
        {isLoaded && !error && <source src={src} type="video/mp4" />}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default LazyVideo;