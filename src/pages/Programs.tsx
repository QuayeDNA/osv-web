import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Dumbbell,
  Activity,
  Award,
  User,
  Clock,
  Users,
  Heart,
  TrendingUp,
  Flag,
  Star,
  Video,
  Zap,
  Trophy,
  Shield,
  UserCheck
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { updateMetaTags, pageSeoData } from "../utils/seo-utils";

// Import reusable components
import CheckItem from "../components/ui/CheckItem";
import OptimizedImage from "../components/ui/OptimizedImage";
import { getImageSizes } from "../utils/image-utils";

const Programs = () => {
  useEffect(() => {
    // Apply SEO meta tags for Programs page
    updateMetaTags({
      ...pageSeoData.sportsClub,
      title: "Boxing & Football Programs | Osuele Sports Club",
      description: "Join our elite boxing and football training programs in Accra, Ghana. Programs available for all ages and skill levels from beginners to professionals.",
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
      <section className="relative h-[60vh] flex items-center bg-primary overflow-hidden" aria-labelledby="programs-hero-heading">
        <div className="absolute inset-0 bg-[url('/images/sports/team1.jpg')] bg-cover bg-center opacity-30 transform scale-105 motion-safe:animate-subtle-zoom"></div>
        
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <h1 id="programs-hero-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Training Programs
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Elite boxing and football training for all ages and skill levels
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          {/* Boxing Programs Section */}
          <div data-aos="fade-up" className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                <Dumbbell className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-3xl font-bold text-primary">Boxing Programs</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Elite Boxing Program */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <OptimizedImage
                    src="/images/sports/event1.jpg"
                    alt="Elite Boxing Program"
                    className="w-full h-full object-cover"
                    sizes={getImageSizes('lg:w-1/3')}
                  />
                  <div className="absolute top-4 right-4 bg-accent text-white text-xs px-2 py-1 rounded-full font-medium">
                    Professional
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2 flex items-center">
                    <Award className="w-5 h-5 text-accent mr-2" />
                    Elite Boxing Program
                  </h3>
                  <p className="text-secondary/80 text-sm mb-4">
                    Professional training for serious boxers looking to compete at national and international levels.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start">
                      <User className="w-4 h-4 text-accent mt-1 mr-2" />
                      <span className="text-sm">Ages 16+ with previous experience</span>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-4 h-4 text-accent mt-1 mr-2" />
                      <span className="text-sm">Mon, Wed, Fri: 6:00AM-8:00AM & 4:00PM-7:00PM</span>
                    </div>
                    <div className="flex items-start">
                      <Users className="w-4 h-4 text-accent mt-1 mr-2" />
                      <span className="text-sm">Limited to 10 athletes per session</span>
                    </div>
                  </div>
                  <button 
                    type="button"
                    className="w-full py-2 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors flex items-center justify-center"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
              
              {/* Youth Boxing */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <OptimizedImage
                    src="/images/sports/team2.jpg"
                    alt="Youth Boxing Program"
                    className="w-full h-full object-cover"
                    sizes={getImageSizes('lg:w-1/3')}
                  />
                  <div className="absolute top-4 right-4 bg-accent text-white text-xs px-2 py-1 rounded-full font-medium">
                    Youth
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2 flex items-center">
                    <Star className="w-5 h-5 text-accent mr-2" />
                    Youth Boxing Academy
                  </h3>
                  <p className="text-secondary/80 text-sm mb-4">
                    Structured program teaching boxing fundamentals, discipline, and fitness to young athletes.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start">
                      <User className="w-4 h-4 text-accent mt-1 mr-2" />
                      <span className="text-sm">Ages 8-15, all experience levels</span>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-4 h-4 text-accent mt-1 mr-2" />
                      <span className="text-sm">Tue, Thu: 3:30PM-5:00PM | Sat: 10:00AM-12:00PM</span>
                    </div>
                    <div className="flex items-start">
                      <Shield className="w-4 h-4 text-accent mt-1 mr-2" />
                      <span className="text-sm">Safety-focused training with certified coaches</span>
                    </div>
                  </div>
                  <button 
                    type="button"
                    className="w-full py-2 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors flex items-center justify-center"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
              
              {/* Fitness Boxing */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <OptimizedImage
                    src="/images/sports/facility2.jpg"
                    alt="Fitness Boxing Classes"
                    className="w-full h-full object-cover"
                    sizes={getImageSizes('lg:w-1/3')}
                  />
                  <div className="absolute top-4 right-4 bg-accent text-white text-xs px-2 py-1 rounded-full font-medium">
                    Fitness
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2 flex items-center">
                    <Heart className="w-5 h-5 text-accent mr-2" />
                    Fitness Boxing Classes
                  </h3>
                  <p className="text-secondary/80 text-sm mb-4">
                    High-energy boxing workouts focusing on fitness, conditioning, and stress relief.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start">
                      <User className="w-4 h-4 text-accent mt-1 mr-2" />
                      <span className="text-sm">Ages 15+, no experience required</span>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-4 h-4 text-accent mt-1 mr-2" />
                      <span className="text-sm">Multiple 1-hour classes daily</span>
                    </div>
                    <div className="flex items-start">
                      <TrendingUp className="w-4 h-4 text-accent mt-1 mr-2" />
                      <span className="text-sm">Beginner, intermediate and advanced levels</span>
                    </div>
                  </div>
                  <button 
                    type="button"
                    className="w-full py-2 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors flex items-center justify-center"
                  >
                    Join a Class
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Football Programs Section */}
          <div data-aos="fade-up" className="mb-12">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                <Activity className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-3xl font-bold text-primary">Football Programs</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Elite Football */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <OptimizedImage
                    src="/images/sports/event2.jpg"
                    alt="Elite Football Program"
                    className="w-full h-full object-cover"
                    sizes={getImageSizes('lg:w-1/3')}
                  />
                  <div className="absolute top-4 right-4 bg-accent text-white text-xs px-2 py-1 rounded-full font-medium">
                    Professional
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2 flex items-center">
                    <Flag className="w-5 h-5 text-accent mr-2" />
                    Elite Football Academy
                  </h3>
                  <p className="text-secondary/80 text-sm mb-4">
                    Professional development program for talented footballers aiming for club and national teams.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start">
                      <User className="w-4 h-4 text-accent mt-1 mr-2" />
                      <span className="text-sm">Ages 16+, advanced skill level</span>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-4 h-4 text-accent mt-1 mr-2" />
                      <span className="text-sm">Tue, Thu, Sat: 6:30AM-9:00AM & 3:00PM-6:00PM</span>
                    </div>
                    <div className="flex items-start">
                      <Video className="w-4 h-4 text-accent mt-1 mr-2" />
                      <span className="text-sm">Video analysis and tactical training</span>
                    </div>
                  </div>
                  <button 
                    type="button"
                    className="w-full py-2 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors flex items-center justify-center"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
              
              {/* Youth Football */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <OptimizedImage
                    src="/images/sports/team3.jpg"
                    alt="Youth Football Program"
                    className="w-full h-full object-cover"
                    sizes={getImageSizes('lg:w-1/3')}
                  />
                  <div className="absolute top-4 right-4 bg-accent text-white text-xs px-2 py-1 rounded-full font-medium">
                    Youth
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2 flex items-center">
                    <Zap className="w-5 h-5 text-accent mr-2" />
                    Youth Football School
                  </h3>
                  <p className="text-secondary/80 text-sm mb-4">
                    Comprehensive training focusing on football basics, team play, and athletic development.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start">
                      <User className="w-4 h-4 text-accent mt-1 mr-2" />
                      <span className="text-sm">Ages 6-15, grouped by age and skill</span>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-4 h-4 text-accent mt-1 mr-2" />
                      <span className="text-sm">Mon, Wed, Fri: 3:30PM-5:30PM | Sat: 9:00AM-12:00PM</span>
                    </div>
                    <div className="flex items-start">
                      <Trophy className="w-4 h-4 text-accent mt-1 mr-2" />
                      <span className="text-sm">Regular friendly matches and tournaments</span>
                    </div>
                  </div>
                  <button 
                    type="button"
                    className="w-full py-2 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors flex items-center justify-center"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
              
              {/* Adult Recreational Football */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <OptimizedImage
                    src="/images/sports/event3.jpg"
                    alt="Recreational Football"
                    className="w-full h-full object-cover"
                    sizes={getImageSizes('lg:w-1/3')}
                  />
                  <div className="absolute top-4 right-4 bg-accent text-white text-xs px-2 py-1 rounded-full font-medium">
                    Recreational
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2 flex items-center">
                    <UserCheck className="w-5 h-5 text-accent mr-2" />
                    Adult Recreational League
                  </h3>
                  <p className="text-secondary/80 text-sm mb-4">
                    Organized football league for adults looking to stay active and enjoy the beautiful game.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start">
                      <User className="w-4 h-4 text-accent mt-1 mr-2" />
                      <span className="text-sm">Ages 18+, all experience levels</span>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-4 h-4 text-accent mt-1 mr-2" />
                      <span className="text-sm">League matches: Thu evenings & Sun afternoons</span>
                    </div>
                    <div className="flex items-start">
                      <Users className="w-4 h-4 text-accent mt-1 mr-2" />
                      <span className="text-sm">Join as a team or individual</span>
                    </div>
                  </div>
                  <button 
                    type="button"
                    className="w-full py-2 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors flex items-center justify-center"
                  >
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Membership section */}
          <div
            className="p-8 rounded-lg overflow-hidden relative mt-16"
            data-aos="fade-up"
            style={{ background: "linear-gradient(135deg, #1a365d 0%, #2d3e50 100%)" }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-white">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m3 12 7-3 2-4 2 4 7 3"></path>
                <path d="m3 12 7 3 2 4 2-4 7-3"></path>
                <line x1="12" y1="2" x2="12" y2="22"></line>
              </svg>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Award className="w-6 h-6 text-accent mr-3" />
                Premium Membership Options
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-white">
                  <h4 className="text-xl font-semibold text-accent mb-4">Individual</h4>
                  <p className="text-4xl font-bold mb-2">GH₵200<span className="text-sm font-normal">/month</span></p>
                  <p className="text-white/80 text-sm mb-4">Perfect for dedicated athletes focusing on individual training</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckItem 
                        text="Full access to all facilities" 
                        className="flex items-start text-sm" 
                      />
                    </li>
                    <li className="flex items-start">
                      <CheckItem 
                        text="2 personal training sessions monthly" 
                        className="flex items-start text-sm" 
                      />
                    </li>
                    <li className="flex items-start">
                      <CheckItem 
                        text="Nutrition and fitness assessment" 
                        className="flex items-start text-sm" 
                      />
                    </li>
                  </ul>
                  <button 
                    type="button"
                    className="w-full py-2 bg-accent text-white rounded-md font-medium hover:bg-accent/90 transition-colors"
                  >
                    Select Plan
                  </button>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-white relative overflow-hidden transform scale-105 shadow-lg">
                  <div className="absolute top-0 right-0">
                    <div className="bg-accent text-white text-xs py-1 px-3 font-semibold rounded-bl-lg">
                      POPULAR
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-semibold text-accent mb-4">Athlete Pro</h4>
                  <p className="text-4xl font-bold mb-2">GH₵350<span className="text-sm font-normal">/month</span></p>
                  <p className="text-white/80 text-sm mb-4">Comprehensive program for serious boxing and football athletes</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckItem 
                        text="All facilities with priority booking" 
                        className="flex items-start text-sm" 
                      />
                    </li>
                    <li className="flex items-start">
                      <CheckItem 
                        text="Weekly personal training sessions" 
                        className="flex items-start text-sm" 
                      />
                    </li>
                    <li className="flex items-start">
                      <CheckItem 
                        text="Advanced performance tracking" 
                        className="flex items-start text-sm" 
                      />
                    </li>
                    <li className="flex items-start">
                      <CheckItem 
                        text="Sports injury assessment & prevention" 
                        className="flex items-start text-sm" 
                      />
                    </li>
                  </ul>
                  <button 
                    type="button"
                    className="w-full py-2 bg-white text-primary rounded-md font-medium hover:bg-white/90 transition-colors"
                  >
                    Select Plan
                  </button>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-white">
                  <h4 className="text-xl font-semibold text-accent mb-4">Family</h4>
                  <p className="text-4xl font-bold mb-2">GH₵450<span className="text-sm font-normal">/month</span></p>
                  <p className="text-white/80 text-sm mb-4">Great value for families to train and enjoy sports together</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckItem 
                        text="Access for up to 5 family members" 
                        className="flex items-start text-sm" 
                      />
                    </li>
                    <li className="flex items-start">
                      <CheckItem 
                        text="Priority registration for youth programs" 
                        className="flex items-start text-sm" 
                      />
                    </li>
                    <li className="flex items-start">
                      <CheckItem 
                        text="Discounts on all additional services" 
                        className="flex items-start text-sm" 
                      />
                    </li>
                  </ul>
                  <button 
                    type="button"
                    className="w-full py-2 bg-accent text-white rounded-md font-medium hover:bg-accent/90 transition-colors"
                  >
                    Select Plan
                  </button>
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
              Ready to Start Your Training?
            </h2>
            <p
              className="text-xl max-w-3xl mx-auto mb-8 text-white/90"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Join one of our programs today and take the first step towards achieving your sports goals.
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
                Register for a Program
              </button>
              <button 
                type="button"
                className="px-8 py-3 bg-transparent text-white border-2 border-white rounded-md font-semibold hover:bg-white/10 transition-colors"
              >
                Schedule a Trial Session
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Programs;