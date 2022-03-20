import React from 'react';

import "./SearchBox.css"

function SearchBox({ className, onChangeHandler }) {
  return (
    <input
      className={`search-box ${className}`}
      type='search'
      placeholder='Search a monster'
      onChange={onChangeHandler}
    />
  );
}

export default SearchBox;
