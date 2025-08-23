import React, { useState, useEffect } from "react";
import marine from "../assets/ocean-waves.jpg";
import missionImage from "../assets/mission.jpeg";
import Shark from "../assets/shark.jpg";
import { actionItems } from "./data/actions";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Effect to change the current index every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % actionItems.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const categories = [...new Set(actionItems.map((item) => item.category))];

  return (
    <section className="bg-blue-50 text-blue-900 ">
      <div className="py-16 px-6 md:px-16">
        <h1
          className="text-4xl md:text-5xl font-bold text-center mb-8"
          data-aos="fade-down"
        >
          Wildlife Advocates for Vital Ecosystems and Species (WAVES)
        </h1>

        <div className="flex flex-col md:flex-row gap-5 mx-auto items-center">
          <p
            className="flex-1 text-lg md:text-xl text-justify mx-auto mb-12"
            data-aos="fade-right"
          >
            <strong>WAVES </strong>
            is a coalition of legal experts, conservationists, researchers, and
            community advocates working to end illegal shark finning and protect
            our oceans. Through strategic litigation, policy reform, grassroots
            education, and investigations, we are closing enforcement gaps,
            empowering communities, and restoring ecological balance. We are an
            open and dynamic partnership committed to protecting Kenya’s
            endangered marine species and their ecosystems. Together, we are
            united by a shared vision: oceans where marine wildlife thrives,
            laws are enforced, and communities are at the heart of conservation.
          </p>

          <div
            className="flex justify-center mb-12"
            data-aos="fade-left"
          >
            <img
              src={marine}
              alt="Ocean waves symbolizing marine habitat"
              className="w-full max-w-lg rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        </div>

        {/* Mission Section */}
        <div
          className="p-6 md:p-10 mb-12 flex flex-col md:flex-row items-center"
          data-aos="fade-up"
        >
          <img
            src={missionImage}
            alt="Volunteers working on marine conservation mission"
            className="w-full max-w-md rounded-lg mb-6 shadow-md"
            loading="lazy"
          />
          <div className="flex flex-col md:ml-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-800 text-center">
              Our Mission
            </h2>
            <p className="md:text-lg leading-relaxed text-center">
              Through legal{" "}
              <strong>advocacy, science, strategic litigation,</strong> and{" "}
              <strong>grassroots action,</strong> WAVES aims to dismantle the
              networks that threaten <strong>marine biodiversity</strong> and to
              ensure a sustainable future for our oceans.
            </p>
          </div>
        </div>
      </div>

      {/* Why We Exist */}
      <div className="bg-blue-950 text-white p-6 md:p-10">
        <h2
          className="text-2xl md:text-3xl font-semibold mb-4 text-center"
          data-aos="fade-down"
        >
          Why We Exist
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto">
          {[
            "Each year, over 97 million sharks are slaughtered, many for the cruel and unsustainable shark fin trade, a global market valued at over USD 400 million.",
            "Since the 1970s, shark and ray populations have plummeted by more than 71%, with iconic species like hammerheads, blacktips, and reef sharks now listed as endangered or critically endangered.",
            "In Kenya, over 80% of native shark and ray species face extinction threats due to illegal fishing, unregulated bycatch, and poor enforcement.",
            "Limited public awareness and weak legal safeguards have left the country’s marine biodiversity vulnerable to exploitation.",
            "WAVES was formed to reverse this. We aim to end illegal shark finning, stop trafficking of endangered species, and ensure Kenya’s marine ecosystems are governed by justice, science, and community action.",
            "We unite lawyers, scientists, advocates, and local communities in a rights-based, evidence-driven mission to restore ocean integrity and hold violators accountable.",
          ].map((text, i) => (
            <p
              key={i}
              className="md:text-lg leading-relaxed p-5 shadow-sm shadow-orange-500 rounded-md bg-blue-900/30"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {text}
            </p>
          ))}
        </div>
      </div>

      {/* Typewriter and Description Section */}
      <div
        className="relative bg-cover bg-no-repeat h-auto md:h-165 font-bold text-white flex flex-col lg:flex-row justify-between items-center font-serif px-3"
        style={{
          backgroundImage: `url(${Shark})`,
        }}
      >
        {/* Dark overlay for readability */}

        <div className="relative z-10 flex-1 flex flex-col justify-center p-4">
          <div className="flex flex-col gap-6">
            <div className="font-serif font-extrabold leading-10 md:leading-20 text-center md:text-left">
              <span className="mr-4 text-4xl md:text-5xl">
                Join the Movement
              </span>
              <div className="min-h-[60px]">
                <Typewriter
                  options={{
                    strings: [
                      " Protect Marine Life",
                      " Fight Plastic Pollution",
                      " Empower Coastal Communities",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 70,
                    deleteSpeed: 100,
                  }}
                />
              </div>
            </div>
            <div className="mt-4">
              <ul className="flex flex-wrap justify-center lg:justify-start gap-4 mb-4">
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
            <p className="text-lg font-bold text-center lg:text-left">
              Take action to protect our ocean and its creatures
            </p>
            <Link
              to="/take-action"
              className="bg-blue-900 hover:bg-orange-600 text-white w-full lg:w-1/2 text-lg font-bold py-2 px-4 rounded-xl transition-all hover:shadow-md text-center"
            >
              Take Action
            </Link>
          </div>
        </div>
        <div className="relative z-10 flex-1 flex items-start p-4 shadow-md shadow-orange-500">
          <div className="overflow-hidden shadow-md hover:shadow-lg transition-all p-4 w-full bg-blue-900/40 rounded-lg">
            <p className="text-lg md:text-xl">
              {actionItems[currentIndex].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
