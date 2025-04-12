import { JSX, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Trophy,
  Users,
  MapPin,
  Clock,
  Heart,
  Activity,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { updateMetaTags, pageSeoData } from "../utils/seo-utils";

// Import reusable components
import SectionHeader from "../components/ui/SectionHeader";
import CheckItem from "../components/ui/CheckItem";
import TabContent from "../components/ui/TabContent";
import InfoItem from "../components/sports/InfoItem";
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

// Type for events
type Event = {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
};

// Type for programs
type Program = {
  id: number;
  title: string;
  description: string;
  schedule: string;
  icon: JSX.Element;
};

const SportsClub = () => {
  const [activeTab, setActiveTab] = useState<
    "about" | "programs" | "team" | "events"
  >("about");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  useEffect(() => {
    // Apply SEO meta tags for Sports Club page
    updateMetaTags({
      ...pageSeoData.sportsClub,
      // Enhanced meta description for better SEO
      description: "Osuele Sports Club offers world-class facilities, professional training programs, and community sports events in Accra, Ghana. Join our vibrant sports community today!",
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
      "description": "Premier sports club in Accra offering facilities, training programs, and community sports events",
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
      document.head.removeChild(script);
    };
  }, []);

  // Sample team data
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Samuel Osei",
      position: "Club Director",
      image: "/images/sports/team1.jpg",
      bio: "Samuel has over 15 years of experience in sports management and has successfully led multiple sports clubs to national recognition.",
    },
    {
      id: 2,
      name: "Grace Adepa",
      position: "Head Coach",
      image: "/images/sports/team2.jpg",
      bio: "A former national athlete, Grace brings her extensive experience and passion for sports to develop high-performing teams and individuals.",
    },
    {
      id: 3,
      name: "Daniel Mensah",
      position: "Facilities Manager",
      image: "/images/sports/team3.jpg",
      bio: "With a background in civil engineering, Daniel oversees the maintenance and development of our state-of-the-art facilities.",
    },
    {
      id: 4,
      name: "Abena Kusi",
      position: "Youth Program Coordinator",
      image: "/images/sports/team4.jpg",
      bio: "Abena specializes in youth sports development and has created innovative programs that nurture young talent from grassroots to professional levels.",
    },
  ];

  // Sample programs
  const programs: Program[] = [
    {
      id: 1,
      title: "Elite Sports Training",
      description:
        "Professional training programs for serious athletes looking to compete at high levels. Includes specialized coaching, nutrition guidance, and performance tracking.",
      schedule: "Mon-Fri: 6:00 AM - 8:00 AM & 4:00 PM - 7:00 PM",
      icon: <Trophy className="w-12 h-12 text-accent" />,
    },
    {
      id: 2,
      title: "Youth Development Academy",
      description:
        "Comprehensive sports programs for children and teenagers focused on skill development, teamwork, and character building through sports.",
      schedule: "Tue, Thu: 3:30 PM - 5:30 PM | Sat: 9:00 AM - 12:00 PM",
      icon: <Users className="w-12 h-12 text-accent" />,
    },
    {
      id: 3,
      title: "Community Fitness Classes",
      description:
        "Group fitness classes for all ages and abilities. Options include cardio, strength training, yoga, and specialized sports conditioning.",
      schedule: "Mon-Sat: Various classes throughout the day",
      icon: <Activity className="w-12 h-12 text-accent" />,
    },
    {
      id: 4,
      title: "Sports Rehabilitation",
      description:
        "Recovery programs for athletes and individuals recovering from injuries. Includes physical therapy, specialized exercises, and gradual return-to-play protocols.",
      schedule: "By appointment only",
      icon: <Heart className="w-12 h-12 text-accent" />,
    },
  ];

  // Sample events
  const events: Event[] = [
    {
      id: 1,
      title: "Annual Sports Tournament",
      date: "October 15-18, 2024",
      location: "Osuele Sports Complex, Accra",
      description:
        "Our flagship sports tournament featuring multiple disciplines including football, basketball, athletics, and more. Open to both club members and invited teams from across Ghana.",
      image: "/images/sports/event1.jpg",
    },
    {
      id: 2,
      title: "Youth Sports Camp",
      date: "July 10-21, 2024",
      location: "Osuele Training Grounds",
      description:
        "A two-week intensive sports camp for youth aged 8-16. The camp focuses on skills development, team building, and introducing young athletes to various sports disciplines.",
      image: "/images/sports/event2.jpg",
    },
    {
      id: 3,
      title: "Fitness Challenge Weekend",
      date: "September 3-4, 2024",
      location: "Osuele Fitness Center",
      description:
        "A weekend dedicated to fitness challenges for all levels. Participants can test their strength, endurance, and agility through various challenges and competitions.",
      image: "/images/sports/event3.jpg",
    },
  ];

  const openEventModal = (event: Event) => {
    setSelectedEvent(event);
    document.body.style.overflow = "hidden";
  };

  const closeEventModal = () => {
    setSelectedEvent(null);
    document.body.style.overflow = "auto";
  };

  // Enhanced keyboard event handler for better accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeEventModal();
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault(); // Prevent default space behavior
      // The element's onClick will be triggered by Enter
    }
  };

  return (
    <>
      {/* Hero Section with enhanced SEO heading structure */}
      <section className="relative h-[70vh] flex items-center bg-primary" aria-labelledby="hero-heading">
        <div className="absolute inset-0 bg-[url('/images/sports/sports-hero.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Osuele Sports Club
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Excellence in sports management, training, and recreation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation - keeping buttons with proper roles */}
      <section className="bg-white border-b">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center">
            <button
              type="button"
              onClick={() => setActiveTab("about")}
              className={`px-6 py-4 font-medium text-lg transition-colors ${
                activeTab === "about"
                  ? "text-accent border-b-2 border-accent"
                  : "text-secondary hover:text-primary"
              }`}
            >
              About
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("programs")}
              className={`px-6 py-4 font-medium text-lg transition-colors ${
                activeTab === "programs"
                  ? "text-accent border-b-2 border-accent"
                  : "text-secondary hover:text-primary"
              }`}
            >
              Programs
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("team")}
              className={`px-6 py-4 font-medium text-lg transition-colors ${
                activeTab === "team"
                  ? "text-accent border-b-2 border-accent"
                  : "text-secondary hover:text-primary"
              }`}
            >
              Our Team
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("events")}
              className={`px-6 py-4 font-medium text-lg transition-colors ${
                activeTab === "events"
                  ? "text-accent border-b-2 border-accent"
                  : "text-secondary hover:text-primary"
              }`}
            >
              Events
            </button>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="py-16">
        {/* About Tab */}
        <TabContent active={activeTab === "about"}>
          <SectionHeader 
            title="About Our Sports Club" 
            subtitle="Providing world-class sports facilities and programs for athletes and communities" 
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
                src="https://www.openstreetmap.org/export/embed.html?bbox=-0.19153118133544925%2C5.622413155392498%2C-0.15099525451660159%2C5.650243301286097&amp;layer=mapnik&amp;marker=5.636331%2C-0.171263"
                width="100%"
                height="400"
                className="border-0"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Osuele Sports Club Location"
              ></iframe>
            </div>
          </div>
        </TabContent>

        {/* Programs Tab */}
        <TabContent active={activeTab === "programs"}>
          <SectionHeader 
            title="Our Programs" 
            subtitle="Comprehensive sports and fitness programs for all ages and skill levels" 
          />

          <div className="space-y-10">
            {programs.map((program, index) => (
              <div
                key={program.id}
                className="bg-light rounded-lg p-6 md:p-8"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-16 flex justify-center">
                    {program.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-primary mb-2">
                      {program.title}
                    </h3>
                    <p className="mb-4">{program.description}</p>
                    <div className="flex items-start mt-4">
                      <Clock className="w-5 h-5 text-accent mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm">
                        <strong>Schedule:</strong> {program.schedule}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Membership section - fixed list items with keys */}
          <div
            className="mt-12 p-8 bg-primary text-white rounded-lg"
            data-aos="fade-up"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Membership Options
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-accent mb-2">
                  Individual Membership
                </h4>
                <ul className="space-y-2">
                  <li key="access">
                    <CheckItem 
                      text="Full access to all facilities during operating hours" 
                      className="flex items-start" 
                    />
                  </li>
                  <li key="rates">
                    <CheckItem 
                      text="Discounted rates for specialized programs" 
                      className="flex items-start" 
                    />
                  </li>
                  <li key="assessment">
                    <CheckItem 
                      text="Basic fitness assessment and program design" 
                      className="flex items-start" 
                    />
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-accent mb-2">
                  Family Membership
                </h4>
                <ul className="space-y-2">
                  <li key="family-access">
                    <CheckItem 
                      text="Access for up to 5 family members" 
                      className="flex items-start" 
                    />
                  </li>
                  <li key="family-priority">
                    <CheckItem 
                      text="Priority registration for youth programs" 
                      className="flex items-start" 
                    />
                  </li>
                  <li key="family-events">
                    <CheckItem 
                      text="Free attendance at monthly family sports events" 
                      className="flex items-start" 
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 text-center">
              <button 
                type="button"
                className="px-8 py-3 bg-accent text-white rounded-md font-semibold hover:bg-accent/90 transition-colors"
              >
                Join Our Club
              </button>
            </div>
          </div>
        </TabContent>

        {/* Team Tab */}
        <TabContent active={activeTab === "team"}>
          <SectionHeader 
            title="Our Team" 
            subtitle="Meet our dedicated professionals who make our sports club exceptional" 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="bg-white rounded-lg overflow-hidden shadow-md"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <OptimizedImage
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    sizes={getImageSizes('md:w-1/2')}
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
            <p className="mb-6">
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
        </TabContent>

        {/* Events Tab */}
        <TabContent active={activeTab === "events"}>
          <SectionHeader 
            title="Upcoming Events" 
            subtitle="Join us for exciting sports events, tournaments, and community activities" 
          />

          <div className="space-y-8">
            {events.map((event, index) => (
              <div 
                key={event.id}
                className="flex flex-col md:flex-row gap-6 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="md:w-1/3 h-48 md:h-auto">
                  <OptimizedImage
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                    sizes={getImageSizes('md:w-1/3')}
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {event.title}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 text-sm">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 text-accent mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-accent mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-secondary/80 line-clamp-2 mb-4">
                    {event.description}
                  </p>
                  <button
                    type="button"
                    onClick={() => openEventModal(event)}
                    onKeyDown={handleKeyDown}
                    className="text-accent font-medium hover:text-primary transition-colors"
                    aria-label={`View details of ${event.title}`}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div
            className="mt-12 p-8 bg-light rounded-lg text-center"
            data-aos="fade-up"
          >
            <h3 className="text-2xl font-bold text-primary mb-4">
              Want to Host an Event?
            </h3>
            <p className="mb-6">
              Our facilities are available for private events, tournaments,
              and corporate sports days. Contact us to discuss your
              requirements and book your event.
            </p>
            <button 
              type="button"
              className="px-8 py-3 bg-primary text-white rounded-md font-semibold hover:bg-primary/90 transition-colors"
            >
              Inquire About Event Hosting
            </button>
          </div>
        </TabContent>
      </div>

      {/* Event Detail Modal - using dialog element instead of role="dialog" */}
      {selectedEvent && (
        <dialog
          open
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 w-full h-full"
          onClick={closeEventModal}
          onKeyDown={handleKeyDown}
          aria-labelledby="modal-title"
        >
          <div
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            tabIndex={-1}
          >
            <div className="relative">
              <button
                type="button"
                onClick={closeEventModal}
                className="absolute top-4 right-4 w-10 h-10 bg-primary/80 text-white rounded-full flex items-center justify-center hover:bg-primary z-10"
                aria-label="Close modal"
              >
                ✕
              </button>
              <div className="h-72 md:h-80">
                <OptimizedImage
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-full object-cover"
                  sizes="(min-width: 768px) 768px, 100vw"
                  priority={true}
                />
              </div>
            </div>
            <div className="p-6 md:p-8">
              <h3 id="modal-title" className="text-2xl md:text-3xl font-bold text-primary mb-4">
                {selectedEvent.title}
              </h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 text-sm">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-accent mr-2" />
                  <span className="font-medium">{selectedEvent.date}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-accent mr-2" />
                  <span className="font-medium">{selectedEvent.location}</span>
                </div>
              </div>
              <p className="mb-8 leading-relaxed">
                {selectedEvent.description}
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold mb-2">Event Schedule</h4>
                  <ul className="space-y-2">
                    <CheckItem text="Opening Ceremony - 9:00 AM" number={1} className="flex items-start" />
                    <CheckItem text="Competitions and Activities - 10:30 AM to 4:00 PM" number={2} className="flex items-start" />
                    <CheckItem text="Awards Presentation - 4:30 PM" number={3} className="flex items-start" />
                    <CheckItem text="Closing Ceremony - 5:00 PM" number={4} className="flex items-start" />
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold mb-2">
                    Registration Information
                  </h4>
                  <p className="mb-2">
                    Registration Fee: GH₵50 per participant
                  </p>
                  <p className="mb-2">
                    Early Bird Discount: GH₵40 (Register before July 15)
                  </p>
                  <p>Team Registration: GH₵200 for a team of 5</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 flex justify-center">
                <button 
                  type="button"
                  className="px-8 py-3 bg-primary text-white rounded-md font-semibold hover:bg-primary/90 transition-colors"
                >
                  Register for this Event
                </button>
              </div>
            </div>
          </div>
        </dialog>
      )}

      {/* Call to Action */}
      <section className="bg-primary text-white py-16">
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
    </>
  );
};

export default SportsClub;
