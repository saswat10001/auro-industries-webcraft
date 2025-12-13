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
    },
    {
      src: '/lovable-uploads/970e935a-8733-4d15-b52d-e625cbc4efad.png',
      title: 'Bucket Elevator',
      description: 'Heavy-duty bucket elevator components for material handling'
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Our Products Gallery
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore our comprehensive range of high-quality industrial components
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
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
            <CarouselContent className="-ml-4">
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-3/5">
                  <div className="relative aspect-[4/3] bg-blue-50/50 rounded-lg overflow-hidden border border-blue-100/50">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-6">
                      <h3 className="text-lg font-semibold text-white">
                        {image.title}
                      </h3>
                      <p className="text-sm text-white/70">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 md:-left-12 h-10 w-10 border-0 bg-transparent text-blue-600 hover:bg-blue-50 hover:text-blue-700" />
            <CarouselNext className="-right-4 md:-right-12 h-10 w-10 border-0 bg-transparent text-blue-600 hover:bg-blue-50 hover:text-blue-700" />
          </Carousel>

          <div className="flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === current - 1 
                    ? 'bg-blue-600 w-6' 
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;