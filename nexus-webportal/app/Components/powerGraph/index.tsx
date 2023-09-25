"use client"
import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';


const ChartComponent = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Power Consumption (kW/h)',
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
          text: 'Power Consumption (kW/h)',
        },
      },
    },
  };

  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
    justifyContent: 'center', 
    width: '45%',
    height: '20px',
    margin: '0 auto',
    marginTop: '9%',
  
  };

  const titleStyles = {
    fontSize: '1rem', 
    fontWeight: 'bold',
    marginTop: '1px', 
  };

  return (
    <div style={containerStyles}>
      <h2 style={titleStyles}>Monthly Power Consumption</h2>
      <Bar data={data} options={options} />
    </div>
  );
};



export default ChartComponent;
