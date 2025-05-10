// User.js
import React from 'react';
import Layout from './Layout';
import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const users = [
  { name: 'Pascal Gasasira', email: 'pascal@gmail.com', location: 'Kigali', role: 'Admin' },
  { name: 'Cyrille Kwezi', email: 'kwezi@gmail.com', location: 'Kigali', role: 'house owner' },
  { name: 'Eric Henry', email: 'eric@gmail.com', location: 'Kigali', role: 'tile supplier' },
  { name: 'Aime Bonna', email: 'aime@gmail.com', location: 'Rubavu', role: 'engineer' },
  { name: 'Rachel Ineza', email: 'rachel@gmail.com', location: 'Kigali', role: 'engineer' },
  { name: 'Nzola Uemo', email: 'nzola@gmail.com', location: 'Rubavu', role: 'house owner' },
  { name: 'Antony Mack', email: 'mack@gmail.com', location: 'Huye', role: 'engineer' },
  { name: 'André Ituze', email: 'andré@gmail.com', location: 'Nyabihu', role: 'tile supplier' },
  { name: 'Jorge Karangwa', email: 'jorge@gmail.com', location: 'Karongi', role: 'engineer' },
];

const User = () => {
    const navigate = useNavigate();
  return (
    <Layout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="search user"
              className="border rounded-full pl-4 pr-10 py-2 text-sm outline-none"
            />
            <span className="absolute right-3 top-2.5 text-gray-400">🔍</span>
          </div>
          <button onClick={() => navigate('/add-user')} className="bg-blue-500 text-white px-4 py-2 rounded">Add New User</button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="text-gray-500 border-b">
              <tr>
                <th className="px-4 py-2 font-semibold">Full Name</th>
                <th className="px-4 py-2 font-semibold">Email Address</th>
                <th className="px-4 py-2 font-semibold">location</th>
                <th className="px-4 py-2 font-semibold">Role</th>
                <th className="px-4 py-2 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{user.name}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">{user.location}</td>
                  <td className="px-4 py-2">{user.role}</td>
                  <td className="px-4 py-2">
                    <div className="flex space-x-3 text-sm">
                      <FaEdit className="text-purple-600 cursor-pointer" />
                      <FaEye className="text-purple-600 cursor-pointer" />
                      <FaTrash className="text-red-500 cursor-pointer" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default User;
