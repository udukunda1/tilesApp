// Dashboard.js
import React from 'react';
import Layout from './Layout';
import { Search, Plus } from 'lucide-react';
import projectImg from '../assets/images/projects.svg';
import usersImg from '../assets/images/users.svg';
import statusImg from '../assets/images/orderstatus.svg';
import filesImg from '../assets/images/filesicon.svg';
import tilesImg from '../assets/images/tile.svg';
import progressImg from '../assets/images/progresstracker.svg';
import { useNavigate } from 'react-router-dom';

const DashboardCard = ({ icon, value, label }) => (
  <div className="bg-gray-200 rounded-lg p-6 flex items-center">
    <div className="mr-6">{icon}</div>
    <div>
      {value && <div className="text-5xl font-black">{value}</div>}
      <div className="text-lg">{label}</div>
    </div>
  </div>
);

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <div className="relative w-96">
          <input
            type="text"
            placeholder="Search here"
            className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-full focus:outline-none"
          />
          <div className="absolute right-3 top-2.5">
            <Search size={20} className="text-gray-400" />
          </div>
        </div>
        <div className="text-lg font-medium">Admin</div>
      </div>

      <div className="p-6">
        {/* Row 1 */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <DashboardCard
            icon={<img src={projectImg} alt="Projects" className="w-16 h-16" />}
            value="12"
            label="total projects"
          />
          <DashboardCard
            icon={<img src={usersImg} alt="Users" className="w-16 h-16" />}
            value="40"
            label="total users"
          />
          <DashboardCard
            icon={<img src={statusImg} alt="Status" className="w-16 h-16" />}
            label="order status"
          />
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <DashboardCard
            icon={<img src={filesImg} alt="Files" className="w-16 h-16" />}
            label="project files"
          />
          <DashboardCard
            icon={<img src={tilesImg} alt="Tile" className="w-16 h-16" />}
            label="tile estimator"
          />
          <DashboardCard
            icon={<img src={progressImg} alt="Progress" className="w-16 h-16" />}
            label="project progress tracker"
          />
        </div>

        {/* CTA Button */}
        <div className="flex justify-end mt-16">
          <button onClick={() => navigate('/new-project')} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md flex items-center">
            <Plus size={24} className="mr-2" /> Create New Project
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
