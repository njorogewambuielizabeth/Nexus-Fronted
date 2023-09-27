'use client'
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import CustomerData from './table-data.json'
// import { BiCaretDown } from 'react-icons/bi';

const CustomersList = () => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const handleFilterChange = (selectedFilter: React.SetStateAction<string>) => {
    setFilter(selectedFilter);
  };

  const filteredData = CustomerData.filter((item) => {
    const matchesSearch = item.Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.CompanyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.Location.toLowerCase().includes(searchQuery.toLowerCase());
    if (filter === 'active' && item.Status.toLowerCase() === 'active') {
      return matchesSearch;
    }
    if (filter === 'inactive' && item.Status.toLowerCase() === 'inactive') {
      return matchesSearch;
    }
    if (filter === 'all') {
      return matchesSearch;
    }
    return false;
  });

  return (
    <div className="flex h-screen -mt-90">
      <div className="flex- p-4 overflow-y-auto bg-white text-black">
        <div className="">
          <div className="relative">
            <input
              type="search"
              placeholder="Search..."
              className="border border-gray-300 rounded-full p-2 text-black bg-gray-100 pl-10 pr-6 w-3/5 mx-60"
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
            />
            <FaSearch className="w-6 h-6 text-blue-600 absolute left-3 top-1/2 transform -translate-y-1/2 mx-60" />
          </div>
          <h1 className="text-3xl font-bold my-2 px-4">Customers</h1>
          <h1 className="text-2xl font-semibold text-blue-600 my-4 px-4">
            {`${filter === 'active' ? 'Active' : filter === 'inactive' ? 'Inactive' : 'ALL'}(${filteredData.length})`}
          </h1>
          <div className="mb-4 px-4">
            <div className="relative inline-flex">
              <select
                className="border border-black px-4 py-2 bg-white"
                onChange={(e) => handleFilterChange(e.target.value)}
                value={filter}
              >
                <option value="all">All</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <table className="table-auto w-[1200px] border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Company Name</th>
                <th className="px-4 py-2 text-left">Meter Number</th>
                <th className="px-4 py-2 text-left">Location</th>
                <th className="px-4 py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr key={index} className={item.Name.toLowerCase().includes('customer') ? 'bg-blue-600 text-white' : ''}>
                  <td className="px-4 py-2 text-left text-gray-700">{item.Name}</td>
                  <td className="px-4 py-2 text-left text-gray-700">{item.CompanyName}</td>
                  <td className="px-4 py-2 text-left text-gray-700">{item.MeterNumber}</td>
                  <td className="px-4 py-2 text-left text-gray-700">{item.Location}</td>
                  <td className="px-4 py-2 text-left">
                    <span
                      className={`w-4 h-4 rounded-full inline-block mr-2 ${
                        item.Status === 'active' ? 'bg-green-500' : 'bg-red-500'
                      } border-black`}
                    ></span>
                    <span className={item.Status === 'active' ? 'text-green-500' : 'text-red-500'}>
                      {item.Status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomersList;
