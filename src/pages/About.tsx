import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, BookOpen, Award, TrendingUp, Users } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-primary">
        <div className="absolute inset-0 bg-[url('/src/assets/about-hero.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Osuele Ventures</h1>
            <p className="text-xl text-white/90">
              Dedicated to excellence in telecommunications, construction, and engineering.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company History */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2" data-aos="fade-right">
              <h2 className="section-title">Our History</h2>
              <p className="mb-4">
                Osuele Ventures was founded in Ghana with a vision to provide multidisciplinary services that meet the highest standards of quality and professionalism.
              </p>
              <p className="mb-4">
                Over the years, we have grown from a small local business to a respected company offering a wide range of services including telecommunications, civil engineering, construction, and supply of goods.
              </p>
              <p>
                Our journey has been marked by continuous improvement, adaptation to new technologies, and unwavering commitment to customer satisfaction. Today, we stand proud as a leader in our field, trusted by clients across various sectors.
              </p>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <img 
                src="/src/assets/history.jpg" 
                alt="Osuele Ventures History" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-light">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div 
              className="bg-white p-8 rounded-lg shadow-md border-t-4 border-primary"
              data-aos="fade-up"
            >
              <div className="flex items-center mb-4">
                <Target className="w-10 h-10 text-primary mr-4" />
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p>
                To deliver exceptional multidisciplinary services that exceed client expectations through innovation, expertise, and unwavering commitment to quality. We aim to contribute to the development of Ghana by providing solutions that address real needs and create value.
              </p>
            </div>
            
            <div 
              className="bg-white p-8 rounded-lg shadow-md border-t-4 border-accent"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="flex items-center mb-4">
                <BookOpen className="w-10 h-10 text-accent mr-4" />
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p>
                To be the leading multidisciplinary service provider in Ghana, recognized for excellence, integrity, and innovation. We aspire to expand our reach while maintaining the highest standards of service delivery and becoming the preferred partner for clients seeking reliable solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">Our Core Values</h2>
            <p className="max-w-3xl mx-auto text-gray-600 mt-4">
              These principles guide our approach to business and define our corporate culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="w-14 h-14" />,
                title: "Excellence",
                description: "We strive for excellence in everything we do, consistently delivering high-quality services."
              },
              {
                icon: <TrendingUp className="w-14 h-14" />,
                title: "Innovation",
                description: "We embrace new ideas and technologies to provide cutting-edge solutions."
              },
              {
                icon: <Target className="w-14 h-14" />,
                title: "Integrity",
                description: "We conduct business with honesty, transparency, and ethical standards."
              },
              {
                icon: <Users className="w-14 h-14" />,
                title: "Customer Focus",
                description: "We prioritize understanding and meeting our clients' unique needs."
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-2 group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                    <div className="text-primary">{value.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-primary transition-colors duration-300">{value.title}</h3>
                  <p className="text-center text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section bg-primary text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="section-title text-white mx-auto after:left-1/2 after:-translate-x-1/2 after:bg-accent">
              Our Growth Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "10+", label: "Years Experience" },
              { number: "150+", label: "Projects Completed" },
              { number: "80+", label: "Satisfied Clients" },
              { number: "50+", label: "Team Members" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">{stat.number}</div>
                <p className="text-lg text-white/90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
