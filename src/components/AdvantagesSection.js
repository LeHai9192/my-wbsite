import React from 'react';
import { Award, Clock, DollarSign, Shield, Headphones } from 'lucide-react';
import AdvantageItem from './AdvantageItem';

const AdvantagesSection = () => {
  const advantages = [
    { icon: <Award className="w-6 h-6" />, title: "高品質" },
    { icon: <Clock className="w-6 h-6" />, title: "迅速対応" },
    { icon: <DollarSign className="w-6 h-6" />, title: "コスト効率" },
    { icon: <Shield className="w-6 h-6" />, title: "セキュリティ" },
    { icon: <Headphones className="w-6 h-6" />, title: "サポート" }
  ];

  return (
    <section id="advantages" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-normal text-center text-gray-800 mb-12 fade-in">私たちのメリット</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {advantages.map((advantage, index) => (
            <AdvantageItem
              key={index}
              icon={advantage.icon}
              title={advantage.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;