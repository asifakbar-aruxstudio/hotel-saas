import { useState } from "react";
import { Link } from "react-router-dom";
import { getLocations } from "../utils/locationHelper";
import { FaHotel, FaUserCircle } from "react-icons/fa";

const Navbar = ({ onFilterChange }) => {
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");

  const locations = getLocations();
  const provinces = Object.keys(locations);

  const handleSearch = () => {
    onFilterChange(province, city);
  };

  return (
    <div className="w-full bg-black/80 backdrop-blur-md shadow-lg px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-4">

      {/* Logo */}
      <div className="flex items-center gap-2">
        <FaHotel className="text-yellow-400 text-2xl" />
        <h1 className="text-xl font-bold text-white">LuxuryStay</h1>
      </div>

      {/* Links */}
      <div className="flex gap-3 flex-wrap justify-center">
        <Link to="/">
          <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-4 py-2 rounded-xl shadow hover:scale-105 transition">
            Home
          </button>
        </Link>

        <Link to="/hotels">
          <button
            onClick={() => onFilterChange("", "")}
            className="bg-white/10 text-white px-4 py-2 rounded-xl border border-white/20 hover:bg-white/20 transition"
          >
            All Hotels
          </button>
        </Link>
      </div>

      {/* Search Filters */}
      <div className="flex gap-2 flex-wrap items-center justify-center">

        <select
          className="bg-white/10 text-white border border-white/20 p-2 rounded-lg"
          value={province}
          onChange={(e) => {
            setProvince(e.target.value);
            setCity("");
          }}
        >
          <option value="">Province</option>
          {provinces.map((p) => (
            <option key={p} className="text-black">{p}</option>
          ))}
        </select>

        <select
          className="bg-white/10 text-white border border-white/20 p-2 rounded-lg"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          disabled={!province}
        >
          <option value="">City</option>
          {province &&
            locations[province]?.map((c) => (
              <option key={c} className="text-black">{c}</option>
            ))}
        </select>

        <button
          onClick={handleSearch}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          Search
        </button>
      </div>

      {/* Auth Buttons */}
      <div className="flex gap-3">
        <Link to="/login">
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl">
            <FaUserCircle /> Login
          </button>
        </Link>

        <Link to="/register-hotel">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;