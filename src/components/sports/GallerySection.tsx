import { useState, useEffect } from "react";
import { getImageSizes } from "../../utils/image-utils";
import SectionHeader from "../ui/SectionHeader";
import OptimizedImage from "../ui/OptimizedImage";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  category: 'basketball' | 'tennis' | 'swimming' | 'volleyball' | 'facilities' | 'events';
  featured?: boolean;
};

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState<string>("all");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample gallery images with various sports
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "/images/sports/event1.jpg",
      alt: "Basketball tournament final match",
      category: "basketball",
      featured: true,
    },
    {
      id: 2,
      src: "/images/sports/event2.jpg",
      alt: "Youth sports camp training session",
      category: "events",
      featured: true,
    },
    {
      id: 3,
      src: "/images/sports/event3.jpg",
      alt: "Community fitness challenge participants",
      category: "events",
    },
    {
      id: 4,
      src: "/images/sports/facility1.jpg",
      alt: "Indoor basketball court",
      category: "facilities",
      featured: true,
    },
    {
      id: 5,
      src: "/images/sports/facility2.jpg",
      alt: "Olympic-size swimming pool",
      category: "swimming",
      featured: true,
    },
    {
      id: 6,
      src: "/images/sports/team1.jpg",
      alt: "Basketball coaching session",
      category: "basketball",
    },
    {
      id: 7,
      src: "/images/sports/team2.jpg",
      alt: "Tennis practice session",
      category: "tennis",
    },
    {
      id: 8,
      src: "/images/sports/team3.jpg",
      alt: "Swimming team training",
      category: "swimming",
    },
    {
      id: 9,
      src: "/images/sports/team4.jpg",
      alt: "Volleyball team practice",
      category: "volleyball",
    },
  ];

  // Filter gallery images based on selected category
  const filteredImages = filter === "all" 
    ? galleryImages 
    : galleryImages.filter(image => image.category === filter);

  // Featured images for the showcase
  const featuredImages = galleryImages.filter(image => image.featured);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    const index = galleryImages.findIndex(img => img.id === image.id);
    setCurrentIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const navigate = (direction: 'next' | 'prev') => {
    if (!selectedImage) return;
    
    const totalImages = galleryImages.length;
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % totalImages 
      : (currentIndex - 1 + totalImages) % totalImages;
    
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        navigate('next');
      } else if (e.key === 'ArrowLeft') {
        navigate('prev');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex]);

  // Image variants for animation
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } }
  };

  return (
    <section id="gallery" className="py-16 bg-light">
      <div className="container mx-auto px-4 max-w-7xl">
        <SectionHeader 
          title="Photo Gallery" 
          subtitle="Capturing the action, achievements, and community spirit of Osuele Sports" 
        />
        
        {/* Featured Images Masonry */}
        <div className="mb-12 relative">
          <h3 className="text-xl font-bold text-primary mb-6 inline-flex items-center">
            <span className="w-2 h-8 bg-accent mr-3 rounded-full"></span>
            Featured Moments
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {featuredImages.slice(0, 3).map((image, index) => (
              <div 
                key={image.id} 
                className={`relative overflow-hidden rounded-lg shadow-md group cursor-pointer ${
                  index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                onClick={() => openLightbox(image)}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="aspect-square md:aspect-auto h-full">
                  <OptimizedImage
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes={getImageSizes(index === 0 ? 'md:w-2/3' : 'md:w-1/3')}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="w-full text-white">
                    <p className="font-medium mb-1">{image.alt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs uppercase tracking-wider bg-accent/90 rounded-full px-2 py-0.5">
                        {image.category}
                      </span>
                      <ZoomIn className="w-6 h-6 bg-white/20 rounded-full p-1 backdrop-blur-sm" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Gallery Filters */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {['all', 'basketball', 'tennis', 'swimming', 'volleyball', 'facilities', 'events'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === category 
                  ? 'bg-accent text-white shadow-md' 
                  : 'bg-white text-secondary hover:bg-gray-100'
              }`}
            >
              {category === 'all' ? 'All Photos' : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="wait">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow group cursor-pointer"
                onClick={() => openLightbox(image)}
              >
                <div className="h-full w-full relative">
                  <OptimizedImage
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes={getImageSizes('lg:w-1/4 md:w-1/3')}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <div className="w-full">
                      <p className="text-white text-sm font-medium line-clamp-2">{image.alt}</p>
                      <span className="text-xs text-white/80 uppercase tracking-wider">
                        {image.category}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {/* Instagram Banner */}
        <div className="mt-16 relative overflow-hidden rounded-xl" data-aos="fade-up">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/80 z-0"></div>
          <div className="absolute inset-0 bg-[url('/images/sports/event2.jpg')] bg-cover bg-center opacity-20 z-0"></div>
          
          <div className="relative z-10 p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                <FaInstagram className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Follow Us on Instagram
              </h3>
              <p className="mb-6 text-white/90">
                Stay updated with our latest events, training sessions, and sports achievements.
                Follow our Instagram page for exclusive content and behind-the-scenes moments.
              </p>
              <a 
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-primary rounded-md font-semibold hover:bg-white/90 transition-colors"
              >
                <FaInstagram className="mr-2 w-5 h-5" />
                @osuelesports
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate('prev');
              }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors z-20"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <motion.div
              key={selectedImage.id}
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="max-w-5xl w-full max-h-[80vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-full">
                <OptimizedImage
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                  sizes="(min-width: 1280px) 1024px, (min-width: 1024px) 768px, 100vw"
                  priority={true}
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-lg font-medium">{selectedImage.alt}</p>
                <span className="text-white/80 text-sm capitalize">
                  {selectedImage.category} • {currentIndex + 1} of {galleryImages.length}
                </span>
              </div>
            </motion.div>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate('next');
              }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors z-20"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;