import React, { useState } from 'react';

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-700 to-blue-900 text-white pt-20 pb-16 overflow-hidden">
      <div className="absolute top-0 right-0 w-3/5 h-full opacity-30">
        <div className="w-full h-full bg-gradient-radial from-white/20 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl lg:text-5xl font-light mb-6 leading-tight">
            ベトナムの最先端の<br />ソフトウェア開発会社
          </h1>
          <p className="text-lg mb-8 opacity-90 leading-relaxed">
            私たちは、革新的なテクノロジーソリューションを通じて、お客様のビジネスの成長を支援します。高品質なソフトウェア開発からシステム統合まで、包括的なITサービスを提供しています。
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded transition-all duration-300 hover:transform hover:-translate-y-1"
          >
            お問い合わせはこちら
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {[0, 1, 2].map(index => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
              activeSlide === index ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setActiveSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;