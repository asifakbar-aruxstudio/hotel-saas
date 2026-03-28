import { Link } from "react-router-dom";

const HotelCard = ({ hotel }) => {
  return (
    <Link to={`/hotel/${hotel._id}`}>
      <div className="p-4 shadow-lg rounded-2xl hover:scale-105 transition">
        <img src={hotel.image} className="rounded-xl mb-3" />
        <h2 className="font-bold">{hotel.name}</h2>
        <p className="text-gray-500">{hotel.location}</p>
      </div>
    </Link>
  );
};

export default HotelCard;