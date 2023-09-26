"use client"
import React, { useState,useEffect } from 'react';
import { FaHome, FaUsers,FaSignOutAlt, FaFilter } from 'react-icons/fa';
import CustomersList from '../../customers/page';
import Link from 'next/link';
import { stringify } from 'querystring';


const Dashboard = () => {
  const [activeItem, setActiveItem] = useState<string | null>('customers'); // Initialize with 'customers'

  const handleItemClick = (item: string | null) => {
    setActiveItem(item as string | null);
  };
  return (
    <div className="h-screen flex-col lg:flex-row bg-white">
      <div className="w-64 h-full bg-blue-700 text-white p-8 transform lg:transform-none lg:translate-x-0 transition-transform duration-300 ease-in-out">
        <div className="flex justify-between items-center mb-10">
          <img src="images/logo.png" alt="Logo" className="w-35 my-2" />
        </div>
        <hr className="my-10" />
        <div className="space-y-10">
          <div
            className={`menu-item flex items-center space-x-6 p-2 rounded-lg  ${
              activeItem === 'dashboard' ? 'bg-blue-600 text-blue-100' : 'hover:bg-blue-600 hover:text-blue-100'
            }`}
            onClick={() => handleItemClick('dashboard')}
          >
            <div
              className={`w-8 h-6 text-blue mt-1 flex items-center justify-center ${
                activeItem === 'dashboard' ? 'bg-blue-600 rounded-md' : ''
              }`}
            >
              <FaHome
                className={`w-6 h-6 ${
                  activeItem === 'dashboard' ? 'text-blue' : 'text-blue'
                } hover:text-blue-100`}
              />
            </div>
            <Link href="/dashboard">
              <span className="font-bold text-lg">Dashboard</span>
            </Link>
          </div>

          <div
            className={`menu-item flex items-center space-x-6 p-2 rounded-lg mb-8 ${
              activeItem === 'customers' ? 'bg-blue-600 text-white' : 'hover:bg-blue-600 hover:text-blue-100'
            }`}
            onClick={() => handleItemClick('customers')}
          >
            <div
              className={`w-8 h-8 text-blue mt-1 flex items-center justify-center ${
                activeItem === 'customers' ? 'bg-blue-600 rounded-md' : 'rounded-md'
              }`}>
              <FaUsers
                className={`w-6 h-6 ${
                  activeItem === 'customers' ? 'text-white' : 'text-blue'
                } hover:text-blue-100`}
              />
            </div>
            <Link href="/customers">
              <span className="font-bold text-lg">Customers</span>
            </Link>
          </div>
          <div
            className={`menu-item flex items-center space-x-6 p-2 rounded-lg  ${
              activeItem === 'meter' ? 'bg-blue-600 text-white' : 'hover:bg-blue-600 hover:text-blue-100'
            }`}
            onClick={() => handleItemClick('meter')}
          >
            <div
              className={`w-8 h-5 text-blue mt-1 flex items-center justify-center ${
                activeItem === 'meter' ? 'bg-blue-600 rounded-md' : 'rounded-md'
              }`}
            >
              <FaFilter
                className={`w-8 h-5 ${
                  activeItem === 'meter' ? 'text-white' : 'text-blue'
                } hover:text-blue-100`}
              />
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
              activeItem === 'logout' ? 'bg-blue-600 text-white' : 'hover:bg-blue-600 hover:text-blue-100'
            }`}
            onClick={() => handleItemClick('logout')}
          >
            <div
              className={`w-8 h-5 text-blue mt-1 flex items-center justify-center ${
                activeItem === 'logout' ? 'bg-blue-600 rounded-md' : 'rounded-md'
              }`}
            >
              <FaSignOutAlt
                className={`w-8 h-5 ${
                  activeItem === 'logout' ? 'text-white' : 'text-blue'
                } hover:text-blue-100`}
              />
            </div>
            <span className="font-bold text-lg">Logout</span>
          </div>
          <div className="mb-4"></div>
          <div className="mt-2 text-lg opacity-70">@2023, Nexus All rights reserved</div>
        </div>
      </div>
      <div className="flex-grow bg-white">
        <div>
          {/* <CustomersList /> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;