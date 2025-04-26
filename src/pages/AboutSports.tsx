import { useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Users } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { updateMetaTags, pageSeoData } from "../utils/seo-utils";

// Import reusable components
import SectionHeader from "../components/ui/SectionHeader";
import CheckItem from "../components/ui/CheckItem";
import OptimizedImage from "../components/ui/OptimizedImage";
import InfoItem from "../components/sports/InfoItem";
import { getImageSizes } from "../utils/image-utils";

const About = () => {
  useEffect(() => {
    // Apply SEO meta tags for About page
    updateMetaTags({
      ...pageSeoData.sportsClub,
      title: "About Our Sports Club | Osuele Sports Club",
      description: "Learn about Osuele Sports Club's world-class boxing and football facilities, programs, and vision. Located in Accra, Ghana.",
    });

    // Initialize AOS for animations
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center bg-primary overflow-hidden" aria-labelledby="about-hero-heading">
        <div className="absolute inset-0 bg-[url('/images/sports/sports-hero.jpg')] bg-cover bg-center opacity-30 transform scale-105 motion-safe:animate-subtle-zoom"></div>
        
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <h1 id="about-hero-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Our Club
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Providing world-class sports facilities and programs for athletes and communities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Our Story" 
            subtitle="Building champions in boxing and football since 2015" 
          />

          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="md:w-1/2" data-aos="fade-right">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Our Vision
              </h3>
              <p className="mb-6">
                Osuele Sports Club aims to be the premier destination for
                sports excellence in Ghana, providing state-of-the-art
                facilities and comprehensive programs that develop athletes,
                promote fitness, and build community through sports.
              </p>
              <p>
                We believe in the transformative power of sports to build
                character, promote health, and create positive social
                impact. Our facilities and programs are designed to serve
                athletes of all ages and abilities, from beginners to elite
                competitors.
              </p>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <OptimizedImage
                src="/images/sports/facility1.jpg"
                alt="Osuele Sports Facility"
                className="rounded-lg shadow-lg w-full h-auto"
                sizes={getImageSizes('md:w-1/2')}
                priority={false}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse gap-12 items-center mb-16">
            <div className="md:w-1/2" data-aos="fade-left">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Our Facilities
              </h3>
              <p className="mb-6">
                Our sports complex features modern, well-maintained
                facilities designed to international standards. We offer
                spaces for multiple sports disciplines, with a special focus on 
                our world-class boxing arena and football pitch.
              </p>
              <ul className="space-y-3">
                <CheckItem text="Professional boxing ring and training area with high-quality equipment" />
                <CheckItem text="FIFA-standard football pitch with stadium seating" />
                <CheckItem text="Fully-equipped fitness center with specialized training zones" />
                <CheckItem text="Modern locker rooms and recovery facilities" />
                <CheckItem text="Sports medicine and rehabilitation center" />
              </ul>
            </div>
            <div className="md:w-1/2" data-aos="fade-right">
              <OptimizedImage
                src="/images/sports/facility2.jpg"
                alt="Osuele Sports Facility"
                className="rounded-lg shadow-lg w-full h-auto"
                sizes={getImageSizes('md:w-1/2')}
                priority={false}
              />
            </div>
          </div>

          <div className="mb-16" data-aos="fade-up">
            <h3 className="text-2xl font-bold text-primary mb-4 text-center">
              Our Core Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-light rounded-lg p-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-primary mb-2">Excellence</h4>
                <p className="text-secondary/80">
                  We strive for excellence in everything we do, from our facilities to our programs and athlete development.
                </p>
              </div>
              
              <div className="bg-light rounded-lg p-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-primary mb-2">Integrity</h4>
                <p className="text-secondary/80">
                  We operate with honesty, transparency, and respect for our athletes, staff, and the broader community.
                </p>
              </div>
              
              <div className="bg-light rounded-lg p-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-primary mb-2">Inclusivity</h4>
                <p className="text-secondary/80">
                  We welcome athletes of all backgrounds, abilities, and aspirations, creating an inclusive environment for all.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-16" data-aos="fade-up">
            <h3 className="text-2xl font-bold text-primary mb-6">
              Location & Hours
            </h3>
            <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
              <InfoItem icon={MapPin} title="Main Sports Complex">
                <p className="text-secondary/80">
                  123 Athletic Avenue, East Legon, Accra, Ghana
                </p>
              </InfoItem>
              <InfoItem icon={Clock} title="Operating Hours">
                <p className="text-secondary/80">
                  Monday-Friday: 6:00 AM - 10:00 PM
                </p>
                <p className="text-secondary/80">
                  Saturday: 8:00 AM - 8:00 PM
                </p>
                <p className="text-secondary/80">
                  Sunday: 10:00 AM - 6:00 PM
                </p>
              </InfoItem>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              {/* Replace OpenStreetMap with Google Maps iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.6964310454996!2d-0.17363762414567715!3d5.6363299956899155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzgnMTAuOCJOIDDCsDEwJzE2LjUiVw!5e0!3m2!1sen!2sgh!4v1713072348951!5m2!1sen!2sgh"
                width="100%"
                height="400"
                style={{ border: "none", width: "100%", height: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Map showing the location of Osuele Sports Club"
                title="Osuele Sports Club Location"
              ></iframe>
            </div>
          </div>

          <div className="bg-primary/5 p-8 rounded-lg" data-aos="fade-up">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Our History</h3>
              <p className="max-w-3xl mx-auto">
                Founded in 2015 by former professional athletes, Osuele Sports Club has grown from a small training facility to a comprehensive sports center recognized throughout Ghana and West Africa.
              </p>
            </div>
            
            <div className="relative">
              {/* Timeline */}
              <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -ml-0.5 w-1 bg-primary/20"></div>
              
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row items-center md:justify-between">
                  <div className="md:w-5/12 mb-6 md:mb-0">
                    <div className="bg-white p-5 rounded-lg shadow-md">
                      <h4 className="text-lg font-bold text-primary mb-1">2015</h4>
                      <p className="text-secondary/80">Founding of Osuele Sports Club with focus on youth boxing training</p>
                    </div>
                  </div>
                  <div className="hidden md:block relative w-3 h-3 bg-accent rounded-full -mt-3 z-10 mx-auto"></div>
                  <div className="md:w-5/12"></div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center md:justify-between">
                  <div className="md:w-5/12"></div>
                  <div className="hidden md:block relative w-3 h-3 bg-accent rounded-full -mt-3 z-10 mx-auto"></div>
                  <div className="md:w-5/12 mb-6 md:mb-0">
                    <div className="bg-white p-5 rounded-lg shadow-md">
                      <h4 className="text-lg font-bold text-primary mb-1">2017</h4>
                      <p className="text-secondary/80">Expansion to include football programs and construction of first football pitch</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center md:justify-between">
                  <div className="md:w-5/12 mb-6 md:mb-0">
                    <div className="bg-white p-5 rounded-lg shadow-md">
                      <h4 className="text-lg font-bold text-primary mb-1">2020</h4>
                      <p className="text-secondary/80">Major facility upgrade including new boxing arena and FIFA-standard football pitch</p>
                    </div>
                  </div>
                  <div className="hidden md:block relative w-3 h-3 bg-accent rounded-full -mt-3 z-10 mx-auto"></div>
                  <div className="md:w-5/12"></div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center md:justify-between">
                  <div className="md:w-5/12"></div>
                  <div className="hidden md:block relative w-3 h-3 bg-accent rounded-full -mt-3 z-10 mx-auto"></div>
                  <div className="md:w-5/12 mb-6 md:mb-0">
                    <div className="bg-white p-5 rounded-lg shadow-md">
                      <h4 className="text-lg font-bold text-primary mb-1">2023</h4>
                      <p className="text-secondary/80">Hosted first international boxing tournament and expanded coaching staff with international experts</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center md:justify-between">
                  <div className="md:w-5/12 mb-6 md:mb-0">
                    <div className="bg-white p-5 rounded-lg shadow-md">
                      <h4 className="text-lg font-bold text-primary mb-1">2025</h4>
                      <p className="text-secondary/80">Launching expanded facilities and new elite athlete development programs</p>
                    </div>
                  </div>
                  <div className="hidden md:block relative w-3 h-3 bg-accent rounded-full -mt-3 z-10 mx-auto"></div>
                  <div className="md:w-5/12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <section className="bg-primary text-white py-16 mt-16">
          <div className="container mx-auto px-4 text-center">
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              data-aos="fade-up"
            >
              Experience Osuele Sports Club
            </h2>
            <p
              className="text-xl max-w-3xl mx-auto mb-8 text-white/90"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Come visit our facilities and discover how we can help you achieve your sporting goals.
            </p>
            <div
              className="flex flex-wrap justify-center gap-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <button 
                type="button"
                className="px-8 py-3 bg-accent text-white rounded-md font-semibold hover:bg-accent/90 transition-colors"
              >
                Schedule a Tour
              </button>
              <button 
                type="button"
                className="px-8 py-3 bg-transparent text-white border-2 border-white rounded-md font-semibold hover:bg-white/10 transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;