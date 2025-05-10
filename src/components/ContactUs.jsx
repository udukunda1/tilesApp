import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent!");
  };

  return (
    <>
      <div className='home-section fixed w-full h-[100vh] z-[-1]'></div>
      <div className="min-h-screen flex justify-center w-full bg-cover bg-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white bg-opacity-30 p-8 m-2 rounded-sm shadow-lg w-[60%]"
        >
          <h2 className="text-4xl font-semibold text-center mb-6">Contact Us</h2>

          <label className="block mb-2 text-xl">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded"
          />

          <label className="block mb-2 text-xl">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded"
          />

          <label className="block mb-2 text-xl">Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="w-full p-2 mb-6 border rounded"
          />

          <div className='w-full flex justify-center'>
            <button type="submit" className="w-[50%] bg-black text-white py-2 rounded mx-auto">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
