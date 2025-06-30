
import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "./HeroSection";
import ImageSlider from "./ImageSlider";

const newsData = [
  { image: "", title:"No Title", desciption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsa laboriosam iusto voluptas error nobis illum placeat ipsam repudiandae eaque maiores asperiores, exercitationem odit earum sint impedit soluta laudantium beatae!" },
  { image: "", title:"No Title", desciption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsa laboriosam iusto voluptas error nobis illum placeat ipsam repudiandae eaque maiores asperiores, exercitationem odit earum sint impedit soluta laudantium beatae!" },
  { image: "", title:"No Title", desciption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsa laboriosam iusto voluptas error nobis illum placeat ipsam repudiandae eaque maiores asperiores, exercitationem odit earum sint impedit soluta laudantium beatae!" },
  { image: "", title:"No Title", desciption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsa laboriosam iusto voluptas error nobis illum placeat ipsam repudiandae eaque maiores asperiores, exercitationem odit earum sint impedit soluta laudantium beatae!" },
  { image: "", title:"No Title", desciption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsa laboriosam iusto voluptas error nobis illum placeat ipsam repudiandae eaque maiores asperiores, exercitationem odit earum sint impedit soluta laudantium beatae!" },
  { image: "", title:"No Title", desciption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsa laboriosam iusto voluptas error nobis illum placeat ipsam repudiandae eaque maiores asperiores, exercitationem odit earum sint impedit soluta laudantium beatae!" },
  { image: "", title:"No Title", desciption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsa laboriosam iusto voluptas error nobis illum placeat ipsam repudiandae eaque maiores asperiores, exercitationem odit earum sint impedit soluta laudantium beatae!" },

];

const NewsCard = ({ image, title, desciption }) => (
  <div className="relative group bg-white shadow-md rounded-xl overflow-hidden w-full transition duration-300 transform hover:shadow-xl hover:scale-[1.01]">
  
    <div className="relative h-40 w-full overflow-hidden">
      {image ? (
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 group-active:scale-95"
        />
      ) : (
        <div className="h-full w-full bg-gray-300 flex items-center justify-center text-gray-500">
          No Image
        </div>
      )}

    
      <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4 text-center">
        <p className="text-sm mb-4 font-serif">{desciption}</p>
        <Link
          to="/news"
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium rounded-full transition duration-300"
        >
          Read More
        </Link>
      </div>
    </div>

   
    <div className="p-4">
      <h2 className="text-lg font-semibold text-gray-800">{title || "Untitled News"}</h2>
    </div>
  </div>
);

function HomePage() {
  return (
    <div className="bg-white text-gray-800">
      <HeroSection />

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold border-b-4 inline-block border-blue-200 mb-6">
          About Waves
        </h1>
        <p className="font-serif mb-4 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem labore dolore quaerat...
        </p>
        <p className="font-serif max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum veniam iure temporibus...
        </p>
      </section>

      {/* Programs Section (Slider) */}
      <section className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h1 className="text-center text-3xl font-semibold mb-6 border-b-4 border-blue-200 inline-block">
          Our Programs
        </h1>
        <ImageSlider />
      </section>

      {/* News and Articles */}
      <section className="bg-blue-50 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-center text-3xl font-semibold mb-6 border-b-4 border-blue-200 inline-block">
          News & Articles
        </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {newsData.map((news, index) => (
              <NewsCard key={index} {...news} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;

