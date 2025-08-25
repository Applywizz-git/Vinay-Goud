import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink, Calendar, Building } from 'lucide-react';

const Certifications = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const certifications = [
    {
      title: 'Google Cybersecurity Professional Certificate',
      issuer: 'Google (Coursera)',
      date: '2024',
      credentialId: 'Available on LinkedIn',
      description: 'Comprehensive cybersecurity fundamentals covering network security, incident response, and security frameworks.',
      skills: ['Network Security', 'Incident Response', 'SIEM Tools', 'Risk Management'],
      color: 'cyber-teal',
      verifyLink: 'https://coursera.org'
    },
    {
      title: 'IBM Cybersecurity Analyst Professional Certificate',
      issuer: 'IBM (Coursera)',
      date: '2023',
      credentialId: 'Available on LinkedIn',
      description: 'Advanced cybersecurity analysis techniques, threat hunting, and security operations center practices.',
      skills: ['Threat Analysis', 'Security Operations', 'Digital Forensics', 'Vulnerability Assessment'],
      color: 'cyber-green',
      verifyLink: 'https://coursera.org'
    },
    {
      title: 'Microsoft Cybersecurity Analyst',
      issuer: 'Microsoft (LinkedIn Learning)',
      date: '2023',
      credentialId: 'Available on LinkedIn',
      description: 'Microsoft security ecosystem, Azure Security Center, and cloud security best practices.',
      skills: ['Azure Security', 'Microsoft 365 Security', 'Threat Intelligence', 'Identity Management'],
      color: 'cyber-violet',
      verifyLink: 'https://linkedin.com/learning'
    },
    {
      title: 'Cloud Security Fundamentals',
      issuer: 'LinkedIn Learning',
      date: '2023',
      credentialId: 'Available on LinkedIn',
      description: 'Cloud security architecture, multi-cloud security strategies, and compliance frameworks.',
      skills: ['Cloud Architecture', 'AWS Security', 'Azure Security', 'Compliance'],
      color: 'cyber-blue',
      verifyLink: 'https://linkedin.com/learning'
    },
    {
      title: 'Identity and Access Management (IAM) Concepts',
      issuer: 'Coursera',
      date: '2022',
      credentialId: 'Available on LinkedIn',
      description: 'Comprehensive IAM principles, authentication protocols, and access governance.',
      skills: ['IAM Design', 'SAML/OAuth', 'Zero Trust', 'Access Governance'],
      color: 'cyber-teal',
      verifyLink: 'https://coursera.org'
    },
    {
      title: 'Introduction to Cyber Threat Intelligence',
      issuer: 'IBM',
      date: '2022',
      credentialId: 'Available on LinkedIn',
      description: 'Threat intelligence lifecycle, IOC analysis, and strategic threat assessment.',
      skills: ['Threat Intelligence', 'IOC Analysis', 'MITRE ATT&CK', 'Threat Hunting'],
      color: 'cyber-green',
      verifyLink: 'https://ibm.com'
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
    hidden: { opacity: 0, y: 20, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
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
                Certifications
              </span>
            </h2>
            <p className="text-body-large text-white/70 max-w-2xl mx-auto mb-8">
              Professional certifications demonstrating expertise in cybersecurity, 
              cloud security, and industry best practices.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-cyber-teal to-cyber-green mx-auto rounded-full" />
          </motion.div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                variants={itemVariants}
                className="group perspective-1000"
              >
                <div className="glass-card p-6 h-full transform transition-all duration-300 hover:scale-105 hover:rotate-y-5 group-hover:glow-teal">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-3">
                      <Award className={`h-8 w-8 text-${cert.color} flex-shrink-0`} />
                      {/* <div className="text-right">
                        <div className="text-xs text-white/60 flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {cert.date}
                        </div>
                      </div> */}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2 text-cyber-teal text-sm">
                      <Building className="h-4 w-4" />
                      {cert.issuer}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/70 text-sm mb-4 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={`px-2 py-1 bg-${cert.color}/20 text-${cert.color} text-xs rounded border border-${cert.color}/30`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Credential Info & Verify Link */}
                  {/* <div className="mt-auto">
                    <div className="text-xs text-white/60 mb-3">
                      <strong>Credential ID:</strong> {cert.credentialId}
                    </div>
                    <a
                      href={cert.verifyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2 bg-${cert.color}/20 text-${cert.color} border border-${cert.color}/50 rounded hover:bg-${cert.color} hover:text-cyber-black transition-all duration-300 text-sm w-full justify-center`}
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Verify Certificate</span>
                    </a>
                  </div> */}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Note */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <div className="glass-card p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-cyber-teal mb-4">Continuous Learning</h3>
              <p className="text-white/70">
                Actively pursuing advanced certifications including CISSP, CEH, and cloud security 
                specializations to stay current with evolving cybersecurity landscapes and emerging threats.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;