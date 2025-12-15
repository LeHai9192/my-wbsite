import React from 'react';
import { Calendar, Tag } from 'lucide-react';

const NewsCard = ({ title, description, imageText, date, category }) => {
  return (
    <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden fade-in hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1">
      <div className="h-48 bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-white text-lg font-medium relative">
        {imageText}
        {category && (
          <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
            {category}
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center text-gray-500 text-xs mb-3">
          <Calendar className="w-4 h-4 mr-1" />
          <span>{date}</span>
          {category && (
            <>
              <Tag className="w-4 h-4 ml-4 mr-1" />
              <span>{category}</span>
            </>
          )}
        </div>
        <h4 className="text-lg font-medium text-gray-800 mb-4 hover:text-blue-700 transition-colors cursor-pointer">
          {title}
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>
        <div className="mt-4">
          <button className="text-blue-700 text-sm font-medium hover:text-blue-800 transition-colors">
            続きを読む →
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;