import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
    <header className="bg-gray-100 py-5 fixed w-[100vw]">
    <div className="h-[5vh] max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-start md:items-center justify-between">
      <Link to="/" className="text-2xl font-bold text-gray-800">TileConstruction</Link>
      <ul className="flex flex-wrap mt-4 md:mt-0 space-x-5 text-gray-800 font-medium">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/create-account">Sign-Up</Link></li>
        <li><Link to="/login">Log-In</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </div>
    </header>
    <div className='h-[70px]'></div>
    </>
  )
}

export default NavBar;