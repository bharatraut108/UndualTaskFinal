// src/components/Search.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../redux/productSlice';
import { debounce } from 'lodash'; // Optional for debouncing

const Search = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleSearchChange = debounce((event) => {
    setInputValue(event.target.value);
    dispatch(setSearchQuery(event.target.value));
  }, 300); // Adjust the delay as needed

  return (
    <div className="mb-4">
      <input
        type="text"
        value={inputValue}
        placeholder="Search products..."
        onChange={handleSearchChange}
        className="border rounded-md p-2 w-full md:w-1/3 lg:w-1/4 shadow-sm focus:outline-none focus:ring focus:ring-blue-300 transition duration-200"
      />
    </div>
  );
};

export default Search;
