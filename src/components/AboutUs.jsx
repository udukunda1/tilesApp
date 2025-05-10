import React from 'react';

const AboutUs = () => {
  return (
    <>
      <div className='home-section fixed w-full h-[100vh] z-[-1]'></div>
      <div className="min-h-screen flex justify-center items-center w-full bg-cover bg-center">
        <div className="bg-white bg-opacity-90 p-8 m-2 rounded-sm shadow-lg w-[60%] text-center">
          <h2 className="text-4xl font-semibold mb-6">About Us</h2>
          <p className="text-lg leading-7 text-gray-800">
            <strong>TilesConstruction</strong> is a digital system designed to assist builders, homeowners, and tile suppliers 
            in accurately determining the number of tiles needed to floor a house. By capturing house measurements and generating 
            precise tile estimates, our platform reduces waste, improves planning, and simplifies the construction process. 
            Whether you are building a new home or renovating, TilesConstruction is your trusted companion for smarter flooring decisions.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
