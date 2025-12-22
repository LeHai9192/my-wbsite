import React from 'react';

const ServiceCard = ({ icon, title, description, image }) => {
  return (
    <div className="bg-white p-8 rounded-lg text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 fade-in border border-gray-100">
      {/* Service icon/image */}
      <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-700 to-blue-900 rounded-full flex items-center justify-center text-white overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-full"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        ) : (
          icon
        )}
      </div>
      
      <h3 className="text-lg font-medium mb-4 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;