import React from 'react';

const PortfolioSection = () => {
  const portfolioItems = [
    {
      title: "ECサイト開発",
      description: "大規模ECプラットフォームの構築"
    },
    {
      title: "業務システム",
      description: "企業向け業務管理システム"
    },
    {
      title: "モバイルアプリ",
      description: "iOS/Android対応アプリケーション"
    }
  ];

  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-normal text-center text-gray-800 mb-12 fade-in">製品</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 overflow-hidden fade-in">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-white text-lg font-medium">
                {item.title}
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;