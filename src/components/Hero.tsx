
import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface HeroProps {
  onGetQuote: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetQuote }) => {
  return (
    <section 
      id="home" 
      className="pt-20 min-h-screen flex items-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.8), rgba(59, 130, 246, 0.6)), url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 to-blue-900/50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight transform transition-all duration-1000 hover:scale-105">
                AURO
                <br />
                <span className="text-blue-400 animate-pulse">INDUSTRIES</span>
              </h1>
              <p className="text-2xl text-blue-100 font-medium animate-fade-in animation-delay-300">
                Precision Engineering Solutions
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-102">
              <p className="text-lg text-white mb-4">
                Trusted MSME-registered manufacturer of industrial spares and machinery
              </p>
              <div className="flex items-center space-x-2 text-green-400">
                <CheckCircle className="w-5 h-5 animate-pulse" />
                <span className="font-medium">Quality Assured • MSME Certified</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onGetQuote} 
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium text-lg flex items-center justify-center space-x-2 group transform hover:scale-105 hover:shadow-2xl"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
              <button 
                onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })} 
                className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:border-blue-400 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 font-medium text-lg transform hover:scale-105"
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="relative animate-fade-in animation-delay-600">
            <div className="bg-gradient-to-br from-blue-600/80 to-slate-700/80 backdrop-blur-md rounded-2xl p-8 text-white border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-6">Our Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl font-bold text-blue-200 animate-bounce">35+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="text-center hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl font-bold text-blue-200 animate-bounce animation-delay-100">500+</div>
                  <div className="text-sm">Products</div>
                </div>
                <div className="text-center hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl font-bold text-blue-200 animate-bounce animation-delay-200">100+</div>
                  <div className="text-sm">Happy Clients</div>
                </div>
                <div className="text-center hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl font-bold text-blue-200 animate-bounce animation-delay-300">24/7</div>
                  <div className="text-sm">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
