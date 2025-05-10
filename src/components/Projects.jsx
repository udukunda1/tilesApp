// Projects.js
import React from 'react';
import Layout from './Layout';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { PiCirclesThreeLight } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';

const projectData = [
  {
    name: 'Bertin',
    date: '4th/3/2020',
    details: ['4 Bedrooms', '1 sitting room', '1 dining room', '25 sqmetres'],
    avatars: 3,
  },
  {
    name: 'Rachel',
    date: '13th/5/2010',
    details: ['5 Bedrooms', '1 sitting room', '1 dining room', '35 sqmetres'],
    avatars: 4,
  },
  {
    name: 'Bona',
    date: '18th/3/2024',
    details: ['8 Bedrooms', '3 sitting room', '2 dining room', '105 sqmetres'],
    avatars: 4,
  },
  {
    name: 'Desire',
    date: '4th/3/2020',
    details: ['4 Bedrooms', '1 sitting room', '1 dining room', '25 sqmetres'],
    avatars: 4,
  },
  {
    name: 'Bruno',
    date: '4th/3/2020',
    details: ['4 Bedrooms', '1 sitting room', '1 dining room', '25 sqmetres'],
    avatars: 4,
  },
];

const Projects = () => {
    const navigate = useNavigate();
  return (
    <Layout>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectData.map((project, index) => (
            <div onClick={() => navigate(`/project-details/${index}`)}
            key={index} className="bg-gray-100 cursor-pointer rounded-md shadow p-4 relative"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-800">{project.name}</span>
                <div className="flex items-center gap-2">
                  <FaEdit className="text-sm text-gray-600 cursor-pointer" />
                  <span className="text-sm text-gray-500">{project.date}</span>
                </div>
              </div>
              <div className="mb-4">
                {project.details.map((line, idx) => (
                  <p key={idx} className="text-sm text-gray-700">{line}</p>
                ))}
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex -space-x-2">
                  {[...Array(project.avatars - 1)].map((_, i) => (
                    <img
                      key={i}
                      src={`https://randomuser.me/api/portraits/men/${i + 10}.jpg`}
                      alt="avatar"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                  ))}
                  <div className="w-8 h-8 bg-pink-200 text-sm text-gray-700 rounded-full flex items-center justify-center border-2 border-white">
                    +2
                  </div>
                </div>
                <div className="flex gap-3">
                  <PiCirclesThreeLight className="text-purple-500 text-xl" />
                  <FaTrash className="text-red-500 text-md cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
