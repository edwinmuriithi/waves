import HeroSection from "./HeroSection";
import ImageSlider from "./ImageSlider";

function HomePage() {
  return (
    <div className="text-gray-800">
      <HeroSection />

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold border-b-4 inline-block border-blue-200 mb-6">
          About Waves
        </h1>
        <p className="font-serif mb-4 max-w-3xl mx-auto ">
          <strong>
            {" "}
            WAVES (Wildlife Advocates for Vital Ecosystems and Species){" "}
          </strong>
          is a coalition of legal experts, conservationists, researchers, and
          community advocates working to end illegal shark finning and protect
          our oceans. Through strategic litigation, policy reform, grassroots
          education, and investigations, we are closing enforcement gaps,
          empowering communities, and restoring ecological balance..
        </p>
      </section>

      {/* Programs Section (Slider) */}
      <section className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h1 className="text-center text-3xl font-semibold mb-6 border-b-4 border-blue-200 inline-block">
          Meet Our Team
        </h1>
        <ImageSlider />
      </section>
    </div>
  );
}

export default HomePage;
