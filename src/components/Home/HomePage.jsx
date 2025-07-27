import HeroSection from "./HeroSection";
import { Link } from "react-router-dom";
import AboutUs from "../About/AboutUs";

function HomePage() {
  return (
    <div className="text-gray-800">
      <HeroSection />
      {/* About Section */}

      <AboutUs />
    </div>
  );
}

export default HomePage;
