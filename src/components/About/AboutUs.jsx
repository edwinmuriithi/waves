import React, { useState } from "react";
import OurApproach from "./OurApproach";
import OurMission from "./OurMission";
import OurTeam from "./OurTeam";

const AboutUs = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <main className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-6">About Us</h2>

      <section className="border-b border-gray-300 mb-4">
        <button
          onClick={() => toggleSection("history")}
          className="flex justify-between items-center w-full p-4 text-left bg-gray-200 hover:bg-gray-300 focus:outline-none"
        >
          <span className="text-lg font-semibold">Our History</span>
          <span className="text-xl">
            {expandedSection === "history" ? "-" : "+"}
          </span>
        </button>
        {expandedSection === "history" && (
          <div className="p-4 bg-gray-100">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
              ratione perspiciatis nihil sunt numquam! Ex voluptatem esse
              reprehenderit necessitatibus autem, repudiandae temporibus
              dignissimos sequi quia soluta dolor tempore tenetur commodi!
            </p>
          </div>
        )}
      </section>

      <section className="border-b border-gray-300 mb-4">
        <button
          onClick={() => toggleSection("mission")}
          className="flex justify-between items-center w-full p-4 text-left bg-gray-200 hover:bg-gray-300 focus:outline-none"
        >
          <span className="text-lg font-semibold">Our Mission</span>
          <span className="text-xl">
            {expandedSection === "mission" ? "-" : "+"}
          </span>
        </button>
        {expandedSection === "mission" && (
          <div className="p-4 bg-gray-100">
            <OurMission />
          </div>
        )}
      </section>

      <section className="border-b border-gray-300 mb-4">
        <button
          onClick={() => toggleSection("approach")}
          className="flex justify-between items-center w-full p-4 text-left bg-gray-200 hover:bg-gray-300 focus:outline-none"
        >
          <span className="text-lg font-semibold">Our Approach</span>
          <span className="text-xl">
            {expandedSection === "approach" ? "-" : "+"}
          </span>
        </button>
        {expandedSection === "approach" && (
          <div className="p-4 bg-gray-100">
            <OurApproach />
          </div>
        )}
      </section>

      <section className="border-b border-gray-300 mb-4">
        <button
          onClick={() => toggleSection("team")}
          className="flex justify-between items-center w-full p-4 text-left bg-gray-200 hover:bg-gray-300 focus:outline-none"
        >
          <span className="text-lg font-semibold">Our Team</span>
          <span className="text-xl">
            {expandedSection === "team" ? "-" : "+"}
          </span>
        </button>
        {expandedSection === "team" && (
          <div className="p-4 bg-gray-100">
            <OurTeam />
          </div>
        )}
      </section>
    </main>
  );
};

export default AboutUs;
