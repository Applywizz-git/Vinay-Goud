import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const experiences = [
    {
      company: 'CloudTech Innovations Inc',
      position: 'Cybersecurity Engineer',
      location: 'Dallas, TX',
      period: 'Jun 2024 - Present',
      achievements: [
        'Deployed SIEM platforms (ELK, Splunk) across AWS, Azure, and on-prem servers, consolidating 10M+ daily logs and reducing MTTD by 40%',
        'Built Python-driven SOAR playbooks for automated malware and phishing response, shortening MTTR by 35%',
        'Strengthened edge defenses with Snort and Suricata IDS/IPS integration, stopping 98% of injection and DDoS attacks',
        'Improved identity posture by enforcing MFA, RBAC, and OAuth2 across multi-cloud environments',
        'Launched vulnerability management with Nessus and OpenVAS, scanning 500+ endpoints monthly',
        'Embedded Aqua and Trivy container scans into Kubernetes CI/CD pipelines',
        'Conducted threat hunting missions with MITRE ATT&CK framework, expanding SOC detection coverage by 30%',
        'Activated AWS GuardDuty and Security Hub for continuous monitoring and privilege escalation prevention'
      ],
      technologies: ['Splunk', 'ELK Stack', 'Python', 'AWS', 'Azure', 'Kubernetes', 'SOAR', 'MITRE ATT&CK']
    },
    {
      company: 'NextWave Software Solutions',
      position: 'Information Security Analyst',
      location: 'Hyderabad, India',
      period: 'Nov 2021 - Nov 2023',
      achievements: [
        'Built Splunk dashboards correlating firewall, endpoint, and user activity, reducing false positives by 30%',
        'Integrated OWASP ZAP and Bandit scans into GitHub Actions for automated security testing',
        'Deployed CrowdStrike Falcon across enterprise endpoints, improving malware detection by 45%',
        'Conducted phishing simulations with Python and Gophish, raising employee detection rates by 60%',
        'Automated log enrichment pipelines with Python and Airflow for enhanced threat intelligence',
        'Applied CVSS scoring to vulnerability reports, reducing patch backlog by 40%',
        'Led red-team exercises using Kali, Burp Suite, and Metasploit',
        'Hardened AWS and Azure workloads using CIS benchmarks, boosting compliance scores by 25%'
      ],
      technologies: ['Splunk', 'CrowdStrike', 'Python', 'GitHub Actions', 'Kali Linux', 'Burp Suite', 'AWS', 'Azure']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
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
                Professional Experience
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyber-teal to-cyber-green mx-auto rounded-full" />
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-teal to-cyber-green transform md:-translate-x-1/2" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={`${exp.company}-${index}`}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row items-start ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-cyber-teal rounded-full border-4 border-cyber-black z-10 ${
                    index % 2 === 0 ? 'md:translate-x-0' : 'md:translate-x-0'
                  }`} />

                  {/* Content */}
                  <div className={`ml-20 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <motion.div
                      className="glass-card p-6 hover:glow-teal transition-all duration-300"
                      whileHover={{ scale: 1.02, y: -5 }}
                    >
                      {/* Header */}
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-cyber-teal mb-2">{exp.position}</h3>
                        <div className="flex flex-wrap items-center gap-4 text-white/70 text-sm">
                          <div className="flex items-center gap-1">
                            <Building className="h-4 w-4" />
                            {exp.company}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {exp.period}
                          </div>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="mb-4">
                        <ul className="space-y-2">
                          {exp.achievements.slice(0, 4).map((achievement, achIndex) => (
                            <li key={achIndex} className="text-white/80 text-sm flex items-start gap-2">
                              <div className="w-2 h-2 bg-cyber-green rounded-full mt-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 bg-cyber-blue/30 text-cyber-teal text-xs rounded-md border border-cyber-teal/30 hover:bg-cyber-teal hover:text-cyber-black transition-colors duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;