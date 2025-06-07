import React from 'react';
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';
const Footer: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                AURO <span className="text-blue-400">INDUSTRIES</span>
              </h3>
              <div className="text-xs bg-green-600 text-white px-2 py-1 rounded inline-block">
                MSME Registered
              </div>
            </div>
            <p className="text-slate-300">
              Trusted manufacturer of high-performance industrial spares and machinery, 
              committed to excellence in precision engineering.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('#home')} className="text-slate-300 hover:text-blue-400 transition-colors text-left">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#about')} className="text-slate-300 hover:text-blue-400 transition-colors text-left">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#products')} className="text-slate-300 hover:text-blue-400 transition-colors text-left">
                  Our Products
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#contact')} className="text-slate-300 hover:text-blue-400 transition-colors text-left">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-lg font-bold mb-4">Product Categories</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-slate-300">Shafts & Gears</li>
              <li className="text-slate-300">Couplings & Transmission</li>
              <li className="text-slate-300">Material Handling</li>
              <li className="text-slate-300">Bearing Units</li>
              <li className="text-slate-300">Fasteners</li>
              <li className="text-slate-300">Lifting Equipment</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <div className="text-sm text-slate-300">
                  Industrial Area, Phase-II<br />
                  Chandigarh - 160002<br />
                  Punjab, India
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-sm text-slate-300">+91-7008566816</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-sm text-slate-300">auro_industry@yahoo.in</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-slate-400">© 2024 Auro Industries. All rights reserved. | MSME Reg: UD-OD-30-000XXXX</div>
            <div className="flex space-x-6 text-sm text-slate-400">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Quality Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;