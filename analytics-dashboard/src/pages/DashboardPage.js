import React from 'react';
import SiteTrafficChart from '../components/SiteTrafficChart';
import ExtraInfoChart from '../components/ExtraInfoChart';
import './DashboardPage.css';

const DashboardPage = () => {
  return (
    <div className="dashboard-page">
      <h1>Dashboard Overview</h1>
      <div className="dashboard-stats">
        <div className="stat-box">
          <h2>Average Availability</h2>
          <p>99.97%</p>
        </div>
        <div className="stat-box">
          <h2>Average Request Time</h2>
          <p>200ms</p>
        </div>
        <div className="stat-box">
          <h2>Number of Outages</h2>
          <p>2</p>
        </div>
      </div>
      <div className="charts-container">
        <div className="chart-box">
          <SiteTrafficChart />
        </div>
        <div className="chart-box">
          <ExtraInfoChart />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

