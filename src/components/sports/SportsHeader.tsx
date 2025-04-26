import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Activity, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SportsHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const initialRender = useRef(true);

  // Updated paths to match the root URL structure with Home as first item
  const mainNavLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Programs', path: '/#programs' },
    { name: 'Team', path: '/#team' },
    { name: 'Events', path: '/#events' },
    { name: 'Gallery', path: '/#gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  // Update active section based on hash and path
  useEffect(() => {
    if (location.hash) {
      // Remove the # character
      setActiveSection(location.hash.substring(1));
      
      // Don't auto-scroll on initial page load
      if (initialRender.current) {
        initialRender.current = false;
        return;
      }
    } else if (location.pathname === '/' || location.pathname === '') {
      // Default to 'home' section if no hash on home page
      setActiveSection('home');
    }
  }, [location.hash, location.pathname]);

  // Add scroll event listeners to track active section
  useEffect(() => {
    // Disable the automatic hash updates on scroll for now
    // This was causing the unwanted auto-scrolling behavior
    
    // Original code commented out to prevent auto-scrolling issues
    /*
    const handleScroll = () => {
      if (location.pathname !== '/' && location.pathname !== '') return;
      
      const sections = ['about', 'programs', 'team', 'events', 'gallery'];
      
      // Find which section is currently in view
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section is in view (with some offset for better UX)
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            // Update URL hash without scrolling (to avoid scroll jump)
            window.history.replaceState(null, '', `/#${section}`);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    */
  }, [location.pathname]);

  // Scroll to top when main route changes (not hash changes)
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    
    // If it's the home link with no hash, scroll to top
    if (href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
      // Clear any hash from the URL
      if (window.location.hash) {
        history.pushState("", document.title, window.location.pathname);
      }
      return;
    }
    
    // Handle smooth scrolling for hash links
    if (href.includes('#')) {
      const id = href.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Update active section
        setActiveSection(id);
      }
    }
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Main Navigation */}
      <div 
        className={`transition-all duration-300 
        ${isScrolled 
          ? 'bg-gradient-to-r from-primary to-primary/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-gradient-to-r from-primary to-primary/90 py-4'}`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link 
            to="/" 
            onClick={() => handleNavClick('/')} 
            className="flex items-center group"
          >
            <div className="w-12 h-12 mr-3 p-1 flex items-center justify-center transition-transform group-hover:scale-110 shadow-md">
              <img src="/logo.svg" alt="Osuele Sports Logo" className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold text-white">
                Osuele Sports
              </span>
              <span className="text-xs text-accent/90 font-medium -mt-1">MULTI-SPORTS CLUB</span>
            </div>
          </Link>

          <motion.nav 
            className="hidden xl:flex space-x-2 2xl:space-x-4"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {mainNavLinks.map((link) => (
              <motion.div key={link.path} variants={itemVariants}>
                <Link
                  to={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`font-medium px-3 xl:px-4 py-2 rounded-md transition-all block hover:bg-white/10 whitespace-nowrap text-white hover:text-accent relative after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:w-0 ${
                    (link.path === '/' && activeSection === 'home') || 
                    (link.path.includes('#') && activeSection === link.path.split('#')[1]) 
                      ? 'text-accent after:w-3/4 after:h-0.5 after:bg-accent' 
                      : ''
                  } hover:after:w-3/4 after:h-0.5 after:bg-accent after:transition-all`}
                >
                  {link.name === 'Home' && <Home className="inline-block mr-1 w-4 h-4" />} {link.name}
                </Link>
              </motion.div>
            ))}
            
            <motion.div variants={itemVariants}>
              <Link 
                to="/contact"
                className="ml-2 px-4 xl:px-5 py-2 bg-accent text-white rounded-md font-medium hover:bg-accent/90 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-transform whitespace-nowrap flex items-center"
              >
                <Activity className="mr-2 w-4 h-4" />
                Join Now
              </Link>
            </motion.div>
          </motion.nav>

          <button 
            className="xl:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isMenuOpen ? 'close' : 'open'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="xl:hidden bg-primary absolute top-full left-0 right-0 shadow-xl"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col divide-y divide-white/10">
              {mainNavLinks.map((link) => (
                <div key={link.path} className="py-2">
                  <Link
                    to={link.path}
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleNavClick(link.path);
                    }}
                    className={`block font-medium py-2 transition-colors text-white hover:text-accent flex items-center ${
                      (link.path === '/' && activeSection === 'home') || 
                      (link.path.includes('#') && activeSection === link.path.split('#')[1]) 
                        ? 'text-accent' 
                        : ''
                    }`}
                  >
                    {link.name === 'Home' && <Home className="mr-2 w-4 h-4" />} {link.name}
                  </Link>
                </div>
              ))}
              
              <div className="py-2 mt-2 flex items-center justify-center">
                <Link 
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full text-center px-5 py-2 bg-accent text-white rounded-md font-medium hover:bg-accent/90 transition-colors flex items-center justify-center"
                >
                  <Activity className="mr-2 w-4 h-4" />
                  Join Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default SportsHeader;