import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
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
    children: [{ name: "/contactUs/list", path: "Contact List" }],
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-24 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md"
          : "bg-gradient-to-r from-green-400 via-yellow-300 to-red-400"
      }`}
    >
      {/* Social Icons (Desktop Only) */}
      {/* <div className="hidden md:flex absolute top-1 right-3 items-center gap-3 z-50 mb-2">
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-700 hover:scale-110 transition"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-600 hover:scale-110 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:scale-110 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 hover:scale-110 transition"
        >
          <FaYoutube />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-500 hover:scale-110 transition"
        >
          <FaTwitter />
        </a>
        <span className="ml-2 px-2 py-1 text-sm font-semibold border border-green-600 text-green-700 rounded">
          Free Trial
        </span>
      </div> */}
      <div
  className="
   fixed z-50
    right-0 top-96
    flex flex-col items-center
    w-10 gap-3
    md:absolute md:top-1 md:right-3 md:flex-row md:w-auto md:gap-3
  "
>
  <a href="https://wa.me/919999999999" target="_blank" className="text-green-700 text-xl hover:scale-110 transition">
    <FaWhatsapp />
  </a>
  <a href="https://instagram.com" target="_blank" className="text-pink-600 text-xl hover:scale-110 transition">
    <FaInstagram />
  </a>
  <a href="https://linkedin.com" target="_blank" className="text-blue-600 text-xl hover:scale-110 transition">
    <FaLinkedin />
  </a>
  <a href="https://youtube.com" target="_blank" className="text-red-600 text-xl hover:scale-110 transition">
    <FaYoutube />
  </a>
  <a href="https://twitter.com" target="_blank" className="text-sky-500 text-xl hover:scale-110 transition">
    <FaTwitter />
  </a>

  <span className="mt-1 mr-5 px-2 py-1 text-xs font-semibold border border-green-600 text-green-700 rounded text-center whitespace-nowrap">
  Free Trial
</span>

</div>


      {/* Main Navbar */}
      <div className="max-w-8xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center h-14 md:h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/src/assets/football.jpg"
              alt="Logo"
              className="h-16 w-16 md:h-16 md:w-16 mr-3 rounded-full"
            />
            <span className="text-lg md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-900 to-red-600">
              Lucknow Football Club
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <Link
                  to={item.name}
                  className="font-medium text-gray-800 hover:text-blue-600 transition"
                >
                  {item.path}
                </Link>

                {item.children && (
                  <div className="absolute left-0 mt-2 w-44 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition">
                    {item.children.map((child, idx) => (
                      <Link
                        key={idx}
                        to={child.name}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                      >
                        {child.path}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-800"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <ul className="flex flex-col px-6 py-4 space-y-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <div
                  className="flex justify-between items-center font-medium text-gray-800"
                  onClick={() =>
                    setOpenDropdown(openDropdown === index ? null : index)
                  }
                >
                  {item.path}
                  {item.children && (
                    <span>{openDropdown === index ? "▲" : "▼"}</span>
                  )}
                </div>

                {item.children && openDropdown === index && (
                  <ul className="ml-4 mt-2 space-y-2">
                    {item.children.map((child, idx) => (
                      <li key={idx}>
                        <Link
                          to={child.name}
                          onClick={() => setIsOpen(false)}
                          className="block text-sm text-gray-600"
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
