import React from 'react';
import { StyleSelect } from './DropDown.styled';

const DropDown = ({ options, filter, onFilterChange }) => {
  const handleChange = event => {
    onFilterChange(event.target.value);
  };
  return (
    <div>
      <StyleSelect value={filter} onChange={handleChange}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyleSelect>
    </div>
  );
};

export default DropDown;
