import { useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { updateMetaTags, pageSeoData } from "../utils/seo-utils";

// Import reusable components
import SectionHeader from "../components/ui/SectionHeader";
import CheckItem from "../components/ui/CheckItem";
import InfoItem from "../components/sports/InfoItem";
import OptimizedImage from "../components/ui/OptimizedImage";
import { getImageSizes } from "../utils/image-utils";

const About = () => {
  useEffect(() => {
    // Apply SEO meta tags for About page
    updateMetaTags({
      ...pageSeoData.sportsClub,
      title: "About Osuele Sports Club | Boxing & Football in Ghana",
      description: "Learn about Osuele Sports Club - our vision, facilities, and mission to develop boxing and football talent in Ghana.",
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
        <div className="absolute inset-0 bg-[url('/images/sports/facility1.jpg')] bg-cover bg-center opacity-30 transform scale-105 motion-safe:animate-subtle-zoom"></div>
        
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
              Developing champions in boxing and football since 2018
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="py-16">
        <SectionHeader 
          title="About Our Sports Club" 
          subtitle="Providing world-class sports facilities and programs for athletes and communities" 
        />

        <div className="container mx-auto px-4">
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
                spaces for multiple sports disciplines, training areas, and
                recreational facilities for the community.
              </p>
              <ul className="space-y-3">
                <CheckItem text="FIFA-standard football pitch with stadium seating" />
                <CheckItem text="Multi-purpose indoor courts for basketball, volleyball, and badminton" />
                <CheckItem text="Olympic-size swimming pool with training lanes" />
                <CheckItem text="Fully-equipped fitness center with cardio and strength training areas" />
                <CheckItem text="Athletic track and field facilities" />
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

          <div className="text-center mb-12" data-aos="fade-up">
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
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.6964310454996!2d-0.17363762414567715!3d5.6363299956899155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzgnMTAuOCJOIDDCsDEwJzE2LjUiVw!5e0!3m2!1sen!2sgh!4v1713072348951!5m2!1sen!2sgh"
                className="w-full h-[400px] border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Map showing the location of Osuele Sports Club"
                title="Osuele Sports Club Location"
              ></iframe>
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
              <button 
                type="button"
                className="px-8 py-3 bg-accent text-white rounded-md font-semibold hover:bg-accent/90 transition-colors"
              >
                Become a Member
              </button>
              <button 
                type="button"
                className="px-8 py-3 bg-transparent text-white border-2 border-white rounded-md font-semibold hover:bg-white/10 transition-colors"
              >
                Schedule a Visit
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
