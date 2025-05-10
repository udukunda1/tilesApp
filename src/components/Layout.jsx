// Layout.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, LogOut } from 'lucide-react';
import iconImg from '../assets/images/Icon.svg';
import permissionImg from '../assets/images/permission.svg';
import projectImg from '../assets/images/projects.svg';
import alertsImg from '../assets/images/alerts.svg';

const SidebarItem = ({ icon, label, active, onClick }) => (
  <div
    onClick={onClick}
    className={`flex items-center px-4 py-3 cursor-pointer ${
      active ? 'bg-blue-100 border-l-4 border-blue-500' : 'hover:bg-gray-100'
    }`}
  >
    <div className="mr-3">{icon}</div>
    <div className="text-gray-700">{label}</div>
  </div>
);

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => navigate('/');

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className="w-56 border-r border-gray-200">
        <div className="p-4 mb-4">
          <h1 className="text-xl font-bold">TileConstriction</h1>
        </div>
        <div className="flex flex-col space-y-1">
          <SidebarItem
            icon={<Home size={20} color="#3B82F6" />}
            label="Dashboard"
            active={location.pathname === '/dashboard'}
            onClick={() => navigate('/dashboard')}
          />
          <SidebarItem
            icon={<img src={projectImg} alt="Projects" className="w-5 h-5" />}
            label="Projects"
            active={location.pathname === '/projects' || location.pathname === '/new-project' || location.pathname.startsWith("/project-details")}
            onClick={() => navigate('/projects')}
          />
          <SidebarItem
            icon={<img src={iconImg} alt="User" className="w-5 h-5" />}
            label="User"
            active={location.pathname === '/users' || location.pathname === '/add-user'}
            onClick={() => navigate('/users')}
          />
          <SidebarItem
            icon={<img src={permissionImg} alt="Permissions" className="w-5 h-5" />}
            label="Permissions"
          />
          <SidebarItem
            icon={<img src={alertsImg} alt="Alerts" className="w-5 h-5" />}
            label="Alerts"
          />
        </div>
        <div className="absolute bottom-4 left-4">
          <SidebarItem icon={<LogOut size={20} />} label="Logout" onClick={logout} />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  );
};

export default Layout;
