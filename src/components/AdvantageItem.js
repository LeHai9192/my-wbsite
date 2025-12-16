import React from 'react';

const AdvantageItem = ({ icon, title, image }) => {
  return (
    <div className="text-center fade-in group bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl">
      <div className="w-20 h-20 mx-auto mb-3 bg-gradient-to-br from-blue-700 to-blue-900 rounded-full flex items-center justify-center text-white group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 overflow-hidden">
        {image ? (
          <>
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextElementSibling.style.display = "flex";
              }}
            />
            <div className="hidden items-center justify-center w-full h-full">
              {icon}
            </div>
          </>
        ) : (
          <div className="group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        )}
      </div>
      <h3 className="text-sm font-medium text-gray-800 group-hover:text-blue-700 transition-colors duration-300">{title}</h3>
    </div>
  );
};

export default AdvantageItem;