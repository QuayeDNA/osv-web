import { ReactNode, useEffect } from 'react';

interface ScrollResetterProps {
  children: ReactNode;
}

/**
 * ScrollResetter component - Forces the page to stay at the top on initial load
 * and blocks automatic scrolling for a short period to prevent unwanted page jumps
 */
const ScrollResetter: React.FC<ScrollResetterProps> = ({ children }) => {
  useEffect(() => {
    // Force scroll to top on initial load
    window.scrollTo(0, 0);
    
    // Block any scroll attempts for the first second after page load
    const blockScroll = (e: Event) => {
      e.preventDefault();
      window.scrollTo(0, 0);
    };
    
    window.addEventListener('scroll', blockScroll, { passive: false });
    
    // Remove the scroll blocker after 1 second
    const timer = setTimeout(() => {
      window.removeEventListener('scroll', blockScroll);
    }, 1000);
    
    return () => {
      window.removeEventListener('scroll', blockScroll);
      clearTimeout(timer);
    };
  }, []);
  
  return <>{children}</>;
};

export default ScrollResetter;