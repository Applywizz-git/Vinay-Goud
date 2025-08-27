import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, Phone, MapPin, Github, Linkedin, CheckCircle } from 'lucide-react';

const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'gandivinay343@gmail.com',
      link: 'mailto:gandivinay343@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (210) 868-1239',
      link: 'tel:+12108681239'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Antonio, TX',
      link: '#'
    }
  ];

  const socialLinks = [
    // {
    //   icon: Github,
    //   label: 'GitHub',
    //   link: 'https://github.com',
    //   color: 'cyber-teal'
    // },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      link: 'https://linkedin.com',
      color: 'cyber-green'
    },
    {
      icon: Mail,
      label: 'Email',
      link: 'mailto:gandivinay343@gmail.com',
      color: 'cyber-violet'
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-black to-cyber-blue/20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-headline mb-6">
              <span className="bg-gradient-to-r from-cyber-teal to-cyber-green bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <p className="text-body-large text-white/70 max-w-2xl mx-auto mb-8">
              Ready to strengthen your organization's security posture? Let's discuss how I can 
              help protect your digital assets and build robust defense systems.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-cyber-teal to-cyber-green mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-cyber-green/20 border border-cyber-green/50 rounded-lg flex items-center gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-cyber-green" />
                    <span className="text-cyber-green">Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-cyber-blue/20 border border-cyber-teal/30 rounded-lg text-white placeholder-white/50 focus:border-cyber-teal focus:outline-none focus:ring-2 focus:ring-cyber-teal/20 transition-all duration-300"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-cyber-blue/20 border border-cyber-teal/30 rounded-lg text-white placeholder-white/50 focus:border-cyber-teal focus:outline-none focus:ring-2 focus:ring-cyber-teal/20 transition-all duration-300"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-cyber-blue/20 border border-cyber-teal/30 rounded-lg text-white placeholder-white/50 focus:border-cyber-teal focus:outline-none focus:ring-2 focus:ring-cyber-teal/20 transition-all duration-300"
                      placeholder="Subject"
                    />
                  </div>
                  
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-cyber-blue/20 border border-cyber-teal/30 rounded-lg text-white placeholder-white/50 focus:border-cyber-teal focus:outline-none focus:ring-2 focus:ring-cyber-teal/20 transition-all duration-300 resize-none"
                      placeholder="Your Message"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className="w-full btn-cyber flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className={`h-5 w-5 ${isSubmitting ? 'animate-bounce' : ''}`} />
                    <span>
                      {isSubmitting ? 'Sending...' : isSubmitted ? 'Sent!' : 'Send Message'}
                    </span>
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Contact Details */}
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.label}
                      href={info.link}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4 p-4 bg-cyber-blue/10 rounded-lg hover:bg-cyber-teal/10 transition-all duration-300 group"
                    >
                      <div className="p-3 bg-cyber-teal/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="h-6 w-6 text-cyber-teal" />
                      </div>
                      <div>
                        <div className="text-white/60 text-sm">{info.label}</div>
                        <div className="text-white font-medium">{info.value}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: index * 0.1 }}
                      className={`p-4 bg-${social.color}/20 text-${social.color} rounded-lg hover:bg-${social.color} hover:text-cyber-black transition-all duration-300 hover:scale-110`}
                      aria-label={social.label}
                    >
                      <social.icon className="h-6 w-6" />
                    </motion.a>
                  ))}
                </div>
                <p className="text-white/70 mt-6">
                  Let's connect and discuss cybersecurity challenges, career opportunities, 
                  or collaboration on security projects.
                </p>
              </div>

              {/* Availability */}
              {/* <div className="glass-card p-8">
                <h3 className="text-xl font-semibold text-cyber-green mb-4">Availability</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">Response Time:</span>
                    <span className="text-cyber-teal">Within 24 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">Consultation:</span>
                    <span className="text-cyber-green">Available</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">Timezone:</span>
                    <span className="text-white">CST (UTC-6)</span>
                  </div>
                </div>
              </div> */}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
