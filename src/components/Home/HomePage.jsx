import HeroSection from "./HeroSection";
import ImageSlider from "./ImageSlider";
import { actionItems } from "../TakeAction/actions";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Effect to change the current index every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % actionItems.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Extract unique categories from actionItems
  const categories = [...new Set(actionItems.map((item) => item.category))];

  return (
    <div className="text-gray-800">
      <HeroSection />

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold border-b-4 inline-block border-blue-200 mb-6">
          About Waves
        </h1>
        <p className="mb-4 text-lg md:text-center text-justify mx-auto">
          <strong>
            WAVES (Wildlife Advocates for Vital Ecosystems and Species)
          </strong>
          is a coalition of legal experts, conservationists, researchers, and
          community advocates working to end illegal shark finning and protect
          our oceans. Through strategic litigation, policy reform, grassroots
          education, and investigations, we are closing enforcement gaps,
          empowering communities, and restoring ecological balance.
        </p>
      </section>

      {/* Programs Section (Slider) */}
      <section className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h1 className="text-center text-3xl font-semibold mb-6 border-b-4 border-blue-200 inline-block">
          Meet Our Team
        </h1>
        <ImageSlider />
      </section>

      {/* Join the Movement Section */}
      <section className="mx-auto px-4 py-12 text-white bg-blue-700">
        <h1 className="text-start text-3xl font-semibold mb-4">
          Join the Movement
        </h1>

        <div className="flex flex-col lg:flex-row justify-between items-start">
          <div className="flex flex-col gap-6 lg:w-1/2 p-4">
            <div className="mt-8">
              <ul className="flex flex-wrap justify-start gap-4 mb-4">
                {categories.map((category, index) => (
                  <li
                    key={index}
                    className="bg-blue-800 text-white rounded-full px-4 py-2 text-center font-medium"
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-lg font-bold">
              Take action to protect our ocean and its creatures
            </p>

            <Link
              to="/take-action"
              className=" bg-blue-900 hover:bg-blue-800  text-white w-1/2 text-lg font-bold py-2 px-4 rounded-xl transition-all hover:shadow-md text-center"
            >
              Take Action
            </Link>
          </div>

          {/* Action Description Display */}
          <div className="flex flex-col items-center w-full lg:w-1/2 p-4">
            <div className=" overflow-hidden shadow-m hover:shadow-lg transition-all p-4">
              <p className="text-lg">{actionItems[currentIndex].description}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
