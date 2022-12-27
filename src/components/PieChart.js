import * as React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const labelContent = props => {
  let formatedNumber = Number(props.dataItem.value)
  return `${props.dataItem.category} ${formatedNumber}`
}

export const data = {
 labels: ['Successful Launches', 'Postphone Launches', 'Failed Launches'],
 datasets: [
   {
     data: [25, 20, 8],

      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
   },
 ],
};

const PieChart = ( ) => {
 return (
    <div style={{ height: '800px', width: '1050px' }}>
      <Pie data={data} />
    </div>
 );
};

export default PieChart;