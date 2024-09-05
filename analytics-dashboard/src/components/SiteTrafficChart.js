// src/components/SiteTrafficChart.js
import React, { useEffect, useRef } from 'react';
import { Chart, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register the required components
Chart.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const SiteTrafficChart = () => {
  const data = {
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
    datasets: [
      {
        label: 'Brand A',
        data: [30000, 50000, 40000, 60000, 80000, 70000, 90000, 110000, 100000, 120000, 130000, 140000],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Brand B',
        data: [20000, 30000, 50000, 70000, 60000, 90000, 110000, 100000, 120000, 130000, 140000, 150000],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      }
    ]
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return <Bar data={data} options={options} />;
};

export default SiteTrafficChart;
