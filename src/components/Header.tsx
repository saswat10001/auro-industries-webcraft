
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
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top contact bar */}
        <div className="bg-slate-800 text-white py-2 px-4 text-sm hidden md:block">
          <div className="flex justify-end space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+91-XXXXXXXXXX</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@auroindustries.com</span>
            </div>
          </div>
        </div>
        
        {/* Main navigation */}
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/1b3a86a2-4367-48f8-8588-eaab18f3faf8.png" 
              alt="Auro Industries Logo" 
              className="h-10 w-auto"
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
                className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={onGetQuote}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-slate-700" />
            ) : (
              <Menu className="w-6 h-6 text-slate-700" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-2 text-slate-700 hover:text-blue-600 font-medium"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => {
                onGetQuote();
                setIsMenuOpen(false);
              }}
              className="w-full mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
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
