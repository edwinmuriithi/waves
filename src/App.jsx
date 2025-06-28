import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Header/Navbar'
import HomePage from "./components/Home/HomePage";
import HeroSection from "./components/HeroSection";


export default function App() {

  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Hero" element={<HeroSection />} />
        </Routes>
    </Router>
  );
}

