import React from 'react';

const OnBoardingButton = ({ children, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        w-full py-3 px-4 rounded-lg font-medium transition-all duration-200
        ${disabled 
          ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
          : 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:shadow-lg hover:scale-105 active:scale-95'
        }
      `}
    >
      {children}
    </button>
  );
};

export default OnBoardingButton;