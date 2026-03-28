import Navbar from "../components/Navbar";

const Login = () => {
  return (
    <>
      <Navbar />

      <div className="p-10 max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-6">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded mb-4"
        />

        <button className="w-full bg-black text-white p-3 rounded">
          Login
        </button>
      </div>
    </>
  );
};

export default Login;