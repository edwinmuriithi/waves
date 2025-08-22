import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";

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
