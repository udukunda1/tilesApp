// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import '../App.css';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="fixed w-[100vw] h-[95vh] bg-cover bg-center text-white flex items-center justify-center home-section z-[-1]">
        {/* Hero Content */}
        <div className="relative z-10 text-center text-shadow">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-shadow">Welcome to TileConstruction</h1>
          <p className="text-xl md:text-2xl text-shadow">Your Dream floor starts here</p>
        </div>
      </section>
    </div>
  );
}
