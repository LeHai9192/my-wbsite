import React from 'react';

const PartnersSection = () => {
  const partners = [
    { name: "ASTEC", type: "Technology Partner", image: "/partner/astec.jpg" , scale: "normal" },
    { name: "Sun*", type: "Development Partner", image: "/partner/sun.png" , scale: "normal" },
    { name: "E-COMETRUE", type: "Business Partner", image: "/partner/ecometrue.jpg", scale: "large" },
    { name: "HAUDI", type: "Innovation Partner", image: "/partner/haudi.jpg", scale: "large" },
    { name: "MUMESOFT", type: "Creative Partner", image: "/partner/mume.jpg", scale: "large"  },
    { name: "TERACOM", type: "Infrastructure Partner", image: "/partner/teracom.png", scale: "large"  }
  ];

  return (
    <section className="py-16 bg-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-normal text-center mb-12 fade-in">関連会社パートナー</h2>
        
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-4 flex items-center justify-center fade-in hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1 h-20"
            >
              {/* Partner Logo */}
              <img
                src={partner.image}
                alt={partner.name}
                className={`max-w-full max-h-full object-contain ${
                  partner.scale === 'xlarge' ? 'scale-[2]' : 
                  partner.scale === 'large' ? 'scale-150' : ''
                }`}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextElementSibling.style.display = "flex";
                }}
              />
              <div className="hidden flex-col items-center justify-center text-blue-700">
                <span className="font-bold text-sm">{partner.name}</span>
                <span className="text-gray-500 text-xs mt-1">{partner.type}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center fade-in">
          <p className="text-blue-100 text-sm">
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;