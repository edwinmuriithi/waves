import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const newsData = [
  {
    image: "https://via.placeholder.com/600x300?text=News+1",
    title: "Program Jenga wall",
    desciption: "This is the first breaking news item.",
  },
  {
    image: "https://via.placeholder.com/600x300?text=News+2",
    title: "Program 24th",
    desciption: "Here is some information about the second news.",
  },
  {
    image: "https://via.placeholder.com/600x300?text=News+3",
    title: "Program engage",
    desciption: "Details on the third major event in the news.",
  },
    {
    image: "https://via.placeholder.com/600x300?text=News+3",
    title: "Program get involved",
    desciption: "Details on the third major event in the news.",
  },  {
    image: "https://via.placeholder.com/600x300?text=News+3",
    title: "Program 3",
    desciption: "Details on the third major event in the news.",
  },  {
    image: "https://via.placeholder.com/600x300?text=News+3",
    title: "Program water",
    desciption: "Details on the third major event in the news.",
  },  {
    image: "https://via.placeholder.com/600x300?text=News+3",
    title: "Program marine",
    desciption: "Details on the third major event in the news.",
  },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsData.length);
      setImageLoaded(false);
    }, 10000); 

    return () => clearInterval(interval);
  }, []);

  const currentItem = newsData[currentIndex];

  return (
    <section className="w-full max-w-7xl mx-auto py-16 px-4 bg-gray-50">
      <div className="flex flex-col md:flex-row items-center gap-10 transition-opacity duration-1000">
      
        <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-xl relative">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-2xl z-10"></div>
          )}
          <img
            src={currentItem.image}
            alt={`Slide ${currentIndex}`}
            className={`w-full h-72 md:h-96 object-cover transition-opacity duration-1000 ease-in-out ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>

       
        <div className="w-full md:w-1/2 space-y-6 transition-opacity duration-1000 ease-in-out">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            {currentItem.title}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {currentItem.desciption}
          </p>
          <Link
            to="/news"
            className="inline-block bg-white hover:bg-blue-500 text-blue-500 hover:text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-blue-600 transition duration-300 shadow-md"
          >
            View More
          </Link>
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center mt-6 gap-2">
        {newsData.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setImageLoaded(false);
            }}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex
                ? 'bg-blue-600 scale-110'
                : 'bg-gray-400 hover:bg-blue-400'
            } transition-all duration-300`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default ImageSlider;
