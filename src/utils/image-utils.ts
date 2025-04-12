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
 * Creates a low-quality image placeholder based on the image path
 * This implementation generates a visually meaningful placeholder representing the image category
 */
export const createPlaceholder = (path: string): string => {
  // Configuration object for different image categories
  interface PlaceholderConfig {
    color: string;
    pattern?: string;
    aspectRatio?: number;
  }
  
  // Get placeholder configuration based on image path
  const getConfigForPath = (imagePath: string): PlaceholderConfig => {
    // Default configuration
    const config: PlaceholderConfig = {
      color: '#f0f0f0',
      aspectRatio: 16/9
    };
    
    // Project images configuration
    if (imagePath.includes('/projects/')) {
      if (imagePath.includes('telecom')) {
        config.color = '#e6f7ff'; // Light blue for telecom
        config.pattern = 'network';
      } 
      else if (imagePath.includes('civil')) {
        config.color = '#f6ffed'; // Light green for civil
        config.pattern = 'construction';
      } 
      else if (imagePath.includes('construction')) {
        config.color = '#fff7e6'; // Light orange for construction
        config.pattern = 'building';
      } 
      else if (imagePath.includes('supplies')) {
        config.color = '#f9f0ff'; // Light purple for supplies
        config.pattern = 'supplies';
      } 
      else if (imagePath.includes('equipment')) {
        config.color = '#fff2e8'; // Light coral for equipment
        config.pattern = 'equipment';
      }
    } 
    // Services images configuration
    else if (imagePath.includes('/services/')) {
      config.color = '#e6f7ff'; // Light blue for services
      config.pattern = 'service';
    } 
    // Sports images configuration
    else if (imagePath.includes('/sports/')) {
      config.color = '#e6fffb'; // Light teal for sports
      config.pattern = 'sports';
    } 
    // Hero images and backgrounds
    else if (imagePath.includes('hero') || imagePath.includes('bg')) {
      config.color = '#000a14'; // Dark blue for hero images
      config.pattern = 'background';
    }
    
    return config;
  };
  
  // Generate pattern SVG element based on type
  const generatePattern = (patternType?: string): string => {
    if (!patternType) return '';
    
    switch (patternType) {
      case 'network': 
        return `<path d="M2,2 L14,2 M2,7 L14,7 M8,2 L8,7" stroke="#99ccff" stroke-width="0.5" fill="none" />
                <circle cx="4" cy="4" r="1" fill="#99ccff" />
                <circle cx="12" cy="4" r="1" fill="#99ccff" />
                <circle cx="8" cy="4" r="1" fill="#99ccff" />`;
      
      case 'construction':
        return `<path d="M0,9 L16,0 M4,9 L16,4 M8,9 L16,8" stroke="#b7eb8f" stroke-width="0.5" fill="none" />`;
      
      case 'building':
        return `<rect x="4" y="3" width="8" height="6" stroke="#ffd591" stroke-width="0.5" fill="none" />
                <rect x="6" y="6" width="2" height="3" fill="#ffd591" />`;
      
      case 'supplies':
        return `<rect x="5" y="3" width="6" height="4" stroke="#d3adf7" stroke-width="0.5" fill="none" />
                <path d="M5,3 L11,3 L11,7 L5,7 Z" stroke="#d3adf7" stroke-width="0.5" fill="none" />`;
      
      case 'equipment':
        return `<circle cx="8" cy="4.5" r="3" stroke="#ffbb96" stroke-width="0.5" fill="none" />
                <path d="M6,4.5 L10,4.5 M8,2.5 L8,6.5" stroke="#ffbb96" stroke-width="0.5" />`;
      
      case 'service':
        return `<path d="M4,3 C6,2 10,2 12,3 C10,4 6,4 4,3 Z M4,6 C6,5 10,5 12,6 C10,7 6,7 4,6 Z" stroke="#91d5ff" stroke-width="0.5" fill="none" />`;
      
      case 'sports':
        return `<circle cx="8" cy="4.5" r="3" stroke="#87e8de" stroke-width="0.5" fill="none" />
                <path d="M5.5,2 L10.5,7 M5.5,7 L10.5,2" stroke="#87e8de" stroke-width="0.5" />`;
      
      case 'background':
        return `<path d="M0,7 L16,7 M0,2 L16,2" stroke="#003a8c" stroke-width="0.5" opacity="0.3" />`;
      
      default:
        return '';
    }
  };
  
  const config = getConfigForPath(path);
  const pattern = generatePattern(config.pattern);
  
  // Create an SVG placeholder with the appropriate color and pattern
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 9" width="160" height="90">
      <rect width="16" height="9" fill="${config.color}" />
      ${pattern}
      <text x="8" y="8" font-family="Arial" font-size="1" fill="rgba(0,0,0,0.5)" text-anchor="middle">Loading...</text>
    </svg>
  `;
  
  // Minify the SVG by removing extra whitespace
  const minifiedSvg = svg.replace(/\s+/g, ' ').trim();
  
  // Convert SVG to base64
  const encodedSvg = btoa(minifiedSvg);
  
  // Return data URL with the appropriate MIME type
  return `data:image/svg+xml;base64,${encodedSvg}`;
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