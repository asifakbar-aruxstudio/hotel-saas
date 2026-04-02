import {Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import HotelDetails from "./pages/HotelDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./dashboard/HotelDashboard";
import Booking from "./pages/Booking";
import RegisterHotel from "./components/RegisterHotel";
import Signup from "./pages/Signup";
import MyBooking from "./pages/MyBooking";
import About from "./pages/About";
import Rooms from "./pages/Rooms";
import SingleRooms from "./pages/SingleRooms";  
import Footer from "./components/Footer";  

function App() {
  
  const ownerPath = 
  useLocation().pathname.includes("/owner");
  return (
    <> 
     {
      !ownerPath && <Navbar />
     };
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/hotel/:id" element={<HotelDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/single-room/:id" element={<SingleRooms />} />
        <Route path="/my-booking" element={<MyBooking />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/register-hotel" element={<RegisterHotel />} />
      </Routes>
    {
      !ownerPath && <Footer />
     };
    </>
  );
}

export default App;