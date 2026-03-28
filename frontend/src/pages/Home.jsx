import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="flex flex-col md:flex-row items-center justify-between p-10">
        
        {/* Left Content */}
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold mb-4">
            Book Your Perfect Stay
          </h1>
          <p className="text-gray-600 mb-6">
            Find the best hotels at the best prices.
          </p>

          <button className="bg-black text-white px-6 py-3 rounded-xl hover:scale-105 transition">
            Explore Hotels
          </button>
        </div>

        {/* Right Image */}
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
          alt="hotel"
          className="w-[400px] rounded-2xl shadow-lg"
        />
      </div>
    </>
  );
};

export default Home;