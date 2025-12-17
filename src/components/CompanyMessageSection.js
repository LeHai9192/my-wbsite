import React from 'react';
import { User } from 'lucide-react';

const CompanyMessageSection = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <div className="w-full h-64 bg-gradient-to-br from-blue-700 to-blue-900 rounded-lg flex items-center justify-center text-white text-xl">
              <User className="w-16 h-16" />
            </div>
          </div>
          <div className="fade-in">
            <h3 className="text-2xl font-medium text-blue-700 mb-4">ビジョンーミッション</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              私たちは、お客様のビジネスニーズを深く理解し、最適なソリューションを提供することを使命としています。
            </p>
            <p className="text-gray-700 leading-relaxed">
              豊富な経験と最新の技術力を活かし、お客様の競争力向上に貢献します。品質の高いサービスと継続的なサポートで、長期的なパートナーシップを築いていきます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyMessageSection;