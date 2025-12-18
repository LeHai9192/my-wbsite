import React from 'react';

const AdvantageItem = ({ icon, title, image }) => {
  // Function to insert line break after 2 characters
  const formatTitle = (text) => {
    if (text.length > 3) {
      // Split after 2 characters
      const firstPart = text.slice(0, 2);
      const secondPart = text.slice(2);
      return (
        <>
          {firstPart}<br />{secondPart}
        </>
      );
    }
    return text;
  };

  return (
    <div className="text-center fade-in group md:bg-gray-50 py-4 md:p-4 md:rounded-lg md:hover:bg-gray-100 transition-all duration-300 hover:transform hover:-translate-y-2 md:hover:shadow-xl flex flex-col items-center min-w-0">
      <div className="w-16 h-16 md:w-20 md:h-20 mb-2 md:mb-3 bg-gradient-to-br from-blue-700 to-blue-900 rounded-full flex items-center justify-center text-white group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 overflow-hidden flex-shrink-0">
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
      <h3 className="text-xs md:text-sm font-medium text-gray-800 group-hover:text-blue-700 transition-colors duration-300 text-center leading-tight">
        {formatTitle(title)}
      </h3>
    </div>
  );
};

export default AdvantageItem;