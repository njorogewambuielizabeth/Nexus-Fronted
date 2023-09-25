"use client"
import React from 'react';

const DetailsSection = () => {
  
  const customers = [
    { name: 'Peter Maina', meterNumber: '12345', status: 'low' },
    { name: 'Peris Nduta', meterNumber: '67890', status: 'stable' },
    { name: 'Alice Moraa', meterNumber: '54321', status: 'low' },
    { name: 'Mary Apiu', meterNumber: '98765', status: 'stable' },
    { name: 'Annet Wambui', meterNumber: '24680', status: 'low' },
  ];

  return (
    <div className="details-section ml-80  " style={{marginTop:"9%"}}>
      <h2 className="text-3xl font-bold mb-4">Details</h2>
      <table className="min-w-full m-9">
        <thead>
          <tr>
            <th className="text-left">Customer</th>
            <th className="text-left">Meter Number</th>
            <th className="text-left">Status</th>
            <th className="text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <td className="py-2">{customer.name}</td>
              <td className="py-2">{customer.meterNumber}</td>
              <td className="py-2 flex items-center"> 
                <div
                  className={`w-4 h-4 rounded-full ${customer.status === 'low' ? 'bg-red-600' : 'bg-green-500'}`}
                ></div>
                <span className="ml-2"> 
                  {customer.status === 'low' ? 'Low' : 'Stable'}
                </span>
              </td>
              <td className="py-2">
                <button className="px-3 py-1 bg-red-600 text-white rounded-md mr-2">Alert</button>
                <button className="px-3 py-1 bg-blue-700 text-white rounded-md">Decline</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DetailsSection;
