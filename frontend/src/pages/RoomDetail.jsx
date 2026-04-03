import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const RoomDetail = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/rooms/${id}`)
      .then(res => res.json())
      .then(data => setRoom(data));
  }, [id]);

  if (!room) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <img src={room.image} className="w-full h-80 object-cover rounded" />

      <h1 className="text-2xl font-bold mt-4">{room.title}</h1>
      <p className="text-gray-600">{room.city}</p>
      <p className="text-lg font-semibold mt-2">Rs {room.price}</p>

      <p className="mt-4">{room.description}</p>

      <button className="mt-6 bg-green-500 text-white px-6 py-2 rounded">
        Book Now
      </button>
    </div>
  );
};

export default RoomDetail;