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
    <div className="relative h-[80vh] w-full">

      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
        alt="hotel"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white p-4">

        {/* Text */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Find Your Perfect Hotel Stay
        </h1>

        <p className="mb-6 text-lg">
          Search, compare and book the best hotels across Pakistan
        </p>

        {/* Search Bar */}
        <div className="flex w-full max-w-xl">
          <input
            type="text"
            placeholder="Search hotel by name..."
            className="w-full p-3 rounded-l-lg text-black outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            onClick={handleSearch}
            className="bg-green-600 px-6 rounded-r-lg"
          >
            Search
          </button>
        </div>

      </div>
    </div>
  );
};

export default Hero;