
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Package } from 'lucide-react';

const Products: React.FC = () => {
  const [openCategory, setOpenCategory] = useState<string | null>('shafts');

  const productCategories = [
    {
      id: 'shafts',
      name: 'Shafts & Gears',
      items: [
        'Drive Shafts',
        'Motor Shafts',
        'Pump Shafts',
        'Gear Shafts',
        'Splined Shafts',
        'Hollow Shafts',
        'Helical Gears',
        'Spur Gears',
        'Worm Gears',
        'Planetary Gears'
      ]
    },
    {
      id: 'couplings',
      name: 'Couplings & Transmission',
      items: [
        'Flexible Couplings',
        'Rigid Couplings',
        'Universal Joints',
        'Chain Couplings',
        'Gear Couplings',
        'Transmission Belts',
        'V-Belts',
        'Timing Belts',
        'Drive Chains',
        'Sprockets'
      ]
    },
    {
      id: 'material-handling',
      name: 'Material Handling Components',
      items: [
        'Conveyor Rollers',
        'Idler Rollers',
        'Drive Rollers',
        'Conveyor Belts',
        'Belt Scrapers',
        'Loading Chutes',
        'Transfer Points',
        'Belt Cleaners',
        'Impact Beds',
        'Return Rollers'
      ]
    },
    {
      id: 'pulleys',
      name: 'Pulleys',
      items: [
        'Cast Iron Pulleys',
        'Steel Pulleys',
        'V-Belt Pulleys',
        'Timing Pulleys',
        'Variable Speed Pulleys',
        'Flat Belt Pulleys',
        'Rope Pulleys',
        'Wire Rope Pulleys',
        'Sheaves',
        'Crown Pulleys'
      ]
    },
    {
      id: 'bearing-units',
      name: 'Bearing Units',
      items: [
        'Pillow Block Bearings',
        'Flange Bearings',
        'Take-up Bearings',
        'Hanger Bearings',
        'Thrust Bearings',
        'Roller Bearings',
        'Ball Bearings',
        'Needle Bearings',
        'Spherical Bearings',
        'Linear Bearings'
      ]
    },
    {
      id: 'reclaimer-spares',
      name: 'Reclaimer Spares',
      items: [
        'Reclaimer Wheels',
        'Rake Arms',
        'Drive Mechanisms',
        'Scraper Blades',
        'Center Columns',
        'Bridge Assemblies',
        'Travel Mechanisms',
        'Chain Drives',
        'Gearboxes',
        'Support Structures'
      ]
    },
    {
      id: 'fasteners',
      name: 'Fasteners',
      items: [
        'High Tensile Bolts',
        'Hex Bolts',
        'Cap Screws',
        'Socket Head Screws',
        'Nuts & Washers',
        'Threaded Rods',
        'U-Bolts',
        'Eye Bolts',
        'Foundation Bolts',
        'Stud Bolts'
      ]
    },
    {
      id: 'general-engineering',
      name: 'General Engineering Items',
      items: [
        'Machined Components',
        'Fabricated Structures',
        'Weldments',
        'Castings',
        'Forgings',
        'Precision Turned Parts',
        'Custom Brackets',
        'Support Frames',
        'Mounting Plates',
        'Adapter Plates'
      ]
    },
    {
      id: 'lifting-drum',
      name: 'Lifting & Drum Handling',
      items: [
        'Wire Rope Drums',
        'Winch Drums',
        'Cable Drums',
        'Lifting Hooks',
        'Shackles',
        'Wire Rope Clamps',
        'Turnbuckles',
        'Load Blocks',
        'Crane Wheels',
        'Drum Couplings'
      ]
    },
    {
      id: 'miscellaneous',
      name: 'Miscellaneous',
      items: [
        'Industrial Valves',
        'Pipe Fittings',
        'Flanges',
        'Gaskets',
        'O-Rings',
        'Seals',
        'Lubricators',
        'Grease Nipples',
        'Drain Plugs',
        'Sight Glasses'
      ]
    },
    {
      id: 'non-ferrous',
      name: 'Non-Ferrous Items',
      items: [
        'Bronze Bushings',
        'Brass Fittings',
        'Aluminum Components',
        'Copper Parts',
        'Phosphor Bronze Items',
        'Gun Metal Parts',
        'Stainless Steel Components',
        'Titanium Parts',
        'Nickel Alloy Items',
        'Special Alloy Components'
      ]
    }
  ];

  const toggleCategory = (categoryId: string) => {
    setOpenCategory(openCategory === categoryId ? null : categoryId);
  };

  return (
    <section id="products" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Products</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive range of high-quality industrial spares and machinery components designed for optimal performance and durability.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid gap-4">
            {productCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-3">
                    <Package className="w-6 h-6 text-blue-600" />
                    <h3 className="text-xl font-bold text-slate-800">{category.name}</h3>
                  </div>
                  {openCategory === category.id ? (
                    <ChevronUp className="w-6 h-6 text-slate-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-slate-600" />
                  )}
                </button>
                
                {openCategory === category.id && (
                  <div className="px-6 pb-6 bg-slate-50">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {category.items.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2 p-3 bg-white rounded-lg hover:shadow-md transition-shadow duration-200"
                        >
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-slate-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-600 text-white p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Can't find what you're looking for?</h3>
            <p className="text-blue-100 mb-6 text-lg">
              We offer custom manufacturing services to meet your specific requirements. 
              Our expert team can design and manufacture components to your exact specifications.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200">
              Contact Us for Custom Solutions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
