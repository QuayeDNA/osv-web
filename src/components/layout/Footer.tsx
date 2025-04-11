import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Check if we should show the scroll to top button
  const handleScroll = () => {
    if (window.scrollY > 500) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would actually handle the subscription logic
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Animation variants
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
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const socialVariants = {
    hover: { scale: 1.1, rotate: 5 }
  };

  return (
    <footer className="relative bg-primary text-white pt-20 pb-8 border-t-2 border-white/10">

      <div className="container mx-auto px-4">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white mb-6 relative inline-block after:content-[''] after:absolute after:h-1 after:w-1/2 after:bg-accent after:left-0 after:-bottom-2">
              Osuele Ventures
            </h3>
            <p className="mb-6 text-white/80 leading-relaxed">
              A multidisciplinary business providing telecommunication services, civil engineering, 
              construction, and more with excellence and innovation at our core.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Facebook size={20} />, href: "#" },
                { icon: <Twitter size={20} />, href: "#" },
                { icon: <Instagram size={20} />, href: "#" },
                { icon: <Linkedin size={20} />, href: "#" }
              ].map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.href} 
                  className="bg-white/10 p-2 rounded-full hover:bg-accent transition-all duration-300"
                  whileHover="hover"
                  variants={socialVariants}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-white mb-6 relative inline-block after:content-[''] after:absolute after:h-1 after:w-1/2 after:bg-accent after:left-0 after:-bottom-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Projects", path: "/projects" },
                { name: "Sports Club", path: "/sports-club" },
                { name: "Contact", path: "/contact" }
              ].map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Link 
                    to={link.path} 
                    className="hover:text-accent transition-colors flex items-center group"
                  >
                    <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-white mb-6 relative inline-block after:content-[''] after:absolute after:h-1 after:w-1/2 after:bg-accent after:left-0 after:-bottom-2">
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                "Telecommunication Services",
                "Supply of General Goods",
                "Civil Engineering",
                "Building Construction",
                "Telecommunication Equipment",
                "Sports Club Business"
              ].map((service, index) => (
                <motion.li 
                  key={index} 
                  className="hover:text-accent transition-colors flex items-center group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Link to={`/services#${service.toLowerCase().replace(/\s+/g, '-')}`}>
                    {service}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter and Contact */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-white mb-6 relative inline-block after:content-[''] after:absolute after:h-1 after:w-1/2 after:bg-accent after:left-0 after:-bottom-2">
              Stay Updated
            </h3>
            <p className="mb-4 text-white/80">
              Subscribe to our newsletter for the latest news and updates.
            </p>
            <form onSubmit={handleSubmit} className="mb-8">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="bg-white/10 text-white py-2 px-4 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-accent"
                  required
                />
                <button
                  onClick={handleSubmit}
                  disabled={!email}
                  title='Subscribe'
                  aria-label='Subscribe'
                  type="submit"
                  className="bg-accent hover:bg-accent/90 text-white py-2 px-4 rounded-r-md transition-colors"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
              <AnimatePresence>
                {subscribed && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-accent mt-2"
                  >
                    Thank you for subscribing!
                  </motion.p>
                )}
              </AnimatePresence>
            </form>

            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <motion.li 
                className="flex items-start group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MapPin className="mr-3 h-5 w-5 text-accent shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-white/80">123 Business Avenue, Accra, Ghana</span>
              </motion.li>
              <motion.li 
                className="flex items-center group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Phone className="mr-3 h-5 w-5 text-accent shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-white/80">+233 (0) 123 456 789</span>
              </motion.li>
              <motion.li 
                className="flex items-center group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Mail className="mr-3 h-5 w-5 text-accent shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-white/80">info@osueleventures.com</span>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Osuele Ventures. All rights reserved.
          </p>
          <div className="flex space-x-4 text-white/70 text-sm">
            <Link to="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            className="fixed bottom-8 right-8 bg-accent text-white p-3 rounded-full shadow-lg z-50"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
