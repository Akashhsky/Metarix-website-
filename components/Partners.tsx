import React from 'react';

const Partners: React.FC = () => {
  const partners = [
    "TechNova", "GlobalSystems", "FutureCorp", "DataFlow", "OrbitAI"
  ];

  return (
    <section className="py-10 border-y border-white/5 bg-brand-dark/50">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm text-gray-500 uppercase tracking-widest mb-8">Trusted by forward-thinking businesses</p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-20 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner, index) => (
            <div key={index} className="text-xl font-bold text-white/40 hover:text-white hover:scale-105 transition-all cursor-default">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
