import React from 'react';
import { FaHome, FaUsers, FaCog, FaSignOutAlt, FaSearch, FaFilter, FaUser } from 'react-icons/fa';
import TableRow from '@/app/atoms/tableRows';

const Dashboard = () => {
  const tableData = [
    {
      location: 'Kisii County',
      meterNumber: '1234567890',
      customer: 'Peris Ndimu',
      dateInstalled: 'Nov 18, 2023',
      status: 'Active',
    },
  
  ];

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
      <br></br>
      <br></br>
     
      <div className="flex-1 p-4 overflow-y-auto bg-white text-black">
        <div className="flex items-center justify-between mb-4">
        
          <div className="relative w-1/2">
            <FaSearch className="w-6 h-6 text-blue-600 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input type="text" placeholder="Search..." className="border border-gray-300 rounded p-2 text-black bg-gray-100 pl-10 w-full" />
          </div>

        
          <div className="flex items-center space-x-2">
            <FaUser className="w-9 h-6 text-blue-600" />
          </div>
        </div>

       
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Location</th>
              <th className="px-4 py-2 text-left">Meter Number</th>
              <th className="px-4 py-2 text-left">Customer</th>
              <th className="px-4 py-2 text-left">Date Installed</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <TableRow
                key={index}
                location={item.location}
                meterNumber={item.meterNumber}
                customer={item.customer}
                dateInstalled={item.dateInstalled}
                status={item.status}
              />
            ))}
          </tbody>
        </table>

      
      </div>
    </div>
  );
};

export default Dashboard;
