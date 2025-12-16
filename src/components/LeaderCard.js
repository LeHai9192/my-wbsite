import React from 'react';
import { User } from 'lucide-react';

const LeaderCard = ({ name, position, description, image }) => {
  return (
    <div className="bg-white p-8 text-center rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 fade-in">
      
      {/* Avatar */}
      <div className="w-32 h-32 mx-auto mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        ) : (
          <User className="w-12 h-12 text-white" />
        )}
      </div>

      <h4 className="text-lg font-medium text-gray-800 mb-2">{name}</h4>
      <p className="text-blue-600 text-sm font-medium mb-3">{position}</p>

      {description && (
        <p className="text-gray-600 text-xs leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default LeaderCard;
