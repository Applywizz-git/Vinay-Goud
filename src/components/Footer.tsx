import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Shield, Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    // {
    //   icon: Github,
    //   label: 'GitHub',
    //   href: 'https://github.com',
    //   color: 'hover:text-cyber-teal'
    // },
    // {
    //   icon: Linkedin,
    //   label: 'LinkedIn',
    //   href: 'https://linkedin.com',
    //   color: 'hover:text-cyber-green'
    // },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:gandivinay343@gmail.com',
      color: 'hover:text-cyber-violet'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0, 
          scale: showScrollTop ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-8 right-8 z-50 p-3 bg-cyber-teal text-cyber-black rounded-full shadow-lg hover:bg-cyber-green transition-all duration-300 hover:scale-110 glow-teal"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6" />
      </motion.button>

      {/* Footer */}
      <footer className="relative overflow-hidden bg-gradient-to-t from-cyber-black to-cyber-blue/20 border-t border-cyber-teal/20">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2"
            >
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-8 w-8 text-cyber-teal animate-pulse-glow" />
                <h3 className="text-2xl font-bold text-white">Vinaygoud Gandi</h3>
              </div>
              <p className="text-white/70 mb-6 max-w-md leading-relaxed">
                Cybersecurity Engineer dedicated to protecting digital assets and building 
                resilient security architectures. Passionate about threat detection, 
                incident response, and automated defense systems.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className={`p-3 bg-cyber-blue/20 text-white/70 rounded-lg transition-all duration-300 ${social.color} hover:bg-cyber-blue/40`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-cyber-teal mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-white/70 hover:text-cyber-green transition-colors duration-300 underline-animated"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-lg font-semibold text-cyber-teal mb-4">Contact</h4>
              <div className="space-y-3 text-white/70">
                <div>
                  <div className="text-sm">Email</div>
                  <a 
                    href="mailto:gandivinay343@gmail.com"
                    className="hover:text-cyber-green transition-colors duration-300"
                  >
                    gandivinay343@gmail.com
                  </a>
                </div>
                <div>
                  <div className="text-sm">Phone</div>
                  <a 
                    href="tel:+12108681239"
                    className="hover:text-cyber-green transition-colors duration-300"
                  >
                    +1 (210) 868-1239
                  </a>
                </div>
                <div>
                  <div className="text-sm">Location</div>
                  <div>San Antonio, TX</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-cyber-teal/50 to-transparent mb-8" />

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <div className="text-white/60 text-sm">
              © {new Date().getFullYear()} Vinaygoud Gandi. All rights reserved.
            </div>
            
            {/* <div className="flex items-center gap-2 text-white/60 text-sm">
              <span>Built with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>using React & Tailwind CSS</span>
            </div> */}
          </motion.div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-cyber-teal/5 rounded-full blur-xl" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-cyber-green/5 rounded-full blur-xl" />
      </footer>
    </>
  );
};

export default Footer;