import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
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
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    // Apply SEO meta tags for Contact page
    updateMetaTags(pageSeoData.contact);
    
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
      });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-primary">
        <div className="absolute inset-0 bg-[url('/images/contact-bg.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-xl text-white/90">
              Get in touch with our team for any inquiries or to discuss your project needs.
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
                We'd love to hear from you. Contact us using any of the following methods or fill out the form.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-accent mt-1 mr-4 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Our Location</h3>
                    <p className="text-gray-600">123 Business Avenue, Accra, Ghana</p>
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
                    <p className="text-gray-600">info@osueleventures.com</p>
                    <p className="text-gray-600">support@osueleventures.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-accent mt-1 mr-4 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Redesigned */}
            <div className="lg:w-2/3" data-aos="fade-left">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-primary mb-8 relative after:content-[''] after:absolute after:w-16 after:h-1 after:bg-accent after:left-0 after:bottom-[-10px]">Send Us a Message</h2>
                
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
                      <label htmlFor="subject" className="block mb-2 font-medium text-gray-700">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What is this regarding?"
                        className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 hover:border-primary/50 transition-all"
                      />
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

      {/* Map Section */}
      <section className="h-[450px] mt-12">
        <div className="w-full h-full">
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=-0.2960205078125%2C5.533459198300096%2C-0.13717651367188%2C5.6512579469421465&amp;layer=mapnik&amp;marker=5.59237%2C-0.2165985"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Osuele Ventures Location"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;
