import React from 'react';
import { FaHome, FaUsers, FaCog, FaSignOutAlt, FaSearch, FaFilter, FaUser } from 'react-icons/fa';

const Dashboard = () => {
 
  return (
    <div className="flex h-screen bg-white">
   
      <div className="w-64 bg-blue-700 text-white p-4">
       
        <div className="flex justify-between items-center">
          <img src="images/Group 19.png" alt="Logo" className="w-32 my-4" />
          <div className="text-3xl cursor-pointer rounded border border-black text-white w-8 h-8 flex items-center justify-center">X</div>
        </div>
        <hr className="my-2" />
        <br></br>

        <div className="space-y-4">
          <div className="flex items-center space-x-2 hover:bg-white hover:text-blue-600">
            <FaHome className="w-6 h-6" />
            <span className="font-bold text-lg">Dashboard</span>
          </div>
          <br></br>
          
          
       
          <div className="flex items-center space-x-2 hover:bg-white hover:text-blue-600">
            <FaUsers className="w-6 h-6" />
            <span className="text-lg">Customers</span>
          </div>
          <br></br>
        
          <div className="flex items-center space-x-2 hover:bg-white hover:text-blue-600">
            <FaFilter className="w-6 h-6" />
            <span className="text-lg">Meter</span>
          </div>
        </div>
        <br></br>
      
        <div className="flex flex-col justify-end flex-grow mt-auto">
          <hr className="my-4" />

          <div className="flex items-center space-x-2 hover:bg-white hover:text-blue-600">
            <FaCog className="w-6 h-6" />
            <span className="text-lg">Settings</span>
          </div>
          <br></br>
          <br></br>
          <div className="flex items-center space-x-2 hover:bg-white hover:text-blue-600">
            <FaSignOutAlt className="w-6 h-6" />
            <span className="text-lg">Logout</span>
          </div>
          <br></br>
          <div className="mt-4 text-lg opacity-70">@2023, Nexus <br/> All rights reserved</div>
        </div>
      </div>
      
     
      
    </div>
  );
};

export default Dashboard;