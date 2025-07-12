import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import marine1 from "../../assets/ocean1.jpg";
import marine2 from "../../assets/ocean2.jpg";
import marine3 from "../../assets/ocean3.jpg";
import marine4 from "../../assets/ocean4.jpg";
import marine5 from "../../assets/ocean5.jpg";
import marine6 from "../../assets/ocean6.jpg";

const items = [
  {
    image: marine1,
    title: "Marine Justice & Legal Advocacy Program",
  },
  {
    image: marine2,
    title: "Operation JAWS ",
  },
  {
    image: marine3,
    title: "Education & Community Engagement",
  },
  {
    image: marine4,
    title: "Marine Justice & Legal Advocacy Program",
  },
  {
    image: marine5,
    title: "Operation JAWS",
  },
  {
    image: marine6,
    title: "Education & Community Engagement",
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [transitionDirection, setTransitionDirection] = useState("right");

  useEffect(() => {
    const id = setInterval(() => {
      handleNext();
    }, 10000);
    return () => clearInterval(id);
  }, []);

  const handleNext = () => {
    setTransitionDirection("right");
    setIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setTransitionDirection("left");
    setIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div style={{ position: "relative", height: "400px" }}>
      <Link
        to="/"
        className="absolute bottom-0 left-0 p-5 backdrop-blur-3xl z-50"
      >
        <div className="text-white font-sans font-bold text-start">
          <h1 className="text-5xl underline mb-3 font-bold">Give Today</h1>
          <p>We couldn't do our ocean conservation work without you</p>
        </div>
      </Link>
      {items.map((item, i) => (
        <div
          key={i}
          className={`${
            i === index ? "flex" : "hidden"
          } flex-col justify-center items-center h-full text-white font-bold px-5 transition-opacity duration-500`}
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            textShadow: "0 0 5px rgba(0,0,0,0.7)",
            transform:
              i === index
                ? transitionDirection === "right"
                  ? "translateX(0)"
                  : "translateX(-100%)"
                : "translateX(100%)",
            transition: "transform 0.5s ease-in-out",
          }}
        >
          <h1 className="absolute md:relative text-center text-2xl backdrop-blur-sm top-1/4 md:top-1 md:text-5xl">
            {item.title}
          </h1>
        </div>
      ))}

      {/* Navigation buttons */}
      <div className="absolute inset-0 flex items-center justify-between px-4">
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
  );
}
