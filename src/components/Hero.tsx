import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
interface HeroProps {
  onGetQuote: () => void;
}
const Hero: React.FC<HeroProps> = ({
  onGetQuote
}) => {
  return <section id="home" className="pt-20 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-slate-800 leading-tight">
                AURO
                <br />
                <span className="text-blue-600">INDUSTRIES</span>
              </h1>
              <p className="text-xl text-slate-600 font-medium">
                Precision Engineering Solutions
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-600">
              <p className="text-lg text-slate-700 mb-4">
                Trusted MSME-registered manufacturer of industrial spares and machinery
              </p>
              <div className="flex items-center space-x-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Quality Assured • MSME Certified</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={onGetQuote} className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium text-lg flex items-center justify-center space-x-2 group">
                <span>Get a Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={() => document.querySelector('#about')?.scrollIntoView({
              behavior: 'smooth'
            })} className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200 font-medium text-lg">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-slate-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-200">35+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-200">500+</div>
                  <div className="text-sm">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-200">100+</div>
                  <div className="text-sm">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-200">24/7</div>
                  <div className="text-sm">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;