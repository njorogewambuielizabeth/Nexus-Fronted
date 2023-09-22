"use client"
import React, { useState } from 'react';
import { FaHome, FaUsers,FaSignOutAlt, FaFilter } from 'react-icons/fa';

const Dashboard = () => {
  
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (item:String) => {
    setActiveItem(item);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-white">
     
      <div
        className={`w-64 bg-blue-700 text-white p-8 transition-transform duration-300 ease-in-out transform ${
          menuVisible ? 'translate-x-0' : '-translate-x-56' 
        } lg:translate-x-0`}
      >
        <div className="flex justify-between items-center mb-10">
          <img src="images/logo.png" alt="Logo" className="w-35 my-2" />
          <button className="lg:hidden" onClick={toggleMenu}>
            <svg
              className={`w-6 h-6 cursor-pointer ${
                menuVisible ? 'text-white hover:text-blue-600' : 'text-white hover:text-blue-600'
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuVisible ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <hr className="my-10" />

        <div className="space-y-10">
          <div
            className={`menu-item flex items-center space-x-6 p-2 rounded-lg mb- ${
              activeItem === 'dashboard' ? 'bg-blue-600 text-blue' : 'hover:bg-white hover:text-blue-600'
            }`}
            onClick={() => handleItemClick('dashboard')}
          >
            <div
              className={`w-8 h-8 text-blue mt-1 flex items-center justify-center ${
                activeItem === 'dashboard' ? 'bg-blue rounded-md' : ''
              }`}
            >
              <FaHome className={`w-6 h-6 ${activeItem === 'dashboard' ? 'text-blue' : 'text-blue'} hover:text-blue-600 `} />
            </div>
            <span className="font-bold text-lg">Dashboard</span>
          </div>

          <div
            className={`menu-item flex items-center space-x-6 p-2 rounded-lg mb-8 ${
              activeItem === 'customers' ? 'bg-blue-600 text-white' : 'hover:bg-white hover:text-blue-600'
            }`}
            onClick={() => handleItemClick('customers')}
          >
            <div
              className={`w-8 h-8 text-blue mt-1 flex items-center justify-center ${
                activeItem === 'customers' ? ' rounded-md' : 'rounded-md'
              }`}
            >
              <FaUsers className={`w-6 h-6 ${activeItem === 'customers' ? 'text-blue' : 'text-blue'} hover:text-blue-600`} />
            </div>
            <span className="font-bold text-lg">Customers</span>
          </div>

          <div
            className={`menu-item flex items-center space-x-6 p-2 rounded-lg  ${
              activeItem === 'meter' ? 'bg-blue-600 text-white' : 'hover:bg-white hover:text-blue-600'
            }`}
            onClick={() => handleItemClick('meter')}
          >
            <div
              className={`w-8 h-8 text-blue mt-1 flex items-center justify-center ${
                activeItem === 'meter' ? 'bg-blue rounded-md' : ' rounded-md '
              }`}
            >
              <FaFilter className={`w-6 h-6 ${activeItem === 'meter' ? 'text-blue' : 'text-blue'} hover:text-blue-600`} />
            </div>
            <span className="font-bold text-lg ">Meter</span>
          </div>
        </div>

        <div className="mb-60"></div>

        <div className="flex flex-col justify-end flex-grow mt-4 mb-4">
          <hr className="my-10" />

          
          <div className="mb-4"></div>

          <div
            className={`menu-item flex items-center space-x-6 p-2 rounded-lg mb-4 ${
              activeItem === 'logout' ? 'bg-blue-600 text-white' : 'hover:bg-white hover:text-blue-600'
            }`}
            onClick={() => handleItemClick('logout')}
          >
            <div
              className={`w-8 h-8 text-blue mt-1 flex items-center justify-center ${
                activeItem === 'logout' ? ' rounded-md' : ' rounded-md '
              }`}
            >
              <FaSignOutAlt className={`w-6 h-6 ${activeItem === 'logout' ? 'text-blue' : 'text-blue'} hover:text-blue-600`} />
            </div>
            <span className="font-bold text-lg">Logout</span>
          </div>
          <div className="mb-4"></div>

          <div className="mt-4 text-lg opacity-70">@2023, Nexus All rights reserved</div>
        </div>
      </div>
     
      <div className="flex-grow bg-white">
        
      </div>
    </div>
  );
};

export default Dashboard;
