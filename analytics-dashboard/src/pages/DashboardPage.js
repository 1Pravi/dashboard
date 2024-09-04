import React, { useMemo } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
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

// Reusable Sidebar Component
const Sidebar = ({ activeItem, onMenuItemClick }) => {
  const navigate = useNavigate();
  const menuItems = [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Reports', path: '/reports' },
    { label: 'Users', path: '/users' },
    { label: 'Messages', path: '/messages', badge: 25 },
    { label: 'Settings', path: '/settings' },
    { label: 'Logout', path: '/logout' },
  ];

  const handleNavigation = (item) => {
    onMenuItemClick(item.label);
    navigate(item.path);
  };

  return (
    <div className="sidebar">
      <h2>Analytics Dashboard</h2>
      <ul>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={activeItem === item.label ? 'active' : ''}
            onClick={() => handleNavigation(item)}
          >
            {item.label}
            {item.badge && <span className="badge">{item.badge}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Reusable Chart Components
const SiteTrafficChart = ({ data }) => <Line data={data} />;
const ExtraInfoChart = ({ data }) => <Bar data={data} />;

// Individual Pages
const DashboardPage = ({ siteTrafficData, extraInfoData }) => (
  <div className="content">
    <div className="site-traffic">
      <h3>Site Traffic</h3>
      <SiteTrafficChart data={siteTrafficData} />
    </div>
    <div className="extra-info">
      <div className="extra-info-box">
        <h4>Extra Info</h4>
        <p>75% REGISTRATION</p>
        <ExtraInfoChart data={extraInfoData} />
      </div>
      <div className="extra-info-box">
        <h4>Extra Info-2</h4>
        <SiteTrafficChart data={siteTrafficData} />
      </div>
    </div>
  </div>
);

const ReportsPage = () => (
  <div className="content">
    <h3>Reports Page</h3>
  </div>
);

const UsersPage = () => (
  <div className="content">
    <h3>Users Page</h3>
  </div>
);

const MessagesPage = () => (
  <div className="content">
    <h3>Messages Page</h3>
  </div>
);

const SettingsPage = () => (
  <div className="content">
    <h3>Settings Page</h3>
  </div>
);

const LogoutPage = () => (
  <div className="content">
    <h3>Logging out...</h3>
  </div>
);

const Dashboard = () => {
  const [activeItem, setActiveItem] = React.useState('Dashboard');

  const siteTrafficData = useMemo(() => ({
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
  }), []);

  const extraInfoData = useMemo(() => ({
    labels: ['A', 'B', 'C'],
    datasets: [
      {
        label: 'Performance',
        data: [65, 59, 80],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        borderWidth: 1,
      },
    ],
  }), []);

  return (
    <Router>
      <div className="dashboard">
        <Sidebar activeItem={activeItem} onMenuItemClick={setActiveItem} />
        <div className="main-content">
          <div className="header">
            <h2>Welcome, vinomassdon_k</h2>
          </div>
          <Routes>
            <Route path="/dashboard" element={<DashboardPage siteTrafficData={siteTrafficData} extraInfoData={extraInfoData} />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/logout" element={<LogoutPage />} />
            <Route path="/" element={<DashboardPage siteTrafficData={siteTrafficData} extraInfoData={extraInfoData} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Dashboard;
