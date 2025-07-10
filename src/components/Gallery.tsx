import React, { useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from './ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const Gallery = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const galleryImages = [
    {
      src: '/lovable-uploads/1308019e-e4ea-4aa0-a27d-665bcbbc188c.png',
      title: 'Steel Structural Components',
      description: 'High-quality steel beams and structural elements'
    },
    {
      src: '/lovable-uploads/df99ab8c-aabd-437b-a2d1-342d0b5d8610.png',
      title: 'Industrial Pulleys',
      description: 'Precision-engineered pulleys for industrial applications'
    },
    {
      src: '/lovable-uploads/8a3dc23d-0687-4f5c-a6f6-acf130a2f283.png',
      title: 'Scrapper Components',
      description: 'Durable scrapper parts for heavy-duty operations'
    },
    {
      src: '/lovable-uploads/7449f35f-9284-4e3b-b84a-90bd480ce82e.png',
      title: 'Industrial Cages',
      description: 'Robust cage structures for various industrial needs'
    },
    {
      src: '/lovable-uploads/6fdb9b7d-1087-420f-a6a8-06180e61426a.png',
      title: 'Frame Guards',
      description: 'Safety frame guards in high-visibility yellow'
    },
    {
      src: '/lovable-uploads/5f9c810b-295b-4c59-ac37-af8709ff8ae5.png',
      title: 'Precision Gears',
      description: 'High-precision gear components for machinery'
    },
    {
      src: '/lovable-uploads/e21f777e-3222-4e2b-9d61-1f4df8c91c9e.png',
      title: 'Industrial Gears',
      description: 'Heavy-duty gear systems for industrial equipment'
    },
    {
      src: '/lovable-uploads/658df256-98d5-4faf-89d7-64be39fa50d3.png',
      title: 'T-Bolts',
      description: 'High-strength T-bolts for structural applications'
    },
    {
      src: '/lovable-uploads/7ca2ec4f-f97f-4de2-a4d9-bc806f0e4b02.png',
      title: 'Industrial Clamps',
      description: 'Heavy-duty clamps for securing industrial components'
    }
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Our Products Gallery
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore our comprehensive range of high-quality industrial components and products
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            setApi={setApi}
            className="w-full"
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: true,
                stopOnMouseEnter: true,
              }),
            ]}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-4">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                      <div className="aspect-[4/3] overflow-hidden bg-slate-100 flex items-center justify-center">
                        <img
                          src={image.src}
                          alt={image.title}
                          className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-slate-800 mb-2">
                          {image.title}
                        </h3>
                        <p className="text-slate-600">
                          {image.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>

          <div className="flex justify-center items-center space-x-2 mt-8">
            <span className="text-sm text-slate-600">
              {current} of {count}
            </span>
            <div className="flex space-x-1">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === current - 1 ? 'bg-blue-600' : 'bg-slate-300'
                  }`}
                  onClick={() => api?.scrollTo(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;