import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const newsData = [
  {
    id: 1,
    image: "https://lapa.africa/images/team/amy.jpg",
    title: "Amy P. Wilson",
    description:
      "Amy P. Wilson is the co-founder of Lawyers for Animal Protection in Africa. She is currently working as the Brooks Institute for Animal Rights Law and Policy Fellow at UCLA School of Law's Animal Law and Policy Program. Amy is the first South African attorney to graduate with a Master&apos;s degree in Animal Law. She has over ten years of legal experience and her research focuses on the intersection of the rights of animals, humans and the environment in law and policy.",
  },
    {
    id: 5,
    image: "https://lapa.africa/images/team/judy.jpg",
    title: "Judy Muriithi",
    description:
    "Judy Muriithi is a co-founder of Lawyers for Animal Protection in Africa and the current CEO. She is a passionate environmental conservation attorney with expertise in wildlife forensics, data analysis, and risk assessment. Judy leads capacity-building initiatives to promote sound governance in the fight against illegal wildlife trade."
  },
  {
    id: 2,
    image: "https://lapa.africa/images/team/corazon.jpg",
    title: "Corazon Nafula",
    description:
      "Corazon is the 2024 Veterinary Student of the Year and is engaged with LAPA as both a media and animal health advisor, advancing animal health and promoting sustainable food systems.",
  },
  {
    id: 3,
    image: "https://lapa.africa/images/team/gakuo.png",
    title: "Githeiya Gakuo",
    description:
      "Githeiya Gakuo is a dynamic professional with a strong background in governance, environmental conservation, and security. He has demonstrated leadership in combating illegal wildlife trade and promoting anti-money laundering techniques.",
  },
  {
    id: 4,
    image: "https://lapa.africa/images/team/celeste.png",
    title: "Celeste Viljoen",
    description:
      "Celeste is a law student at the University of Cape Town, South Africa, and a member of the winning team at the World Moot on International Law and Animal Rights 2024 Sub-Saharan Regional Rounds.",
  },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionDirection, setTransitionDirection] = useState("right");
  const [loading, setLoading] = useState(true);

  const handleNext = () => {
    setTransitionDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex === newsData.length - 1 ? 0 : prevIndex + 1
    );
    setLoading(true);
  };

  const handlePrev = () => {
    setTransitionDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? newsData.length - 1 : prevIndex - 1
    );
    setLoading(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full max-w-7xl mx-auto py-16 px-4 bg-gray-50">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Slide container */}
        <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-xl relative">
          {loading && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-2xl z-10"></div>
          )}
          <div
            className={`transition-all duration-500 ease-in-out object-contain p-1 ${
              transitionDirection === "right" ? "slide-right" : "slide-left"
            }`}
          >
            <img
              src={newsData[currentIndex].image}
              alt={`${newsData[currentIndex].title} program preview`}
              className="w-full h-72 md:h-96 object-cover"
              onLoad={() => setLoading(false)}
            />
          </div>

          {/* Navigation buttons */}
          <div className="absolute inset-0 flex items-center justify-between px-2">
            <button
              onClick={handlePrev}
              className="bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg"
              aria-label="Previous slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg"
              aria-label="Next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Content section */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            {newsData[currentIndex].title}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {newsData[currentIndex].description}
          </p>
          <Link
            to="/our-team"
            className="inline-flex items-center gap-2 bg-white text-blue-600 hover:text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-blue-600 transition duration-300 shadow-md"
          >
            Meet Our Team
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center mt-8 gap-2">
        {newsData.map((item, index) => (
          <button
            key={item.id}
            onClick={() => {
              setCurrentIndex(index);
              setTransitionDirection(index > currentIndex ? "right" : "left");
              setLoading(true);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-blue-600 scale-110"
                : "bg-gray-300 hover:bg-blue-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default ImageSlider;
