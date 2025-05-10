// ProjectDetails.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from './Layout';

const mockProject = {
  id: '1',
  owner: 'John Doe',
  province: 'Kigali',
  district: 'Gasabo',
  sector: 'Remera',
  cell: 'Kimironko',
  size: 250,
  planImage: '/plan-sample.png', // replace with actual path or blob
};

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Normally, we'd fetch this project from an API or state
  const project = mockProject;

  return (
    <Layout>
      <div className="p-6 max-w-4xl mx-auto bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-6">Project Details</h2>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="font-semibold">Project Owner:</p>
            <p>{project.owner}</p>
          </div>
          <div>
            <p className="font-semibold">Province:</p>
            <p>{project.province}</p>
          </div>
          <div>
            <p className="font-semibold">District:</p>
            <p>{project.district}</p>
          </div>
          <div>
            <p className="font-semibold">Sector:</p>
            <p>{project.sector}</p>
          </div>
          <div>
            <p className="font-semibold">Cell:</p>
            <p>{project.cell}</p>
          </div>
          <div>
            <p className="font-semibold">Size (sq meters):</p>
            <p>{project.size}</p>
          </div>
        </div>

        <div className="mb-6">
          <p className="font-semibold mb-2">Plan View:</p>
          {project.planImage ? (
            <img
              src={project.planImage}
              alt="Plan View"
              className="w-full h-auto border rounded"
            />
          ) : (
            <p className="text-gray-500">No plan uploaded.</p>
          )}
        </div>

        <div className="flex justify-between">
          <button
            onClick={() => navigate('/projects')}
            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            Back to Projects
          </button>
          <button
            onClick={() => navigate(`/new-project?filter=edit&id=${id}`)}
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
          >
            Edit Project
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetails;
