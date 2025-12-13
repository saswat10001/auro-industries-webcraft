import React from 'react';
import { Factory, Flame, Mountain, Pickaxe, ArrowDownRight } from 'lucide-react';

const industries = [
  {
    icon: Factory,
    title: "Cement",
    description: "Industrial components for cement plants"
  },
  {
    icon: Flame,
    title: "Steel",
    description: "Precision parts for steel manufacturing"
  },
  {
    icon: Mountain,
    title: "Refractory",
    description: "High-temperature resistant solutions"
  },
  {
    icon: Pickaxe,
    title: "Mining",
    description: "Durable equipment for mining operations"
  }
];

const Industries: React.FC = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            . Industries
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Industries We Serve
          </h2>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className="group cursor-pointer"
            >
              <div className="flex items-center gap-4 pb-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <industry.icon 
                    className="w-10 h-10 text-foreground/80 stroke-[1.5] group-hover:text-primary transition-colors duration-300" 
                  />
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-semibold text-foreground flex-grow group-hover:text-primary transition-colors duration-300">
                  {industry.title}
                </h3>
                
                {/* Arrow */}
                <ArrowDownRight className="w-5 h-5 text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-300" />
              </div>
              
              {/* Divider Line */}
              <div className="h-px bg-border group-hover:bg-primary/50 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
