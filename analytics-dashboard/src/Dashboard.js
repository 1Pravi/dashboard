import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './Dashboard.css';

// Register the components with Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const siteTrafficData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'New Users',
        data: [400, 450, 300, 500, 700, 600, 750, 550, 500, 620, 720, 800],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        tension: 0.4,
      },
      {
        label: 'Registered Users',
        data: [300, 500, 400, 600, 500, 700, 550, 600, 700, 620, 700, 750],
        fill: true,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.4,
      },
    ],
  };

  const extraInfoData = {
    labels: ['A', 'B', 'C'],
    datasets: [
      {
        label: 'Performance',
        data: [65, 59, 80],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2>Analytics Dashboard</h2>
        <ul>
          <li>Dashboard</li>
          <li>Reports</li>
          <li>Users</li>
          <li>Messages <span className="badge">25</span></li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </div>
      <div className="main-content">
        <div className="header">
          <h2>Welcome, vinomassdon_k</h2>
        </div>
        <div className="content">
          <div className="site-traffic">
            <h3>Site Traffic</h3>
            <Line data={siteTrafficData} />
          </div>
          <div className="extra-info">
            <div className="extra-info-box">
              <h4>Extra Info</h4>
              <p>75% REGISTRATION</p>
              <Bar data={extraInfoData} />
            </div>
            <div className="extra-info-box">
              <h4>Extra Info-2</h4>
              <Line data={siteTrafficData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
