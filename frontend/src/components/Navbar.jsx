import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 shadow-md">
      <h1 className="text-xl font-bold">Hotel SaaS</h1>

      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/hotels">Hotels</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;