import React from 'react';
import { StyleSelect } from './DropDown.styled';

const DropDown = ({ filter, onFilterChange }) => {
  const handleChange = event => {
    onFilterChange(event.target.value);
  };
  return (
    <div>
      <StyleSelect value={filter} onChange={handleChange}>
        <option value="all">Show all</option>
        <option value="follow">Follow</option>
        <option value="following">Following</option>
      </StyleSelect>
    </div>
  );
};

export default DropDown;
