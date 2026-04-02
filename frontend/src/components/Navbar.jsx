import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext"; 
import { Link } from "react-router-dom";

const Navbar = () => {
const {navigate ,user , setUser} = useContext(AppContext)

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Hotels', path: '/hotels' },
        { name: 'About', path: '/about' },
        { name: 'Rooms', path: '/rooms' },
    ];

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

   
    return (
        <> 
        
            <p className="w-10 h-[500px]"></p>
            <nav className={`fixed top-0 left-0 bg-indigo-500 w-full 
            flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 
            transition-all duration-500 z-50  bg-white/80 shadow-md 
            text-gray-700 backdrop-blur-lg py-3 md:py-4" : "py-4 md:py-6"}`}>

                {/* Logo */}
                <Link href="https://prebuiltui.com" className="flex items-center gap-2">
                    <img src="/logo.png" alt="Logo" className="h-16 px-2"/>
                    </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-4 lg:gap-8">
                    {navLinks.map((link, i) => (
                        <Link key={i} to={link.path} className={`group flex flex-col gap-0.5 
                         "text-gray-700" : "text-white"}`}>
                            {link.name}
                            <div className={`"bg-gray-700" : "bg-white"} 
                            h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                        </Link>
                    ))}
                    <button className={`border px-4 py-1 text-sm font-light 
                    rounded-full cursor-pointer 'text-black' : 'text-white'} transition-all`}>
                        Owner 
                    </button>
                </div>

                {/* Desktop Right */}
                <div className="hidden md:flex items-center gap-4">
                        <button 
                        onClick={()=> navigate("/Login")}
                        className={`border px-4 py-1 text-sm font-light rounded-full    cursor-pointer transition-all duration-500 "text-black" : "text-white"}`}>
                        {user ? user.name : "Login"}
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-3 md:hidden">
                    <svg onClick={() => setIsMenuOpen(!isMenuOpen)} 
                    className={`h-6 w-6 cursor-pointer "invert" : ""}`} 
                    fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <line x1="4" y1="6" x2="20" y2="6" />
                        <line x1="4" y1="12" x2="20" y2="12" />
                        <line x1="4" y1="18" x2="20" y2="18" />
                    </svg>
                </div>





                {/* Mobile Menu */}
                <div className={`fixed top-0 left-0 w-full h-screen bg-white 
                text-base flex flex-col md:hidden items-center justify-center 
                gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? 
                "translate-x-0" : "-translate-x-full"}`}>
                    <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" 
                        strokeWidth="2" viewBox="0 0 24 24">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>

                    {navLinks.map((link, i) => (
                        <Link key={i} to={link.path} onClick={() => setIsMenuOpen(false)}>
                            {link.name}
                        </Link>
                    ))}

                    <button className="border px-4 py-1 text-sm font-light rounded-full
                     cursor-pointer transition-all">
                        Owner
                    </button>

                    <button 
                    onClick={()=> navigate("/login")}
                    className="bg-green-500 text-white px-8 py-2.5 rounded-full border-none
                     transition-all duration-500 cursor-pointer hover:bg-green-7    00">
                        Login
                    </button>
                </div>
            </nav>

        </>
    );
}

export default Navbar;


























// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { getLocations } from "../utils/locationHelper";
// import { FaHotel, FaBars, FaTimes, FaUserCircle } from "react-icons/fa";

// const Navbar = ({ onFilterChange }) => {
//   const [province, setProvince] = useState("");
//   const [city, setCity] = useState("");
//   const [menuOpen, setMenuOpen] = useState(false);

//   const locations = getLocations();
//   const provinces = Object.keys(locations);

//   const handleSearch = () => {
//     onFilterChange(province, city);
//     setMenuOpen(false);
//   };

//   return (
//     <div className="w-full bg-white shadow-lg fixed top-0 left-0 z-50">

//       {/* Top Bar */}
//       <div className="flex items-center justify-between px-4 py-3">

//         {/* Logo */}
//         <div className="flex items-center gap-2 text-white">
//            <img src="/logo.png" alt="Logo" className="h-16 px-2"/>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-4">

//           <Link to="/">
//             <button className="text-black border border-green/80 px-4 py-2 rounded 
//               hover:bg-green-500 hover:text-white transition">
//               Home
//             </button>
//           </Link>

//           <Link to="/hotels">
//             <button
//               onClick={() => onFilterChange("", "")}
//               className="text-black border border-green/80 px-4 py-2 rounded 
//               hover:bg-green-500 hover:text-white transition"
//             >
//               All Hotels
//             </button>
//           </Link>

//           {/* Filters */}
//           <select
//             className="text-black border border-green/80 px-4 py-2 rounded 
//               hover:bg-green-500 hover:text-white transition"
//             value={province}
//             onChange={(e) => {
//               setProvince(e.target.value);
//               setCity("");
//             }}
//           >
//             <option value="">Province</option>
//             {provinces.map((p) => (
//               <option key={p} className="text-black">{p}</option>
//             ))}
//           </select>

//           <select
//             className="text-black border border-green/80 px-4 py-2 rounded 
//               hover:bg-green-500 hover:text-white transition"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//             disabled={!province}
//           >
//             <option value="">City</option>
//             {province &&
//               locations[province]?.map((c) => (
//                 <option key={c} className="text-black">{c}</option>
//               ))}
//           </select>

//           {/* <button
//             onClick={handleSearch}
//             className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded 
//               transition"
//           >
//             Search
//           </button> */}

//           {/* Auth */}
//           <Link to="/login">
//             <button className="flex items-center gap-2 text-black border border-green/80 px-4 py-2 rounded 
//               hover:bg-green-500 hover:text-white transition">
//               <FaUserCircle /> Login
//             </button>
//           </Link>

//           <Link to="/register-hotel">
//             <button className="text-black border border-green/80 px-4 py-2 rounded 
//               hover:bg-green-500 hover:text-white transition">
//               Register
//             </button>
//           </Link>
//         </div>

//         {/* Mobile Icon */}
//         <div className="md:hidden text-white text-2xl">
//           {menuOpen ? (
//             <FaTimes onClick={() => setMenuOpen(false)} />
//           ) : (
//             <FaBars onClick={() => setMenuOpen(true)} />
//           )}
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden px-4 pb-4 flex flex-col gap-3 text-black bg-white border-t border-gray-300">

//           <Link to="/" onClick={() => setMenuOpen(false)}>
//             <button className="w-full text-black border border-green/80 px-4 py-2 rounded 
//               hover:bg-green-500 hover:text-white transition">
//               Home
//             </button>
//           </Link>

//           <Link to="/hotels" onClick={() => setMenuOpen(false)}>
//             <button className="w-full text-black border border-green/80 px-4 py-2 rounded 
//               hover:bg-green-500 hover:text-white transition">
//               All Hotels
//             </button>
//           </Link>

//           {/* Filters */}
//           <select
//             className="bg-white/10 p-2 rounded text-black w-full border border-blue/80"
//             value={province}
//             onChange={(e) => {
//               setProvince(e.target.value);
//               setCity("");
//             }}
//           >
//             <option value="">Province</option>
//             {provinces.map((p) => (
//               <option key={p} className="text-black">{p}</option>
//             ))}
//           </select>

//           <select
//             className="bg-white/10 p-2 rounded text-black w-full border border-green/80"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//             disabled={!province}
//           >
//             <option value="">City</option>
//             {province &&
//               locations[province]?.map((c) => (
//                 <option key={c} className="text-black">
//                   {c}
//                 </option>
//               ))}
//           </select>

//           {/* <button
//             onClick={handleSearch}
//             className="bg-green-500 py-2 rounded"
//           >
//             Search
//           </button> */}

//           {/* Auth */}
//           <Link to="/login" onClick={() => setMenuOpen(false)}>
//             <button className="w-full flex items-center justify-center gap-2 text-black border border-green/80 px-4 py-2 rounded 
//               hover:bg-green-500 hover:text-white transition">
//               <FaUserCircle /> Login
//             </button>
//           </Link>

//           <Link to="/register-hotel" onClick={() => setMenuOpen(false)}>
//             <button className="w-full text-black border border-green/80 px-4 py-2 rounded 
//               hover:bg-green-500 hover:text-white transition">
//               Register
//             </button>
//           </Link>

//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;