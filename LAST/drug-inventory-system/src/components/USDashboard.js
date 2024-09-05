import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const USDashboard = () => {
  return (
    <div className="dashboard">
      <h1>US Drug Inventory System Dashboard</h1>

      <div className="button-grid">
        <Link to="/DashboardOverview.js">
          <button>Dashboard Overview</button>
        </Link>

        <Link to="/DeliveryPerformance.js">
          <button>Delivery Performance</button>
        </Link>

        <Link to="/HistoricalTrends.js">
          <button>Historical Trends</button>
        </Link>

        <Link to="/ShipmentTracking.js">
          <button>Shipment Tracking</button>
        </Link>

      </div>
    </div>
  );
};

export default USDashboard;
