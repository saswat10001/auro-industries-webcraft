
import React from 'react';

const Clients: React.FC = () => {
  const clients = [
    {
      name: 'Jindal Panther Cement',
      logo: '/lovable-uploads/a638c2cf-7500-4122-95ac-8bb306b076e4.png'
    },
    {
      name: 'OCL India Ltd',
      logo: '/lovable-uploads/d8201b5d-9250-412e-bcbf-f79168c7f37e.png'
    },
    {
      name: 'Dalmia Bharat Cement',
      logo: '/lovable-uploads/353c87af-e75c-4015-92e0-0a3097a5226c.png'
    },
    {
      name: 'RHI Magnesita',
      logo: '/lovable-uploads/bb216bc7-14a7-41a0-8553-ebbfa27ac875.png'
    },
    {
      name: 'JSW Cement',
      logo: '/lovable-uploads/52650a70-b28f-4d0c-9a99-7cdc132d00e8.png'
    },
    {
      name: 'Jagannath Stones',
      logo: '/lovable-uploads/e2b9d873-4e82-489e-97b3-5b435c5c46b2.png'
    }
  ];

  return (
    <section id="clients" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Clients</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Trusted by leading industrial companies across various sectors for quality engineering solutions.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 bg-slate-50 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 group"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-16 object-contain transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-slate-800 text-white p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Join Our Growing List of Satisfied Clients</h3>
            <p className="text-slate-300 mb-6 text-lg">
              Experience the same quality and reliability that these industry leaders trust. 
              Let us be your partner in engineering excellence.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
              Become Our Next Success Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
