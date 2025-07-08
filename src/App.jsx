import HomePage from "./components/Home/HomePage";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/About/AboutUs";
import OurPrograms from "./components/Programs/OurPrograms";
import Publications from "./components/Pubs/Publications";
import Contact from "./components/Contact/Contact";
import GetInvolved from "./components/Involved/GetInvolved";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OurApproach from "./components/About/OurApproach";
import OurTeam from "./components/About/OurTeam";
import OurMission from "./components/About/OurMission";

const App = () => {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/programs" element={<OurPrograms />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/get-involved" element={<GetInvolved />} />

           <Route path="/About/OurApproach" element={<OurApproach />} />

          <Route path="AboutUs/OurTeam" element={<OurTeam />} />
  

        </Routes>
        <Footer />
      </Router>
    </main>
  );
};

export default App;
