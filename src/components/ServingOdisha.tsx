import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Factory, Truck, Clock, Shield, Award } from 'lucide-react';

const ServingOdisha: React.FC = () => {
  const industrialBelts = [
    { city: 'Angul', industries: 'Power Plants, Aluminum Smelters', highlight: 'NTPC, NALCO' },
    { city: 'Jharsuguda', industries: 'Power Plants, Aluminum Industry', highlight: 'Vedanta, Hindalco' },
    { city: 'Rourkela', industries: 'Steel Plants, Heavy Engineering', highlight: 'RSP (SAIL)' },
    { city: 'Kalinganagar', industries: 'Steel Plants, Metal Industries', highlight: 'Tata Steel, JSW' },
    { city: 'Paradeep', industries: 'Ports, Fertilizer, Refineries', highlight: 'IOCL, PPL' },
    { city: 'Dhenkanal', industries: 'Cement Plants, Paper Mills', highlight: 'OCL, ACC' },
  ];

  const trustSignals = [
    { icon: Truck, title: 'Fast Delivery Across Odisha', description: 'Same-day dispatch for urgent requirements within Odisha industrial belt' },
    { icon: Factory, title: 'Serving 100+ Plants', description: 'Trusted supplier to cement, steel, power & mining plants across the state' },
    { icon: Clock, title: '24/7 Emergency Support', description: 'Round-the-clock technical assistance for critical plant operations' },
    { icon: Shield, title: 'Quality Assured', description: 'MSME certified with rigorous quality testing for all components' },
  ];

  return (
    <section id="serving-odisha" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <MapPin className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-400 font-medium">Local Presence, Industrial Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Serving Industries Across <span className="text-blue-400">Odisha</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Your trusted industrial spares manufacturer in Odisha, delivering precision-engineered components 
            to cement plants, steel plants, power plants, and mining operations across the state.
          </p>
        </motion.div>

        {/* Industrial Belts Map Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Cities Grid */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {industrialBelts.map((belt, index) => (
              <motion.div
                key={belt.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/30 transition-colors">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{belt.city}</h3>
                    <p className="text-sm text-slate-400 mb-2">{belt.industries}</p>
                    <span className="text-xs text-blue-400 font-medium">{belt.highlight}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Info Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-2xl p-8 border border-blue-500/20">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-blue-400" />
                <h3 className="text-2xl font-bold text-white">Odisha's Preferred Industrial Partner</h3>
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Based in <strong className="text-white">Rajgangpur, Sundargarh</strong>, we are strategically located 
                to serve the major industrial corridors of Odisha. Our proximity to key industrial hubs 
                ensures quick turnaround times and reliable supply chains for your plant operations.
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Bulk supply capabilities for large-scale projects</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Annual maintenance contracts (AMC) for Odisha plants</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>On-site technical support and consultation</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Logistics optimized for Odisha industrial belt</span>
                </li>
              </ul>
            </div>

            {/* Industries Served Tags */}
            <div className="flex flex-wrap gap-2">
              {['Cement Plants', 'Steel Plants', 'Power Plants', 'Mining', 'Aluminum Smelters', 'Paper Mills', 'Fertilizer Plants', 'Ports & Logistics'].map((industry) => (
                <span 
                  key={industry}
                  className="px-4 py-2 bg-slate-800/50 text-slate-300 rounded-full text-sm border border-slate-700/50 hover:border-blue-500/50 hover:text-blue-400 transition-colors cursor-default"
                >
                  {industry}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Trust Signals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustSignals.map((signal, index) => (
            <motion.div
              key={signal.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50 text-center hover:border-blue-500/30 transition-colors"
            >
              <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <signal.icon className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{signal.title}</h3>
              <p className="text-sm text-slate-400">{signal.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors duration-200 flex items-center justify-center gap-2"
            >
              Request Quotation – Odisha
            </a>
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl border border-slate-700 transition-colors duration-200"
            >
              Bulk Supply for Odisha Plants
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServingOdisha;