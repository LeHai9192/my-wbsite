import React from 'react';
import LeaderCard from './LeaderCard';

const LeadershipSection = () => {
  const leaders = [
    { 
      name: "LE Van Hai", 
      position: "最高経営責任者",
      description: "15年以上のソフトウェア開発経験を持つエンジニア出身のCEO"
    },
    { 
      name: "NGuyen Xuan Chien", 
      position: "最高プロダクト責任者",
      description: "プロダクト戦略とユーザーエクスペリエンスの専門家"
    },
    { 
      name: "Nguyen Van Thanh", 
      position: "最高技術責任者",
      description: "大規模システム設計とアーキテクチャの第一人者"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-normal text-center text-gray-800 mb-12 fade-in">創業者とリーダー</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <LeaderCard
              key={index}
              name={leader.name}
              position={leader.position}
              description={leader.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;