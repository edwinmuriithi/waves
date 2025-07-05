import { useEffect, useState } from "react";
import marine1 from "../../assets/OceanImageBank_AlexMustard_04.jpg";
import marine2 from "../../assets/OceanImageBank_AnitaKainrath_MangrovePhotographyAwards_01.jpg";
import marine3 from "../../assets/OceanImageBank_CinziaOseleBismarck_02.jpg";
import marine4 from "../../assets/OceanImageBank_CinziaOseleBismarck_22.jpg";
import marine5 from "../../assets/OceanImageBank_RenataRomeo_41.jpg";
import marine6 from "../../assets/OceanImageBank_JordanRobins_01.jpg";
import marine7 from "../../assets/OceanImageBank_RenataRomeo_43.jpg";

const items = [
  {
    image: marine1,
    title: "Sometopic",
    description: "Marine imagery with fish and coral.",
  },
  {
    image: marine2,
    title: "Sometopic 1",
    description: "Deep sea life: turtles, jellyfish, and more.",
  },
  {
    image: marine3,
    title: "Sometopic 2",
    description: "Colorful reef full of vibrant species.",
  },
  {
    image: marine4,
    title: "Sometopic 3",
    description: "Schools of fish swimming in open water.",
  },
  {
    image: marine5,
    title: "Some topic 4",
    description: "Underwater plants and marine invertebrates.",
  },
  {
    image: marine6,
    title: "Some topic 5",
    description: "A serene ocean scene with marine fauna.",
  },
  {
    image: marine7,
    title: "Some topic 6",
    description: "A serene ocean scene with marine fauna.",
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
          <h1 className="text-4xl">{item.title}</h1>
          <p className="text-lg">{item.description}</p>
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
