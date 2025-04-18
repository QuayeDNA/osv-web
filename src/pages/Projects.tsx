import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import OptimizedImage from '../components/ui/OptimizedImage';
import { getImageSizes } from '../utils/image-utils';
import { updateMetaTags, pageSeoData } from '../utils/seo-utils';

// Project type definition
type CategoryId = 'all' | 'telecom' | 'construction' | 'civil' | 'equipment' | 'supplies';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  detailImage?: string;
  year: string;
  client: string;
  location: string;
}

// Project data
const projectsData: Project[] = [
  {
    id: 1,
    title: 'Network Infrastructure Upgrade',
    category: 'telecom',
    description: 'A comprehensive upgrade of telecommunication infrastructure for a major corporate client, including network optimization and expansion.',
    image: '/images/projects/telecom-1.jpg',
    detailImage: '/images/projects/telecom-1-detail.jpg',
    year: '2023',
    client: 'Business Communications Limited',
    location: 'Accra, Ghana',
  },
  {
    id: 2,
    title: 'Rural Connectivity Project',
    category: 'telecom',
    description: 'Extending telecommunication services to previously underserved rural communities through innovative and cost-effective solutions.',
    image: '/images/projects/telecom-2.jpg',
    detailImage: '/images/projects/telecom-2-detail.jpg',
    year: '2022',
    client: 'Ghana Rural Development Initiative',
    location: 'Northern Region, Ghana',
  },
  {
    id: 3,
    title: 'Luxury Apartment Complex',
    category: 'construction',
    image: '/images/projects/construction-1.jpg',
    description: 'Design and construction of a 50-unit luxury apartment complex with modern amenities, underground parking, and landscaped gardens.',
    client: 'Prime Development Ltd',
    location: 'Kumasi, Ghana',
    year: '2022'
  },
  {
    id: 4,
    title: 'Highway Bridge Construction',
    category: 'civil',
    image: '/images/projects/civil-1.jpg',
    description: 'Engineering and construction of a reinforced concrete bridge spanning 100 meters across a river, connecting two major communities.',
    client: 'Ghana Highway Authority',
    location: 'Eastern Region, Ghana',
    year: '2021'
  },
  {
    id: 5,
    title: 'Telecommunications Tower Installation',
    category: 'equipment',
    image: '/images/projects/equipment-1.jpg',
    description: 'Supply and installation of telecommunications towers in rural areas to improve connectivity, including solar power systems.',
    client: 'National Communications Authority',
    location: 'Northern Region, Ghana',
    year: '2023'
  },
  {
    id: 6,
    title: 'Office Complex Renovation',
    category: 'construction',
    image: '/images/projects/construction-2.jpg',
    description: 'Complete renovation of a 10-story office building including structural repairs, modern interior design, and upgraded utilities.',
    client: 'Business Plaza Ltd',
    location: 'Accra, Ghana',
    year: '2022'
  },
  {
    id: 7,
    title: 'Medical Equipment Supply',
    category: 'supplies',
    image: '/images/projects/supplies-1.jpg',
    description: 'Procurement and delivery of specialized medical equipment for a new hospital wing, including installation and staff training.',
    client: 'Korle Bu Teaching Hospital',
    location: 'Accra, Ghana',
    year: '2021'
  },
  {
    id: 8,
    title: 'Water Treatment Plant',
    category: 'civil',
    image: '/images/projects/civil-2.jpg',
    description: 'Design and construction of a water treatment facility capable of processing 10,000 gallons per day, serving multiple communities.',
    client: 'Ghana Water Company',
    location: 'Western Region, Ghana',
    year: '2023'
  },
  {
    id: 9,
    title: 'Hotel Network Upgrade',
    category: 'telecom',
    image: '/images/projects/telecom-2.jpg',
    description: 'Comprehensive upgrade of a 5-star hotel\'s network infrastructure, improving guest connectivity and internal operations.',
    client: 'Luxury Stays Hotel',
    location: 'Takoradi, Ghana',
    year: '2022'
  },
  {
    id: 10,
    title: 'School Furniture Supply',
    category: 'supplies',
    image: '/images/projects/supplies-2.jpg',
    description: 'Manufacturing and delivery of classroom furniture for 20 newly constructed schools, including desks, chairs, and storage cabinets.',
    client: 'Ghana Education Service',
    location: 'Multiple Locations, Ghana',
    year: '2021'
  }
];

// Category definition
const categoryOptions = [
  { id: 'all' as CategoryId, name: 'All Projects' },
  { id: 'telecom' as CategoryId, name: 'Telecommunication' },
  { id: 'construction' as CategoryId, name: 'Construction' },
  { id: 'civil' as CategoryId, name: 'Civil Engineering' },
  { id: 'equipment' as CategoryId, name: 'Equipment' },
  { id: 'supplies' as CategoryId, name: 'Supplies' }
];

// Testimonial interface
interface Testimonial {
  id: string;
  quote: string;
  author: string;
  position: string;
}

