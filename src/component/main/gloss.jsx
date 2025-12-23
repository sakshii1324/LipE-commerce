import React, { useState } from "react";
import Navbar from "../nav/navbar.jsx";

const Gloss = () => {
  const [filter, setFilter] = useState("All");

  return (
    <div className="bg-gradient-to-br from-pink-300 to-pink-100 min-h-screen">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-16">

        {/* Heading */}
        <section className="text-center">
          <h1 className="text-5xl sm:text-5xl font-extrabold text-gray-800 bg-gradient-to-r from-rose-600 via-pink-500 to-red-400 bg-clip-text text-transparent font-['Playfair_Display'] drop-shadow-lg">
            Lip Gloss Collection
          </h1>
          <p className="mt-3 text-gray-600">
            High-shine, tinted, plumping & shimmer glosses
          </p>
        </section>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mt-8">
          <button onClick={() => setFilter("All")} className="px-4 py-2 bg-white rounded-full hover:">
            All
          </button>
          <button onClick={() => setFilter("Tinted")} className="px-4 py-2 bg-white rounded-full">
            Tinted
          </button>
          <button onClick={() => setFilter("Plumping")} className="px-4 py-2 bg-white rounded-full">
            Plumping
          </button>
          <button onClick={() => setFilter("Shimmer")} className="px-4 py-2 bg-white rounded-full">
            Shimmer
          </button>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">

          {(filter === "All" || filter === "Tinted") && (
            <div className="bg-white p-5 rounded-xl shadow-md">
              <img src="/img/gloss1.jpg" className="h-48 w-full object-cover rounded-lg" />
              <h3 className="mt-4 font-semibold">Sheer Shine</h3>
              <p className="text-sm text-gray-600">Tinted — ₹499</p>
            </div>
          )}

          {(filter === "All" || filter === "Plumping") && (
            <div className="bg-white p-5 rounded-xl shadow-md">
              <img src="/img/gloss2.jpg" className="h-48 w-full object-cover rounded-lg" />
              <h3 className="mt-4 font-semibold">Plump & Glow</h3>
              <p className="text-sm text-gray-600">Plumping — ₹699</p>
            </div>
          )}

          {(filter === "All" || filter === "Shimmer") && (
            <div className="bg-white p-5 rounded-xl shadow-md">
              <img src="/img/gloss4.jpg" className="h-48 w-full object-cover rounded-lg" />
              <h3 className="mt-4 font-semibold">Starlight Shimmer</h3>
              <p className="text-sm text-gray-600">Shimmer — ₹549</p>
            </div>
          )}

        </div>
      </main>
    </div>
  );
};

export default Gloss;
