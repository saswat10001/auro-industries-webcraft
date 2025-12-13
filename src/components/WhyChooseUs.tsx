import React from 'react';
import { motion } from 'motion/react';
import { Users, Shield, Wrench, Clock, Award, Headphones } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: "Expert Team",
    description: "35+ years of industrial manufacturing experience with skilled engineers and technicians.",
    position: "left"
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Rigorous quality control and testing at every stage of production.",
    position: "right"
  },
  {
    icon: Award,
    title: "Competitive Pricing",
    description: "Cost-effective solutions without compromising on quality or precision.",
    position: "left"
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "On-time delivery with efficient production scheduling and logistics.",
    position: "right"
  },
  {
    icon: Wrench,
    title: "Modern Technology",
    description: "State-of-the-art CNC machining and precision fabrication equipment.",
    position: "left"
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Responsive customer service and technical support for all your needs.",
    position: "right"
  }
];

const WhyChooseUs: React.FC = () => {
  const leftFeatures = features.filter(f => f.position === 'left');
  const rightFeatures = features.filter(f => f.position === 'right');

  return (
    <section className="py-20 relative overflow-hidden bg-slate-950/50">
      {/* Background gradient circles */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-900/30 to-slate-900/40 blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            — Why Choose Us —
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Our Key Strengths
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Trusted by 150+ clients across India, we deliver precision-engineered industrial 
            components with unmatched quality and reliability.
          </p>
        </motion.div>

        {/* Features Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="space-y-12">
            {leftFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex items-start gap-4 text-right lg:flex-row-reverse"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-lg shadow-primary/30 hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="lg:text-right">
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            {/* Decorative circles */}
            <div className="absolute w-80 h-80 rounded-full border-2 border-blue-400/20" />
            <div className="absolute w-96 h-96 rounded-full border border-blue-300/10" />
            
            {/* Central content */}
            <div className="relative w-72 h-72 rounded-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 flex flex-col items-center justify-center text-center p-8 shadow-2xl">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center mb-4 shadow-lg shadow-primary/40">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">MSME Certified</h3>
              <p className="text-slate-400 text-sm">Registered manufacturer delivering excellence since 1989</p>
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="space-y-12">
            {rightFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-lg shadow-primary/30 hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
