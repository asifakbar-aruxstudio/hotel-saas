import { useState } from "react";
import { Link } from "react-router-dom";
import { getLocations } from "../utils/locationHelper";
import { FaHotel, FaBars, FaTimes, FaUserCircle } from "react-icons/fa";

const Navbar = ({ onFilterChange }) => {
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const locations = getLocations();
  const provinces = Object.keys(locations);

  const handleSearch = () => {
    onFilterChange(province, city);
    setMenuOpen(false);
  };

  return (
    <div className="w-full bg-white shadow-lg fixed top-0 left-0 z-50">

      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-3">

        {/* Logo */}
        <div className="flex items-center gap-2 text-white">
           <img src="/logo.png" alt="Logo" className="h-16 px-2"/>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">

          <Link to="/">
            <button className="text-black border border-blue/80 px-4 py-2 rounded 
              hover:bg-blue-700 hover:text-white transition">
              Home
            </button>
          </Link>

          <Link to="/hotels">
            <button
              onClick={() => onFilterChange("", "")}
              className="text-black border border-blue/80 px-4 py-2 rounded 
              hover:bg-blue-700 hover:text-white transition"
            >
              All Hotels
            </button>
          </Link>

          {/* Filters */}
          <select
            className="text-black border border-blue/80 px-4 py-2 rounded 
              hover:bg-blue-700 hover:text-white transition"
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
            className="text-black border border-blue/80 px-4 py-2 rounded 
              hover:bg-blue-700 hover:text-white transition"
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

          {/* <button
            onClick={handleSearch}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded 
              transition"
          >
            Search
          </button> */}

          {/* Auth */}
          <Link to="/login">
            <button className="flex items-center gap-2 text-black border border-blue/80 px-4 py-2 rounded 
              hover:bg-blue-700 hover:text-white transition">
              <FaUserCircle /> Login
            </button>
          </Link>

          <Link to="/register-hotel">
            <button className="text-black border border-blue/80 px-4 py-2 rounded 
              hover:bg-blue-700 hover:text-white transition">
              Register
            </button>
          </Link>
        </div>

        {/* Mobile Icon */}
        <div className="md:hidden text-white text-2xl">
          {menuOpen ? (
            <FaTimes onClick={() => setMenuOpen(false)} />
          ) : (
            <FaBars onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 text-black bg-white border-t border-gray-300">

          <Link to="/" onClick={() => setMenuOpen(false)}>
            <button className="w-full text-black border border-blue/80 px-4 py-2 rounded 
              hover:bg-blue-700 hover:text-white transition">
              Home
            </button>
          </Link>

          <Link to="/hotels" onClick={() => setMenuOpen(false)}>
            <button className="w-full text-black border border-blue/80 px-4 py-2 rounded 
              hover:bg-blue-700 hover:text-white transition">
              All Hotels
            </button>
          </Link>

          {/* Filters */}
          <select
            className="bg-white/10 p-2 rounded text-black w-full border border-blue/80"
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
            className="bg-white/10 p-2 rounded text-black w-full border border-blue/80"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            disabled={!province}
          >
            <option value="">City</option>
            {province &&
              locations[province]?.map((c) => (
                <option key={c} className="text-black">
                  {c}
                </option>
              ))}
          </select>

          {/* <button
            onClick={handleSearch}
            className="bg-green-500 py-2 rounded"
          >
            Search
          </button> */}

          {/* Auth */}
          <Link to="/login" onClick={() => setMenuOpen(false)}>
            <button className="w-full flex items-center justify-center gap-2 text-black border border-blue/80 px-4 py-2 rounded 
              hover:bg-blue-700 hover:text-white transition">
              <FaUserCircle /> Login
            </button>
          </Link>

          <Link to="/register-hotel" onClick={() => setMenuOpen(false)}>
            <button className="w-full text-black border border-blue/80 px-4 py-2 rounded 
              hover:bg-blue-700 hover:text-white transition">
              Register
            </button>
          </Link>

        </div>
      )}
    </div>
  );
};

export default Navbar;