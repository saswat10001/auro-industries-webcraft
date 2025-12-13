import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Gallery from '../components/Gallery';
import Clients from '../components/Clients';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import QuoteModal from '../components/QuoteModal';
import { DottedSurface } from '../components/ui/dotted-surface';

const Index = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const handleGetQuote = () => {
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <div className="min-h-screen relative">
      <DottedSurface theme="dark" className="fixed inset-0 -z-10" />
      <Header onGetQuote={handleGetQuote} />
      <Hero onGetQuote={handleGetQuote} />
      <About />
      <Products />
      <Gallery />
      <Clients />
      <Contact />
      <Footer />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={handleCloseQuote} />
    </div>
  );
};

export default Index;
