import { getImageSizes } from "../../utils/image-utils";
import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import InfoItem from "./InfoItem";
import OptimizedImage from "../ui/OptimizedImage";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { 
  FaTrophy, 
  FaUsers, 
  FaRegLightbulb, 
  FaRegHandshake 
} from "react-icons/fa";
import { 
  MdSportsBasketball, 
  MdOutlineSportsVolleyball,
  MdOutlineSportsTennis 
} from "react-icons/md";
import { 
  IoFitness, 
  IoLocationSharp 
} from "react-icons/io5";
import { 
  TbSwimming, 
  TbRun 
} from "react-icons/tb";

const AboutSection = () => {
  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  // Core values
  const coreValues = [
    {
      icon: <FaTrophy className="text-accent text-3xl" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from facility management to athlete development."
    },
    {
      icon: <FaRegLightbulb className="text-accent text-3xl" />,
      title: "Innovation",
      description: "We embrace innovative approaches to training, facility design, and sports development."
    },
    {
      icon: <FaUsers className="text-accent text-3xl" />,
      title: "Inclusivity",
      description: "We create welcoming spaces for athletes of all backgrounds, abilities, and experience levels."
    },
    {
      icon: <FaRegHandshake className="text-accent text-3xl" />,
      title: "Integrity",
      description: "We operate with honesty, transparency, and respect in all our interactions and programs."
    }
  ];

  // Facility icons with descriptions
  const facilities = [
    {
      icon: <MdSportsBasketball size={30} className="text-accent" />,
      name: "Basketball Courts",
      description: "Two professional-grade indoor courts with spectator seating"
    },
    {
      icon: <MdOutlineSportsTennis size={30} className="text-accent" />,
      name: "Tennis Courts",
      description: "Four hard-surface courts with night lighting capabilities"
    },
    {
      icon: <TbSwimming size={30} className="text-accent" />,
      name: "Swimming Pool",
      description: "Olympic-size pool with 8 lanes and dedicated training areas"
    },
    {
      icon: <MdOutlineSportsVolleyball size={30} className="text-accent" />,
      name: "Volleyball Courts",
      description: "Indoor and outdoor courts for recreational and competitive play"
    },
    {
      icon: <IoFitness size={30} className="text-accent" />,
      name: "Fitness Center",
      description: "Modern equipment for strength, cardio, and functional training"
    },
    {
      icon: <TbRun size={30} className="text-accent" />,
      name: "Running Track",
      description: "400m all-weather track with professional timing system"
    }
  ];

  return (
    <section id="about" className="py-16 relative overflow-hidden bg-white">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-40 left-0 w-96 h-96 bg-accent/5 rounded-full -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <SectionHeader 
          title="About Our Sports Club" 
          subtitle="Providing world-class sports facilities and programs for athletes and communities" 
        />

        {/* Vision Section with Gradient Card */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
          <div className="md:w-1/2" data-aos="fade-right">
            <div className="relative">
              <span className="absolute -left-3 top-0 w-1 h-12 bg-accent"></span>
              <h3 className="text-3xl font-bold text-primary mb-6 pl-4">
                Our Vision
              </h3>
            </div>
            <p className="mb-6 text-lg leading-relaxed text-secondary/80">
              Osuele Sports Club aims to be the premier destination for
              sports excellence in Ghana, providing state-of-the-art
              facilities and comprehensive programs that develop athletes,
              promote fitness, and build community through sports.
            </p>
            <div className="bg-gradient-to-r from-primary to-primary/90 text-white p-6 rounded-lg shadow-lg mb-8">
              <blockquote className="border-l-4 border-accent pl-4 italic">
                "We believe in the transformative power of sports to build
                character, promote health, and create positive social
                impact. Our facilities and programs are designed to serve
                athletes of all ages and abilities, from beginners to elite
                competitors."
              </blockquote>
              <p className="text-right mt-4 font-medium">- Samuel Osei, Club Director</p>
            </div>
            
            <a href="/about-sports" className="inline-flex items-center text-accent font-medium hover:text-primary transition-colors group">
              <span>Learn more about our story</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="md:w-1/2 relative" data-aos="fade-left">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent z-10 opacity-60"></div>
              <OptimizedImage
                src="./images/sports/facility1.jpg"
                alt="Osuele Sports Facility"
                className="w-full h-auto object-cover"
                sizes={getImageSizes('md:w-1/2')}
                priority={true}
              />
              
              {/* Stats overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <div className="flex flex-wrap justify-between">
                  <div className="text-white mb-4 pr-4">
                    <div className="text-3xl font-bold text-accent">15+</div>
                    <div className="text-sm">Years of Excellence</div>
                  </div>
                  <div className="text-white mb-4 pr-4">
                    <div className="text-3xl font-bold text-accent">500+</div>
                    <div className="text-sm">Athletes Trained</div>
                  </div>
                  <div className="text-white mb-4">
                    <div className="text-3xl font-bold text-accent">25+</div>
                    <div className="text-sm">Professional Coaches</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Image caption */}
            <div className="absolute -bottom-4 -right-4 bg-accent text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium z-10">
              Main Training Facility
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-10" data-aos="fade-up">
            <h3 className="text-3xl font-bold text-primary mb-4">Our Core Values</h3>
            <p className="text-secondary/80">
              At Osuele Sports, we're guided by principles that shape every aspect of our operations and community engagement
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-accent"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                variants={fadeIn}
              >
                <div className="mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold text-primary mb-2">{value.title}</h4>
                <p className="text-secondary/80">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Facilities Section */}
        <div className="flex flex-col md:flex-row-reverse gap-12 items-center mb-20">
          <div className="md:w-1/2" data-aos="fade-left">
            <div className="relative">
              <span className="absolute -left-3 top-0 w-1 h-12 bg-accent"></span>
              <h3 className="text-3xl font-bold text-primary mb-6 pl-4">
                World-Class Facilities
              </h3>
            </div>
            <p className="mb-8 text-lg leading-relaxed text-secondary/80">
              Our sports complex features modern, well-maintained
              facilities designed to international standards. We offer
              spaces for multiple sports disciplines, training areas, and
              recreational facilities for the community.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {facilities.map((facility, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-light p-3 rounded-full mr-4 shrink-0">
                    {facility.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">{facility.name}</h4>
                    <p className="text-sm text-secondary/80">{facility.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2" data-aos="fade-right">
            <div className="rounded-lg overflow-hidden shadow-xl relative group">
              <OptimizedImage
                src="./images/sports/facility2.jpg"
                alt="Osuele Sports Facility"
                className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                sizes={getImageSizes('md:w-1/2')}
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/60"></div>
              
              {/* Facilities tour button */}
              <div className="absolute bottom-6 left-6 right-6">
                <button className="bg-white/90 backdrop-blur-sm text-primary px-6 py-3 rounded-lg shadow-lg w-full font-semibold hover:bg-white transition-colors">
                  Take a Virtual Tour
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Location & Hours with interactive map */}
        <div className="bg-light rounded-xl overflow-hidden shadow-lg" data-aos="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                <IoLocationSharp className="text-accent mr-3 text-3xl" />
                Location & Hours
              </h3>
              
              <div className="space-y-6 mb-8">
                <InfoItem icon={MapPin} title="Main Sports Complex">
                  <p className="text-secondary/80">
                    123 Athletic Avenue, East Legon, Accra, Ghana
                  </p>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline text-sm mt-1 inline-flex items-center">
                    Get Directions
                    <ArrowRight className="ml-1 w-3 h-3" />
                  </a>
                </InfoItem>
                <InfoItem icon={Clock} title="Operating Hours">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="font-medium">Weekdays</p>
                      <p className="text-secondary/80 text-sm">
                        6:00 AM - 10:00 PM
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">Saturday</p>
                      <p className="text-secondary/80 text-sm">
                        8:00 AM - 8:00 PM
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">Sunday</p>
                      <p className="text-secondary/80 text-sm">
                        10:00 AM - 6:00 PM
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">Holidays</p>
                      <p className="text-secondary/80 text-sm">
                        9:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                </InfoItem>
              </div>
              
              <a 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
              >
                Contact Us
              </a>
            </div>
            
            <div className="h-full min-h-[400px] relative">
              {/* Map with overlay filter to match design */}
              <div className="absolute inset-0 bg-primary/10 z-10 pointer-events-none"></div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.6964310454996!2d-0.17363762414567715!3d5.6363299956899155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzgnMTAuOCJOIDDCsDEwJzE2LjUiVw!5e0!3m2!1sen!2sgh!4v1713072348951!5m2!1sen!2sgh"
                width="100%"
                height="100%"
                style={{ border: "none", width: "100%", height: "100%" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Map showing the location of Osuele Sports Club"
                title="Osuele Sports Club Location"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;