import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building2, ShieldCheck, Wrench, Briefcase, Radio, Users, Star, ChevronRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const services = [
  {
    title: 'Telecommunication Services',
    icon: <Radio className="w-10 h-10 text-accent" />,
    description: 'Comprehensive telecommunication solutions for businesses and individuals.',
  },
  {
    title: 'Supply of General Goods',
    icon: <Briefcase className="w-10 h-10 text-accent" />,
    description: 'Reliable supply of high-quality goods to meet diverse customer needs.',
  },
  {
    title: 'Civil Engineering',
    icon: <Wrench className="w-10 h-10 text-accent" />,
    description: 'Expert civil engineering services with attention to detail and quality.',
  },
  {
    title: 'Building Construction',
    icon: <Building2 className="w-10 h-10 text-accent" />,
    description: 'Professional construction services that bring architectural visions to life.',
  },
  {
    title: 'Telecommunication Equipment',
    icon: <ShieldCheck className="w-10 h-10 text-accent" />,
    description: 'Supply and maintenance of cutting-edge telecommunication equipment.',
  },
  {
    title: 'Sports Club Business',
    icon: <Users className="w-10 h-10 text-accent" />,
    description: 'Comprehensive sports facilities management and club operations.',
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, Tech Innovations",
    content: "Osuele Ventures delivered exceptional telecommunication services that transformed our business operations. Their expertise and professionalism are unmatched.",
    rating: 5
  },
  {
    name: "Michael Appiah",
    role: "Project Manager, Ghana Construction Ltd",
    content: "Working with Osuele on our building projects has been a seamless experience. Their attention to detail and quality workmanship exceeded our expectations.",
    rating: 5
  },
  {
    name: "Abena Mensah",
    role: "Director, Community Sports Initiative",
    content: "Their sports club management services helped us build a thriving community center. Highly recommended for their expertise and commitment.",
    rating: 4
  }
];

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: true,
    });
  }, []);

  return (
    <>
      {/* Hero Section - Enhanced with parallax effect */}
      <section className="relative h-screen flex items-center bg-gradient-to-r from-primary to-primary/90 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-20 transform scale-105 motion-safe:animate-subtle-zoom"></div>
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto md:mx-0"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Excellence in <span className="text-accent">Multidisciplinary</span> Services
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-white/90 leading-relaxed">
              Trusted expertise in telecommunications, construction, engineering, and more.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="w-full md:w-auto btn btn-accent btn-lg group inline-flex items-center">
                Our Services <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="btn btn-lg bg-transparent border-2 border-white text-white hover:bg-white/10 transition-colors duration-300">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center">
            <ChevronRight className="text-white rotate-90" />
          </div>
        </div>
      </section>

      {/* Company Overview - with improved layout and image treatment */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2" data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 relative pb-4 text-primary">
                <span className="text-accent">About</span> Osuele Ventures<span className="absolute bottom-0 left-0 w-24 h-1 bg-accent"></span>
              </h2>
              <p className="mb-6 text-lg text-gray-700 leading-relaxed">
                Osuele Ventures is a multidisciplinary business based in Ghana, providing a wide range of services
                with excellence and professionalism as our hallmark.
              </p>
              <p className="mb-8 text-gray-600 leading-relaxed">
                With years of experience in multiple sectors, we have established ourselves as a trusted partner
                for businesses and individuals seeking quality services in telecommunications, construction,
                engineering, and general supplies.
              </p>
              <Link to="/about" className="btn btn-primary group inline-flex items-center">
                Learn More About Us <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-accent rounded-lg"></div>
                <div className="rounded-lg overflow-hidden shadow-2xl">
                  <img 
                    src="/images/about-image.jpg" 
                    alt="Osuele Ventures Team" 
                    className="w-full h-auto object-cover transform transition-transform hover:scale-105 duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - with improved card design */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative pb-4 inline-block">
              Our <span className="text-accent">Services</span>
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-accent"></span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
              We offer a comprehensive range of services to meet your business and personal needs with excellence and precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="p-6 border-b border-gray-100">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    {React.cloneElement(service.icon, { className: "w-8 h-8" })}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
                <div className="px-6 py-4">
                  <Link to="/services" className="text-accent font-medium inline-flex items-center group-hover:underline">
                    Learn more <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16" data-aos="fade-up">
            <Link to="/services" className="btn btn-primary btn-lg">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section - New Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative pb-4 inline-block">
              Client <span className="text-accent">Testimonials</span>
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-accent"></span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Don't just take our word for it. Here's what our clients have to say about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow relative"
              >
                <div className="absolute -top-5 left-8 bg-accent text-white p-3 rounded-full">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 7L8 11L3 12L6.5 15.5L5.5 20L10 17.5L14.5 20L13.5 15.5L17 12L12 11L10 7Z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-500' : 'text-gray-300'}`} fill={i < testimonial.rating ? 'currentColor' : 'none'} />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="mt-auto">
                  <h4 className="font-bold text-primary">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - New Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "10+", label: "Years Experience" },
              { value: "50+", label: "Projects Completed" },
              { value: "30+", label: "Happy Clients" },
              { value: "6", label: "Service Categories" }
            ].map((stat, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="bg-accent text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div data-aos="fade-right" className="md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Vision Into Reality?
              </h2>
              <p className="text-xl mb-0 text-white/90">
                Contact our team to discuss how Osuele Ventures can help with your next project.
              </p>
            </div>
            <div data-aos="fade-left" className="md:w-1/3 text-center md:text-right">
              <Link 
                to="/contact" 
                className="btn bg-white text-accent hover:bg-white/90 btn-lg"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
