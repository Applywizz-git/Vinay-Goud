import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import profilePhoto from '../assets/profile-photo.jpeg';
import heroBg from '../assets/hero-bg.jpg';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = [
    'Cybersecurity Engineer',
    'SOC Operations Specialist',
    'Threat Hunter',
    'Security Analyst',
    'Cloud Security Expert'
  ];

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const shouldDelete = displayText === currentWord && !isDeleting;
    const shouldStartNext = displayText === '' && isDeleting;

    if (shouldDelete) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (shouldStartNext) {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(prev => {
        if (isDeleting) {
          return prev.slice(0, -1);
        }
        return currentWord.slice(0, prev.length + 1);
      });
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentWordIndex, isDeleting]);

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
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

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-black/80 via-cyber-blue/60 to-cyber-black/80" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyber-teal rounded-full animate-pulse" />
        <div className="absolute top-40 right-32 w-1 h-1 bg-cyber-green rounded-full animate-ping" />
        <div className="absolute bottom-32 left-40 w-3 h-3 bg-cyber-violet rounded-full animate-bounce" />
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-cyber-teal rounded-full animate-pulse" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content - Mobile: Second, Desktop: First */}
          <motion.div variants={itemVariants} className="text-center lg:text-left order-2 lg:order-1">
            <motion.h1 
              variants={itemVariants}
              className="text-display mb-6 text-lg"
            >
              <span className="bg-gradient-to-r from-cyber-teal to-cyber-green bg-clip-text text-transparent">
                Hii, I'm 
              </span>{' '}
              <span className="text-white">Vinaygoud Gandi</span>
            </motion.h1>
            
            <motion.div variants={itemVariants} className="mb-6">
              <h2 className="text-title text-white/90 mb-4">
                I'm a{' '}
                <span className="text-cyber-teal typewriter-cursor font-bold">
                  {displayText}
                </span>
              </h2>
              <p className="text-body-large text-white/70 max-w-2xl">
                Protecting organizations from cyber threats with 3+ years of experience in 
                SOC operations, threat detection, and incident response. Specialized in 
                cloud security, SIEM platforms, and automated defense systems.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button 
                onClick={scrollToProjects}
                className="btn-cyber group"
              >
                <span className="relative z-10">View Projects</span>
              </button>
              <a 
                href="/assets/resume.pdf" 
                download 
                className="btn-outline-cyber flex items-center justify-center gap-2 group"
              >
                <Download className="h-5 w-5 transition-transform group-hover:scale-110" />
                <span>Download Resume</span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-6 justify-center lg:justify-start">
              {/* <a 
                href="https://github.com" 
                className="text-white/60 hover:text-cyber-teal transition-colors duration-300 hover:scale-110 transform"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com" 
                className="text-white/60 hover:text-cyber-teal transition-colors duration-300 hover:scale-110 transform"
              >
                <Linkedin className="h-6 w-6" />
              </a> */}
              <a 
                href="mailto:gandivinay343@gmail.com" 
                className="text-white/60 hover:text-cyber-teal transition-colors duration-300 hover:scale-110 transform"
              >
                <Mail className="h-6 w-6" />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Photo - Mobile: First, Desktop: Second */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center order-1 lg:order-2"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-teal to-cyber-green rounded-full opacity-20 blur-xl scale-110 animate-pulse-glow" />
              
              {/* Profile image */}
              <motion.img
                src={profilePhoto}
                alt="Vinaygoud Gandi - Cybersecurity Engineer"
                className="relative w-80 h-80 object-cover rounded-full border-4 border-cyber-teal/30 animate-float"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyber-green rounded-full animate-bounce" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyber-violet rounded-full animate-pulse" />
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        >
          <div className="text-white/60 text-sm mb-2">Scroll to explore</div>
          <ArrowDown className="h-6 w-6 text-cyber-teal animate-bounce mx-auto" />
        </motion.div> */}
      </div>
    </section>
  );
};

export default Hero;
