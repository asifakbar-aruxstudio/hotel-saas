import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Hero from "./Hero";



const Home = () => {
  return (
    <>
      <Navbar />
       <Hero />
      <div className="flex flex-col md:flex-row items-center justify-between p-10">
        
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold mb-4">
              Book Your Perfect Stay
          </h1>

          <p className="text-gray-600 mb-6">
            Find the best hotels at the best prices.
          </p>

          <Link to="/hotels">
            <button className="bg-black text-white px-6 py-3 rounded-xl">
              Explore Hotels
            </button>
          </Link>
        </div>

        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
          className="w-[400px] rounded-2xl"
        />

      </div>
    </>
  );
};

export default Home;