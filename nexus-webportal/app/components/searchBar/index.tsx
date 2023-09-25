'use client'
import React, { useState, ChangeEvent } from 'react';
import { FaSearch } from 'react-icons/fa';

interface SearchBar {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBar> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  const handleSearch = () => {
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
        className="w-4 h-4 text-gray-500 absolute left-3 top-2 cursor-pointer"
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
