import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import HotelCard from "../components/HotelCard";

const Hotels = () => {
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  const hotels = [
    {
      _id: "1",
      name: "Pearl Continental",
      province: "Sindh",
      city: "Karachi",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa"
    },
    {
      _id: "2",
      name: "Serena Hotel",
      province: "Punjab",
      city: "Lahore",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
    },
    {
      _id: "3",
      name: "City Hotel",
      province: "Sindh",
      city: "Hyderabad",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945"
    }
  ];

  // 🔍 Search Logic
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const search = params.get("search");

    if (search) {
      setSearchQuery(search);

      const filtered = hotels.filter((h) =>
        h.name.toLowerCase().includes(search.toLowerCase())
      );

      setFilteredHotels(filtered);
    } else {
      setFilteredHotels([]);
      setSearchQuery("");
    }
  }, [location.search]);

  const showHotels = searchQuery ? filteredHotels : hotels;

  return (
    <>
      <Navbar />

      <div className="p-10">

        {/* 🔍 Show Search Title */}
        {searchQuery && (
          <h2 className="text-xl font-bold mb-6">
            Search Results for: "{searchQuery}"
          </h2>
        )}

        {/* ❌ No Hotel Found */}
        {searchQuery && filteredHotels.length === 0 && (
          <div className="text-center text-red-500 text-xl mt-10">
            ❌ Hotel Not Available
          </div>
        )}

        {/* ✅ Hotel List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {showHotels.map((hotel) => (
            <HotelCard key={hotel._id} hotel={hotel} />
          ))}
        </div>

      </div>
    </>
  );
};

export default Hotels;