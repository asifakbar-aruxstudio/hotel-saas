import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { getLocations } from "../utils/locationHelper";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";

const Navbar = ({ onFilterChange }) => {
  const { navigate, user, setUser } = useContext(AppContext);

  const [menuOpen, setMenuOpen] = useState(false);
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const locations = getLocations();
  const provinces = Object.keys(locations);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Hotels", path: "/hotels" },
    { name: "About", path: "/about" },
    { name: "Rooms", path: "/rooms" },
  ];

  const handleSearch = () => {
    onFilterChange(province, city);
    setMenuOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-lg shadow-md px-4 md:px-10 py-3 flex items-center justify-between">

      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img src="/logo.png" alt="logo" className="h-12" />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6">

        {/* Links */}
        {navLinks.map((link, i) => (
          <Link key={i} to={link.path} className="relative group text-gray-700">
            {link.name}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-500 
            transition-all group-hover:w-full"></span>
          </Link>
        ))}

        {/* Filters */}
        <select
          className="border px-3 py-1 rounded"
          value={province}
          onChange={(e) => {
            setProvince(e.target.value);
            setCity("");
          }}
        >
          <option value="">Province</option>
          {provinces.map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>

        <select
          className="border px-3 py-1 rounded"
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
          className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
        >
          Search
        </button>

        {/* Owner */}
        <Link to="/register-hotel">
          <button className="border px-4 py-1 rounded hover:bg-green-500 hover:text-white transition">
            Owner
          </button>
        </Link>

        {/* User */}
        {user ? (
          <div className="relative">
            <div
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <FaUserCircle size={20} />
              <span>{user.name}</span>
            </div>

            {/* Dropdown */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white shadow-lg rounded w-40 py-2">
                <button
                  onClick={() => navigate("/profile")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Profile
                </button>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}

            className="border px-4 py-1 rounded hover:bg-green-500 hover:text-white"
          > 
            Login
            
          </button>
        )}
      </div>

      {/* Mobile Icon */}
      <div className="md:hidden text-2xl">
        {menuOpen ? (
          <FaTimes onClick={() => setMenuOpen(false)} />
        ) : (
          <FaBars onClick={() => setMenuOpen(true)} />
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col gap-4 p-4 md:hidden">

          {navLinks.map((link, i) => (
            <Link key={i} to={link.path} onClick={() => setMenuOpen(false)}>
              {link.name}
            </Link>
          ))}

          {/* Filters */}
          <select
            value={province}
            onChange={(e) => {
              setProvince(e.target.value);
              setCity("");
            }}
            className="border p-2 rounded"
          >
            <option value="">Province</option>
            {provinces.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>

          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            disabled={!province}
            className="border p-2 rounded"
          >
            <option value="">City</option>
            {province &&
              locations[province]?.map((c) => (
                <option key={c}>{c}</option>
              ))}
          </select>

          <button
            onClick={handleSearch}
            className="bg-green-500 text-white py-2 rounded"
          >
            Search
          </button>

          {/* Auth */}
          {user ? (
            <>
              <button onClick={() => navigate("/profile")}>
                Profile
              </button>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-green-500 text-white py-2 rounded"
            >
              Login
            </button>
          )}

          <Link to="/register-hotel">
            <button className="border py-2 rounded">Owner</button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;