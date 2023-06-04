import React from 'react';

const LoadingDots = () => {
  return (
    <div className="flex space-x-1">
      {[...Array(3)].map((_, idx) => (
        <div key={idx} className="w-1.5 h-1.5 bg-gray-900 rounded-full animate-pulse"></div>
      ))}
    </div>
  );
};

export default LoadingDots;
