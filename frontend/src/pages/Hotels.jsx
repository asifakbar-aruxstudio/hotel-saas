import Navbar from "../components/Navbar";
import HotelCard from "../components/HotelCard";

const Hotels = () => {

  const hotels = [
    {
      _id: "1",
      name: "Pearl Continental",
      location: "Karachi",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa"
    },
    {
      _id: "2",
      name: "Serena Hotel",
      location: "Islamabad",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
    }
  ];

  return (
    <>
      <Navbar />

      <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {hotels.map((hotel) => (
          <HotelCard key={hotel._id} hotel={hotel} />
        ))}
      </div>
    </>
  );
};

export default Hotels;