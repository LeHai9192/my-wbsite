import React from 'react';
import { Laptop, Smartphone, Cloud, Database } from 'lucide-react';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  const services = [
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "ソフトウェア開発",
      description: "最新技術を活用したカスタムソフトウェアの設計・開発を行います。",
      image: `${process.env.PUBLIC_URL || ''}/service/1.png`

    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "モバイルアプリ開発", 
      description: "iOS・Android対応のモバイルアプリケーション開発サービス。",
      image: `${process.env.PUBLIC_URL || ''}/service/2.png`

    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "クラウドソリューション",
      description: "AWS、Azure、GCPを活用したクラウドインフラ構築。",
      image: `${process.env.PUBLIC_URL || ''}/service/3.png`
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "データベース設計",
      description: "効率的なデータベース設計と最適化サービス。",
      image: `${process.env.PUBLIC_URL || ''}/service/4.png`
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl font-normal text-gray-800 mb-4">サービス</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              image={service.image}

            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;