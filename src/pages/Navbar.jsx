import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // npm install lucide-react
import { Link, useNavigate } from "react-router-dom";

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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 text-dynamic ${
        isScrolled
          ? "bg-white shadow-md text-gray-800"
          : "bg-white/10 ackdrop-blur-md text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Navbar container */}
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              src="/src/assets/football.jpg"
              alt="Logo"
              className="h-10 w-10 mr-2 rounded-4xl"
            />
            <span
              className={`text-xl font-semibold transition-colors ${
                isScrolled ? "text-green-800" : "text-green-400"
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
