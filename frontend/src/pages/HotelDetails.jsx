import Navbar from "../components/Navbar";
import { useParams, Link } from "react-router-dom";

const HotelDetails = () => {
  const { id } = useParams();

  const hotel = {
    name: "Sample Hotel",
    location: "Karachi",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    description: "Beautiful hotel with amazing services."
  };

  return (
    <>
      <Navbar />

      <div className="p-10">
        <img src={hotel.image} className="w-full h-[300px] object-cover rounded-xl" />

        <h1 className="text-3xl font-bold mt-4">{hotel.name}</h1>
        <p className="text-gray-500">{hotel.location}</p>

        <p className="mt-4">{hotel.description}</p>

        <Link to="/booking">
          <button className="mt-6 bg-black text-white px-6 py-3 rounded-xl">
            Book Now
          </button>
        </Link>
      </div>
    </>
  );
};

export default HotelDetails;