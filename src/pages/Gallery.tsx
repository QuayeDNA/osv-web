import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Image } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { updateMetaTags, pageSeoData } from "../utils/seo-utils";

// Import reusable components
import SectionHeader from "../components/ui/SectionHeader";
import OptimizedImage from "../components/ui/OptimizedImage";
import { getImageSizes } from "../utils/image-utils";

type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  category: string;
  title: string;
};

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    // Apply SEO meta tags for Gallery page
    updateMetaTags({
      ...pageSeoData.sportsClub,
      title: "Sports Gallery | Osuele Sports Club",
      description: "Browse photos of our boxing matches, football games, training sessions, facilities, and community events at Osuele Sports Club.",
    });

    // Initialize AOS for animations
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  // Sample gallery images
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "/images/sports/event1.jpg",
      alt: "Boxing Match",
      category: "boxing",
      title: "Championship Boxing Finals"
    },
    {
      id: 2,
      src: "/images/sports/team2.jpg",
      alt: "Boxing Training",
      category: "boxing",
      title: "Professional Training Session"
    },
    {
      id: 3,
      src: "/images/sports/event2.jpg",
      alt: "Football Match",
      category: "football",
      title: "Youth Football Tournament"
    },
    {
      id: 4,
      src: "/images/sports/team3.jpg",
      alt: "Football Team",
      category: "football", 
      title: "Team Training Session"
    },
    {
      id: 5,
      src: "/images/sports/facility1.jpg",
      alt: "Sports Facility",
      category: "facilities",
      title: "Main Stadium"
    },
    {
      id: 6, 
      src: "/images/sports/facility2.jpg",
      alt: "Boxing Arena",
      category: "facilities",
      title: "Boxing Training Arena"
    },
    {
      id: 7,
      src: "/images/sports/event3.jpg",
      alt: "Community Event",
      category: "events",
      title: "Annual Community Sports Day"
    },
    {
      id: 8,
      src: "/images/sports/team1.jpg",
      alt: "Coaching Session",
      category: "events",
      title: "Youth Coaching Workshop"
    },
    {
      id: 9,
      src: "/images/sports/team4.jpg",
      alt: "Women's Boxing",
      category: "boxing",
      title: "Women's Boxing Division"
    }
  ];

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (image: GalleryImage) => {
    setLightboxImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = "auto";
  };

  // Enhanced keyboard event handler for better accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault(); // Prevent default space behavior
      // The element's onClick will be triggered by Enter
    }
  };

  // Navigate through images in lightbox
  const navigateLightbox = (direction: 'next' | 'prev') => {
    if (!lightboxImage) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === lightboxImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }
    
    setLightboxImage(filteredImages[newIndex]);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center bg-primary overflow-hidden" aria-labelledby="gallery-hero-heading">
        <div className="absolute inset-0 bg-[url('/images/sports/event1.jpg')] bg-cover bg-center opacity-30 transform scale-105 motion-safe:animate-subtle-zoom"></div>
        
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <h1 id="gallery-hero-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sports Gallery
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Capturing moments of excellence, effort, and achievement
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Photo Gallery" 
            subtitle="Browse our collection of photos from matches, training sessions, and events" 
          />
          
          {/* Gallery Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-10" data-aos="fade-up">
            <button 
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeCategory === "all" 
                  ? "bg-primary text-white" 
                  : "bg-light text-secondary hover:bg-light/80"
              }`}
            >
              All Photos
            </button>
            <button 
              type="button"
              onClick={() => setActiveCategory("boxing")}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeCategory === "boxing" 
                  ? "bg-primary text-white" 
                  : "bg-light text-secondary hover:bg-light/80"
              }`}
            >
              Boxing
            </button>
            <button 
              type="button"
              onClick={() => setActiveCategory("football")}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeCategory === "football" 
                  ? "bg-primary text-white" 
                  : "bg-light text-secondary hover:bg-light/80"
              }`}
            >
              Football
            </button>
            <button 
              type="button"
              onClick={() => setActiveCategory("facilities")}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeCategory === "facilities" 
                  ? "bg-primary text-white" 
                  : "bg-light text-secondary hover:bg-light/80"
              }`}
            >
              Facilities
            </button>
            <button 
              type="button"
              onClick={() => setActiveCategory("events")}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeCategory === "events" 
                  ? "bg-primary text-white" 
                  : "bg-light text-secondary hover:bg-light/80"
              }`}
            >
              Events
            </button>
          </div>
          
          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" data-aos="fade-up">
            {filteredImages.map((image) => (
              <div 
                key={image.id}
                className="overflow-hidden rounded-lg shadow-md group cursor-pointer"
                onClick={() => openLightbox(image)}
                onKeyDown={handleKeyDown}
                tabIndex={0}
                role="button"
                aria-label={`View ${image.alt}`}
              >
                <div className="relative aspect-[4/3]">
                  <OptimizedImage
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes={getImageSizes('lg:w-1/3')}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <span className="p-4 text-white font-medium">{image.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-secondary/70 mb-2">No images found in this category.</p>
              <button 
                type="button"
                onClick={() => setActiveCategory("all")}
                className="text-accent font-medium hover:text-primary transition-colors"
              >
                View all photos
              </button>
            </div>
          )}
          
          {/* Full Gallery Link */}
          <div className="text-center mt-12" data-aos="fade-up">
            <p className="mb-4 text-secondary/80">
              Want to see more photos of our club activities?
            </p>
            <button 
              type="button"
              className="px-8 py-3 bg-primary text-white rounded-md font-semibold hover:bg-primary/90 transition-colors flex items-center mx-auto"
            >
              <Image className="mr-2 w-5 h-5" />
              View Full Gallery
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
              Experience the Action in Person
            </h2>
            <p
              className="text-xl max-w-3xl mx-auto mb-8 text-white/90"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Come see the energy and excitement of Osuele Sports Club for yourself.
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
                Book a Visit
              </button>
              <button 
                type="button"
                className="px-8 py-3 bg-transparent text-white border-2 border-white rounded-md font-semibold hover:bg-white/10 transition-colors"
              >
                Join a Program
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
        >
          <div 
            className="relative max-w-5xl w-full mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 z-10"
              aria-label="Close lightbox"
            >
              ✕
            </button>
            
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => navigateLightbox('prev')}
                className="w-12 h-12 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 -ml-6"
                aria-label="Previous image"
              >
                &#10094;
              </button>
              
              <div className="relative">
                <img
                  src={lightboxImage.src}
                  alt={lightboxImage.alt}
                  className="max-h-[80vh] mx-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4">
                  <h3 id="lightbox-title" className="text-xl text-white font-medium">{lightboxImage.title}</h3>
                  <p className="text-white/80 text-sm">
                    {lightboxImage.category.charAt(0).toUpperCase() + lightboxImage.category.slice(1)} • Osuele Sports Club
                  </p>
                </div>
              </div>
              
              <button
                type="button"
                onClick={() => navigateLightbox('next')}
                className="w-12 h-12 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 -mr-6"
                aria-label="Next image"
              >
                &#10095;
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;