import React from 'react';

function Dropdown({ onOptionSelect }) {
  const handleChange = (event) => {
    onOptionSelect(event.target.value);
  };

  const dropdownStyle = {
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '5px 10px',
  };

  return (
    <select style={dropdownStyle} onChange={handleChange}>
      <option value="exceeds">Exceeds</option>
      <option value="equals">Equals To</option>
      <option value="lower than">Lower Than</option>
    </select>
  );
}

export default Dropdown;