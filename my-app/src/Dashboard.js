import React, { useMemo } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
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

// Reusable Sidebar Component
const Sidebar = ({ activeItem, onMenuItemClick }) => {
  const history = useHistory();

  const handleNavigation = (item) => {
    onMenuItemClick(item);
    history.push(`/${item.toLowerCase()}`);
  };

  return (
    <div className="sidebar">
      <h2>Analytics Dashboard</h2>
      <ul>
        {['Dashboard', 'Reports', 'Users', 'Messages', 'Settings', 'Logout'].map((item, index) => (
          <li
            key={index}
            className={activeItem === item ? 'active' : ''}
            onClick={() => handleNavigation(item)}
          >
            {item}
            {item === 'Messages' && <span className="badge">25</span>}
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
    {/* Add your reports content here */}
  </div>
);

const UsersPage = () => (
  <div className="content">
    <h3>Users Page</h3>
    {/* Add your users content here */}
  </div>
);

const MessagesPage = () => (
  <div className="content">
    <h3>Messages Page</h3>
    {/* Add your messages content here */}
  </div>
);

const SettingsPage = () => (
  <div className="content">
    <h3>Settings Page</h3>
    {/* Add your settings content here */}
  </div>
);

const LogoutPage = () => (
  <div className="content">
    <h3>Logging out...</h3>
    {/* Implement logout logic here */}
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
          <Switch>
            <Route path="/dashboard">
              <DashboardPage siteTrafficData={siteTrafficData} extraInfoData={extraInfoData} />
            </Route>
            <Route path="/reports" component={ReportsPage} />
            <Route path="/users" component={UsersPage} />
            <Route path="/messages" component={MessagesPage} />
            <Route path="/settings" component={SettingsPage} />
            <Route path="/logout" component={LogoutPage} />
            <Route path="/" exact>
              <DashboardPage siteTrafficData={siteTrafficData} extraInfoData={extraInfoData} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Dashboard;
