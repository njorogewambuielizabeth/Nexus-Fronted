"use client"
import React from 'react';

const Cards = () => {
  return (
    <div className="py-10" style={{ marginTop: '-1%' }}>
      <div className="container mx-auto flex flex-wrap justify-center" style={{ top: '-90%' }}>
        <div className="w-64 bg-blue-700 shadow-lg rounded-lg m-4 p-5 text-center relative" >
          <h3 className="text-2xl font-semibold text-white">Customers</h3>
          <p className="text-3xl font-bold text-white mt-4">25000</p>
        </div>
        <div className="w-64 bg-blue-700 shadow-lg rounded-lg m-4 p-5 text-center relative" >
          <h3 className="text-2xl font-semibold text-white">Requests</h3>
          <p className="text-3xl font-bold text-white mt-4">30</p>
        </div>
      </div>
    </div>
  );
};
export default Cards;