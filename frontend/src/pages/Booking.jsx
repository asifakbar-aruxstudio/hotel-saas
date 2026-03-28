import Navbar from "../components/Navbar";

const Booking = () => {
  return (
    <>
      <Navbar />

      <div className="p-10 max-w-lg mx-auto">
        <h1 className="text-2xl font-bold mb-6">Book Room</h1>

        <input
          type="date"
          className="w-full p-3 border rounded mb-4"
        />

        <input
          type="date"
          className="w-full p-3 border rounded mb-4"
        />

        <button className="w-full bg-black text-white p-3 rounded">
          Confirm Booking
        </button>
      </div>
    </>
  );
};

export default Booking;