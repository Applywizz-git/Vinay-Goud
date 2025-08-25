import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Shield } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = React.useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  // const scrollToSection = (href: string) => {
  //   const element = document.querySelector(href);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  //   setIsMobileMenuOpen(false);
  // };

  // const scrollToSection = (href: string) => {
  //   const id = href.replace('#', '');
  //   const el = document.getElementById(id);
  //   if (!el) return;

  //   // Close the menu first so layout updates on small screens
  //   setIsMobileMenuOpen(false);

  //   const headerH = headerRef.current?.offsetHeight ?? 0;
  //   const y = el.getBoundingClientRect().top + window.scrollY - (headerH + 8); // +8px breathing room

  //   // Wait one frame so the menu close reflow finishes, then smooth scroll
  //   requestAnimationFrame(() => {
  //     window.scrollTo({ top: y, behavior: 'smooth' });
  //   });
  // };

  const scrollToSection = (href: string) => {
  const id = href.replace('#', '');
  const el = document.getElementById(id);
  if (!el) return;

  // 1) Close menu first so the header shrinks
  setIsMobileMenuOpen(false);

  // 2) Wait for the 0.3s animation to finish, then measure and scroll
  setTimeout(() => {
    const headerH = headerRef.current?.offsetHeight ?? 0;
    const y = el.getBoundingClientRect().top + window.scrollY - (headerH + 8);
    window.scrollTo({ top: y, behavior: 'smooth' });
  }, 320);
};


  return (
    <>
      <motion.header
        ref={headerRef}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'glass-card backdrop-blur-xl bg-cyber-black/20 border-b border-cyber-teal/20'
          : 'bg-transparent'}`}
      >
        {/* <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? 'glass-card backdrop-blur-xl bg-cyber-black/20 border-b border-cyber-teal/20'
            : 'bg-transparent'
          }`}
      > */}

        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center space-x-2"
            >
              <Shield className="h-8 w-8 text-cyber-teal" />
              <span className="text-xl font-bold font-poppins text-white">
                Vinaygoud Gandi
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className="text-white/80 hover:text-cyber-teal transition-colors duration-300 underline-animated font-medium"
                >
                  {item.name}
                </motion.button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {/* <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden glass-card backdrop-blur-xl bg-cyber-black/95 border-t border-cyber-teal/20"
        > */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className={`md:hidden overflow-hidden glass-card backdrop-blur-xl bg-cyber-black/95 border-t border-cyber-teal/20
              ${isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        >
          <nav className="px-6 py-4 space-y-4">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isMobileMenuOpen ? 1 : 0, x: isMobileMenuOpen ? 0 : -20 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-white/80 hover:text-cyber-teal transition-colors duration-300 py-2 text-lg"
              >
                {item.name}
              </motion.button>
            ))}
          </nav>
        </motion.div>
      </motion.header>

      {/* Scroll Progress Bar */}
      <div className="scroll-progress" style={{ width: `${isScrolled ? '100%' : '0%'}` }} />
    </>
  );
};

export default Header;