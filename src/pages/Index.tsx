
import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import QuoteModal from '../components/QuoteModal';

const Index = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const handleGetQuote = () => {
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <div className="min-h-screen">
      <Header onGetQuote={handleGetQuote} />
      <Hero onGetQuote={handleGetQuote} />
      <About />
      <Products />
      <Contact />
      <Footer />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={handleCloseQuote} />
    </div>
  );
};

export default Index;
