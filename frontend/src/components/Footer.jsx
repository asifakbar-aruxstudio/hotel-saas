import {
  FaHotel,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaApple,
  FaGooglePlay,
  FaShieldAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-black via-green-700 to-black 
    text-gray-300 pt-16 pb-8 px-4 overflow-hidden">

      {/* Glow Effect */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-green-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-white mb-4">
              <FaHotel className="text-green-500 text-2xl animate-pulse" />
              <h2 className="text-2xl font-bold tracking-wide">
                Hotelify
              </h2>
            </div>

            <p className="text-sm leading-6">
              Experience luxury and comfort with Hotelify. Discover top-rated hotels, 
              exclusive deals, and seamless booking across Pakistan.
            </p>

            {/* Social */}
            <div className="flex gap-3 mt-5">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedin].map( 
                (Icon, i) => (
                  <div
                    key={i}
                    className="bg-white/10 p-2 rounded-full hover:bg-green-500 hover:text-black cursor-pointer transition transform hover:scale-110"
                  >
                    <Icon />
                  </div>
                )
              )}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              {["Home", "Hotels", "Luxury", "Budget", "Resorts"].map((item) => (
                <li
                  key={item}
                  className="hover:text-green-400 cursor-pointer transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              {[
                "Help Center",
                "Privacy Policy",
                "Terms & Conditions",
                "Refund Policy",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-green-400 cursor-pointer transition"
                >
                  {item}
                </li>
              ))}
            </ul>

            {/* Trust Badge */}
            <div className="flex items-center gap-2 mt-5 text-green-400 text-sm">
              <FaShieldAlt />
              Secure Booking Guaranteed
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm mb-3">
              Get exclusive hotel deals & offers directly in your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 rounded-lg bg-white/10 border border-white/20 text-white
                 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <button className="bg-green-500 text-black px-4 py-2 rounded-lg 
              hover:bg-green-600 transition">
                Subscribe
              </button>
            </div>

            {/* App Download */}
            <div className="flex gap-3 mt-5">
              <button className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg 
              hover:bg-white/20 transition">
                <FaApple /> App Store
              </button>
              <button className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg 
              hover:bg-white/20 transition">
                <FaGooglePlay /> Play Store
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row 
        justify-between items-center text-sm text-gray-400">

          <p>
            © {new Date().getFullYear()} Hotelify. All rights reserved.
          </p>

          <div className="flex gap-4 mt-3 md:mt-0">
            <span className="hover:text-green-400 cursor-pointer">
              Privacy
            </span>
            <span className="hover:text-green-400 cursor-pointer">
              Terms
            </span>
            <span className="hover:text-green-400 cursor-pointer">
              Sitemap
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;