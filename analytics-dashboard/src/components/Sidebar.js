import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';  // Import the specific CSS file for this component

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

export default Sidebar;
