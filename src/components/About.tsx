import React from 'react';
import { Award, Users, Cog, Shield, Handshake, Lightbulb, Star } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Award,
      title: 'MSME Certified',
      description: 'Officially registered with the Ministry of Micro, Small & Medium Enterprises'
    },
    {
      icon: Cog,
      title: 'Precision Engineering',
      description: 'State-of-the-art manufacturing processes ensuring highest quality standards'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Skilled professionals with decades of experience in industrial manufacturing'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control at every stage of production'
    }
  ];

  return (
    <section 
      id="about" 
      className="py-20 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(248, 250, 252, 0.95), rgba(241, 245, 249, 0.95)), url('/lovable-uploads/164ea2ce-9c8b-42bc-a99f-e482e6bd56b4.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-slate-800 mb-4 transform hover:scale-105 transition-transform duration-300">
            About Auro Industries
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A trusted name in industrial manufacturing, committed to delivering excellence through precision engineering and quality craftsmanship.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-fade-in animation-delay-300">
            <h3 className="text-3xl font-bold text-slate-800 hover:text-blue-600 transition-colors duration-300">
              Driving Industrial Excellence Since 1985
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              Auro Industries stands as a beacon of reliability in the industrial manufacturing sector. 
              As an MSME-registered company, we have built our reputation on delivering high-performance 
              industrial spares and machinery that meet the most demanding specifications.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our commitment to precision engineering and quality-driven processes has made us the 
              preferred partner for diverse industries including manufacturing, mining, construction, 
              and infrastructure development. We understand that industrial operations demand 
              components that perform flawlessly under pressure.
            </p>
            <div className="bg-blue-50/80 backdrop-blur-sm p-6 rounded-lg border-l-4 border-blue-600 hover:shadow-lg transition-all duration-300 transform hover:scale-102">
              <h4 className="font-bold text-slate-800 mb-2">Our Mission</h4>
              <p className="text-slate-600">
                To provide world-class industrial solutions through innovative engineering, 
                superior quality, and exceptional customer service, while maintaining our 
                commitment to sustainable manufacturing practices.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-100/80 to-blue-50/80 backdrop-blur-sm p-8 rounded-2xl hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-fade-in animation-delay-600">
            <h4 className="text-2xl font-bold text-slate-800 mb-6">Why Choose Us?</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span className="text-slate-600">Comprehensive range of industrial spares and machinery</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span className="text-slate-600">Custom manufacturing capabilities</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span className="text-slate-600">Quick turnaround times</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span className="text-slate-600">Competitive pricing without compromising quality</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span className="text-slate-600">Pan-India delivery network</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Mission, Vision, Values Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Handshake className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-bold text-slate-800 mb-4 uppercase tracking-wide">Our Mission</h4>
            <p className="text-slate-600 leading-relaxed">
              To provide world-class industrial solutions through innovative engineering, superior quality, and exceptional customer service while maintaining sustainable manufacturing practices.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Lightbulb className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-bold text-slate-800 mb-4 uppercase tracking-wide">Our Vision</h4>
            <p className="text-slate-600 leading-relaxed">
              To become India's leading industrial manufacturing partner, recognized for precision engineering, reliability, and continuous innovation in every component we deliver.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Star className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-bold text-slate-800 mb-4 uppercase tracking-wide">Our Values</h4>
            <p className="text-slate-600 leading-relaxed">
              Integrity, excellence, and customer-centricity guide everything we do. We believe in building lasting partnerships through trust, quality, and unwavering commitment.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center group animate-fade-in hover:scale-110 transition-all duration-500 transform"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-blue-700 group-hover:to-blue-800 transition-all duration-300 group-hover:rotate-12 group-hover:shadow-2xl">
                <feature.icon className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {feature.title}
              </h4>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
