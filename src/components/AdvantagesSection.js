import React, { useState, useEffect, useRef } from 'react';
import { Award, Clock, DollarSign, Shield, Headphones } from 'lucide-react';
import AdvantageItem from './AdvantageItem';

const AdvantagesSection = () => {
  const [translateX, setTranslateX] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const animationRef = useRef(null);

  const advantages = [
    { 
      icon: <Award className="w-6 h-6" />, 
      title: "銀行業",
      image: `${process.env.PUBLIC_URL || ''}/advantages/banking.png`
    },
    { 
      icon: <Clock className="w-6 h-6" />, 
      title: "物流",
      image: `${process.env.PUBLIC_URL || ''}/advantages/logistics.png`
    },
    { 
      icon: <DollarSign className="w-6 h-6" />, 
      title: "通信",
      image: `${process.env.PUBLIC_URL || ''}/advantages/telecom.png`
    },
    { 
      icon: <Shield className="w-6 h-6" />, 
      title: "保険",
      image: `${process.env.PUBLIC_URL || ''}/advantages/insurance.png`
    },
    { 
      icon: <Headphones className="w-6 h-6" />, 
      title: "金融",
      image: `${process.env.PUBLIC_URL || ''}/advantages/finance.png`
    },
    { 
      icon: <Headphones className="w-6 h-6" />, 
      title: "医療",
      image: `${process.env.PUBLIC_URL || ''}/advantages/medical.png`
    },
    { 
      icon: <Headphones className="w-6 h-6" />, 
      title: "教育",
      image: `${process.env.PUBLIC_URL || ''}/advantages/education.png`
    },
    { 
      icon: <Headphones className="w-6 h-6" />, 
      title: "電子商取引",
      image: `${process.env.PUBLIC_URL || ''}/advantages/ecommerce.png`
    },
  ];

   // Triple the items for seamless loop
  const displayItems = [...advantages, ...advantages, ...advantages];

  // Continuous auto scroll
  useEffect(() => {
    if (!isHovered) {
      const speed = 0.1; // Giảm tốc độ từ 0.5 xuống 0.1
      
      const animate = () => {
        setTranslateX((prev) => {
          const itemWidth = 100 / 5; // Each item is 20% of container
          const maxTranslate = itemWidth * advantages.length;
          
          // Reset seamlessly when reaching the end of first set
          if (prev >= maxTranslate) {
            return 0;
          }
          
          return prev + speed;
        });
        
        animationRef.current = requestAnimationFrame(animate);
      };
      
      animationRef.current = requestAnimationFrame(animate);
      
      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }
  }, [isHovered, advantages.length]);

  return (
    <section id="advantages" className="py-12 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-normal text-center text-gray-800 mb-8 fade-in">私たちのドメイン</h2>
        
        {/* Slider Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="overflow-hidden">
            <div 
              className="flex gap-4"
              style={{ 
                transform: `translateX(-${translateX}%)`,
                transition: 'none'
              }}
            >
              {displayItems.map((advantage, index) => (
                <div key={index} className="flex-shrink-0" style={{ width: `${100 / 5}%` }}>
                  <div className="px-2">
                    <AdvantageItem
                      icon={advantage.icon}
                      title={advantage.title}
                      image={advantage.image}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;