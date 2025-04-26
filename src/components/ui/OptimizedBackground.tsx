import { useEffect, useState } from 'react';

interface OptimizedBackgroundProps {
  src: string;
  className?: string;
  children?: React.ReactNode;
  overlayClassName?: string;
  style?: React.CSSProperties;
}

const OptimizedBackground: React.FC<OptimizedBackgroundProps> = ({
  src,
  className = '',
  children,
  overlayClassName = '',
  style = {},
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState('');
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Reset states when src changes
    setIsLoaded(false);
    setHasError(false);
    
    // Ensure we have a valid src
    if (!src) {
      setHasError(true);
      console.error('OptimizedBackground: No src provided');
      return;
    }

    // Normalize the path - ensure it starts with a slash if it's a local path
    const normalizedSrc = src.startsWith('http') || src.startsWith('/') 
      ? src 
      : `/${src}`;
    
    console.log('OptimizedBackground loading image:', normalizedSrc);
    
    const img = new Image();
    img.src = normalizedSrc;
    
    img.onload = () => {
      console.log('OptimizedBackground: Image loaded successfully:', normalizedSrc);
      setImageSrc(normalizedSrc);
      setIsLoaded(true);
    };
    
    img.onerror = (e) => {
      console.error(`Failed to load background image: ${normalizedSrc}`, e);
      setHasError(true);
    };

    // Clean up
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return (
    <div 
      className={`relative ${className}`}
      style={style}
    >
      {/* Low-quality placeholder with blur effect */}
      <div 
        className={`absolute inset-0 transition-opacity duration-500 ${hasError ? 'bg-gray-300' : 'bg-gray-200'}`}
        style={{ 
          opacity: isLoaded ? 0 : 1,
        }}
      />
      
      {/* Actual background image */}
      {!hasError && (
        <div 
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            backgroundImage: `url("${imageSrc}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: isLoaded ? 1 : 0,
          }}
          aria-hidden="true"
        />
      )}
      
      {/* Optional overlay */}
      {overlayClassName && (
        <div className={`absolute inset-0 ${overlayClassName}`} />
      )}
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default OptimizedBackground;