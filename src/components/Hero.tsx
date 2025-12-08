import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { WebGLShader } from './ui/web-gl-shader';
import { LiquidButton } from './ui/liquid-glass-button';

interface HeroProps {
  onGetQuote: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetQuote }) => {
  const [counters, setCounters] = useState({
    experience: 0,
    products: 0,
    clients: 0,
    projects: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const statsRef = useRef<HTMLDivElement>(null);
  
  const backgroundImages = [
    "/images/welding-sparks.jpg",
    "/images/cnc-machining.jpg", 
    "/images/industrial-factory.jpg",
    "/images/steel-manufacturing.jpg"
  ];

  // Sequential image animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % backgroundImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const animateCounter = (target: number, key: keyof typeof counters) => {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setCounters(prev => ({
        ...prev,
        [key]: Math.floor(current)
      }));
    }, 30);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        animateCounter(35, 'experience');
        setTimeout(() => animateCounter(100, 'products'), 200);
        setTimeout(() => animateCounter(150, 'clients'), 400);
        setTimeout(() => animateCounter(500, 'projects'), 600);
      }
    }, {
      threshold: 0.5
    });
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* WebGL Shader Background */}
      <WebGLShader />
      
      {/* Stock Images Overlay with blend mode */}
      <div className="absolute inset-0 z-[1]">
        {backgroundImages.map((image, index) => (
          <div 
            key={index} 
            className={`absolute inset-0 transition-opacity duration-2000 ${index === currentImageIndex ? 'opacity-30' : 'opacity-0'}`}
          >
            <img 
              src={image} 
              alt={`Industrial Background ${index + 1}`} 
              className="w-full h-full object-cover mix-blend-overlay" 
            />
          </div>
        ))}
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/80 via-transparent to-black/60 pointer-events-none" />
      
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.1] backdrop-blur-sm">
            <span className="relative flex h-3 w-3 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            <span className="text-sm text-white/70 tracking-wide font-medium">
              MSME Certified • Quality Assured
            </span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                AURO
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-white/90 to-cyan-300">
                INDUSTRIES
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/50 max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
            Precision Engineering Solutions for Industrial Excellence.
            Trusted manufacturer of spares and machinery.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <LiquidButton 
              onClick={onGetQuote}
              size="xl"
              className="text-white border border-white/20 rounded-full px-8"
            >
              <span className="flex items-center gap-2">
                Get a Quote
                <ArrowRight className="w-5 h-5" />
              </span>
            </LiquidButton>
            
            <button 
              onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-white/60 hover:text-white px-8 py-3 transition-colors duration-300 font-medium text-lg"
            >
              Learn More →
            </button>
          </div>

          {/* Stats Section */}
          <div 
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 mt-8 border-t border-white/10"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">{counters.experience}+</div>
              <div className="text-sm text-white/50 mt-1">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">{counters.products}+</div>
              <div className="text-sm text-white/50 mt-1">Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">{counters.clients}+</div>
              <div className="text-sm text-white/50 mt-1">Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">{counters.projects}+</div>
              <div className="text-sm text-white/50 mt-1">Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
