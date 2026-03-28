import Navbar from "../components/Navbar";

const HotelDashboard = () => {
  return (
    <>
      <Navbar />

      <div className="p-10">
        <h1 className="text-3xl font-bold mb-6">Hotel Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 shadow rounded-xl">
            <h2 className="text-xl font-bold">Total Bookings</h2>
            <p className="text-2xl mt-2">120</p>
          </div>

          <div className="p-6 shadow rounded-xl">
            <h2 className="text-xl font-bold">Earnings</h2>
            <p className="text-2xl mt-2">50,000 PKR</p>
          </div>

          <div className="p-6 shadow rounded-xl">
            <h2 className="text-xl font-bold">Rooms</h2>
            <p className="text-2xl mt-2">15</p>
          </div>

        </div>
      </div>
    </>
  );
};

export default HotelDashboard;