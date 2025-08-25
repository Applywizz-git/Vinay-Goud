import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Target, Award, Users } from 'lucide-react';

const AnimatedCounter = ({ end, suffix = '', duration = 2 }: { end: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = React.useState(0);
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      let startTime: number;
      const startValue = 0;
      
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        const currentCount = Math.floor(progress * (end - startValue) + startValue);
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [inView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

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

  const stats = [
    { icon: Shield, label: 'Security Projects', value:5, suffix: '+' },
    { icon: Target, label: 'Years Experience', value: 3, suffix: '+' },
    { icon: Award, label: 'Certifications', value: 6, suffix: '' },
    { icon: Users, label: 'Client Satisfaction', value: 100, suffix: '%' },
  ];

  const strengths = [
    {
      title: 'Threat Detection',
      description: 'Advanced SIEM and threat hunting capabilities',
      icon: Shield
    },
    {
      title: 'Cloud Security',
      description: 'Multi-cloud security across AWS, Azure, and GCP',
      icon: Target
    },
    {
      title: 'Incident Response',
      description: 'Rapid response and recovery procedures',
      icon: Award
    },
    {
      title: 'Automation',
      description: 'SOAR and DevSecOps implementation',
      icon: Users
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
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
                About Me
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyber-teal to-cyber-green mx-auto rounded-full" />
          </motion.div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Description */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="glass-card p-8">
                <h3 className="text-title text-cyber-teal mb-4">Cybersecurity Professional</h3>
                <p className="text-body text-white/80 mb-4">
                  Results-driven Cybersecurity Engineer with over 3 years of experience protecting 
                  digital assets and strengthening organizational security postures. Specialized in 
                  threat detection, SOC operations, and incident response across cloud and on-premises 
                  environments.
                </p>
                <p className="text-body text-white/80">
                  Proven expertise in implementing SIEM platforms, SOAR automation, and comprehensive 
                  security frameworks. Passionate about staying ahead of emerging threats and 
                  continuously improving defensive capabilities through innovative security solutions.
                </p>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="glass-card p-6 text-center group hover:glow-teal transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <stat.icon className="h-8 w-8 text-cyber-teal mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold text-white mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Strengths Grid */}
          <motion.div variants={itemVariants}>
            <h3 className="text-title text-center text-white mb-8">Core Strengths</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {strengths.map((strength, index) => (
                <motion.div
                  key={strength.title}
                  variants={itemVariants}
                  className="glass-card p-6 text-center group hover:glow-green transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <strength.icon className="h-10 w-10 text-cyber-green mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-lg font-semibold text-white mb-2">{strength.title}</h4>
                  <p className="text-sm text-white/70">{strength.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;