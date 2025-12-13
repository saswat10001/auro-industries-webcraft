import React from 'react';
import { motion } from 'motion/react';

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description: "We understand your requirements and specifications to deliver precision-engineered solutions tailored to your industrial needs."
  },
  {
    number: "02",
    title: "Engineering",
    description: "Our expert team designs and engineers components using advanced CAD/CAM systems ensuring optimal performance."
  },
  {
    number: "03",
    title: "Manufacturing",
    description: "State-of-the-art CNC machining and precision fabrication bring your components to life with exacting standards."
  },
  {
    number: "04",
    title: "Quality Assurance",
    description: "Rigorous testing and inspection processes ensure every product meets our stringent quality benchmarks."
  }
];

const Process: React.FC = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Our Process
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {processSteps.map((step, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* Large Number */}
              <div className="text-7xl md:text-8xl font-bold text-muted-foreground/20 leading-none mb-4">
                {step.number}
              </div>
              
              {/* Divider Line */}
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
                className="h-0.5 bg-primary mb-4"
              ></motion.div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              
              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
