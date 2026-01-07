import React from 'react';
import { Card } from './Card';
import { Star } from 'lucide-react';
import { Container } from './Container';

export const Testimonials: React.FC = () => {
  const getInitials = (fullName: string) => {
    const parts = fullName.trim().split(/\s+/).filter(Boolean);
    const first = parts[0]?.[0] ?? '';
    const last = parts.length > 1 ? parts[parts.length - 1]?.[0] ?? '' : '';
    return (first + last).toUpperCase();
  };

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'R.K. Builders, Bengaluru',
      testimonial: 'We have been sourcing uPVC doors from Doors & Plys India for multiple projects. The finish is premium, fitting is smooth, and their team supports us well from order to dispatch.',
      rating: 5
    },
    {
      name: 'Priya Nair',
      company: 'Nair Traders, Kochi',
      testimonial: 'Great quality and consistent supply. Packaging is strong, delivery timelines are reliable, and the product quality matches what was committed. Very professional service.',
      rating: 5
    },
    {
      name: 'Amit Sharma',
      company: 'Sharma Interiors, Delhi NCR',
      testimonial: 'The designs look modern and the hardware quality is solid. Our customers are happy with the final look. After-sales response is quick, which really helps on site.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#F5F5F5]">
      <Container size="7xl" padding="md">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center rounded-full border border-[#4B3A2A]/10 bg-white/70 backdrop-blur px-4 py-2 text-sm font-medium text-[#4B3A2A] shadow-sm">
            Customer Reviews
          </div>
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4B3A2A] mb-6 tracking-tight">
            Trusted Across India
          </h2>
          <p className="text-xl text-[#1A1A1A]/70">
            Real feedback from builders, distributors, and interior teams
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} variant="notification" className="relative overflow-hidden">
              <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br from-[#C3A572]/25 to-[#4B3A2A]/10 blur-2xl" />

              <div className="relative flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#4B3A2A] to-[#7A5A3A] text-white font-semibold">
                  {getInitials(testimonial.name)}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-[#C3A572] fill-current" />
                      ))}
                    </div>
                    <div className="text-sm text-[#1A1A1A]/50">{testimonial.rating}.0</div>
                  </div>

                  <p className="text-[#1A1A1A] leading-relaxed mb-6">
                    “{testimonial.testimonial}”
                  </p>

                  <div className="pt-4 border-t border-[#4B3A2A]/10">
                    <div className="font-semibold text-[#4B3A2A] truncate">
                      {testimonial.name}
                    </div>
                    <div className="text-[#1A1A1A]/70 text-sm truncate">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};