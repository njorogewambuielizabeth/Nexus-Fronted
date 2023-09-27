'use client'
import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const Meter = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Number of Customers',
        backgroundColor: '#2B39BD',
        borderColor: '#2B39BD',
        borderWidth: 1,
        data: [100, 20, 30, 10, 50, 60, 70, 40, 70, 100, 50, 12],
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Months',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Monthly Customer Retention',
        },
      },
    },
  };

  const customers = [
    { name: ' Njiru Maina', meterNumber: '12345', status: 'Inactive' },
    { name: 'Mary Njiru Maina', meterNumber: '12345', status: 'Inactive' },
    { name: 'Juliet Njiru Maina', meterNumber: '12345', status: 'Inactive' },
    { name: 'Maureen Njiru Maina', meterNumber: '12345', status: 'Inactive' },
    { name: 'Joan Njiru Maina', meterNumber: '12345', status: 'Inactive' },
    { name: 'Joan Njiru Maina', meterNumber: '12345', status: 'Inactive' },
    { name: 'Joan Njiru Maina', meterNumber: '12345', status: 'Inactive' },
    { name: 'Joan Njiru Maina', meterNumber: '12345', status: 'Inactive' },
    { name: 'Joan Njiru Maina', meterNumber: '12345', status: 'Inactive' },
    { name: 'Juliet Njiru Maina', meterNumber: '12345', status: 'Inactive' },
    { name: 'Maureen Njiru Maina', meterNumber: '12345', status: 'Inactive' },
    { name: 'Joan Njiru Maina', meterNumber: '12345', status: 'Inactive' },
    { name: 'Joan Njiru Maina', meterNumber: '12345', status: 'Inactive' },
    { name: 'Joan Njiru Maina', meterNumber: '12345', status: 'Inactive' },
    { name: 'Joan Njiru Maina', meterNumber: '12345', status: 'Inactive' },
    { name: 'Joan Njiru Maina', meterNumber: '12345', status: 'Inactive' }
    
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedCustomers = customers.slice(startIndex, endIndex);

  const totalPages = Math.ceil(customers.length / itemsPerPage);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div>
      <div className="py-4 ml-[25%]  " >
        <div className="container mx-auto  space-x-[14px] flex flex-wrap justify-center" >
          <div className="w-64 bg-blue-700 shadow-lg  rounded-lg m-2 p-6 text-center relative">
            <h3 className="text-2xl text-white">Customers</h3>
            <p className="text-2xl f text-white mt-2">2500</p>
          </div>
          <div className="w-64 bg-blue-700  shadow-lg rounded-lg m-2 p-6 text-center relative">
            <h3 className="text-2xl  text-white">Meters</h3>
            <p className="text-3xl  text-white mt-2">30</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-[90%] mx-auto ml-[20%]">
        <h2 className="text-xl font-bold mb-4 mt-3"></h2>
        <Bar data={data} options={options} />
      </div>

      <div className="details-section ml-80 " >
        <h2 className="text-3xl font-bold mb-0 py-2" ></h2>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left -pl-40 py-3">Customer</th>
              <th className="text-left pl-60 py-3 pl-30"><p >Meter Number</p></th>
              <th className="text py-3 pl-80">Status</th>
            </tr>
          </thead>
          <tbody>
            {displayedCustomers.map((customer, index) => (
              <tr key={index}>
                <td className="py-2pl-40 ">{customer.name}</td>
                <td className="py-2 pl-60">{customer.meterNumber}</td>
                <td className="py-2 pl-80 flex items-center">
                  <div
                    className={`w-4 h-4 rounded-full ${customer.status === 'Inactive' ? 'bg-red-600' : 'bg-green-500'}`}
                  ></div>
                  <span className="ml-4">
                    {customer.status === 'Inactive' ? 'Inactive' : 'Active'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination-controls mt-5 flex justify-end space-x-4 mr-10 mb-1">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className={`text-md font-bold px-2 rounded-lg  ${
            currentPage === 1
              ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600 hover:text-white'
          }`}
        >
          Previous
        </button>
        <span className="pagination-info">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className={`text-md font-bold px-2 rounded-lg   ${
            currentPage === totalPages
              ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600 hover:text-white'
          }`}
        >
          Next
        </button>
      </div>
    </div>
    </div>
  );
};

export default Meter;
