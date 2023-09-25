"use client"
import React from 'react';

const SectionWithCards = () => {
  return (
    <div className="py-10" style={{ marginTop: '-51%' }}>
      <div className="container mx-auto flex flex-wrap justify-center" style={{ top: '-90%' }}>
      
        <div className="w-54 bg-blue-700 shadow-lg rounded-lg m-4 p-6 text-center relative" >
          <h3 className="text-2xl font-semibold text-white">Power Consumption</h3>
          <p className="text-3xl font-bold text-white mt-4">250 kW</p>
        </div>

       
        <div className="w-64 bg-blue-700 shadow-lg rounded-lg m-4 p-6 text-center relative" >
          <h3 className="text-2xl font-semibold text-white">Meters</h3>
          <p className="text-3xl font-bold text-white mt-4">30</p>
        </div>
      </div>
    </div>
  );
};

export default SectionWithCards;
