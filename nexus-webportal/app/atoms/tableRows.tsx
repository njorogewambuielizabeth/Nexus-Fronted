import React from 'react';

const TableRow = ({ location, meterNumber, customer, dateInstalled, status }) => {
  return (
    <tr>
      <td className="px-4 py-2">{location}</td>
      <td className="px-4 py-2">{meterNumber}</td>
      <td className="px-4 py-2">{customer}</td>
      <td className="px-4 py-2">{dateInstalled}</td>
      <td className="px-4 py-2">{status}</td>
    </tr>
  );
};

export default TableRow;
