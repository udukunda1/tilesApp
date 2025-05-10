// NewProject.js
import React, { useState } from 'react';
import Layout from './Layout';
import { useLocation, useNavigate } from 'react-router-dom';

const NewProject = () => {
  const [projectData, setProjectData] = useState({
    owner: '',
    province: '',
    district: '',
    sector: '',
    cell: '',
    size: '',
    planFile: null,
  });

  const navigate = useNavigate();
  const location = useLocation();
const queryParams = new URLSearchParams(location.search);

const filter = queryParams.get('filter'); // e.g., "active"
// const id = queryParams.get('id');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'planFile') {
      setProjectData({ ...projectData, planFile: files[0] });
    } else {
      setProjectData({ ...projectData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Project Created:', projectData);
    alert(`Project ${filter? 'edited': 'created'}!`);
    navigate('/projects')
  };

  return (
    <Layout>
      <div className="p-6 bg-gray-200 min-h-screen">
        <div className="bg-white p-6 rounded shadow-md max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">{filter? "Edit Project" : "New Project"}</h2>
          <h3 className="text-lg font-semibold mb-4">Project Information</h3>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-medium">Project Owner</label>
                <input
                  type="text"
                  name="owner"
                  value={projectData.owner}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2 mt-1"
                  required
                />
              </div>
              <div>
                <label className="block font-medium">Province</label>
                <input
                  type="text"
                  name="province"
                  value={projectData.province}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2 mt-1"
                />
              </div>
              <div>
                <label className="block font-medium">District</label>
                <input
                  type="text"
                  name="district"
                  value={projectData.district}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2 mt-1"
                />
              </div>
              <div>
                <label className="block font-medium">Sector</label>
                <input
                  type="text"
                  name="sector"
                  value={projectData.sector}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2 mt-1"
                />
              </div>
              <div>
                <label className="block font-medium">Cell</label>
                <input
                  type="text"
                  name="cell"
                  value={projectData.cell}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2 mt-1"
                />
              </div>
              <div>
                <label className="block font-medium">Size (sq mtrs)</label>
                <input
                  type="number"
                  name="size"
                  value={projectData.size}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2 mt-1"
                />
              </div>
            </div>

            {/* Upload Section */}
            <div className="mt-6">
              <label className="block font-medium mb-2">
                Upload your plan view here
              </label>
              <div className="w-full border-dashed border-2 border-gray-400 rounded-lg p-6 text-center bg-gray-100">
                <input
                  type="file"
                  name="planFile"
                  accept=".jpeg,.jpg,.png,.pdf"
                  onChange={handleChange}
                  className="hidden"
                  id="plan-upload"
                />
                <label htmlFor="plan-upload" className="cursor-pointer">
                  <div className="text-2xl">📁</div>
                  <p className="mt-2 text-gray-600">
                    Choose a file or drag & drop it here
                  </p>
                  <p className="text-sm text-gray-400">
                    JPEG, PNG, PDF formats, up to 50MB
                  </p>
                  <button
                    type="button"
                    className="mt-2 px-4 py-1 border rounded bg-white hover:bg-gray-200"
                  >
                    Browse File
                  </button>
                </label>
                {projectData.planFile && (
                  <p className="mt-2 text-sm text-green-600">
                    Selected: {projectData.planFile.name}
                  </p>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between mt-6">
              {!filter && <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Create Project
              </button>}
              {/* <button
                type="button"
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
              >
                Add Participants
              </button>*/}
              {filter && <button
                type="submit"
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
              >
                Edit Project
              </button>}
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default NewProject;
