import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import LoadingPage from '../components/LoadingPage';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Certifications from '../components/Certifications';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollProgressBar from '../components/ScrollProgressBar';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS animations
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    });

    // Preload critical images
    const preloadImage = (src: string) => {
      const img = new Image();
      img.src = src;
    };

    // Preload hero background and profile photo
    import('../assets/hero-bg.jpg').then((module) => {
      preloadImage(module.default);
    });
    import('../assets/profile-photo.jpeg').then((module) => {
      preloadImage(module.default);
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingPage onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ScrollProgressBar />
      <Header />

      <main>
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="certifications"><Certifications /></section>
        <section id="education"><Education /></section>
        <section id="contact"><Contact /></section>
      </main>


      <Footer />
    </div>
  );
};

export default Index;
