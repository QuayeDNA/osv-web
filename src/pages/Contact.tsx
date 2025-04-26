import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Trophy, Dumbbell, Activity } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { updateMetaTags, pageSeoData } from '../utils/seo-utils';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    program: '', // New field for program selection
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    // Apply SEO meta tags for Contact page - updated for Sports focus
    updateMetaTags({
      ...pageSeoData.contact,
      title: 'Contact Osuele Sports Club | Boxing & Football Programs',
      description: 'Get in touch with Osuele Sports Club in Accra, Ghana. Join our boxing and football programs, or inquire about membership options and facility rental.'
    });
    
    // Initialize AOS animations
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Form submitted successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        program: '',
      });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-primary">
        <div className="absolute inset-0 bg-[url('/images/sports/sports-hero.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-xl text-white/90">
              Get in touch with our team to learn more about our boxing and football programs or to schedule a visit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="section bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Information */}
            <div className="lg:w-1/3" data-aos="fade-right">
              <h2 className="section-title">Get in Touch</h2>
              <p className="mb-8">
                We'd love to hear from you. Whether you're interested in our programs, membership options, or have questions about our facilities, our team is ready to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-accent mt-1 mr-4 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Our Location</h3>
                    <p className="text-gray-600">123 Athletic Avenue, East Legon</p>
                    <p className="text-gray-600">Accra, Ghana</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-accent mt-1 mr-4 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Phone Number</h3>
                    <p className="text-gray-600">+233 (0) 123 456 789</p>
                    <p className="text-gray-600">+233 (0) 987 654 321</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-accent mt-1 mr-4 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Email Address</h3>
                    <p className="text-gray-600">sports@osueleventures.com</p>
                    <p className="text-gray-600">membership@osuelesports.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-accent mt-1 mr-4 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Training Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 6:00 AM - 10:00 PM</p>
                    <p className="text-gray-600">Saturday: 8:00 AM - 8:00 PM</p>
                    <p className="text-gray-600">Sunday: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
                
                {/* Program Icons */}
                <div className="pt-6 border-t border-gray-100">
                  <h3 className="font-semibold text-lg mb-4">Our Programs</h3>
                  <div className="flex space-x-6">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                        <Dumbbell className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-sm text-gray-600">Boxing</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                        <Activity className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-sm text-gray-600">Football</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                        <Trophy className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-sm text-gray-600">Competitions</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Redesigned */}
            <div className="lg:w-2/3" data-aos="fade-left">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-primary mb-8 relative after:content-[''] after:absolute after:w-16 after:h-1 after:bg-accent after:left-0 after:bottom-[-10px]">Join Osuele Sports Club</h2>
                
                <form onSubmit={handleSubmit} className="space-y-7">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full p-3.5 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
                          errors.name ? 'border-red-500' : 'border-gray-200 hover:border-primary/50'
                        }`}
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1.5">{errors.name}</p>}
                    </div>

                    <div className="relative">
                      <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@email.com"
                        className={`w-full p-3.5 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
                          errors.email ? 'border-red-500' : 'border-gray-200 hover:border-primary/50'
                        }`}
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1.5">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label htmlFor="phone" className="block mb-2 font-medium text-gray-700">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+233 000 000 000"
                        className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 hover:border-primary/50 transition-all"
                      />
                    </div>

                    <div className="relative">
                      <label htmlFor="program" className="block mb-2 font-medium text-gray-700">
                        Program Interest
                      </label>
                      <select
                        id="program"
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                        className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 hover:border-primary/50 transition-all appearance-none"
                      >
                        <option value="">Select a program</option>
                        <option value="elite-boxing">Elite Boxing Program</option>
                        <option value="youth-boxing">Youth Boxing Academy</option>
                        <option value="fitness-boxing">Fitness Boxing Classes</option>
                        <option value="elite-football">Elite Football Academy</option>
                        <option value="youth-football">Youth Football School</option>
                        <option value="adult-football">Adult Recreational League</option>
                        <option value="membership">General Membership</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="message" className="block mb-2 font-medium text-gray-700">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help you..."
                      className={`w-full p-3.5 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
                        errors.message ? 'border-red-500' : 'border-gray-200 hover:border-primary/50'
                      }`}
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1.5">{errors.message}</p>}
                  </div>

                  <div className="mt-8">
                    <button
                      type="submit"
                      className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-primary px-8 py-3.5 text-white font-medium transition-all hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/50"
                    >
                      <span className="relative flex items-center gap-2">
                        Send Message <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section with Google Maps */}
      <section className="mt-12">
        <div className="w-full h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.6964310454996!2d-0.17363762414567715!3d5.6363299956899155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzgnMTAuOCJOIDDCsDEwJzE2LjUiVw!5e0!3m2!1sen!2sgh!4v1713072348951!5m2!1sen!2sgh"
            width="100%"
            height="100%"
            className="border-0 w-full h-full rounded-lg shadow-lg"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="Osuele Sports Club Location"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;
