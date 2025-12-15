import React from 'react';
import NewsCard from './NewsCard';

const NewsSection = () => {
  const newsItems = [
    {
      title: "2024年度新卒採用開始",
      description: "来年度の新卒採用を開始いたします。エンジニア職を中心に優秀な人材を募集しています。より良いサービス提供のため、チーム拡大を図っています。",
      imageText: "チームミーティング",
      date: "2024年3月15日",
      category: "採用情報"
    },
    {
      title: "新オフィス移転のお知らせ",
      description: "事業拡大に伴い、より広いオフィスに移転いたします。アクセスも向上し、より良い環境でサービスを提供します。最新の設備を導入し、働きやすい環境を整備いたします。",
      imageText: "オフィス風景",
      date: "2024年2月28日",
      category: "企業情報"
    }
  ];

  return (
    <section id="news" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl font-normal text-gray-800 mb-4">最新ニュース</h2>
          <p className="text-gray-600">会社の最新情報をお知らせします</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {newsItems.map((news, index) => (
            <NewsCard
              key={index}
              title={news.title}
              description={news.description}
              imageText={news.imageText}
              date={news.date}
              category={news.category}
            />
          ))}
        </div>

        <div className="text-center mt-12 fade-in">
          <button className="bg-blue-700 text-white px-8 py-3 rounded hover:bg-blue-800 transition-colors duration-300">
            すべてのニュースを見る
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;