import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Radio, Briefcase, Wrench, Building2, ShieldCheck, Users, ChevronDown, ChevronUp, Check } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const servicesData = [
  {
    id: 'telecom',
    title: 'Telecommunication Services',
    icon: <Radio className="w-12 h-12 text-accent" />,
    shortDesc: 'Comprehensive telecommunication solutions for businesses and individuals.',
    fullDesc: 'We provide end-to-end telecommunication services including network installations, maintenance, and upgrades. Our team of experts ensures reliable connectivity and efficient communication systems tailored to your specific needs.',
    features: [
      'Network design and implementation',
      'Telecommunications infrastructure setup',
      'VoIP and unified communications',
      'Network maintenance and troubleshooting',
      'Connectivity solutions for businesses'
    ]
  },
  {
    id: 'goods',
    title: 'Supply of General Goods',
    icon: <Briefcase className="w-12 h-12 text-accent" />,
    shortDesc: 'Reliable supply of high-quality goods to meet diverse customer needs.',
    fullDesc: 'We specialize in the supply of various goods to businesses, government agencies, and individuals. Our extensive supplier network allows us to source and deliver quality products efficiently and at competitive prices.',
    features: [
      'Office supplies and equipment',
      'Industrial materials and tools',
      'Electronics and computer hardware',
      'Construction materials',
      'Customized procurement solutions'
    ]
  },
  {
    id: 'engineering',
    title: 'Civil Engineering',
    icon: <Wrench className="w-12 h-12 text-accent" />,
    shortDesc: 'Expert civil engineering services with attention to detail and quality.',
    fullDesc: 'Our civil engineering department offers comprehensive services for both public and private projects. We combine technical expertise with innovative approaches to deliver infrastructure solutions that stand the test of time.',
    features: [
      'Structural design and analysis',
      'Road and highway construction',
      'Water supply and drainage systems',
      'Site development and grading',
      'Engineering consultancy services'
    ]
  },
  {
    id: 'construction',
    title: 'Building Construction',
    icon: <Building2 className="w-12 h-12 text-accent" />,
    shortDesc: 'Professional construction services that bring architectural visions to life.',
    fullDesc: 'From residential buildings to commercial complexes, our construction team handles projects of various scales and complexities. We adhere to the highest standards of quality and safety while ensuring timely completion.',
    features: [
      'Residential and commercial building construction',
      'Renovation and remodeling',
      'Project management and supervision',
      'Interior finishing and fitouts',
      'Construction consulting services'
    ]
  },
  {
    id: 'equipment',
    title: 'Telecommunication Equipment',
    icon: <ShieldCheck className="w-12 h-12 text-accent" />,
    shortDesc: 'Supply and maintenance of cutting-edge telecommunication equipment.',
    fullDesc: 'We supply high-quality telecommunication equipment and gadgets from trusted manufacturers. Our offerings include installation, maintenance, and technical support to ensure optimal performance of your telecommunication systems.',
    features: [
      'Network switches, routers, and servers',
      'Wireless communication devices',
      'Fiber optic equipment',
      'Communication towers and accessories',
      'Telecommunication testing and measuring tools'
    ]
  },
  {
    id: 'sports',
    title: 'Sports Club Business',
    icon: <Users className="w-12 h-12 text-accent" />,
    shortDesc: 'Comprehensive sports facilities management and club operations.',
    fullDesc: 'Our sports club business focuses on creating and managing sports facilities and clubs. We provide end-to-end solutions from facility design to program implementation, fostering community engagement through sports.',
    features: [
      'Sports facility design and construction',
      'Club management and operations',
      'Sports program development',
      'Equipment supply and maintenance',
      'Sports events planning and execution'
    ]
  }
];

const Services = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const toggleService = (id: string) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-primary">
        <div className="absolute inset-0 bg-[url('/src/assets/services-bg.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-white/90">
              Comprehensive solutions tailored to meet your diverse business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">
              What We Offer
            </h2>
            <p className="max-w-3xl mx-auto text-lg">
              At Osuele Ventures, we provide a wide range of professional services designed to meet the diverse needs of our clients across various sectors.
            </p>
          </div>

          <div className="space-y-8">
            {servicesData.map((service, index) => (
              <div 
                key={service.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-light rounded-lg overflow-hidden"
              >
                <div 
                  className={`p-6 flex flex-col md:flex-row items-start justify-between cursor-pointer transition-colors hover:bg-light/80`}
                  onClick={() => toggleService(service.id)}
                >
                  <div className="flex items-center mb-4 md:mb-0">
                    <div className="mr-4">{service.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                      <p className="text-secondary/80">{service.shortDesc}</p>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    {expandedService === service.id ? 
                      <ChevronUp className="w-6 h-6 text-primary" /> : 
                      <ChevronDown className="w-6 h-6 text-primary" />
                    }
                  </div>
                </div>

                {expandedService === service.id && (
                  <div className="p-6 pt-0 border-t border-gray-200">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-2/3">
                        <p className="mb-6">{service.fullDesc}</p>
                        <h4 className="text-lg font-semibold mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <Check className="w-5 h-5 text-accent mr-2 mt-0.5 shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="md:w-1/3">
                        <img 
                          src={`/src/assets/services/${service.id}.jpg`}
                          alt={service.title}
                          className="w-full h-auto rounded-lg shadow-md"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="section bg-light">
        <div className="container mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">
              Our Service Process
            </h2>
            <p className="max-w-3xl mx-auto">
              We follow a structured approach to ensure high-quality service delivery for all our clients.
            </p>
          </div>

          <div className="relative">
            {/* Process Steps - Desktop */}
            <div className="hidden md:block">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-primary -translate-y-1/2 z-0"></div>
              
              <div className="grid grid-cols-4 gap-6 relative z-10">
                {[
                  { number: "01", title: "Consultation", desc: "We discuss your requirements and needs" },
                  { number: "02", title: "Planning", desc: "We create a detailed plan tailored to your project" },
                  { number: "03", title: "Execution", desc: "We implement the plan with precision" },
                  { number: "04", title: "Delivery", desc: "We deliver the completed project and ensure satisfaction" }
                ].map((step, index) => (
                  <div 
                    key={index}
                    className="text-center"
                    data-aos="fade-up"
                    data-aos-delay={index * 150}
                  >
                    <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-6 relative">
                      <span className="text-xl font-bold">{step.number}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-secondary/80">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Steps - Mobile */}
            <div className="md:hidden space-y-8">
              {[
                { number: "01", title: "Consultation", desc: "We discuss your requirements and needs" },
                { number: "02", title: "Planning", desc: "We create a detailed plan tailored to your project" },
                { number: "03", title: "Execution", desc: "We implement the plan with precision" },
                { number: "04", title: "Delivery", desc: "We deliver the completed project and ensure satisfaction" }
              ].map((step, index) => (
                <div 
                  key={index}
                  className="flex items-start"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mr-4 shrink-0">
                    <span className="text-lg font-bold">{step.number}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-secondary/80">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" data-aos="fade-up">
            Need Our Services?
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-8 text-white/90" data-aos="fade-up" data-aos-delay="100">
            Contact our team to discuss how we can help with your specific requirements.
          </p>
          <Link 
            to="/contact" 
            className="btn bg-accent text-white hover:bg-accent/90"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;
