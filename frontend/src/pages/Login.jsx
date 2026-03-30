import { useState } from "react";
import Navbar from "../components/Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const hotels = JSON.parse(localStorage.getItem("hotels")) || [];

    const user = hotels.find(
      (h) => h.email === email && h.password === password
    );

    if (user) {
      alert("Login Successful 🎉");
      window.location.href = "/dashboard";
    } else {
      alert("Hotel not registered ❌ Please register first");
      window.location.href = "/register-hotel";
    }
  };
  if (user) {
  localStorage.setItem("loggedInUser", JSON.stringify(user));
  window.location.href = "/dashboard";
};


  return (
    <>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center bg-black/90">

        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-[350px] text-white">

          <h2 className="text-2xl font-bold text-center mb-6">
            Hotel Login
          </h2>

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-3 rounded bg-white/20 border border-white/20"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 rounded bg-white/20 border border-white/20"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            className="w-full bg-green-500 hover:bg-green-600 p-3 rounded-lg"
          >
            Login
          </button>

          <p className="text-center mt-4 text-sm">
            Don’t have hotel?{" "}
            <span
              className="text-yellow-400 cursor-pointer"
              onClick={() => (window.location.href = "/register-hotel")}
            >
              Register Now
            </span>
          </p>

        </div>
      </div>
    </>
  );
};

export default Login;