import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Search, Cloud, Zap, Eye, Server, Wifi } from 'lucide-react';
import loadingBg from '../assets/loading-bg.jpg';

interface LoadingPageProps {
  onLoadingComplete: () => void;
}

const LoadingPage: React.FC<LoadingPageProps> = ({ onLoadingComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [currentSecurityItem, setCurrentSecurityItem] = useState(0);

  const securityItems = [
    { icon: Shield, text: 'Initializing Security Protocols...' },
    { icon: Lock, text: 'Encrypting Communications...' },
    { icon: Search, text: 'Scanning for Threats...' },
    { icon: Cloud, text: 'Connecting to Security Operations Center...' },
    { icon: Zap, text: 'Activating Defense Systems...' },
    { icon: Eye, text: 'Enabling Threat Detection...' },
    { icon: Server, text: 'Loading Security Infrastructure...' },
    { icon: Wifi, text: 'Establishing Secure Connection...' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSecurityItem(prev => (prev + 1) % securityItems.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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

  const logoVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 260,
        damping: 20
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  const CurrentIcon = securityItems[currentSecurityItem].icon;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${loadingBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-black/90 via-cyber-blue/70 to-cyber-black/90" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            variants={floatingVariants}
            animate="animate"
            className="absolute w-1 h-1 bg-cyber-teal rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-lg mx-auto px-6"
      >
        {/* Logo */}
        <motion.div
          variants={logoVariants}
          className="relative mb-8"
        >
          <motion.div
            variants={pulseVariants}
            animate="animate"
            className="absolute inset-0 bg-gradient-to-r from-cyber-teal to-cyber-green rounded-full opacity-20 blur-xl"
          />
          <Shield className="h-24 w-24 text-cyber-teal mx-auto relative z-10" />
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl font-bold mb-4"
        >
          <span className="bg-gradient-to-r from-cyber-teal to-cyber-green bg-clip-text text-transparent">
            VINAYGOUD GANDI
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-white/80 text-lg mb-8 font-medium"
        >
          Cybersecurity Engineer
        </motion.p>

        {/* Security Status */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <motion.div
            key={currentSecurityItem}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex items-center justify-center gap-3 text-cyber-green mb-4"
          >
            <CurrentIcon className="h-5 w-5 animate-pulse" />
            <span className="text-sm font-medium">
              {securityItems[currentSecurityItem].text}
            </span>
          </motion.div>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          variants={itemVariants}
          className="relative mb-6"
        >
          <div className="w-full h-2 bg-cyber-black/50 rounded-full overflow-hidden border border-cyber-teal/20">
            <motion.div
              className="h-full bg-gradient-to-r from-cyber-teal to-cyber-green relative"
              initial={{ width: 0 }}
              animate={{ width: `${loadingProgress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse" />
            </motion.div>
          </div>
          <div className="text-cyber-teal text-sm font-mono mt-2">
            {loadingProgress}% SECURE
          </div>
        </motion.div>

        {/* Security Icons Grid */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-4 gap-4 max-w-xs mx-auto"
        >
          {securityItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ 
                  scale: index <= Math.floor(loadingProgress / 12.5) ? 1 : 0.3,
                  opacity: index <= Math.floor(loadingProgress / 12.5) ? 1 : 0.3
                }}
                transition={{ delay: index * 0.1 }}
                className={`p-3 rounded-lg border ${
                  index <= Math.floor(loadingProgress / 12.5)
                    ? 'border-cyber-teal/50 bg-cyber-teal/10 text-cyber-teal'
                    : 'border-white/10 bg-white/5 text-white/30'
                }`}
              >
                <IconComponent className="h-6 w-6 mx-auto" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Loading dots */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-2 mt-8"
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-cyber-teal rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LoadingPage;