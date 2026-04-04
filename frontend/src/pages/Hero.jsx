import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (search.trim() !== "") {
      navigate(`/hotels?search=${search}`);
    }
  };

  return (
    <div className="relative h-[80vh] w-full overflow-hidden">

      {/* Background Image with Blur */}
      <img
        src="/heroo.png"
        alt="hotel"
        className="w-full h-full object-cover scale-100"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center 
      text-center text-white px-4 z-10">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Find Your Perfect Stay
        </h1>

        {/* Sub text */}
        <p className="mb-6 text-lg text-gray-200">
          Book hotels easily across Pakistan
        </p>

        {/* Search Bar */}
        <div className="flex w-full max-w-xl bg-white rounded-xl overflow-hidden shadow-lg">

          <input
            type="text"
            placeholder="Search hotel by name..."
            className="w-full p-3 text-black outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            onClick={handleSearch}
            className="bg-green-600 text-white px-6 hover:bg-green-700"
          >
            Search
          </button>
        </div>

      </div>
    </div>
  );
};

export default Hero;