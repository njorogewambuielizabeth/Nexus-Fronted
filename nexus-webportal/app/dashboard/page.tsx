"use client"
import React from 'react';
import ChartComponent from '../powerGraph';
import DetailsSection from '../details';


const SectionWithCards = () => {
  return (
    
    <div className="py-1 ">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-bold text-black mb-2 mt-[2%] ml-[-61%]">Overview</h2>
        <div className="flex flex-wrap justify-center mt-[-7.5%] ml-[250px]">
          <div className="w-54 bg-blue-700 shadow-lg rounded-lg m-20 ml-6 p-6 text-center relative">
            <h3 className="text-2xl font-semibold text-white">Power Consumption</h3>
            <p className="text-3xl font-bold text-white mt-1">250 kW</p>
          </div>
          <div className="w-64 bg-blue-700 shadow-lg rounded-lg m-20 ml-9 p-6 text-center relative">
            <h3 className="text-2xl font-semibold text-white">Meters</h3>
            <p className="text-3xl font-bold text-white mt-1">30 kW</p>
          </div>
        </div>
      </div>
      {/*  */}
      <div>
        <ChartComponent/>
      </div>
      <div>
        <DetailsSection/>
      </div>
    </div>
  );
};

export default SectionWithCards;
