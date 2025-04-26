import { useState, useRef, useEffect } from "react";
import {
  Dumbbell,
  Users,
  Calendar,
  Activity,
  Trophy,
  ShieldCheck,
  Heart,
  Star,
} from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import OptimizedImage from "../ui/OptimizedImage";
import { getImageSizes } from "../../utils/image-utils";

type ProgramTab = 'basketball' | 'tennis' | 'swimming' | 'volleyball' | 'fitness' | 'youth';

const ProgramsSection = () => {
  const [activeTab, setActiveTab] = useState<ProgramTab>("basketball");
  const contentRef = useRef<HTMLDivElement>(null);

  // Handle tab change
  const handleTabChange = (tabId: ProgramTab) => {
    setActiveTab(tabId);
  };

  // Scroll content into view when tab changes
  useEffect(() => {
    if (contentRef.current) {
      // Smooth scroll to content area
      contentRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, [activeTab]);

  // Program descriptions
  const programs = {
    basketball: {
      title: "Basketball Program",
      description:
        "Our basketball program offers comprehensive training for players of all levels. From fundamentals to advanced techniques, our FIBA-certified coaches provide expert instruction in dribbling, shooting, defense, and game strategy.",
      features: [
        "Professional coaching by former national team players",
        "Training for all skill levels - beginners to elite",
        "3-on-3 and 5-on-5 leagues and competitions",
        "Specialized clinics for skills development",
      ],
      schedule: "Mon, Wed, Fri | 6:00 AM - 8:00 AM & 4:00 PM - 7:00 PM",
      image: "/images/sports/team1.jpg",
    },
    tennis: {
      title: "Tennis Program",
      description:
        "Develop your tennis skills on our professional courts with programs designed for all ages and ability levels. Our ITF-certified coaches provide technical instruction, strategic guidance, and competitive opportunities.",
      features: [
        "Individual and group lessons available",
        "Junior development pathway program",
        "Regular in-house tournaments and ladder competitions",
        "Advanced coaching for competitive players",
      ],
      schedule: "Tue, Thu, Sat | 7:00 AM - 9:00 AM & 3:00 PM - 6:00 PM",
      image: "/images/sports/team2.jpg",
    },
    swimming: {
      title: "Swimming Program",
      description:
        "Our swimming program offers instruction for all ages and abilities in our Olympic-size pool. Learn proper technique, build endurance, and improve your performance with our certified swim coaches.",
      features: [
        "Beginner, intermediate, and advanced classes",
        "Competitive swim team training",
        "Water safety and lifeguard training",
        "Specialized stroke technique clinics",
      ],
      schedule: "Tue, Thu, Sat | 6:00 AM - 8:00 AM & 4:00 PM - 6:00 PM",
      image: "/images/sports/team3.jpg",
    },
    volleyball: {
      title: "Volleyball Program",
      description:
        "Join our dynamic volleyball program offering training in both indoor and beach volleyball formats. Focus on fundamentals, advanced techniques, and competitive play with our experienced coaches.",
      features: [
        "Indoor and beach volleyball training",
        "Regular practice games and scrimmages",
        "Specialized position-specific training",
        "Seasonal competitive leagues",
      ],
      schedule: "Mon, Wed, Fri | 3:00 PM - 6:00 PM & Sat 10:00 AM - 1:00 PM",
      image: "/images/sports/team4.jpg",
    },
    fitness: {
      title: "Fitness & Conditioning",
      description:
        "Our comprehensive fitness program offers personalized training plans, group classes, and sports-specific conditioning. Build strength, improve cardiovascular health, and enhance athletic performance.",
      features: [
        "Personal training with certified fitness professionals",
        "Group fitness classes including HIIT, yoga, and Pilates",
        "Sports-specific strength and conditioning",
        "Nutrition guidance and wellness planning",
      ],
      schedule: "Mon-Sat | 6:00 AM - 8:00 PM (Various classes throughout the day)",
      image: "/images/sports/facility1.jpg",
    },
    youth: {
      title: "Youth Academy",
      description:
        "Our Youth Academy provides age-appropriate sports development programs for children and teenagers. Through multiple sports disciplines, we focus on fundamental movement skills, sport-specific techniques, and character development.",
      features: [
        "Multi-sport programs for ages 5-16",
        "Developmentally appropriate coaching methods",
        "Focus on fundamental movement skills and sports basics",
        "Character development through sports participation",
      ],
      schedule: "Mon-Fri | 3:30 PM - 5:30 PM & Sat 9:00 AM - 12:00 PM",
      image: "/images/sports/facility2.jpg",
    },
  };

  // Setting up tab info objects
  const tabInfo = [
    {
      id: "basketball" as ProgramTab,
      label: "Basketball",
      icon: <Activity className="w-5 h-5" />,
    },
    {
      id: "tennis" as ProgramTab,
      label: "Tennis",
      icon: <Dumbbell className="w-5 h-5" />,
    },
    {
      id: "swimming" as ProgramTab,
      label: "Swimming",
      icon: <ShieldCheck className="w-5 h-5" />,
    },
    {
      id: "volleyball" as ProgramTab,
      label: "Volleyball",
      icon: <Trophy className="w-5 h-5" />,
    },
    {
      id: "fitness" as ProgramTab,
      label: "Fitness",
      icon: <Heart className="w-5 h-5" />,
    },
    {
      id: "youth" as ProgramTab,
      label: "Youth Academy",
      icon: <Star className="w-5 h-5" />,
    },
  ];

  return (
    <section id="programs" className="py-16">
      <div className="container mx-auto px-4 max-w-9xl">
        <SectionHeader 
          title="Our Programs" 
          subtitle="Comprehensive sports training programs for athletes of all levels" 
          className="text-center"
        />

        {/* Mobile Dropdown for program selection */}
        <div className="md:hidden mb-8">
          <select
            value={activeTab}
            onChange={(e) => handleTabChange(e.target.value as ProgramTab)}
            className="w-full p-3 bg-white border border-gray-300 rounded-md text-primary font-medium focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Select a program"
          >
            {tabInfo.map((tab) => (
              <option key={tab.id} value={tab.id}>
                {tab.label}
              </option>
            ))}
          </select>
        </div>

        {/* Desktop Tabs */}
        <div className="hidden md:flex flex-wrap justify-center mb-8" role="tablist">
          {tabInfo.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`flex items-center px-5 py-3 mx-2 mb-2 rounded-md font-medium transition-colors ${
                activeTab === tab.id
                  ? "bg-accent text-white shadow-md"
                  : "bg-white text-primary hover:bg-gray-100"
              }`}
              aria-selected={activeTab === tab.id}
              role="tab"
              aria-controls={`${tab.id}-content`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Program Content */}
        <div ref={contentRef}>
          {Object.entries(programs).map(([key, program]) => {
            const programKey = key as ProgramTab;
            return (
              <div
                key={programKey}
                id={`${programKey}-content`}
                className={`${
                  activeTab === programKey ? "block" : "hidden"
                } bg-white rounded-lg shadow-md overflow-hidden`}
                role="tabpanel"
                aria-labelledby={`${programKey}-tab`}
                data-aos="fade-up"
                data-aos-once="false"
                data-aos-duration="500"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 p-8">
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      {program.title}
                    </h3>
                    <p className="mb-6 text-secondary/80">
                      {program.description}
                    </p>

                    <h4 className="font-bold text-primary mb-3">Program Features:</h4>
                    <ul className="mb-6 space-y-2">
                      {program.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-start"
                        >
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center mb-6">
                      <Calendar className="w-5 h-5 text-accent mr-2" />
                      <span className="font-medium">Schedule:</span>
                      <span className="ml-2">{program.schedule}</span>
                    </div>

                    <a
                      href="/contact"
                      className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md font-semibold hover:bg-primary/90 transition-colors"
                    >
                      <Users className="mr-2 w-5 h-5" />
                      Register for this Program
                    </a>
                  </div>
                  <div className="md:w-1/2">
                    <OptimizedImage
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover"
                      sizes={getImageSizes('md:w-1/2')}
                      priority={activeTab === programKey}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Membership Callout */}
        <div className="mt-16 p-8 bg-primary text-white rounded-lg" data-aos="fade-up">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-3/4 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">
                Membership Options
              </h3>
              <p>
                Join our club with flexible membership options. Access to all
                facilities, discounted program rates, and exclusive events for
                members.
              </p>
            </div>
            <div className="md:w-1/4 text-center">
              <a
                href="/contact"
                className="inline-block px-6 py-3 bg-white text-primary rounded-md font-semibold hover:bg-gray-100 transition-colors"
              >
                View Membership Plans
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;