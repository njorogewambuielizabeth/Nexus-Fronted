"use client"
import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import useGetMeter from '@/app/hooks/useGetMeter';
import useGetGraphData from '@/app/hooks/useGetMeterData';
import useGetNumberOfMeters from '@/app/hooks/useGetNumberOfMeters';


const Overview = () => {
  const { meters } = useGetMeter();
  const { graphData } = useGetGraphData();
  const { numberOfMeters } = useGetNumberOfMeters();

  const totalReadings = meters.reduce((accumulator, meter) => {
    return accumulator + parseFloat(meter.current_reading);
  }, 0);
  
  const chartWidth = '850px';
  const chartHeight = '0px';

  const dataValues = graphData.map((item) => item.value);

  const data = {
    labels: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ],
    datasets: [
      {
        label: 'Meter Readings in kW',
        backgroundColor: '#2B39BD',
        borderColor: '#2B39BD',
        borderWidth: 1,
        data: dataValues,
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
          text: 'Monthly Power Consumption'
        },
      },
    },
  };

  return (
    <div className="py-1">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-bold text-black mb-2 mt-[2%] ml-[-61%]">Overview</h2>
        <div className="flex flex-wrap justify-center mt-[-7.5%] ml-[250px]">
          <div className="w-64 bg-blue-700 shadow-lg rounded-lg m-20 ml-6 p-6 text-center relative">
            <h3 className="text-2xl font-semibold text-white">Overal Readings</h3>
            <p className="text-2xl f text-white mt-2">{totalReadings}</p>
          </div>
          <div className="w-64 bg-blue-700 shadow-lg rounded-lg m-20 ml-9 p-6 text-center relative">
            <h3 className="text-2xl font-semibold text-white">Meters</h3>
            <p className="text-3xl text-white mt-2">{numberOfMeters}</p>
          </div>
        </div>
      </div>
      {/*  */}
      <div>
        <div className="flex flex-col items-center justify-center mt-[-5%] mr-[-6%]">
          <h2 className="text-1xl font-bold mb-4">Monthly Power Consumption</h2>
          <div style={{ width: chartWidth, height: chartHeight }}>
            <Bar data={data} options={options} />
          </div>
        </div>
      </div>
      <div>
        <div className="details-section w-full mt-[44%] ml-[12%]">
          <h2 className="text-2xl font-bold mb-3 ">Details</h2>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left px-2 py-1">Current Reading</th>
                <th className="text-left px-2 py-1">Meter Serial Number</th>
                <th className="text-left px-2 py-1">Status</th>
               
              </tr>
            </thead>
            <tbody>
              {meters.slice(0, 4).map((meter, index) => (
                <tr key={index}>
                  <td className="py-2 px-4">{meters[index] ? meters[index].current_reading : ''}</td>
                  <td className="py-2 px-4">{meter.meter_serial_number}</td>
                  <td className="py-2 px-4 flex items-center">
                  <div
                    className={`w-4 h-4 rounded-full ${
                      meter.status === 'Inactive' ? 'bg-red-600' : 'bg-green-500'
                    }`}
                  ></div>
                     <span className="ml-4">
                    {meter.status === 'Inactive' ? 'Inactive' : 'Active'}
                  </span>
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Overview;
