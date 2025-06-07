
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer 
      className="relative"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.95), rgba(15, 23, 42, 0.95)), url('https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-slate-800/80"></div>
      <div className="container mx-auto px-4 py-12 text-white relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4 animate-fade-in">
            <div>
              <h3 className="text-2xl font-bold mb-2 hover:scale-105 transition-transform duration-300">
                AURO <span className="text-blue-400">INDUSTRIES</span>
              </h3>
              <div className="text-xs bg-green-600 text-white px-2 py-1 rounded inline-block animate-pulse">
                MSME Registered
              </div>
            </div>
            <p className="text-slate-300">
              Trusted manufacturer of high-performance industrial spares and machinery, 
              committed to excellence in precision engineering.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover:rotate-12">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover:rotate-12">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover:rotate-12">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in animation-delay-200">
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('#home')} className="text-slate-300 hover:text-blue-400 transition-all duration-300 text-left transform hover:translate-x-2">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#about')} className="text-slate-300 hover:text-blue-400 transition-all duration-300 text-left transform hover:translate-x-2">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#products')} className="text-slate-300 hover:text-blue-400 transition-all duration-300 text-left transform hover:translate-x-2">
                  Our Products
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#contact')} className="text-slate-300 hover:text-blue-400 transition-all duration-300 text-left transform hover:translate-x-2">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div className="animate-fade-in animation-delay-400">
            <h4 className="text-lg font-bold mb-4">Product Categories</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-slate-300 hover:text-blue-400 transition-colors duration-300 transform hover:translate-x-2">Shafts & Gears</li>
              <li className="text-slate-300 hover:text-blue-400 transition-colors duration-300 transform hover:translate-x-2">Couplings & Transmission</li>
              <li className="text-slate-300 hover:text-blue-400 transition-colors duration-300 transform hover:translate-x-2">Material Handling</li>
              <li className="text-slate-300 hover:text-blue-400 transition-colors duration-300 transform hover:translate-x-2">Bearing Units</li>
              <li className="text-slate-300 hover:text-blue-400 transition-colors duration-300 transform hover:translate-x-2">Fasteners</li>
              <li className="text-slate-300 hover:text-blue-400 transition-colors duration-300 transform hover:translate-x-2">Lifting Equipment</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in animation-delay-600">
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 group-hover:scale-125 transition-transform duration-300" />
                <div className="text-sm text-slate-300">
                  Talkipara, Rajgangpur<br />
                  Dist-Sundargarh, Odisha<br />
                  770017, India
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone className="w-5 h-5 text-blue-400 group-hover:scale-125 transition-transform duration-300" />
                <span className="text-sm text-slate-300">+91-7008566816</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5 text-blue-400 group-hover:scale-125 transition-transform duration-300" />
                <span className="text-sm text-slate-300">auro_industry@yahoo.in</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700 relative z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-white">
            <div className="text-sm text-slate-400">© 2024 Auro Industries. All rights reserved. | MSME Reg: UD-OD-30-000XXXX</div>
            <div className="flex space-x-6 text-sm text-slate-400">
              <a href="#" className="hover:text-blue-400 transition-all duration-300 transform hover:scale-110">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-all duration-300 transform hover:scale-110">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition-all duration-300 transform hover:scale-110">Quality Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
