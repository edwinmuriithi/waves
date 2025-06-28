import HomePage from "./components/Home/HomePage";
import Navbar from "./components/Header/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
