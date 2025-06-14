
import React from 'react';
import { MapPin, Phone, Mail, Clock, Building } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section 
      id="contact" 
      className="py-20 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.95)), url('https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-slate-800 mb-4 hover:scale-105 transition-transform duration-300">
            Contact Us
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Get in touch with our team for inquiries, quotes, or support. We're here to help you find the right industrial solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in animation-delay-300">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group hover:scale-105 transition-transform duration-300">
                  <div className="bg-blue-600 text-white p-3 rounded-lg transition-all duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">Address</h4>
                    <p className="text-slate-600">
                      Talkipara, Rajgangpur<br />
                      Dist-Sundargarh, Odisha<br />
                      770017, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group hover:scale-105 transition-transform duration-300">
                  <div className="bg-blue-600 text-white p-3 rounded-lg transition-all duration-300">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">Phone</h4>
                    <p className="text-slate-600">+91-9937632690</p>
                    <p className="text-slate-600">+91-7008566816</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group hover:scale-105 transition-transform duration-300">
                  <div className="bg-blue-600 text-white p-3 rounded-lg transition-all duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">Email</h4>
                    <p className="text-slate-600">auro_industry@yahoo.in</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group hover:scale-105 transition-transform duration-300">
                  <div className="bg-blue-600 text-white p-3 rounded-lg transition-all duration-300">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">Business Hours</h4>
                    <p className="text-slate-600">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                    <p className="text-slate-600">Sunday: Closed</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group hover:scale-105 transition-transform duration-300">
                  <div className="bg-green-600 text-white p-3 rounded-lg transition-all duration-300">
                    <Building className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">MSME Registration</h4>
                    <p className="text-slate-600">UD-OD-30-000XXXX</p>
                    <p className="text-sm text-green-600 font-medium">Verified & Certified</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50/80 backdrop-blur-sm p-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-102">
              <h4 className="font-bold text-slate-800 mb-4">Quick Response Guarantee</h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Email inquiries: Response within 4 hours</span>
                </li>
                <li className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse animation-delay-100"></div>
                  <span>Quote requests: Response within 24 hours</span>
                </li>
                <li className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse animation-delay-200"></div>
                  <span>Technical support: Immediate assistance</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Map */}
          <div className="space-y-6 animate-fade-in animation-delay-600">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Find Us</h3>
              <div className="bg-slate-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:scale-105" style={{ height: '400px' }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.123!2d84.123!3d22.234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDE0JzAyLjQiTiA4NMKwMDcnMjMuMCJF!5e0!3m2!1sen!2sin!4v1234567890" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade" 
                  title="Auro Industries Location"
                ></iframe>
              </div>
            </div>

            <div className="bg-blue-50/80 backdrop-blur-sm p-6 rounded-lg border-l-4 border-blue-600 hover:shadow-lg transition-all duration-300 transform hover:scale-102">
              <h4 className="font-bold text-slate-800 mb-2">Visit Our Facility</h4>
              <p className="text-slate-600 mb-4">
                We welcome visits to our manufacturing facility. Schedule an appointment to see our capabilities firsthand and discuss your requirements with our technical team.
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Schedule a Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
