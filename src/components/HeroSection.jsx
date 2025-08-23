import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import marine1 from "../assets/ocean6.jpg";
import marine2 from "../assets/ocean5.jpg";
import marine3 from "../assets/ocean3.jpg";
import Button from "./shared/Button";

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
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("next");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const preloadImages = () => {
      return Promise.all(
        items.map((item) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = item.image;
            img.onload = resolve;
          });
        })
      );
    };

    preloadImages().then(() => {
      setLoading(false);
    });

    const id = setInterval(() => {
      handleNext();
    }, 10000);
    return () => clearInterval(id);
  }, []);

  const handleNext = () => {
    setDirection("next");
    setIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setDirection("prev");
    setIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="relative h-150 md:h-screen overflow-hidden">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <span className="text-white">Loading...</span>
        </div>
      )}

      <AnimatePresence>
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 flex flex-col justify-center items-center h-full text-white font-bold px-5"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              zIndex: index === i ? 1 : 0,
            }}
            initial={{ opacity: 0, x: direction === "next" ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction === "next" ? -100 : 100 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-black opacity-40" />
            <h1 className="absolute text-center text-2xl md:text-6xl top-1/2 transform -translate-y-1/2">
              {item.title}
            </h1>
          </motion.div>
        ))}
      </AnimatePresence>

      <div className="absolute bottom-5 left-5 z-50 flex flex-col items-start backdrop-blur-3xl p-4 mb-2 w-fit rounded-lg bg-blue-900 bg-opacity-70">
        <span className="text-white text-lg md:text-2xl text-center p-4 mb-4">
          Your support empowers our ocean conservation efforts
        </span>
        <Button
          onClick={() => (window.location.href = "#donate")}
          className="rounded-b-full md:rounded-b-lg flex flex-col p-3 text-white transition duration-300 ease-in-out"
          size={"lg"}
        >
          <span className="font-bold">Make a Difference Today &rarr;</span>
        </Button>
      </div>

      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button
          onClick={handlePrev}
          className="bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg z-50"
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
          className="bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg z-50"
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
