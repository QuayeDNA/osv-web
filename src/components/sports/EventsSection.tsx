import { useState } from "react";
import { getImageSizes } from "../../utils/image-utils";
import SectionHeader from "../ui/SectionHeader";
import OptimizedImage from "../ui/OptimizedImage";
import CheckItem from "../ui/CheckItem";
import { Calendar, MapPin, Users, Clock, ArrowRight, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Type for events
type Event = {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  category: 'tournament' | 'workshop' | 'community';
  time?: string;
  featured?: boolean;
};

const EventsSection = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [filter, setFilter] = useState<string>("all");

  // Sample events with more variety
  const events: Event[] = [
    {
      id: 1,
      title: "National Basketball Championship",
      date: "October 15-18, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "Osuele Sports Complex, Accra",
      description:
        "Our flagship basketball tournament featuring elite teams from across Ghana. Experience three days of intense competition, skill showcases, and community events. The championship includes both men's and women's divisions with prizes for winning teams.",
      image: "/images/sports/event1.jpg",
      category: 'tournament',
      featured: true
    },
    {
      id: 2,
      title: "Multi-Sport Youth Camp",
      date: "July 10-21, 2024",
      time: "8:00 AM - 3:00 PM",
      location: "Osuele Training Grounds",
      description:
        "A two-week intensive sports camp for youth aged 8-16. The camp focuses on skills development across basketball, tennis, swimming and volleyball. Our professional coaches provide expert instruction while emphasizing teamwork, sportsmanship, and character development.",
      image: "/images/sports/event2.jpg",
      category: 'workshop',
      featured: true
    },
    {
      id: 3,
      title: "Community Fitness Challenge",
      date: "September 3-4, 2024",
      time: "7:00 AM - 5:00 PM",
      location: "Osuele Fitness Center",
      description:
        "A weekend dedicated to fitness challenges for all levels. Participants can test their strength, endurance, and agility through various challenges and competitions. Join us for group workouts, nutrition workshops, and fitness assessments with our certified trainers.",
      image: "/images/sports/event3.jpg",
      category: 'community',
      featured: true
    },
    {
      id: 4,
      title: "Tennis Open Tournament",
      date: "August 5-7, 2024",
      time: "8:00 AM - 6:00 PM",
      location: "Osuele Tennis Courts",
      description:
        "An open tennis tournament with categories for juniors, adults, and seniors. All skill levels welcome with round-robin format ensuring multiple matches for all participants. Professional coaching staff will be present to provide tips and analysis.",
      image: "/images/sports/facility1.jpg",
      category: 'tournament'
    },
    {
      id: 5,
      title: "Swimming Technique Workshop",
      date: "June 15, 2024",
      time: "10:00 AM - 2:00 PM",
      location: "Osuele Swimming Pool",
      description:
        "Improve your swimming technique with our specialized workshop led by certified swimming coaches. Focus on stroke refinement, starts, turns, and racing strategy. Video analysis included for all participants.",
      image: "/images/sports/facility2.jpg",
      category: 'workshop'
    },
    {
      id: 6,
      title: "Family Sports Day",
      date: "November 12, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "Osuele Sports Complex",
      description:
        "A day of family-friendly sports activities and competitions. Activities for all ages including relay races, family challenges, and mini-tournaments. Food vendors, entertainment, and prizes throughout the day.",
      image: "/images/sports/team4.jpg",
      category: 'community'
    },
  ];

  // Filter events based on selected category
  const filteredEvents = filter === "all" 
    ? events 
    : events.filter(event => event.category === filter);

  // Featured events for the showcase
  const featuredEvents = events.filter(event => event.featured);

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

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="events" className="py-16 bg-gradient-to-b from-white to-light">
      <div className="container mx-auto px-4 max-w-9xl">
        <SectionHeader 
          title="Upcoming Events" 
          subtitle="Join us for exciting sports events, tournaments, and community activities" 
        />

        {/* Featured Events Carousel */}
        <div className="mb-16 relative overflow-hidden rounded-xl shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 z-10"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 h-96">
            {featuredEvents.map((event) => (
              <div key={event.id} className="relative overflow-hidden h-full">
                <OptimizedImage
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                  sizes={getImageSizes('md:w-1/3')}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <div className="bg-accent/90 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block backdrop-blur-sm">
                    {event.category === 'tournament' ? 'TOURNAMENT' : 
                     event.category === 'workshop' ? 'WORKSHOP' : 'COMMUNITY EVENT'}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">{event.title}</h3>
                  <div className="flex items-center text-white/90 text-sm mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <button
                    onClick={() => openEventModal(event)}
                    className="flex items-center text-white font-medium group"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Event Filters */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {['all', 'tournament', 'workshop', 'community'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === category 
                  ? 'bg-accent text-white shadow-md' 
                  : 'bg-white text-secondary hover:bg-gray-100'
              }`}
            >
              {category === 'all' ? 'All Events' : 
               category === 'tournament' ? 'Tournaments' : 
               category === 'workshop' ? 'Workshops' : 'Community Events'}
            </button>
          ))}
        </div>

        {/* Events List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filteredEvents.map((event, index) => (
              <motion.div 
                key={event.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ delay: index * 0.1 }}
                layout
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all group"
              >
                <div className="h-48 overflow-hidden relative">
                  <OptimizedImage
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                    sizes={getImageSizes('lg:w-1/3 md:w-1/2')}
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`text-xs font-bold uppercase py-1 px-2 rounded-full ${
                      event.category === 'tournament' ? 'bg-red-500' : 
                      event.category === 'workshop' ? 'bg-blue-500' : 'bg-green-500'
                    } text-white`}>
                      {event.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-primary mb-2 line-clamp-1 group-hover:text-accent transition-colors">
                    {event.title}
                  </h3>
                  <div className="flex flex-col gap-1 mb-4 text-sm text-secondary/80">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 text-accent mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-accent mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 text-accent mr-2" />
                      <span className="line-clamp-1">{event.location}</span>
                    </div>
                  </div>
                  <p className="text-secondary/80 text-sm line-clamp-2 mb-4">
                    {event.description}
                  </p>
                  <button
                    onClick={() => openEventModal(event)}
                    className="flex items-center text-accent font-medium hover:text-primary transition-colors group/btn"
                  >
                    <span>Details</span>
                    <ChevronRight className="w-4 h-4 ml-1 transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Host An Event Banner */}
        <div
          className="mt-16 relative overflow-hidden rounded-xl"
          data-aos="fade-up"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-0"></div>
          <div className="absolute inset-0 bg-[url('/images/sports/facility1.jpg')] bg-cover bg-center opacity-20 z-0"></div>
          
          <div className="relative z-10 p-10 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Want to Host a Sports Event?
              </h3>
              <p className="mb-8 text-white/90 text-lg">
                Our world-class facilities are available for tournaments, competitions,
                corporate sports days, and private events. Our team can help plan
                and execute your perfect sports event.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  type="button"
                  className="px-8 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
                >
                  <span className="flex items-center">
                    <Users className="mr-2 w-5 h-5" />
                    Inquire About Event Hosting
                  </span>
                </button>
                <button 
                  type="button"
                  className="px-8 py-3 bg-transparent text-white border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  <span className="flex items-center">
                    <Calendar className="mr-2 w-5 h-5" />
                    View Venue Availability
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Event Detail Modal */}
        <AnimatePresence>
          {selectedEvent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
              onClick={closeEventModal}
              onKeyDown={handleKeyDown}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <div className="absolute top-4 right-4 z-20">
                    <button
                      type="button"
                      onClick={closeEventModal}
                      className="bg-white/20 backdrop-blur-md text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/40 transition-colors border border-white/30"
                      aria-label="Close modal"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="h-72 md:h-96 relative">
                    <OptimizedImage
                      src={selectedEvent.image}
                      alt={selectedEvent.title}
                      className="w-full h-full object-cover"
                      sizes="(min-width: 768px) 768px, 100vw"
                      priority={true}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full p-6">
                      <span className={`inline-block text-xs font-bold uppercase py-1 px-3 rounded-full mb-3 ${
                        selectedEvent.category === 'tournament' ? 'bg-red-500' : 
                        selectedEvent.category === 'workshop' ? 'bg-blue-500' : 'bg-green-500'
                      } text-white`}>
                        {selectedEvent.category === 'tournament' ? 'Tournament' : 
                         selectedEvent.category === 'workshop' ? 'Workshop' : 'Community Event'}
                      </span>
                      <h3 id="modal-title" className="text-2xl md:text-3xl font-bold text-white">
                        {selectedEvent.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap gap-6 mb-6 text-sm">
                    <div className="flex items-start">
                      <Calendar className="w-5 h-5 text-accent mr-2 mt-0.5" />
                      <div>
                        <span className="font-medium block text-primary">Date</span>
                        <span className="text-secondary/80">{selectedEvent.date}</span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-accent mr-2 mt-0.5" />
                      <div>
                        <span className="font-medium block text-primary">Time</span>
                        <span className="text-secondary/80">{selectedEvent.time}</span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-accent mr-2 mt-0.5" />
                      <div>
                        <span className="font-medium block text-primary">Location</span>
                        <span className="text-secondary/80">{selectedEvent.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-bold mb-2 text-primary">About This Event</h4>
                    <p className="leading-relaxed text-secondary/80">
                      {selectedEvent.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-bold mb-3 text-primary">Event Schedule</h4>
                      <ul className="space-y-3">
                        <CheckItem text="Opening Ceremony - 9:00 AM" number={1} className="flex items-start" />
                        <CheckItem text="Competitions and Activities - 10:30 AM to 4:00 PM" number={2} className="flex items-start" />
                        <CheckItem text="Awards Presentation - 4:30 PM" number={3} className="flex items-start" />
                        <CheckItem text="Closing Ceremony - 5:00 PM" number={4} className="flex items-start" />
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold mb-3 text-primary">
                        Registration Information
                      </h4>
                      <div className="space-y-3 bg-light p-4 rounded-lg">
                        <div className="flex justify-between">
                          <span>Individual Registration:</span>
                          <span className="font-medium">GH₵50</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Early Bird Discount:</span>
                          <span className="font-medium">GH₵40</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Team Registration (5 members):</span>
                          <span className="font-medium">GH₵200</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Registration Deadline:</span>
                          <span className="font-medium text-red-500">July 15, 2024</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200 flex justify-center">
                    <button 
                      type="button"
                      className="px-8 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
                    >
                      <span className="flex items-center">
                        <Users className="mr-2 w-5 h-5" />
                        Register for this Event
                      </span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default EventsSection;