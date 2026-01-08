import React from 'react';
import { Card } from './Card';

export const FactoryGallery: React.FC = () => {
  const galleryItems = [
    {
      image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=800&q=80',
      title: 'State-of-the-Art Manufacturing',
      description: 'Modern facilities equipped with precision machinery'
    },
    {
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      title: 'Quality Control Process',
      description: 'Rigorous testing ensures every product meets our standards'
    },
    {
      image: 'https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?auto=format&fit=crop&w=800&q=80',
      title: 'Expert Craftsmanship',
      description: 'Skilled artisans bringing years of specialized experience'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4B3A2A] mb-6 tracking-tight">
            Inside Doors & Ply
          </h2>
          <p className="text-xl text-[#1A1A1A]/70 max-w-2xl mx-auto">
            Take a look behind the scenes at our world-class manufacturing facilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <Card key={index} variant="product" hover={true}>
              <div
                className="h-64 bg-cover bg-center rounded-lg mb-6"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="h-full bg-black/20 rounded-lg flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-lg font-bold mb-2 tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
              <p className="text-[#1A1A1A]/70">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};