// Testimonial data
const testimonialData: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote: "Osuele Ventures delivered our telecommunications infrastructure project on time and within budget. Their team's expertise and professionalism were exceptional throughout the process.",
    author: "Michael Adenuga",
    position: "IT Director, Global Finance Corporation",
  },
  {
    id: 'testimonial-2',
    quote: "The quality of construction and attention to detail was impressive. We're extremely satisfied with our new office complex and the support provided by the Osuele team.",
    author: "Sarah Mensah",
    position: "CEO, Prime Development Ltd",
  },
  {
    id: 'testimonial-3',
    quote: "Working with Osuele Ventures on our civil engineering project was a pleasure. Their technical knowledge and project management skills ensured a smooth execution.",
    author: "Kwame Acheampong",
    position: "Project Manager, Ghana Highway Authority",
  }
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectsData);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {

    // Update meta tags for SEO
    updateMetaTags(pageSeoData.projects);

    // Initialize AOS animation library
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });

    // Filter projects based on active category
    if (activeCategory === 'all') {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(projectsData.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);

  const handleCategoryChange = (category: CategoryId) => {
    setActiveCategory(category);
  };

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  // Handle keyboard events for modal
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeProjectModal();
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-primary">
        <div className="absolute inset-0 bg-[url('/images/projects.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Projects</h1>
            <p className="text-xl text-white/90">
              Explore our portfolio of successful projects across various sectors
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="mb-12" data-aos="fade-up">
            <h2 className="section-title">Project Portfolio</h2>
            <p className="text-lg max-w-3xl">
              Browse through our diverse range of completed projects showcasing our expertise and commitment to excellence.
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-10 overflow-x-auto" data-aos="fade-up">
            <div className="flex space-x-4 pb-2">
              {categoryOptions.map(category => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-4 py-2 rounded-md whitespace-nowrap transition-colors ${
                    activeCategory === category.id
                      ? 'bg-primary text-white'
                      : 'bg-light text-secondary hover:bg-light/80'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer image-hover"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                onClick={() => openProjectModal(project)}
                onKeyDown={(e) => e.key === 'Enter' && openProjectModal(project)}
                tabIndex={0}
                role="button"
                aria-label={`View details of ${project.title}`}
              >
                <div className="h-56 overflow-hidden">
                  <OptimizedImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes={getImageSizes('lg:w-1/3 md:w-1/2')}
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm font-medium px-3 py-1 rounded-full bg-light text-primary inline-block mb-3">
                    {categoryOptions.find(c => c.id === project.category)?.name}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-secondary/80 line-clamp-2">{project.description}</p>
                  <div className="flex justify-between items-center mt-4 text-sm text-secondary/70">
                    <span>{project.location}</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-secondary/80">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={closeProjectModal}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div 
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
            onKeyDown={e => e.stopPropagation()}
            role="document"
            tabIndex={-1}
          >
            <div className="relative">
              <button
                onClick={closeProjectModal}
                className="absolute top-4 right-4 w-10 h-10 bg-primary/80 text-white rounded-full flex items-center justify-center hover:bg-primary z-10"
                aria-label="Close modal"
              >
                ✕
              </button>
                <div className="h-72 md:h-96">
                <img
                  src={selectedProject.detailImage ?? selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                </div>
            </div>
            <div className="p-6 md:p-8">
              <h3 id="modal-title" className="text-2xl md:text-3xl font-bold mb-4">{selectedProject.title}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <h4 className="text-sm font-semibold text-secondary/70 mb-1">Client</h4>
                  <p className="text-lg">{selectedProject.client}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-secondary/70 mb-1">Location</h4>
                  <p className="text-lg">{selectedProject.location}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-secondary/70 mb-1">Year</h4>
                  <p className="text-lg">{selectedProject.year}</p>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-secondary/70 mb-1">Project Description</h4>
                <p className="text-base leading-relaxed">{selectedProject.description}</p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="text-lg font-bold mb-4">Project Gallery</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {/* These would be additional project images */}
                  <img 
                    src={selectedProject.image.replace('.jpg', '-detail1.jpg')} 
                    alt={`${selectedProject.title} detail`}
                    className="w-full h-24 object-cover rounded-md"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = selectedProject.image;
                    }}
                  />
                  <img 
                    src={selectedProject.image.replace('.jpg', '-detail2.jpg')} 
                    alt={`${selectedProject.title} detail`}
                    className="w-full h-24 object-cover rounded-md"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = selectedProject.image;
                    }}
                  />
                  <img 
                    src={selectedProject.image.replace('.jpg', '-detail3.jpg')} 
                    alt={`${selectedProject.title} detail`}
                    className="w-full h-24 object-cover rounded-md"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = selectedProject.image;
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Testimonials Section */}
      <section className="section bg-light">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">Client Testimonials</h2>
            <p className="max-w-3xl mx-auto">
              See what our clients have to say about our project delivery and service quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialData.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-lg shadow-md"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="mb-4 text-accent">
                  <svg className="w-10 h-10" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.223.315-.598.795-1.148 1.436-1.65.356-.27.66-.45.91-.53.25-.08.487-.12.713-.12.426 0 .77.18 1.028.53.25.353.376.792.376 1.32 0 .528-.126.998-.376 1.407-.252.408-.597.815-1.028 1.22-1.1.97-1.94 1.409-2.25 1.317-.31-.092-.31.318 0 1.235.32.916.86 1.468 1.62 1.66.76.19 1.5.19 2.26 0 .75-.19 1.33-.74 1.72-1.66.4-.92.61-1.88.61-2.89zm10.66 0c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.223.315-.598.795-1.148 1.436-1.65.356-.27.66-.45.91-.53.25-.08.487-.12.713-.12.426 0 .77.18 1.028.53.25.353.376.792.376 1.32 0 .528-.126.998-.376 1.407-.252.408-.597.815-1.028 1.22-1.1.97-1.94 1.409-2.25 1.317-.31-.092-.31.318 0 1.235.32.916.86 1.468 1.62 1.66.76.19 1.5.19 2.26 0 .75-.19 1.33-.74 1.72-1.66.4-.92.61-1.88.61-2.89z" />
                  </svg>
                </div>
                <p className="text-secondary italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-light flex items-center justify-center mr-4">
                    <span className="text-primary font-bold text-lg">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.author}</h4>
                    <p className="text-secondary/70 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
