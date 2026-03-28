import Navbar from "../components/Navbar";

const RegisterHotel = () => {
  return (
    <>
      <Navbar />

      <div className="p-10 max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Register Your Hotel</h1>

        <input
          type="text"
          placeholder="Hotel Name"
          className="w-full p-3 border rounded mb-4"
        />

        <input
          type="text"
          placeholder="Province"
          className="w-full p-3 border rounded mb-4"
        />

        <input
          type="text"
          placeholder="City"
          className="w-full p-3 border rounded mb-4"
        />

        <input
          type="text"
          placeholder="Address"
          className="w-full p-3 border rounded mb-4"
        />

        <button className="w-full bg-green-600 text-white p-3 rounded">
          Register Hotel
        </button>
      </div>
    </>
  );
};

export default RegisterHotel;