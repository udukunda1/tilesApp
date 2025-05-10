import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    role: '',
    username: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    navigate('/dashboard');
  };

  return (
    <>
    <div className='home-section fixed w-full h-[100vh] z-[-1]'></div>
    <div
      className="min-h-screen flex justify-center w-full bg-cover bg-center"
    >
        {/* <div className='w-full h-[300px] bg-black'></div> */}
      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-30 p-8 m-2 rounded-sm shadow-lg w-[60%]"
      >
        <h2 className="text-4xl font-semibold text-center mb-6">Create account</h2>

        <label className="block mb-2 text-xl">First name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
        />

        <label className="block mb-2 text-xl">Lastname:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
        />

        <label className="block mb-2  text-xl">Role:</label>
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
        >
          <option value="">Select role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>

        <label className="block mb-2 text-xl">Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
        />

        <label className="block mb-2 text-xl">Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
        />

        <label className="block mb-2 text-xl">Confirm password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full p-2 mb-6 border rounded"
        />
        <div className='w-full flex justify-center'>
        <button type="submit" className="w-[50%] bg-black text-white py-2 rounded mx-auto">
          SIGNUP
        </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default CreateAccount;
