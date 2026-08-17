import React from 'react';

const SelectField = ({ value, onChange, placeholder }) => {
  // Just 5 main regions of Uganda
  const locations = [
    'Central Region',
    'Eastern Region', 
    'Northern Region',
    'Western Region',
    'Kampala (Capital)'
  ];

  return (
    <select
      value={value}
      onChange={onChange}
      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
    >
      <option value="">{placeholder}</option>
      {locations.map((location) => (
        <option key={location} value={location}>
          {location}
        </option>
      ))}
    </select>
  );
};

export default SelectField;