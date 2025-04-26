import { useEffect } from "react";
import { motion } from "framer-motion";
import { Dumbbell, Activity } from "lucide-react";
import { 
  FaBasketball,  
  FaPersonSwimming,
  FaVolleyball
} from "react-icons/fa6";
import { IoIosTennisball } from "react-icons/io";
import { BsDiamondHalf } from "react-icons/bs";
import { TbYinYang } from "react-icons/tb";
import AOS from "aos";
import "aos/dist/aos.css";
import { updateMetaTags, pageSeoData } from "../utils/seo-utils";

// Import section components
import AboutSection from "../components/sports/AboutSection";
import ProgramsSection from "../components/sports/ProgramsSection";
import TeamSection from "../components/sports/TeamSection";
import EventsSection from "../components/sports/EventsSection";
import GallerySection from "../components/sports/GallerySection";

const SportsClub = () => {
  useEffect(() => {
    // Apply SEO meta tags for Sports Club page
    updateMetaTags({
      ...pageSeoData.sportsClub,
      // Enhanced meta description for better SEO
      description: "Osuele Sports Club offers world-class boxing and football training in Accra, Ghana. Join our elite programs led by professional coaches. Sign up today!",
    });

    // Initialize AOS for animations
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });

    // Add JSON-LD structured data for better SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "SportsActivityLocation",
      "name": "Osuele Sports Club",
      "description": "Premier boxing and football club in Accra offering professional training programs and community sports events",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Athletic Avenue",
        "addressLocality": "East Legon",
        "addressRegion": "Accra",
        "addressCountry": "Ghana"
      },
      "openingHours": "Mo-Fr 06:00-22:00, Sa 08:00-20:00, Su 10:00-18:00",
      "telephone": "+233 20 123 4567",
      "image": "/images/sports/sports-hero.jpg",
      "url": window.location.href
    };

    // Add structured data script to head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Clean up function to remove the script when component unmounts
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      {/* Dynamic Hero Section with parallax and motion effects */}
      <section className="relative h-[100vh] flex items-center justify-center bg-primary overflow-hidden" aria-labelledby="hero-heading">
        {/* Dynamic background with parallax effect */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/90 z-10"></div>
          <div className="absolute inset-0 bg-[url('/images/sports/sports-hero.jpg')] bg-cover bg-center opacity-60 transform scale-105 motion-safe:animate-subtle-zoom"></div>
        </div>
        
        {/* Animated geometric shapes for visual interest */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-10 pointer-events-none">
          {/* Large circle */}
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full border-2 border-accent/20 animate-rotate-slow"></div>
          {/* Small circles */}
          <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-accent/10 animate-float"></div>
          <div className="absolute bottom-1/4 right-1/3 w-24 h-24 rounded-full bg-accent/5 animate-float-delayed"></div>
          {/* Abstract shapes */}
          <div className="absolute left-10 top-1/3 opacity-20 animate-pulse-slow">
            <BsDiamondHalf className="w-28 h-28 text-white" />
          </div>
          <div className="absolute right-10 bottom-1/3 opacity-20 animate-float-slow">
            <TbYinYang className="w-32 h-32 text-white" />
          </div>
        </div>
        
        {/* Sport icons animated floating in the background */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          {/* Basketball */}
          <div className="absolute right-[15%] top-[20%] opacity-15 animate-bounce-slow">
            <FaBasketball className="w-28 h-28 text-white" />
          </div>
          
          {/* Tennis */}
          <div className="absolute left-[10%] bottom-[25%] opacity-15 animate-float-delayed">
            <IoIosTennisball className="w-32 h-32 text-white" />
          </div>
          
          {/* Volleyball */}
          <div className="absolute left-[25%] top-[30%] opacity-15 animate-pulse-slow">
            <FaVolleyball className="w-24 h-24 text-white" />
          </div>
          
          {/* Swimming */}
          <div className="absolute right-[25%] bottom-[30%] opacity-15 animate-float-slow">
            <FaPersonSwimming className="w-28 h-28 text-white" />
          </div>
        </div>
        
        {/* Main content */}
        <div className="container mx-auto px-4 z-20 relative">
          <div className="flex flex-col items-center">
            {/* Dynamic text animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-5xl"
            >
              <div className="relative inline-block mb-4">
                <span className="absolute -left-3 -top-3 w-10 h-10 border-l-4 border-t-4 border-accent opacity-80"></span>
                <span className="absolute -right-3 -top-3 w-10 h-10 border-r-4 border-t-4 border-accent opacity-80"></span>
                <h1 id="hero-heading" className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-2 tracking-tight">
                  <span className="inline-block">
                    Osuele <span className="text-accent relative inline-block animate-pulse-slow">Sports</span>
                  </span>
                </h1>
                <span className="absolute -left-3 -bottom-3 w-10 h-10 border-l-4 border-b-4 border-accent opacity-80"></span>
                <span className="absolute -right-3 -bottom-3 w-10 h-10 border-r-4 border-b-4 border-accent opacity-80"></span>
              </div>
              
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-2xl md:text-3xl block font-semibold text-white/90 uppercase tracking-widest mb-5 bg-accent/20 backdrop-blur-sm py-2 px-6 rounded-md"
              >
                MULTI-SPORTS CLUB
              </motion.span>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl md:text-2xl lg:text-3xl mb-10 text-white/90 font-light max-w-3xl mx-auto"
              >
                Excel in <span className="font-semibold text-accent">basketball</span>, <span className="font-semibold text-accent">tennis</span>, <span className="font-semibold text-accent">swimming</span>, <span className="font-semibold text-accent">volleyball</span> and more with expert coaching in world-class facilities
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex flex-wrap justify-center gap-5 mt-8"
              >
                <a 
                  href="#programs" 
                  className="group relative overflow-hidden px-10 py-5 bg-accent text-white rounded-lg font-bold hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 transform hover:-translate-y-1 duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="flex items-center relative z-10">
                    <Dumbbell className="mr-3 w-5 h-5 group-hover:rotate-12 transition-transform" />
                    Explore Programs
                  </span>
                </a>
                <a 
                  href="#programs"
                  className="group relative overflow-hidden px-10 py-5 bg-transparent text-white border-2 border-white rounded-lg font-bold hover:bg-white/10 transition-all shadow-lg transform hover:-translate-y-1 duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="flex items-center relative z-10">
                    <Activity className="mr-3 w-5 h-5 group-hover:rotate-12 transition-transform" />
                    Join Today
                  </span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll indicator - fancier version */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col items-center">
            <span className="text-white/70 text-sm mb-2 animate-pulse">SCROLL DOWN</span>
            <div className="w-8 h-14 border-2 border-white/50 rounded-full flex justify-center relative">
              <div className="w-2 h-2 bg-accent rounded-full animate-scroll-bounce mt-2 shadow-glow"></div>
            </div>
          </div>
        </div>

        {/* Stats strip at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-primary/90 via-primary to-primary/90 backdrop-blur-md py-3 z-20 border-t border-white/10">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center gap-4 md:gap-0 md:justify-between text-white">
              <div className="px-5 flex items-center">
                <div className="text-accent text-4xl font-bold mr-3">15+</div>
                <div className="text-white/80 text-sm">Sports & Activities</div>
              </div>
              <div className="px-5 flex items-center">
                <div className="text-accent text-4xl font-bold mr-3">20+</div>
                <div className="text-white/80 text-sm">Professional Coaches</div>
              </div>
              <div className="px-5 flex items-center">
                <div className="text-accent text-4xl font-bold mr-3">1,500+</div>
                <div className="text-white/80 text-sm">Active Members</div>
              </div>
              <div className="px-5 flex items-center">
                <div className="text-accent text-4xl font-bold mr-3">25+</div>
                <div className="text-white/80 text-sm">Annual Events</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Components with proper section IDs */}
      <div id="about">
        <AboutSection />
      </div>
      <div id="programs">
        <ProgramsSection />
      </div>
      <div id="team">
        <TeamSection />
      </div>
      <div id="events">
        <EventsSection />
      </div>
      <div id="gallery">
        <GallerySection />
      </div>

      {/* Call to Action */}
      <section id="contact" className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            data-aos="fade-up"
          >
            Join the Osuele Sports Community
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto mb-8 text-white/90"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Experience world-class facilities, expert coaching, and a vibrant
            sports community.
          </p>
          <div
            className="flex flex-wrap justify-center gap-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <a 
              href="/contact" 
              className="px-8 py-3 bg-accent text-white rounded-md font-semibold hover:bg-accent/90 transition-colors"
            >
              Become a Member
            </a>
            <a 
              href="/contact" 
              className="px-8 py-3 bg-transparent text-white border-2 border-white rounded-md font-semibold hover:bg-white/10 transition-colors"
            >
              Schedule a Visit
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default SportsClub;
