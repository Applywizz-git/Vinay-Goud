import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ExternalLink, Github, Shield, Cloud, Search, Lock } from 'lucide-react';
import socImage from '../assets/project-soc.jpg';
import pentestImage from '../assets/project-pentest.jpg';
import cloudImage from '../assets/project-cloud.jpg';
import containerImage from '../assets/project-container.jpg';
import threatIntelImage from '../assets/project-threat-intel.jpg';
import identityImage from '../assets/project-identity.jpg';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Projects = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const projects = [
    {
      title: 'Security Operations Center Automation',
      description: 'Integrated SIEM platforms with SOAR playbooks to automate threat response, reducing MTTR by 40% and boosting SOC capacity.',
      image: socImage,
      technologies: ['Splunk', 'ELK Stack', 'Python', 'Ansible', 'MISP', 'Kibana'],
      features: [
        'Automated phishing and malware triage',
        'Threat Intel integration with VirusTotal',
        'Real-time incident dashboards',
        'SLA breach monitoring'
      ],
      demoLink: '#',
      codeLink: '#'
    },
    {
      title: 'Advanced Penetration Testing Framework',
      description: 'Comprehensive pen-testing framework with automated vulnerability scanning and exploit verification for enterprise applications.',
      image: pentestImage,
      technologies: ['Kali Linux', 'Burp Suite', 'Metasploit', 'OWASP ZAP', 'Python', 'Django'],
      features: [
        'Automated OWASP Top 10 testing',
        'Custom exploit development',
        'CI/CD security integration',
        'Detailed reporting dashboard'
      ],
      demoLink: '#',
      codeLink: '#'
    }
  ];

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

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-black to-cyber-blue/20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-headline mb-6">
              <span className="bg-gradient-to-r from-cyber-teal to-cyber-green bg-clip-text text-transparent">
                Security Projects
              </span>
            </h2>
            <p className="text-body-large text-white/70 max-w-2xl mx-auto mb-8">
              Innovative cybersecurity solutions and frameworks that strengthen organizational defenses and automate threat response.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-cyber-teal to-cyber-green mx-auto rounded-full" />
          </motion.div>

          {/* Projects Carousel */}
          <motion.div variants={itemVariants} className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop={true}
              breakpoints={{
                640: { slidesPerView:1 },
                1024: { slidesPerView: 2}
              }}
              className="pb-16"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={project.title}>
                  <motion.div
                    className="glass-card p-6 h-full group hover:glow-teal transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    {/* Project Image */}
                    <div className="relative mb-6 overflow-hidden rounded-lg">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-cyber-black/80 via-transparent to-transparent" />
                      <h3 className="absolute bottom-4 left-4 text-xl font-bold text-cyber-teal">{project.title}</h3>
                    </div>

                    {/* Description */}
                    <p className="text-white/80 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-cyber-green font-semibold mb-2 text-sm">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feature, fIndex) => (
                          <li key={fIndex} className="text-white/70 text-xs flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-cyber-green rounded-full mt-1.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 4).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-cyber-blue/30 text-cyber-teal text-xs rounded border border-cyber-teal/30 hover:bg-cyber-teal hover:text-cyber-black transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2 py-1 bg-cyber-violet/20 text-cyber-violet text-xs rounded border border-cyber-violet/30">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    {/* <div className="flex gap-3">
                      <a
                        href={project.demoLink}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-cyber-teal/20 text-cyber-teal border border-cyber-teal/50 rounded hover:bg-cyber-teal hover:text-cyber-black transition-all duration-300 text-sm"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Demo</span>
                      </a>
                      <a
                        href={project.codeLink}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-cyber-green/20 text-cyber-green border border-cyber-green/50 rounded hover:bg-cyber-green hover:text-cyber-black transition-all duration-300 text-sm"
                      >
                        <Github className="h-4 w-4" />
                        <span>Code</span>
                      </a>
                    </div> */}
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;