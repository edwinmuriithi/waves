import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import OurPrograms from "./pages/OurPrograms";
import Contact from "./pages/Contact";
import GetInvolved from "./pages/GetInvolved";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OurApproach from "./pages/OurApproach";
import TakeAction from "./pages/TakeAction";
import Navbar from "./components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import DefaultSEO from "./components/DefaultSEO"; 

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
    });
  }, []);

  return (
    <main>
      <Router>
        {/* ✅ Global SEO applied here */}
        <DefaultSEO />

        <Navbar />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/our-programs" element={<OurPrograms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/take-action" element={<TakeAction />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/our-approach" element={<OurApproach />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
};

export default App;
