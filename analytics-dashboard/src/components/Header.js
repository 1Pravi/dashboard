// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <input type="text" placeholder="Ask a question about the data on this dashboard" />
      <div className="metrics">
        <div className="metric">
          <h3>Average Availability</h3>
          <p>99.97%</p>
        </div>
        <div className="metric">
          <h3>Average Request Time</h3>
          <p>1.234 ms</p>
        </div>
        <div className="metric">
          <h3>Number of Outages</h3>
          <p>1.234</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
