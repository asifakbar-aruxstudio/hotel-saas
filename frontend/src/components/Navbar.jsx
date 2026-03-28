import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onFilterChange }) => {
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");

  const provinces = ["Sindh", "Punjab", "Balochistan", "KPK"];
  
  const cities = {
    Sindh: ["Karachi", "Hyderabad", "Larkana"],
    Punjab: ["Lahore", "Islamabad", "Rawalpindi"],
    Balochistan: ["Quetta"],
    KPK: ["Peshawar"]
  };

  const handleFilter = (prov, cit) => {
    onFilterChange(prov, cit);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4 shadow-md gap-4">
      
      {/* Logo */}
      <h1 className="text-xl font-bold">🏨 Hotel SaaS</h1>

      {/* All Hotels Button */}
      <Link to="/hotels">
        <button
          onClick={() => handleFilter("", "")}
          className="bg-black text-white px-4 py-2 rounded-lg"
        >
          All Hotels
        </button>
      </Link>

      {/* Filters */}
      <div className="flex gap-3">

        {/* Province Filter */}
        <select
          className="border p-2 rounded"
          value={province}
          onChange={(e) => {
            setProvince(e.target.value);
            setCity("");
            handleFilter(e.target.value, "");
          }}
        >
          <option value="">Select Province</option>
          {provinces.map((p, i) => (
            <option key={i} value={p}>{p}</option>
          ))}
        </select>

        {/* City Filter */}
        <select
          className="border p-2 rounded"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
            handleFilter(province, e.target.value);
          }}
          disabled={!province}
        >
          <option value="">Select City</option>
          {province &&
            cities[province]?.map((c, i) => (
              <option key={i} value={c}>{c}</option>
            ))}
        </select>

      </div>

      {/* Hotel Register Button */}
      <Link to="/register-hotel">
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
          Register Hotel
        </button>
      </Link>

    </div>
  );
};

export default Navbar;