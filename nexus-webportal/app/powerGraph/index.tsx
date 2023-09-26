"use client"
import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const ChartComponent = () => {
  const chartWidth = '850px'; 
  const chartHeight = '0px'; 

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Power Consumption (kW/h)',
        backgroundColor: '#2B39BD',
        borderColor: '#2B39BD',
        borderWidth: 1,
        data: [100, 20, 30, 10, 50, 60, 70, 40, 70, 100, 50, 12],
        classname:"text-1xl ml-10"
        
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
     
    },
   
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
          text: 'Power Consumption (kW/h)',
        },
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center mt-[-5%] mr-[-6%]">
      <h2 className="text-1xl font-bold mb-4">Monthly Power Consumption</h2>
      <div style={{ width: chartWidth, height: chartHeight }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default ChartComponent;
