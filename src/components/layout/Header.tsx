import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import OptimizedImage from '../ui/OptimizedImage';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Sports Club', path: '/sports-club' },
    { name: 'Contact', path: '/contact' },
  ];

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('header')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

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

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 
      ${isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' 
        : 'bg-white/95 py-4'}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <div className="w-12 h-12 mr-3 transition-transform group-hover:scale-110">
            <OptimizedImage
              src="/images/logo.svg"
              alt="Osuele Ventures Logo"
              width={48}
              height={48}
              priority={true}
              className="w-full h-full"
            />
          </div>
          <span className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Osuele Ventures
          </span>
        </Link>

        <motion.nav 
          className="hidden xl:flex space-x-2 2xl:space-x-4"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {navLinks.map((link) => (
            <motion.div key={link.path} variants={itemVariants}>
              <NavLink
                to={link.path}
                className={({ isActive }) => 
                  `font-medium px-3 xl:px-4 py-2 rounded-md transition-all block hover:bg-light whitespace-nowrap ${
                    isActive 
                      ? 'text-accent relative after:absolute after:bottom-0 after:left-3 after:right-3 xl:after:left-4 xl:after:right-4 after:h-0.5 after:bg-accent' 
                      : 'text-primary'
                  }`
                }
              >
                {link.name}
              </NavLink>
            </motion.div>
          ))}
          
          <motion.div variants={itemVariants}>
            <Link 
              to="/contact" 
              className="ml-2 px-4 xl:px-5 py-2 bg-accent text-white rounded-md font-medium hover:bg-accent/90 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-transform whitespace-nowrap"
            >
              Get a Quote
            </Link>
          </motion.div>
        </motion.nav>

        <button 
          className="xl:hidden text-primary p-2 rounded-md hover:bg-light/80 transition-colors"
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

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="xl:hidden bg-white absolute top-full left-0 right-0 shadow-xl"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col divide-y divide-gray-100">
              {navLinks.map((link) => (
                <div key={link.path} className="py-2">
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => 
                      `block font-medium py-2 transition-colors ${
                        isActive ? 'text-accent' : 'text-primary'
                      }`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                </div>
              ))}
              
              <div className="py-2 mt-2 flex items-center justify-center">
                <Link 
                  to="/contact" 
                  className="block w-full text-center px-5 py-2 bg-accent text-white rounded-md font-medium hover:bg-accent/90 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
