import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { updateMetaTags, pageSeoData } from "../utils/seo-utils";

// Import reusable components
import SectionHeader from "../components/ui/SectionHeader";
import CheckItem from "../components/ui/CheckItem";
import OptimizedImage from "../components/ui/OptimizedImage";
import { getImageSizes } from "../utils/image-utils";

// Type for events
type Event = {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
};

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  useEffect(() => {
    // Apply SEO meta tags for Events page
    updateMetaTags({
      ...pageSeoData.sportsClub,
      title: "Boxing & Football Events | Osuele Sports Club",
      description: "Join our upcoming boxing and football events, tournaments, and community activities at Osuele Sports Club in Accra, Ghana.",
    });

    // Initialize AOS for animations
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  // Sample events
  const events: Event[] = [
    {
      id: 1,
      title: "Annual Boxing Tournament",
      date: "October 15-18, 2024",
      location: "Osuele Sports Complex, Accra",
      description:
        "Our flagship boxing tournament featuring multiple weight categories and skill levels. Open to both club members and invited boxers from across Ghana. The tournament showcases talent from youth divisions to professional-level competitors, with special exhibition matches featuring former champions.",
      image: "/images/sports/event1.jpg",
    },
    {
      id: 2,
      title: "Youth Football Camp",
      date: "July 10-21, 2024",
      location: "Osuele Training Grounds",
      description:
        "A two-week intensive football camp for youth aged 8-16. The camp focuses on skills development, tactical understanding, and team building. Participants will receive coaching from professional trainers including former national team players. The camp concludes with a mini-tournament and awards ceremony.",
      image: "/images/sports/event2.jpg",
    },
    {
      id: 3,
      title: "Community Fitness Challenge",
      date: "September 3-4, 2024",
      location: "Osuele Fitness Center",
      description:
        "A weekend dedicated to fitness challenges for all levels. Participants can test their strength, endurance, and agility through various challenges and competitions. The event includes special boxing and football-themed fitness circuits, nutrition workshops, and health screenings provided by our partners.",
      image: "/images/sports/event3.jpg",
    },
    {
      id: 4,
      title: "Women in Sports Showcase",
      date: "August 12, 2024",
      location: "Osuele Main Stadium",
      description:
        "A special event highlighting women's boxing and football, featuring exhibition matches, skills demonstrations, and panel discussions with prominent female athletes. The day includes special training sessions for girls and women of all ages interested in starting their journey in either sport.",
      image: "/images/sports/team2.jpg",
    },
    {
      id: 5,
      title: "Corporate Sports Day",
      date: "November 5, 2024",
      location: "Osuele Sports Complex",
      description:
        "A team-building event designed for companies and organizations. The day includes friendly competitions in both boxing and football, with modified rules for beginners. Corporate packages include facility rental, equipment, professional coaching, catering options, and customized team-building activities.",
      image: "/images/sports/team3.jpg",
    },
    {
      id: 6,
      title: "Boxing Masterclass",
      date: "June 24-25, 2024",
      location: "Osuele Boxing Arena",
      description:
        "An intensive two-day masterclass with international boxing coaches covering advanced techniques, strategy, and mental preparation. The masterclass is limited to advanced boxers and includes video analysis, one-on-one coaching, and sparring sessions with feedback. Registration includes exclusive training materials.",
      image: "/images/sports/facility2.jpg",
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
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center bg-primary overflow-hidden" aria-labelledby="events-hero-heading">
        <div className="absolute inset-0 bg-[url('/images/sports/event2.jpg')] bg-cover bg-center opacity-30 transform scale-105 motion-safe:animate-subtle-zoom"></div>
        
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <h1 id="events-hero-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
              Upcoming Events
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Join us for exciting sports events, tournaments, and community activities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Calendar of Events" 
            subtitle="Find out what's happening at Osuele Sports Club and join us" 
          />

          <div className="space-y-8">
            {events.map((event, index) => (
              <div 
                key={event.id}
                className="flex flex-col md:flex-row gap-6 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="md:w-1/3 h-60 md:h-auto overflow-hidden">
                  <OptimizedImage
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    sizes={getImageSizes('md:w-1/3')}
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {event.title}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 text-sm">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 text-accent mr-2" />
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-accent mr-2" />
                      <span className="font-medium">{event.location}</span>
                    </div>
                  </div>
                  <p className="text-secondary/80 line-clamp-3 mb-4">
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
            <p className="mb-6 max-w-3xl mx-auto">
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
        </div>

        {/* Calendar Subscription Section */}
        <div className="container mx-auto px-4 mt-16">
          <div className="bg-primary/5 p-8 rounded-lg" data-aos="fade-up">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-primary mb-2">
                Never Miss an Event
              </h3>
              <p className="text-secondary/80">
                Subscribe to our events calendar to stay updated on all upcoming activities
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              <button 
                type="button"
                className="px-6 py-3 bg-white border border-primary/20 text-primary rounded-md font-medium hover:bg-primary/5 transition-colors shadow-sm flex items-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Add to Google Calendar
              </button>
              <button 
                type="button"
                className="px-6 py-3 bg-white border border-primary/20 text-primary rounded-md font-medium hover:bg-primary/5 transition-colors shadow-sm flex items-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Add to iCalendar
              </button>
              <button 
                type="button"
                className="px-6 py-3 bg-white border border-primary/20 text-primary rounded-md font-medium hover:bg-primary/5 transition-colors shadow-sm flex items-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Add to Outlook
              </button>
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
              Join Us at Our Next Event
            </h2>
            <p
              className="text-xl max-w-3xl mx-auto mb-8 text-white/90"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Experience the excitement and energy of our boxing matches, football games, and community gatherings.
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
                Register for an Event
              </button>
              <button 
                type="button"
                className="px-8 py-3 bg-transparent text-white border-2 border-white rounded-md font-semibold hover:bg-white/10 transition-colors"
              >
                View Full Calendar
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Event Detail Modal - using dialog element */}
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
    </>
  );
};

export default Events;