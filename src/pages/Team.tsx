import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { updateMetaTags, pageSeoData } from "../utils/seo-utils";

// Import reusable components
import SectionHeader from "../components/ui/SectionHeader";
import OptimizedImage from "../components/ui/OptimizedImage";
import { getImageSizes } from "../utils/image-utils";

// Type for team members
type TeamMember = {
  id: number;
  name: string;
  position: string;
  image: string;
  bio: string;
};

const Team = () => {
  useEffect(() => {
    // Apply SEO meta tags for Team page
    updateMetaTags({
      ...pageSeoData.sportsClub,
      title: "Our Team | Osuele Sports Club",
      description: "Meet the dedicated coaches and staff at Osuele Sports Club who train our athletes and manage our world-class boxing and football programs.",
    });

    // Initialize AOS for animations
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  // Sample team data
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Samuel Osei",
      position: "Club Director",
      image: "/images/sports/team1.jpg",
      bio: "Samuel has over 15 years of experience in sports management and has successfully led multiple sports clubs to national recognition. His vision for Osuele Sports Club is to create a center of excellence for boxing and football in Ghana that nurtures both local talent and attracts international recognition.",
    },
    {
      id: 2,
      name: "Grace Adepa",
      position: "Head Boxing Coach",
      image: "/images/sports/team2.jpg",
      bio: "A former national boxing champion, Grace brings her extensive experience and passion for the sport to develop high-performing athletes. She has trained multiple national champions and specializes in developing young boxing talent with technical precision and strategic thinking.",
    },
    {
      id: 3,
      name: "Daniel Mensah",
      position: "Head Football Coach",
      image: "/images/sports/team3.jpg",
      bio: "Daniel is a UEFA-certified football coach with experience coaching youth teams across Ghana and Europe. His tactical approach to the game combines traditional Ghanaian football flair with modern strategic training methods, helping players reach their full potential.",
    },
    {
      id: 4,
      name: "Abena Kusi",
      position: "Youth Program Coordinator",
      image: "/images/sports/team4.jpg",
      bio: "Abena specializes in youth sports development and has created innovative programs that nurture young talent from grassroots to professional levels. With a background in child psychology and physical education, she ensures that young athletes develop both physical skills and mental resilience.",
    },
    {
      id: 5,
      name: "Kwame Asante",
      position: "Fitness & Conditioning Specialist",
      image: "/images/sports/event1.jpg",
      bio: "Kwame holds certifications in sports science and athletic performance. He develops specialized training regimens for boxers and footballers, focusing on sport-specific conditioning, injury prevention, and performance optimization techniques.",
    },
    {
      id: 6,
      name: "Nana Yaa Dartey",
      position: "Nutritionist",
      image: "/images/sports/event2.jpg",
      bio: "Nana Yaa works with athletes to develop personalized nutrition plans that support their training goals and performance needs. She has a master's degree in sports nutrition and specializes in fueling strategies for combat sports and team athletics.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center bg-primary overflow-hidden" aria-labelledby="team-hero-heading">
        <div className="absolute inset-0 bg-[url('/images/sports/team3.jpg')] bg-cover bg-center opacity-30 transform scale-105 motion-safe:animate-subtle-zoom"></div>
        
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <h1 id="team-hero-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Expert Team
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Meet the dedicated professionals behind our club's success
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Our Team" 
            subtitle="Meet our dedicated professionals who make our sports club exceptional" 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <OptimizedImage
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    sizes={getImageSizes('lg:w-1/3')}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-1">
                    {member.name}
                  </h3>
                  <p className="text-accent font-medium mb-4">
                    {member.position}
                  </p>
                  <p className="text-secondary/80">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center" data-aos="fade-up">
            <h3 className="text-2xl font-bold text-primary mb-6">
              Join Our Team
            </h3>
            <p className="mb-6 max-w-3xl mx-auto">
              We're always looking for passionate individuals to join our
              team. If you're interested in sports management, coaching, or
              facility operations, we'd love to hear from you.
            </p>
            <button 
              type="button"
              className="px-8 py-3 bg-primary text-white rounded-md font-semibold hover:bg-primary/90 transition-colors"
            >
              View Career Opportunities
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <section className="bg-primary text-white py-16 mt-16">
          <div className="container mx-auto px-4 text-center">
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              data-aos="fade-up"
            >
              Train with the Best
            </h2>
            <p
              className="text-xl max-w-3xl mx-auto mb-8 text-white/90"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Our coaches and staff are committed to helping you achieve your full potential in boxing and football.
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
                Book a Session
              </button>
              <button 
                type="button"
                className="px-8 py-3 bg-transparent text-white border-2 border-white rounded-md font-semibold hover:bg-white/10 transition-colors"
              >
                Meet Our Coaches
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Team;