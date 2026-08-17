import React from 'react';

const LevelSelector = ({ selectedLevel, onLevelChange }) => {
  const levels = [
    { id: 'beginner', label: 'Beginner', icon: '🌱' },
    { id: 'intermediate', label: 'Intermediate', icon: '📚' },
    { id: 'advanced', label: 'Advanced', icon: '🚀' }
  ];

  return (
    <div className="grid grid-cols-3 gap-3">
      {levels.map((level) => (
        <button
          key={level.id}
          onClick={() => onLevelChange(level.id)}
          className={`
            p-4 rounded-xl border-2 transition-all duration-200
            ${selectedLevel === level.id 
              ? 'border-purple-500 bg-purple-50 shadow-md' 
              : 'border-gray-200 hover:border-purple-300 hover:bg-gray-50'
            }
          `}
        >
          <div className="text-2xl mb-1">{level.icon}</div>
          <div className={`text-sm font-medium ${
            selectedLevel === level.id ? 'text-purple-600' : 'text-gray-700'
          }`}>
            {level.label}
          </div>
        </button>
      ))}
    </div>
  );
};

export default LevelSelector;