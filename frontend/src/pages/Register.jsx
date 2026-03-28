import Navbar from "../components/Navbar";

const Register = () => {
  return (
    <>
      <Navbar />

      <div className="p-10 max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-6">Register</h1>

        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 border rounded mb-4"
        />

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
          Register
        </button>
      </div>
    </>
  );
};

export default Register;