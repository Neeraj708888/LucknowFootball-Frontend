import React, { useState, useEffect } from "react";

const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1517816428104-797678c7cf0d?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
];

const Hero = () => {
    const [current, setCurrent] = useState(0);

    // Auto-slide every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            {/* Background Images */}
            <div className="absolute inset-0">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        // alt={`slide-${index}`}
                        alt='banner'
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
                            }`}
                    />
                ))}
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Text Content */}
            <div className="relative z-10 text-center text-white px-4 sm:px-8 max-w-2xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                    Welcome to <span className="text-blue-400">Lucknow Football Club</span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl mb-6 leading-relaxed">
                    Discover, share, and cherish your favorite moments with our stunning photo gallery.
                    Explore a world of captivating images and create your own collection today!
                </p>

                {/* Transparent text button */}
                {/* <button
                    className="relative font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300 bg-clip-text text-transparent hover:scale-105"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    Get Started
                </button> */}
            </div>


            {/* Dots Navigation */}
            <div className="absolute bottom-6 flex space-x-3 z-10">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === current
                            ? "bg-white scale-125 shadow-md"
                            : "bg-gray-400 hover:bg-gray-300"
                            }`}
                    ></button>
                ))}
            </div>
        </section>
    );
};

export default Hero;