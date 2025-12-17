import React from "react";

const aboutData = [
  {
    title: "Passion for Football",
    description:
      "Football is not just a game for us, it is a passion. We believe in discipline, teamwork, and continuous growth through the beautiful game.",
        image: "/src/assets/football.jpg",
  },
  {
    title: "Professional Training",
    description:
      "Our players receive professional-level training focusing on fitness, tactics, and technical skills to compete at higher levels.",
    image: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6",
  },
  {
    title: "Youth Development",
    description:
      "We nurture young talent by providing structured coaching, mentorship, and competitive exposure from an early age.",
    image: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d",
  },
  {
    title: "Community & Team Spirit",
    description:
      "We promote sportsmanship and unity by bringing together players, fans, and communities through football.",
    image: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf",
  },
];

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-20 mt-16">
      {aboutData.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center gap-10 ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-500 mb-4">
              {item.title}
            </h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
