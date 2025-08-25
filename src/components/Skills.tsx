import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Shield, Cloud, Search, Lock, Code, Database,
  Server, Monitor, Zap, Target, Users, Award 
} from 'lucide-react';

const Skills = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [activeCategory, setActiveCategory] = useState('cybersecurity');

  const skillCategories = {
    cybersecurity: {
      title: 'Cybersecurity & SOC',
      icon: Shield,
      skills: [
        { name: 'SIEM (Splunk, ELK, Azure Sentinel)', level: 95 },
        { name: 'SOAR (Cortex XSOAR, Swimlane)', level: 90 },
        { name: 'EDR/XDR (CrowdStrike, Microsoft Defender)', level: 92 },
        { name: 'IDS/IPS (Snort, Suricata, Zeek)', level: 88 },
        { name: 'Threat Hunting & Digital Forensics', level: 85 },
        { name: 'Incident Response & Malware Analysis', level: 90 }
      ]
    },
    cloud: {
      title: 'Cloud & Infrastructure Security',
      icon: Cloud,
      skills: [
        { name: 'AWS Security (GuardDuty, Security Hub)', level: 92 },
        { name: 'Azure Security (Sentinel, Defender)', level: 88 },
        { name: 'GCP Security (Security Command Center)', level: 85 },
        { name: 'Container Security (Falco, Aqua, Prisma)', level: 90 },
        { name: 'Kubernetes Security & Hardening', level: 87 },
        { name: 'Infrastructure as Code (Terraform)', level: 85 }
      ]
    },
    compliance: {
      title: 'IAM & Compliance',
      icon: Lock,
      skills: [
        { name: 'Identity & Access Management (RBAC, SAML)', level: 93 },
        { name: 'Active Directory & Azure AD', level: 90 },
        { name: 'Zero Trust Architecture', level: 88 },
        { name: 'ISO 27001, SOC2, NIST Frameworks', level: 92 },
        { name: 'PCI-DSS, HIPAA, GDPR Compliance', level: 85 },
        { name: 'Multi-Factor Authentication (MFA)', level: 95 }
      ]
    },
    devops: {
      title: 'DevSecOps & Automation',
      icon: Code,
      skills: [
        { name: 'Python (Security Automation)', level: 90 },
        { name: 'Bash & PowerShell Scripting', level: 88 },
        { name: 'Security as Code (Terraform, Ansible)', level: 85 },
        { name: 'CI/CD Security (Jenkins, GitHub Actions)', level: 87 },
        { name: 'Automated Security Testing (OWASP ZAP)', level: 90 },
        { name: 'Container Orchestration', level: 82 }
      ]
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const SkillBar = ({ skill, index }: { skill: any, index: number }) => {
    const { ref: skillRef, inView: skillInView } = useInView({ 
      threshold: 0.3, 
      triggerOnce: true 
    });

    return (
      <motion.div
        ref={skillRef}
        variants={itemVariants}
        className="mb-4"
      >
        <div className="flex justify-between items-center mb-2">
          <span className="text-white/90 text-sm font-medium">{skill.name}</span>
          <span className="text-cyber-teal text-sm font-bold">{skill.level}%</span>
        </div>
        <div className="w-full bg-cyber-blue/30 rounded-full h-2 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-cyber-teal to-cyber-green rounded-full"
            initial={{ width: 0 }}
            animate={skillInView ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
          />
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-blue/20 to-cyber-black" />
      
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
                Technical Expertise
              </span>
            </h2>
            <p className="text-body-large text-white/70 max-w-2xl mx-auto mb-8">
              Comprehensive cybersecurity skillset spanning threat detection, cloud security, 
              compliance frameworks, and automated defense systems.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-cyber-teal to-cyber-green mx-auto rounded-full" />
          </motion.div>

          {/* Category Tabs */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {Object.entries(skillCategories).map(([key, category]) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveCategory(key)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                      activeCategory === key
                        ? 'bg-cyber-teal text-cyber-black'
                        : 'glass-card text-white/80 hover:text-cyber-teal'
                    }`}
                  >
                    <IconComponent className="h-5 w-5" />
                    <span className="font-medium">{category.title}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div variants={itemVariants}>
            <div className="glass-card p-8">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  {React.createElement(skillCategories[activeCategory as keyof typeof skillCategories].icon, {
                    className: "h-8 w-8 text-cyber-teal"
                  })}
                  <h3 className="text-2xl font-bold text-white">
                    {skillCategories[activeCategory as keyof typeof skillCategories].title}
                  </h3>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
                  <SkillBar key={`${activeCategory}-${skill.name}`} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Additional Skills Tags */}
          <motion.div variants={itemVariants} className="mt-12">
            <h3 className="text-xl font-semibold text-center text-white mb-8">Additional Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Wireshark', 'Nessus', 'Qualys', 'OpenVAS', 'Metasploit', 'Burp Suite',
                'Kali Linux', 'Palo Alto', 'Fortinet', 'Cisco ASA', 'Nagios', 'Prometheus',
                'Grafana', 'Kibana', 'MISP', 'Anomali', 'Recorded Future', 'Snyk'
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.05 }}
                  className="px-4 py-2 bg-cyber-blue/20 text-cyber-green border border-cyber-green/30 rounded-full text-sm hover:bg-cyber-green hover:text-cyber-black transition-all duration-300 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;