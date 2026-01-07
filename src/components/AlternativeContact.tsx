import React from 'react';
import { Card } from './Card';
import { Phone, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants/contact';

export const AlternativeContact: React.FC = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      value: CONTACT_INFO.phone,
      description: CONTACT_INFO.businessHours,
      color: 'text-green-600'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: CONTACT_INFO.whatsapp,
      description: 'Quick responses available',
      color: 'text-[#25D366]'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/40 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        <Card variant="basic" className="text-center">
          <h2 className="text-2xl font-bold text-[#4B3A2A] mb-6 tracking-tight">
            Alternative Contact Methods
          </h2>
          <p className="text-[#1A1A1A]/70 mb-8 max-w-2xl mx-auto">
            Prefer to reach out directly? Our product specialists are available through multiple channels
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="space-y-4 min-w-[280px]">
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/30 hover:scale-105 transition-all duration-300 hover:shadow-lg h-full">
                  <method.icon className={`w-8 h-8 mx-auto mb-4 ${method.color}`} />
                  <h3 className="font-bold text-[#4B3A2A] text-lg mb-2">{method.title}</h3>
                  <p className="text-[#1A1A1A] font-medium mb-2">
                    <a href={`tel:${method.value.replace(/[^0-9]/g, '')}`} className="hover:text-[#C3A572] transition-colors">
                      {method.value}
                    </a>
                  </p>
                  <p className="text-[#1A1A1A]/60 text-sm">{method.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-[#C3A572]/10 backdrop-blur-sm rounded-xl border border-[#C3A572]/20">
            <h3 className="font-bold text-[#4B3A2A] mb-2">Product Specialists Available</h3>
            <p className="text-[#1A1A1A]/70 text-sm">
              Our dedicated team handles product inquiries, logistics, and custom requirements for UPVC door supply across India. Contact us at {CONTACT_INFO.phone}.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};