"use client"
import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const ChartComponent = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Customer Retention',
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
          text: 'Number of customers',
        },
      },
    },
  };
  const container = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '450px',
   
  };

  
  const titleStyles = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginTop: '20px',
  };

  return (
    
    <div style={container} >
      <h2 style={titleStyles}>Monthly Customer Retention</h2>
      <Bar  data={data} options={options} />
    </div>
          
  );
};
export default ChartComponent;