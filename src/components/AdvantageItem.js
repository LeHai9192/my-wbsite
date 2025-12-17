import React from 'react';

const AdvantageItem = ({ icon, title }) => {
  return (
    <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:transform hover:-translate-y-1 fade-in">
      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-700 to-blue-900 rounded-full flex items-center justify-center text-white">
        {icon}
      </div>
      <h4 className="text-sm font-medium text-gray-800">{title}</h4>
    </div>
  );
};

export default AdvantageItem;