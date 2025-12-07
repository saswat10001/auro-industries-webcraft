import React from 'react';
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';
import { TextHoverEffect, FooterBackgroundGradient } from '@/components/ui/hover-footer';

const Footer: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", action: () => scrollToSection('#home') },
        { label: "About Us", action: () => scrollToSection('#about') },
        { label: "Our Products", action: () => scrollToSection('#products') },
        { label: "Contact", action: () => scrollToSection('#contact') },
      ],
    },
    {
      title: "Product Categories",
      links: [
        { label: "Shafts & Gears" },
        { label: "Couplings & Transmission" },
        { label: "Material Handling" },
        { label: "Bearing Units" },
        { label: "Fasteners" },
        { label: "Lifting Equipment" },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: <Mail size={18} className="text-blue-400" />,
      text: "auro_industry@yahoo.in",
      href: "mailto:auro_industry@yahoo.in",
    },
    {
      icon: <Phone size={18} className="text-blue-400" />,
      text: "+91-7008566816",
      href: "tel:+917008566816",
    },
    {
      icon: <MapPin size={18} className="text-blue-400" />,
      text: "Talkipara, Rajgangpur, Odisha 770017",
    },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, label: "Facebook", href: "#" },
    { icon: <Instagram size={20} />, label: "Instagram", href: "#" },
    { icon: <Twitter size={20} />, label: "Twitter", href: "#" },
    { icon: <Linkedin size={20} />, label: "LinkedIn", href: "#" },
  ];

  return (
    <footer className="bg-slate-900/90 relative rounded-t-3xl overflow-hidden">
      <div className="max-w-7xl mx-auto p-8 lg:p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <h3 className="text-2xl font-bold text-white">
                AURO <span className="text-blue-400">INDUSTRIES</span>
              </h3>
              <div className="text-xs bg-green-600 text-white px-2 py-1 rounded inline-block w-fit animate-pulse">
                MSME Registered
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Trusted manufacturer of high-performance industrial spares and machinery, 
              committed to excellence in precision engineering.
            </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-lg font-semibold mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.action ? (
                      <button
                        onClick={link.action}
                        className="text-slate-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2 inline-block"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <span className="text-slate-300 hover:text-blue-400 transition-colors cursor-default">
                        {link.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <span className="mt-0.5">{item.icon}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-slate-300 hover:text-blue-400 transition-colors text-sm"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-slate-300 text-sm">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-slate-700 my-8" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
          {/* Social icons */}
          <div className="flex space-x-6 text-slate-400">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="hover:text-blue-400 transition-all duration-300 hover:scale-125"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Copyright & Links */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-slate-400">
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Quality Policy</a>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-slate-400 text-center md:text-left">
            © {new Date().getFullYear()} Auro Industries. All rights reserved.
          </p>
        </div>
      </div>

      {/* Text hover effect */}
      <div className="lg:flex hidden h-[28rem] -mt-48 -mb-32">
        <TextHoverEffect text="AURO" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
};

export default Footer;
