import React from 'react';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative">
        <div className="animate-spin rounded-full border-8 border-t-8 border-gray-200 border-t-orange-500 w-16 h-16"></div>
        <div className="absolute inset-0 rounded-full border-8 border-gray-200 animate-ping"></div>
      </div>
    </div>
  );
};

export default Spinner;