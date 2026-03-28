import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import HotelDetails from "./pages/HotelDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HotelDashboard from "./dashboard/HotelDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/hotel/:id" element={<HotelDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<HotelDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;