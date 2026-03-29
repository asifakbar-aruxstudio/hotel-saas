import { useState } from "react";
import { Link } from "react-router-dom";
import { getLocations } from "../utils/locationHelper";

const Navbar = ({ onFilterChange }) => {
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");

  const locations = getLocations();
  const provinces = Object.keys(locations);

  const handleSearch = () => {
    onFilterChange(province, city);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4 shadow-md gap-4 bg-white">

      <h1 className="text-xl font-bold">
        <img src="logo.png" alt="Logo" className="h-12" />
      </h1>

      <div className="flex gap-3">
        <Link to="/">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Home</button>
        </Link>

        <Link to="/hotels">
          <button
            onClick={() => onFilterChange("", "")}
            className="bg-black text-white px-4 py-2 rounded-lg"
          >
            All Hotels
          </button>
        </Link>
      </div>

      <div className="flex gap-3 items-center">
        {/* Province */}
        <select
          className="border p-2 rounded"
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

        {/* City */}
        <select
          className="border p-2 rounded"
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
          className="bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          Search
        </button>
      </div>

      <Link to="/register-hotel">
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">
          Register Hotel
        </button>
      </Link>
    </div>
  );
};

export default Navbar;