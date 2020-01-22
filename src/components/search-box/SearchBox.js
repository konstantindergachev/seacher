import React from 'react';
import './SearchBox.scss';

const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      type="search"
      className="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default SearchBox;
