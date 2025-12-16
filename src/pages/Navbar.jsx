import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // npm install lucide-react
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

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
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 text-dynamic ${isScrolled
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
                            src="/logo.png"
                            alt="Logo"
                            className="h-10 w-10 mr-2"
                        />
                        <span
                            className={`text-xl font-semibold transition-colors ${isScrolled ? "text-gray-800" : "text-blue-400"
                                }`}
                        >
                            Lucknow Football Club
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        {[{ name: "/", path: "Home" }, { name: "/aboutUs", path: "About US" }, { name: "/ground", path: "Ground" }, { name: "/event", path: "Event" }, { name: "/ticket", path: "Ticket"}, { name: "/contactUs", path: "Contact Us" }].map(
                            (item, index) => (
                                <Link
                                    key={index}
                                    to={item.name}
                                    className={`font-medium transition-colors ${isScrolled
                                        ? "text-gray-700 hover:text-blue-600"
                                        : "text-white/90 hover:text-blue-400"
                                        }`}
                                >
                                    {item.path}
                                </Link>
                            )
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className={`focus:outline-none transition-colors ${isScrolled ? "text-gray-800" : "text-red-800"
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
                    className={`md:hidden border-t ${isScrolled
                        ? "bg-white text-gray-800 border-gray-200"
                        : "bg-white/10 backdrop-blur-lg text-white border-white/20"
                        }`}
                >
                    <ul className="flex flex-col px-6 py-4 space-y-3">
                        {[{ name: "/", path: "Home" }, { name: "/aboutUs", path: "About US" }, { name: "/ground", path: "Ground" }, { name: "/event", path: "Event" }, { name: "/ticket", path: "Ticket"}, { name: "/contactUs", path: "Contact Us" }].map(
                            (item, index) => (
                                <li key={index}>
                                    <Link
                                        to={item.path}
                                        className={`block font-medium transition-colors ${isScrolled
                                            ? "text-gray-700 hover:text-blue-600"
                                            : "text-white/90 hover:text-blue-400"
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            )
                        )}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;