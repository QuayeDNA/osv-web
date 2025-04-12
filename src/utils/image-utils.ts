/**
 * Utility functions for optimized image loading throughout the application
 */

/**
 * Get image dimensions synchronously from path naming convention
 * Expects images to have dimensions in filename: image-800x600.jpg
 */
export const getImageDimensions = (src: string): { width: number; height: number } | null => {
  try {
    // Check if dimensions are in the filename (e.g., image-800x600.jpg)
    const dimensionMatch = src.match(/[_-](\d+)x(\d+)\./);
    if (dimensionMatch && dimensionMatch.length === 3) {
      return {
        width: parseInt(dimensionMatch[1], 10),
        height: parseInt(dimensionMatch[2], 10)
      };
    }
    return null;
  } catch (error) {
    console.error('Error parsing image dimensions:', error);
    return null;
  }
};

/**
 * Generates appropriate sizes attribute for responsive images
 */
export const getImageSizes = (containerClassName: string): string => {
  // Default fallback
  if (!containerClassName) return '100vw';
  
  // Parse Tailwind classes to generate sizes attribute
  if (containerClassName.includes('md:w-1/2')) {
    return '(min-width: 768px) 50vw, 100vw';
  }
  if (containerClassName.includes('md:w-1/3')) {
    return '(min-width: 768px) 33vw, 100vw';
  }
  if (containerClassName.includes('lg:w-1/4')) {
    return '(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw';
  }
  
  return '100vw';
};

/**
 * Creates a low-quality image placeholder
 * In a real project, this would be precomputed at build time
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const createPlaceholder = (path: string): string => {
  // Placeholder implementation - in a real app, this would generate 
  // actual tiny blurred images, for now we'll return a blank SVG
  return 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==';
};

/**
 * Determine if an image should be loaded with priority
 * based on its position on the page and viewport
 */
export const shouldPrioritize = (path: string): boolean => {
  // Hero images and above-the-fold content should be prioritized
  if (
    path.includes('hero') || 
    path.includes('logo') || 
    path.includes('banner')
  ) {
    return true;
  }
  
  return false;
};