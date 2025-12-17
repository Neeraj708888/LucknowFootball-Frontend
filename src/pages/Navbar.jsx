import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // npm install lucide-react
import { Link, useNavigate } from "react-router-dom";
import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const navItems = [
  { name: "/", path: "Home" },
  { name: "/aboutUs", path: "About Us" },

  {
    name: "/ground",
    path: "Ground",
    children: [
      { name: "/ground/book", path: "Book Ground" },
      { name: "/ground/list", path: "Ground List" },
    ],
  },

  {
    name: "/event",
    path: "Event",
    children: [
      { name: "/event/upcoming", path: "Upcoming Events" },
      { name: "/event/past", path: "Past Events" },
    ],
  },

  { name: "/ticket", path: "Ticket" },
  {
    name: "/contactUs",
    path: "Contact Us",
    children: [{ name: "contactUs/list", path: "Contact List" }],
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  // Detect scroll to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // adjust 50px threshold as needed
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 text-dynamic bg-gradient-to-r from-green-400 via-yellow-300 to-red-400 ${
        isScrolled
          ? "bg-white shadow-md text-gray-800"
          : "bg-white/10 ackdrop-blur-md text-black"
      }`}
    >
      <div className="absolute top-2 right-6 flex items-center gap-2 z-50">
        {/* WhatsApp */}
        <Link
          to="https://wa.me/919999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-green-600 text-xl transition-transform hover:scale-110"
        >
          <FaWhatsapp />
        </Link>

        {/* Instagram */}
        <Link
          to="https://www.instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-green-600 text-xl transition-transform hover:scale-110"
        >
          <FaInstagram />
        </Link>

        {/* LinkedIn */}
        <Link
          to="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-green-600 text-xl transition-transform hover:scale-110"
        >
          <FaLinkedin />
        </Link>
        {/* Youtube */}
        <Link
          to="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 hover:text-green-600 text-xl transition-transform hover:scale-110"
        >
          <FaYoutube />
        </Link>
        <Link
          to="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-500 hover:text-green-600 text-xl transition-transform hover:scale-110"
        >
          <FaTwitter />
        </Link>
        {/* Free Trial Text */}
        <p className="text-green-400 font-semibold border border-green-400 px-2 rounded text-md text-center">
          Free Trial
        </p>
      </div>

      <br />
      <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
        {/* Main Navbar container */}
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              src="/src/assets/football.jpg"
              alt="Logo"
              className="h-16 w-16 mr-4 mb-5 rounded-4xl"
            />
            <span
              className={`text-2xl font-semibold transition-all duration-300 bg-clip-text text-transparent ${
                isScrolled
                  ? "bg-gradient-to-r from-green-900 to-red-600"
                  : "bg-gradient-to-r from-green-900 to-red-600"
              }`}
            >
              Lucknow Football Club
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <Link
                  to={item.name}
                  className={`font-medium transition-colors ${
                    isScrolled
                      ? "text-gray-700 hover:text-blue-600"
                      : "text-white/90 hover:text-blue-400"
                  }`}
                >
                  {item.path}
                </Link>

                {/* Dropdown */}
                {item.children && (
                  <div className="absolute left-0 mt-2 w-44 rounded-lg bg-white shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200">
                    {item.children.map((child, idx) => (
                      <Link
                        key={idx}
                        to={child.name}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        {child.path}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className={`focus:outline-none transition-colors ${
                isScrolled ? "text-gray-800" : "text-red-800"
              }`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden border-t ${
            isScrolled
              ? "bg-white text-gray-800 border-gray-200"
              : "bg-white/10 backdrop-blur-lg text-white border-white/20"
          }`}
        >
          <ul className="flex flex-col px-6 py-4 space-y-3">
            {navItems.map((item, index) => (
              <li key={index}>
                <div
                  className="flex justify-between items-center"
                  onClick={() =>
                    setOpenDropdown(openDropdown === index ? null : index)
                  }
                >
                  <span className="font-medium">{item.path}</span>
                  {item.children && (
                    <span className="text-sm">
                      {openDropdown === index ? "▲" : "▼"}
                    </span>
                  )}
                </div>

                {/* Mobile Submenu */}
                {item.children && openDropdown === index && (
                  <ul className="ml-4 mt-2 space-y-2">
                    {item.children.map((child, idx) => (
                      <li key={idx}>
                        <Link
                          to={child.name}
                          className="block text-sm text-gray-600"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.path}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
