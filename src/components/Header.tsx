
import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

interface HeaderProps {
  onGetQuote: () => void;
}

const Header: React.FC<HeaderProps> = ({ onGetQuote }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top contact bar */}
        <div className="bg-slate-800 text-white py-2 px-4 text-sm hidden md:block">
          <div className="flex justify-end space-x-6">
            <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
              <Phone className="w-4 h-4 animate-pulse" />
              <span>+91-7008566816</span>
            </div>
            <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
              <Mail className="w-4 h-4 animate-pulse animation-delay-200" />
              <span>auro_industry@yahoo.in</span>
            </div>
          </div>
        </div>
        
        {/* Main navigation */}
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
            <img 
              src="/lovable-uploads/1b3a86a2-4367-48f8-8588-eaab18f3faf8.png" 
              alt="Auro Industries Logo" 
              className="h-10 w-auto hover:rotate-12 transition-transform duration-500" 
            />
            <div className="text-2xl font-bold text-slate-800">
              AURO <span className="text-blue-600">INDUSTRIES</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-slate-700 hover:text-blue-600 font-medium transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {item.name}
              </button>
            ))}
            <button 
              onClick={onGetQuote} 
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium transform hover:scale-110 hover:shadow-lg"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden hover:scale-110 transition-transform duration-300" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-slate-700 animate-spin" />
            ) : (
              <Menu className="w-6 h-6 text-slate-700 hover:rotate-180 transition-transform duration-500" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t animate-fade-in">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-2 text-slate-700 hover:text-blue-600 font-medium hover:translate-x-2 transition-all duration-300"
              >
                {item.name}
              </button>
            ))}
            <button 
              onClick={() => {
                onGetQuote();
                setIsMenuOpen(false);
              }} 
              className="w-full mt-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium transform hover:scale-105"
            >
              Get a Quote
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
