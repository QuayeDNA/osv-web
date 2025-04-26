import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ArrowRight, Send, Trophy, Users, Activity, Dumbbell, Timer } from 'lucide-react';
// Import social icons from react-icons
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
// Import sports icons
import { IoBasketballOutline } from 'react-icons/io5';
import { TbBallTennis } from 'react-icons/tb';

const SportsFooter = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    // In a real app, you would handle the actual subscription process here
    setTimeout(() => setSubscribed(false), 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  // Function to handle smooth scrolling for anchor links
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-primary to-primary/90 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-accent/10 rounded-full -translate-x-1/2 -translate-y-1/2 overflow-hidden"></div>
      <div className="absolute top-20 right-10 w-8 h-8 bg-accent/20 rounded-full overflow-hidden"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-accent/10 rounded-full overflow-hidden"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent/10 rounded-full translate-x-1/2 translate-y-1/2 overflow-hidden"></div>
      
      {/* Sports Equipment Icon */}
      <div className="absolute top-16 right-16 opacity-5">
        <IoBasketballOutline className="w-64 h-64 text-white" />
      </div>
      
      {/* Tennis Racket Icon */}
      <div className="absolute top-40 left-16 opacity-5">
        <TbBallTennis className="w-48 h-48 text-white" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12"
        >
          {/* Club Info */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-white rounded-full p-1 flex items-center justify-center mr-3 shadow-lg">
                <Trophy className="w-8 h-8 text-accent" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold text-white">
                  Osuele Sports
                </h3>
                <span className="text-xs text-accent/90 font-medium">MULTI-SPORTS CLUB</span>
              </div>
            </div>
            <p className="mb-6 text-white/80 leading-relaxed">
              Ghana's premier multi-sports club, providing world-class training facilities, expert coaching, and community programs for basketball, tennis, swimming, athletics, volleyball, and more.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <FaFacebook size={20} />, href: "#", name: "Facebook" },
                { icon: <FaTwitter size={20} />, href: "#", name: "Twitter" },
                { icon: <FaInstagram size={20} />, href: "#", name: "Instagram" },
                { icon: <FaLinkedin size={20} />, href: "#", name: "LinkedIn" }
              ].map((social) => (
                <motion.a 
                  key={social.name}
                  href={social.href} 
                  className="bg-white/10 p-2 rounded-full hover:bg-accent transition-all duration-300"
                  whileHover="hover"
                  variants={socialVariants}
                  aria-label={`Visit our ${social.name} page`}
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
                { name: "About", path: "/#about", icon: <Users size={16} /> },
                { name: "Sports Programs", path: "/#programs", icon: <Dumbbell size={16} /> },
                { name: "Youth Academy", path: "/#programs", icon: <Activity size={16} /> },
                { name: "Team", path: "/#team", icon: <Users size={16} /> },
                { name: "Events", path: "/#events", icon: <Timer size={16} /> },
                { name: "Contact", path: "/contact", icon: <Mail size={16} /> },
                { name: "Legacy Website", path: "/legacy", icon: <ArrowRight size={16} /> }
              ].map((link) => (
                <li key={link.name}>
                  {link.path.includes('#') ? (
                    <a 
                      href={link.path} 
                      onClick={(e) => handleSmoothScroll(e, link.path.split('#')[1])}
                      className="hover:text-accent transition-colors flex items-center group"
                    >
                      <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center mr-3 group-hover:bg-accent/20 transition-colors">
                        {link.icon}
                      </span>
                      <span>{link.name}</span>
                    </a>
                  ) : (
                    <Link 
                      to={link.path} 
                      className="hover:text-accent transition-colors flex items-center group"
                    >
                      <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center mr-3 group-hover:bg-accent/20 transition-colors">
                        {link.icon}
                      </span>
                      <span>{link.name}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Programs */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-white mb-6 relative inline-block after:content-[''] after:absolute after:h-1 after:w-1/2 after:bg-accent after:left-0 after:-bottom-2">
              Training Schedule
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mr-3 shrink-0 mt-0.5">
                  <Dumbbell size={14} />
                </span>
                <div>
                  <span className="font-semibold block">Basketball & Volleyball</span>
                  <span className="text-white/70 text-sm">Mon, Wed, Fri: 6:00AM - 8:00AM & 4:00PM - 7:00PM</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mr-3 shrink-0 mt-0.5">
                  <Activity size={14} />
                </span>
                <div>
                  <span className="font-semibold block">Tennis & Swimming</span>
                  <span className="text-white/70 text-sm">Tue, Thu, Sat: 7:00AM - 9:00AM & 3:00PM - 6:00PM</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mr-3 shrink-0 mt-0.5">
                  <Users size={14} />
                </span>
                <div>
                  <span className="font-semibold block">Youth Programs</span>
                  <span className="text-white/70 text-sm">Mon-Fri: 3:30PM - 5:30PM | Sat: 9:00AM - 12:00PM</span>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter and Contact */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-white mb-6 relative inline-block after:content-[''] after:absolute after:h-1 after:w-1/2 after:bg-accent after:left-0 after:-bottom-2">
              Join Our Community
            </h3>
            <p className="mb-4 text-white/80">
              Subscribe to our newsletter for the latest updates on tournaments, events, and training programs.
            </p>
            <form onSubmit={handleSubscribe} className="mb-8">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-3 bg-white/10 text-white flex-grow rounded-l-md focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
                <button
                  type="submit"
                  className="bg-accent px-4 py-3 rounded-r-md hover:bg-accent/90 transition-colors"
                  aria-label="Subscribe to newsletter"
                >
                  <Send size={20} />
                </button>
              </div>
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
            </form>

            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <MapPin className="mr-3 h-5 w-5 text-accent shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-white/80">123 Athletic Avenue, East Legon, Accra, Ghana</span>
              </li>
              <li className="flex items-center group">
                <Phone className="mr-3 h-5 w-5 text-accent shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-white/80">+233 (0) 123 456 789</span>
              </li>
              <li className="flex items-center group">
                <Mail className="mr-3 h-5 w-5 text-accent shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-white/80">sports@osueleventures.com</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Osuele Sports Club. All rights reserved.
          </p>
          <div className="flex space-x-4 text-white/60 text-sm">
            <Link to="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SportsFooter;