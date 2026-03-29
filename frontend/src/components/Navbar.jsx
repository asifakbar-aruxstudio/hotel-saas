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
    <div className="w-full bg-black/80 backdrop-blur-md shadow-lg">

      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-3">

        {/* Logo */}
        <div className="flex items-center gap-2 text-white">
          <FaHotel className="text-yellow-400 text-2xl" />
          <h1 className="text-xl font-bold">LuxuryStay</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">

          <Link to="/">
            <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-4 py-2 rounded-xl">
              Home
            </button>
          </Link>

          <Link to="/hotels">
            <button
              onClick={() => onFilterChange("", "")}
              className="text-white border border-white/20 px-4 py-2 rounded-xl"
            >
              All Hotels
            </button>
          </Link>

          {/* Filters */}
          <select
            className="bg-white/10 text-white border border-white/20 p-2 rounded"
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
            className="bg-white/10 text-white border border-white/20 p-2 rounded"
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
            className="bg-green-500 px-4 py-2 rounded"
          >
            Search
          </button>

          {/* Auth */}
          <Link to="/login">
            <button className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-xl text-white">
              <FaUserCircle /> Login
            </button>
          </Link>

          <Link to="/register-hotel">
            <button className="bg-purple-600 px-4 py-2 rounded-xl text-white">
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
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 text-white">

          <Link to="/" onClick={() => setMenuOpen(false)}>
            <button className="w-full bg-yellow-500 text-black py-2 rounded">
              Home
            </button>
          </Link>

          <Link to="/hotels" onClick={() => setMenuOpen(false)}>
            <button className="w-full border border-white/20 py-2 rounded">
              All Hotels
            </button>
          </Link>

          {/* Filters */}
          <select
            className="bg-white/10 p-2 rounded"
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
            className="bg-white/10 p-2 rounded"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            disabled={!province}
          >
            <option value="">City</option>
            {province &&
              locations[province]?.map((c) => (
                <option key={c}>{c}</option>
              ))}
          </select>

          <button
            onClick={handleSearch}
            className="bg-green-500 py-2 rounded"
          >
            Search
          </button>

          {/* Auth */}
          <Link to="/login" onClick={() => setMenuOpen(false)}>
            <button className="w-full bg-blue-600 py-2 rounded flex items-center justify-center gap-2">
              <FaUserCircle /> Login
            </button>
          </Link>

          <Link to="/register-hotel" onClick={() => setMenuOpen(false)}>
            <button className="w-full bg-purple-600 py-2 rounded">
              Register
            </button>
          </Link>

        </div>
      )}
    </div>
  );
};

export default Navbar;