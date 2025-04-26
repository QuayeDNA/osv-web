import { useState } from "react";
import { motion } from "framer-motion";
import { getImageSizes } from "../../utils/image-utils";
import SectionHeader from "../ui/SectionHeader";
import OptimizedImage from "../ui/OptimizedImage";
import { FaUserTie, FaChild, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdSportsBasketball, MdSportsTennis } from "react-icons/md";

// Type for team members
type TeamMember = {
  id: number;
  name: string;
  position: string;
  image: string;
  bio: string;
  icon: React.ReactNode;
  specialties?: string[];
  socialLinks?: {
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
};

const TeamSection = () => {
  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  // Sample team data
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Samuel Osei",
      position: "Club Director",
      image: "./images/sports/team1.jpg",
      bio: "Samuel has over 15 years of experience in sports management and has successfully led multiple sports clubs to national recognition.",
      icon: <FaUserTie />,
      specialties: ["Sports Management", "Strategic Planning"],
      socialLinks: {
        twitter: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      id: 2,
      name: "Grace Adepa",
      position: "Head Basketball Coach",
      image: "./images/sports/team2.jpg",
      bio: "A former national basketball champion, Grace brings her extensive experience and passion for the sport to develop high-performing athletes.",
      icon: <MdSportsBasketball />,
      specialties: ["Player Development", "Team Building"],
      socialLinks: {
        twitter: "#",
        instagram: "#"
      }
    },
    {
      id: 3,
      name: "Daniel Mensah",
      position: "Head Tennis Coach",
      image: "./images/sports/team3.jpg",
      bio: "Daniel is an ITF-certified tennis coach with experience coaching youth and professional teams across Ghana and Europe.",
      icon: <MdSportsTennis />,
      specialties: ["Technical Training", "Youth Development"],
      socialLinks: {
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      id: 4,
      name: "Abena Kusi",
      position: "Youth Program Coordinator",
      image: "./images/sports/team4.jpg",
      bio: "Abena specializes in youth sports development and has created innovative programs that nurture young talent from grassroots to professional levels.",
      icon: <FaChild />,
      specialties: ["Multi-Sport Development", "Physical Literacy"],
      socialLinks: {
        twitter: "#",
        instagram: "#"
      }
    },
  ];

  const [visibleMembers] = useState<TeamMember[]>(teamMembers.slice(0, 4));

  return (
    <section id="team" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-9xl">
        <SectionHeader 
          title="Expert Coaching Team" 
          subtitle="Learn from professional coaches with decades of experience in competitive sports and training" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {visibleMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Profile image and icon badge */}
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden">
                  <OptimizedImage
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes={getImageSizes('lg:w-1/4')}
                  />
                </div>
                
                {/* Icon badge */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-accent text-white p-3 rounded-full shadow-lg">
                  <span className="text-xl">{member.icon}</span>
                </div>
              </div>
              
              <div className="p-6 pt-10">
                <h3 className="text-xl font-bold text-primary mb-1 text-center">
                  {member.name}
                </h3>
                <p className="text-accent font-medium mb-4 text-center">
                  {member.position}
                </p>
                
                {/* Specialties tags */}
                {member.specialties && (
                  <div className="flex flex-wrap gap-2 mb-4 justify-center">
                    {member.specialties.map((specialty, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs bg-light text-secondary/80 px-2 py-1 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                )}
                
                <p className="text-secondary/80 text-sm mb-4 text-center">{member.bio}</p>
                
                {/* Social links with react-icons */}
                {member.socialLinks && (
                  <div className="flex justify-center space-x-3 mt-4 pt-3 border-t border-gray-100">
                    {member.socialLinks.twitter && (
                      <a 
                        href={member.socialLinks.twitter} 
                        className="w-8 h-8 rounded-full bg-light flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
                        aria-label={`${member.name}'s Twitter profile`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaTwitter size={14} />
                      </a>
                    )}
                    {member.socialLinks.instagram && (
                      <a 
                        href={member.socialLinks.instagram} 
                        className="w-8 h-8 rounded-full bg-light flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
                        aria-label={`${member.name}'s Instagram profile`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaInstagram size={14} />
                      </a>
                    )}
                    {member.socialLinks.linkedin && (
                      <a 
                        href={member.socialLinks.linkedin} 
                        className="w-8 h-8 rounded-full bg-light flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
                        aria-label={`${member.name}'s LinkedIn profile`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedinIn size={14} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Meet full team button */}
        <div className="flex justify-center mt-8">
          <a 
            href="/team" 
            className="inline-flex items-center px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
          >
            Meet Our Full Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;