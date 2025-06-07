
import React from 'react';
import { MapPin, Phone, Mail, Clock, Building } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Contact Us</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Get in touch with our team for inquiries, quotes, or support. We're here to help you find the right industrial solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white p-3 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">Address</h4>
                    <p className="text-slate-600">
                      Industrial Area, Phase-II<br />
                      Chandigarh - 160002<br />
                      Punjab, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white p-3 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">Phone</h4>
                    <p className="text-slate-600">+91-XXXXXXXXXX</p>
                    <p className="text-slate-600">+91-XXXXXXXXXX</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white p-3 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">Email</h4>
                    <p className="text-slate-600">info@auroindustries.com</p>
                    <p className="text-slate-600">sales@auroindustries.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white p-3 rounded-lg">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">Business Hours</h4>
                    <p className="text-slate-600">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                    <p className="text-slate-600">Sunday: Closed</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 text-white p-3 rounded-lg">
                    <Building className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">MSME Registration</h4>
                    <p className="text-slate-600">UDYAM-PB-XX-XXXXXXX</p>
                    <p className="text-sm text-green-600 font-medium">Verified & Certified</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h4 className="font-bold text-slate-800 mb-4">Quick Response Guarantee</h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Email inquiries: Response within 4 hours</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Quote requests: Response within 24 hours</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Technical support: Immediate assistance</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Map */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Find Us</h3>
              <div className="bg-slate-200 rounded-lg overflow-hidden" style={{ height: '400px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.0!2d76.8!3d30.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQyJzAwLjAiTiA3NsKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
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

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h4 className="font-bold text-slate-800 mb-2">Visit Our Facility</h4>
              <p className="text-slate-600 mb-4">
                We welcome visits to our manufacturing facility. Schedule an appointment to see our capabilities firsthand and discuss your requirements with our technical team.
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
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
