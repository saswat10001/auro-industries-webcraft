import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServingOdisha from '../components/ServingOdisha';
import QuoteModal from '../components/QuoteModal';
import { DottedSurface } from '../components/ui/dotted-surface';
import { motion } from 'framer-motion';
import { Factory, Cog, Truck, Shield, ArrowRight, CheckCircle } from 'lucide-react';

const Odisha = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const handleGetQuote = () => {
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteModalOpen(false);
  };

  const products = [
    { name: 'Gear Couplings', description: 'High-precision gear couplings for power transmission in cement and steel plants' },
    { name: 'Conveyor Components', description: 'Rollers, idlers, pulleys for material handling systems' },
    { name: 'Cement Plant Spares', description: 'Kiln components, mill liners, girth gears for cement manufacturing' },
    { name: 'Steel Plant Machinery', description: 'Rolling mill components, crane parts, furnace equipment' },
    { name: 'Power Plant Equipment', description: 'Turbine parts, coal handling components, ash handling systems' },
    { name: 'Mining Equipment', description: 'Crusher parts, screen components, excavator attachments' },
  ];

  const whyChooseUs = [
    { title: 'Local Manufacturing', description: 'Based in Rajgangpur, ensuring quick delivery across Odisha' },
    { title: 'MSME Certified', description: 'Government registered with quality assurance standards' },
    { title: '35+ Years Experience', description: 'Decades of expertise serving Odisha industries' },
    { title: 'Bulk Supply Ready', description: 'Capacity for large-scale industrial requirements' },
  ];

  return (
    <div className="min-h-screen relative">
      <Helmet>
        <title>Industrial Spares Manufacturer in Odisha | Gear Couplings, Conveyor Components | Auro Industries</title>
        <meta name="description" content="Leading industrial spares manufacturer in Odisha. MSME certified supplier of gear couplings, conveyor components, cement plant spares, steel plant machinery. Serving Angul, Jharsuguda, Rourkela, Kalinganagar, Paradeep industries." />
        <meta name="keywords" content="industrial spares manufacturer Odisha, gear coupling supplier Odisha, cement plant spare parts Odisha, conveyor components manufacturer Odisha, steel plant machinery Odisha, power plant equipment Odisha, mining equipment supplier Odisha, industrial fabrication Rajgangpur" />
        <link rel="canonical" href="https://auroindustries.in/industrial-spares-odisha" />
      </Helmet>

      <DottedSurface theme="dark" className="fixed inset-0 -z-10" />
      <Header onGetQuote={handleGetQuote} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6">
              MSME Certified Manufacturer
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Industrial Spares Manufacturer in <span className="text-blue-400">Odisha</span>
            </h1>
            <p className="text-xl text-slate-400 mb-8 max-w-3xl mx-auto">
              Trusted supplier of gear couplings, conveyor components, and industrial machinery to 
              cement plants, steel plants, power plants, and mining operations across Odisha's industrial belt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleGetQuote}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Request Quotation – Odisha
                <ArrowRight className="w-5 h-5" />
              </button>
              <a 
                href="tel:+91XXXXXXXXXX"
                className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl border border-slate-700 transition-colors duration-200"
              >
                Call for Bulk Orders
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industrial Spares for Odisha Plants
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Comprehensive range of precision-engineered components for heavy industries across Odisha
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-colors"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Cog className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                <p className="text-slate-400">{product.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Odisha Industries Choose Us
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Serving Odisha Section */}
      <ServingOdisha />

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Partner with Odisha's Trusted Industrial Supplier?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Get competitive pricing, fast delivery, and reliable quality for all your industrial spare requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleGetQuote}
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors duration-200"
            >
              Request Quotation – Odisha
            </button>
            <button 
              onClick={handleGetQuote}
              className="px-8 py-4 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-800 transition-colors duration-200 border border-blue-500"
            >
              Bulk Supply for Plants
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={handleCloseQuote} />
    </div>
  );
};

export default Odisha;