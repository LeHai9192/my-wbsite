import React from 'react';
import { User } from 'lucide-react';

const LeaderCard = ({ name, position, description, image }) => {
  return (
    <div className="bg-white p-8 text-center rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 fade-in group border border-gray-100 hover:border-blue-300">
      
      {/* Avatar */}
      <div className="w-32 h-32 mx-auto mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 group-hover:shadow-xl">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        ) : (
          <User className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300" />
        )}
      </div>

      <h4 className="text-lg font-medium text-gray-800 mb-2 group-hover:text-blue-700 transition-colors duration-300">{name}</h4>
      <p className="text-blue-600 text-sm font-medium mb-3 group-hover:text-blue-800 transition-colors duration-300">{position}</p>

      {description && (
        <p className="text-gray-600 text-xs leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
          {description}
        </p>
      )}
    </div>
  );
};

export default LeaderCard;