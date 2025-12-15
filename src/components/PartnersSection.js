import React from 'react';

const PartnersSection = () => {
  const partners = [
    { name: "ASTEC", type: "Technology Partner" },
    { name: "Sun*", type: "Development Partner" },
    { name: "DAIKO", type: "Strategic Partner" },
    { name: "E-COMETRUE", type: "Business Partner" },
    { name: "HAUDI", type: "Innovation Partner" },
    { name: "MUME", type: "Creative Partner" },
    { name: "TERACOM", type: "Infrastructure Partner" }
  ];

  return (
    <section className="py-16 bg-blue-700 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-normal text-center mb-12 fade-in">関連会社パートナー</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="bg-white text-blue-700 p-4 rounded-lg text-center h-20 flex flex-col items-center justify-center font-bold text-xs fade-in hover:bg-blue-50 transition-colors duration-300"
            >
              <span className="font-bold">{partner.name}</span>
              <span className="text-gray-500 text-xs mt-1 hidden lg:block">{partner.type}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center fade-in">
          <p className="text-blue-100 text-sm">
            グローバルな技術パートナーとの協力により、最高品質のソリューションを提供します
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;