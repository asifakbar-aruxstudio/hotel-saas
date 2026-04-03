import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/rooms")
      .then(res => res.json())
      .then(data => setRooms(data));
  }, []);

  return (
    <div className="p-6 grid md:grid-cols-3 gap-6">
      {rooms.map((room) => (
        <div
          key={room._id}
          onClick={() => navigate(`/room/${room._id}`)}
          className="border rounded-lg shadow hover:shadow-lg cursor-pointer"
        >
          <img src={room.image} className="h-48 w-full object-cover" />
          <div className="p-3">
            <h2 className="font-bold">{room.title}</h2>
            <p>Rs {room.price}</p>
            <p className="text-sm text-gray-500">{room.city}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rooms;