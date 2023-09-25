"use client"
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  const handleSearch = () => {
    // Call the onSearch function with the current search query
    onSearch(searchQuery);
  };

  return (
    <div className="relative mt-[-52.3%] ml-[32%]"> 
      <input
        type="search"
        placeholder="Search..."
        className="border border-black rounded-full p-2 pl-10 pr-6 w-2/4"
        onChange={handleInputChange}
        value={searchQuery}
      />
      <FaSearch
        className="w-4 h-4 text-gray-500 absolute left-3 top-2"
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
