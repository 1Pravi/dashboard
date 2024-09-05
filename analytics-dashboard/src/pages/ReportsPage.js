import React from 'react';
import './Reports.css';

const ReportsPage = () => {
  return (
    <div className="reports-page">
      <h1>Reports</h1>
      <div className="report-section">
        <h2>Monthly Report</h2>
        <p>Generate and download the monthly report of your website's performance.</p>
        <button className="report-btn">Generate Report</button>
      </div>
      <div className="report-section">
        <h2>Yearly Report</h2>
        <p>Generate and download the yearly report of your website's performance.</p>
        <button className="report-btn">Generate Report</button>
      </div>
    </div>
  );
};

export default ReportsPage;

// Reports.css
