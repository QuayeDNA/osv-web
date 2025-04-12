import { useState, useEffect, ImgHTMLAttributes } from 'react';

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  blurDataUrl?: string; // For low-res placeholder
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  sizes = '100vw',
  quality = 75,
  blurDataUrl,
  ...rest
}) => {
  const [isLoaded, setIsLoaded] = useState(priority);
  const [imgSrc, setImgSrc] = useState(priority ? src : blurDataUrl ?? 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==');

  // Generate srcSet for responsive images
  const generateSrcSet = () => {
    if (!src) return '';
    
    // Extract file extension
    const fileExtension = src.split('.').pop() ?? 'jpg';
    const basePath = src.substring(0, src.lastIndexOf('.'));
    
    return [320, 640, 960, 1280, 1920]
      .map(size => `${basePath}-${size}.${fileExtension}?q=${quality} ${size}w`)
      .join(', ');
  };

  useEffect(() => {
    if (!priority) {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImgSrc(src);
        setIsLoaded(true);
      };
    }
  }, [src, priority]);

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ aspectRatio: width && height ? `${width}/${height}` : 'auto' }}>
      <img
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        sizes={sizes}
        srcSet={priority ? generateSrcSet() : undefined}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-60'} ${className}`}
        onLoad={() => setIsLoaded(true)}
        {...rest}
      />
      
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
    </div>
  );
};

export default OptimizedImage;