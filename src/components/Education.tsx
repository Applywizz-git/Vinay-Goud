import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const education = [
    {
      degree: 'Master of Science in Cybersecurity',
      institution: 'Webster University',
      location: 'San Antonio, TX',
      period: '2021 - 2023',
      description: 'Advanced cybersecurity program focusing on network security, digital forensics, risk management, and security architecture.',
      highlights: [
        'Advanced Threat Analysis & Incident Response',
        'Cryptography & Network Security Protocols',
        'Digital Forensics & Malware Analysis',
        'Risk Management & Compliance Frameworks',
        'Security Architecture & Design Patterns',
        'Research Project: AI-Driven Threat Detection'
      ],
      gpa: '3.8/4.0',
      honors: ['Cybersecurity Excellence Award']
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
    <section id="education" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-blue/20 to-cyber-black" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-headline mb-6">
              <span className="bg-gradient-to-r from-cyber-teal to-cyber-green bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            <p className="text-body-large text-white/70 max-w-2xl mx-auto mb-8">
              Advanced academic foundation in cybersecurity principles, threat analysis, 
              and security architecture design.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-cyber-teal to-cyber-green mx-auto rounded-full" />
          </motion.div>

          {/* Education Items */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                variants={itemVariants}
                className="glass-card p-8 hover:glow-teal transition-all duration-300"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Left Column - Institution Info */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-cyber-teal/20 rounded-lg">
                        <GraduationCap className="h-8 w-8 text-cyber-teal" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-cyber-teal">
                          {edu.degree}
                        </h3>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-white/80">
                        <Award className="h-4 w-4 text-cyber-green" />
                        <span className="font-semibold">{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/70">
                        <MapPin className="h-4 w-4" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/70">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                      {edu.gpa && (
                        <div className="text-cyber-green font-semibold">
                          GPA: {edu.gpa}
                        </div>
                      )}
                    </div>

                    {/* Honors */}
                    {edu.honors && (
                      <div className="mt-4">
                        <h4 className="text-cyber-violet font-semibold mb-2">Honors & Awards:</h4>
                        <ul className="space-y-1">
                          {edu.honors.map((honor, honorIndex) => (
                            <li key={honorIndex} className="text-white/70 text-sm flex items-start gap-2">
                              <Award className="h-3 w-3 text-cyber-violet mt-1 flex-shrink-0" />
                              {honor}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Right Column - Course Details */}
                  <div className="lg:col-span-2">
                    <div className="mb-6">
                      <p className="text-white/80 leading-relaxed">
                        {edu.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-cyber-green font-semibold mb-4">Key Coursework & Research:</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {edu.highlights.map((highlight, highlightIndex) => (
                          <motion.div
                            key={highlightIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                            transition={{ delay: highlightIndex * 0.1 }}
                            className="flex items-start gap-2 text-white/70 text-sm"
                          >
                            <div className="w-2 h-2 bg-cyber-green rounded-full mt-2 flex-shrink-0" />
                            {highlight}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Academic Information */}
          <motion.div variants={itemVariants} className="mt-12">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-cyber-teal mb-2">3.8</div>
                <div className="text-white/70 text-sm">GPA</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-cyber-green mb-2">2</div>
                <div className="text-white/70 text-sm">Years</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-cyber-violet mb-2">MS</div>
                <div className="text-white/70 text-sm">Degree Level</div>
              </div>
            </div>
          </motion.div>

          {/* Additional Learning */}
          <motion.div variants={itemVariants} className="mt-12">
            <div className="glass-card p-6 text-center">
              <h3 className="text-xl font-semibold text-cyber-teal mb-4">Continuous Education</h3>
              <p className="text-white/70 max-w-2xl mx-auto">
                Committed to lifelong learning through industry conferences, security research, 
                and advanced training programs. Actively participating in cybersecurity communities 
                and staying current with emerging threats and defense technologies.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;