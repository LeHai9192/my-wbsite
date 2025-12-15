import React from 'react';
import { User } from 'lucide-react';

const LeaderCard = ({ name, position, description }) => {
  return (
    <div className="bg-white p-8 text-center rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 fade-in">
      <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center text-white text-2xl">
        <User className="w-12 h-12" />
      </div>
      <h4 className="text-lg font-medium text-gray-800 mb-2">{name}</h4>
      <p className="text-blue-600 text-sm font-medium mb-3">{position}</p>
      {description && (
        <p className="text-gray-600 text-xs leading-relaxed">{description}</p>
      )}
    </div>
  );
};

export default LeaderCard;