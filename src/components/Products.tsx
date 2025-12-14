import React, { useState } from 'react';
import { 
  Cog, 
  Link2, 
  Package, 
  Circle, 
  Target, 
  Wrench, 
  Hammer, 
  Settings, 
  Anchor, 
  Boxes,
  Gem,
  ChevronRight,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const productCategories = [
    {
      id: 'shafts',
      name: 'Shafts & Gears',
      icon: Cog,
      color: 'from-blue-500 to-blue-600',
      items: [
        'Drive Shafts', 'Motor Shafts', 'Pump Shafts', 'Gear Shafts', 'Splined Shafts',
        'Hollow Shafts', 'Helical Gears', 'Spur Gears', 'Worm Gears', 'Planetary Gears'
      ]
    },
    {
      id: 'couplings',
      name: 'Couplings & Transmission',
      icon: Link2,
      color: 'from-indigo-500 to-indigo-600',
      items: [
        'Flexible Couplings', 'Rigid Couplings', 'Universal Joints', 'Chain Couplings',
        'Gear Couplings', 'Transmission Belts', 'V-Belts', 'Timing Belts', 'Drive Chains', 'Sprockets'
      ]
    },
    {
      id: 'material-handling',
      name: 'Material Handling',
      icon: Package,
      color: 'from-cyan-500 to-cyan-600',
      items: [
        'Conveyor Rollers', 'Idler Rollers', 'Drive Rollers', 'Conveyor Belts', 'Belt Scrapers',
        'Loading Chutes', 'Transfer Points', 'Belt Cleaners', 'Impact Beds', 'Return Rollers'
      ]
    },
    {
      id: 'pulleys',
      name: 'Pulleys',
      icon: Circle,
      color: 'from-teal-500 to-teal-600',
      items: [
        'Cast Iron Pulleys', 'Steel Pulleys', 'V-Belt Pulleys', 'Timing Pulleys',
        'Variable Speed Pulleys', 'Flat Belt Pulleys', 'Rope Pulleys', 'Wire Rope Pulleys', 'Sheaves', 'Crown Pulleys'
      ]
    },
    {
      id: 'bearing-units',
      name: 'Bearing Units',
      icon: Target,
      color: 'from-violet-500 to-violet-600',
      items: [
        'Pillow Block Bearings', 'Flange Bearings', 'Take-up Bearings', 'Hanger Bearings',
        'Thrust Bearings', 'Roller Bearings', 'Ball Bearings', 'Needle Bearings', 'Spherical Bearings', 'Linear Bearings'
      ]
    },
    {
      id: 'reclaimer-spares',
      name: 'Reclaimer Spares',
      icon: Settings,
      color: 'from-purple-500 to-purple-600',
      items: [
        'Reclaimer Wheels', 'Rake Arms', 'Drive Mechanisms', 'Scraper Blades', 'Center Columns',
        'Bridge Assemblies', 'Travel Mechanisms', 'Chain Drives', 'Gearboxes', 'Support Structures'
      ]
    },
    {
      id: 'fasteners',
      name: 'Fasteners',
      icon: Wrench,
      color: 'from-orange-500 to-orange-600',
      items: [
        'High Tensile Bolts', 'Hex Bolts', 'Cap Screws', 'Socket Head Screws', 'Nuts & Washers',
        'Threaded Rods', 'U-Bolts', 'Eye Bolts', 'Foundation Bolts', 'Stud Bolts'
      ]
    },
    {
      id: 'general-engineering',
      name: 'General Engineering',
      icon: Hammer,
      color: 'from-amber-500 to-amber-600',
      items: [
        'Machined Components', 'Fabricated Structures', 'Weldments', 'Castings', 'Forgings',
        'Precision Turned Parts', 'Custom Brackets', 'Support Frames', 'Mounting Plates', 'Adapter Plates'
      ]
    },
    {
      id: 'lifting-drum',
      name: 'Lifting & Drum Handling',
      icon: Anchor,
      color: 'from-rose-500 to-rose-600',
      items: [
        'Wire Rope Drums', 'Winch Drums', 'Cable Drums', 'Lifting Hooks', 'Shackles',
        'Wire Rope Clamps', 'Turnbuckles', 'Load Blocks', 'Crane Wheels', 'Drum Couplings'
      ]
    },
    {
      id: 'miscellaneous',
      name: 'Miscellaneous',
      icon: Boxes,
      color: 'from-slate-500 to-slate-600',
      items: [
        'Industrial Valves', 'Pipe Fittings', 'Flanges', 'Gaskets', 'O-Rings',
        'Seals', 'Lubricators', 'Grease Nipples', 'Drain Plugs', 'Sight Glasses'
      ]
    },
    {
      id: 'non-ferrous',
      name: 'Non-Ferrous Items',
      icon: Gem,
      color: 'from-emerald-500 to-emerald-600',
      items: [
        'Bronze Bushings', 'Brass Fittings', 'Aluminum Components', 'Copper Parts',
        'Phosphor Bronze Items', 'Gun Metal Parts', 'Stainless Steel Components', 'Titanium Parts', 'Nickel Alloy Items', 'Special Alloy Components'
      ]
    }
  ];

  const selectedCategoryData = productCategories.find(c => c.id === selectedCategory);

  return (
    <section id="products" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Products</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive range of high-quality industrial spares and machinery components designed for optimal performance and durability.
          </p>
        </div>

        {/* Product Category Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {productCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className="group cursor-pointer"
                >
                  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 hover:border-blue-200">
                    {/* Icon Area */}
                    <div className="aspect-square flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 group-hover:from-blue-50 group-hover:to-blue-100 transition-colors duration-300 p-6">
                      <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-white" />
                      </div>
                    </div>
                    
                    {/* Category Name */}
                    <div className="p-4 bg-slate-100 group-hover:bg-blue-600 transition-colors duration-300">
                      <h3 className="text-sm md:text-base font-semibold text-slate-800 group-hover:text-white text-center transition-colors duration-300 flex items-center justify-center gap-2">
                        <span>{category.name}</span>
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </h3>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Modal for Category Items */}
        <AnimatePresence>
          {selectedCategory && selectedCategoryData && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedCategory(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className={`p-6 bg-gradient-to-r ${selectedCategoryData.color} text-white flex items-center justify-between`}>
                  <div className="flex items-center gap-4">
                    <selectedCategoryData.icon className="w-8 h-8" />
                    <h3 className="text-2xl font-bold">{selectedCategoryData.name}</h3>
                  </div>
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                {/* Modal Content */}
                <div className="p-6 overflow-y-auto max-h-[60vh]">
                  <div className="grid md:grid-cols-2 gap-3">
                    {selectedCategoryData.items.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.03 }}
                        className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg hover:bg-blue-50 transition-colors"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${selectedCategoryData.color}`}></div>
                        <span className="text-slate-700 font-medium">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <div className="text-center mt-16">
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
