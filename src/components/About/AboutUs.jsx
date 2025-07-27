import React from "react";
import { useState, useEffect } from "react";
import marine from "../../assets/ocean-waves.jpg";
import missionImage from "../../assets/mission.jpeg";
import Shark from "../../assets/shark.jpg";
import TypewriterText from "./TypewriterText";
import { actionItems } from "../TakeAction/actions";

const AboutUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Effect to change the current index every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % actionItems.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  return (
    <section className="bg-blue-50 text-blue-900 ">
      <div className="py-16 px-6 md:px-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Wildlife Advocates for Vital Ecosystems and Species (WAVES)
        </h1>

        <div className="flex flex-col md:flex-row gap-5 mx-auto items-center">
          <p className="flex-1 text-lg md:text-xl text-justify mx-auto mb-12">
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

          <div className="flex justify-center mb-12">
            <img
              src={marine}
              alt="Marine Habitat"
              className="w-full max-w-lg rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Mission Section */}
        <div className="p-6 md:p-10 mb-12 flex flex-col md:flex-row">
          <img
            src={missionImage}
            alt="Our Mission"
            className="w-full max-w-md rounded-lg mb-6 shadow-md"
          />
          <div className="flex flex-col">
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
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
          Why We Exist
        </h2>

        {/* Shark Icon */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto ">
          <p className=" md:text-lg leading-relaxed p-5 shadow-xs shadow-orange-500 ">
            Each year, over <strong>97 million sharks</strong> are slaughtered,
            many for the cruel and unsustainable shark fin trade, a global
            market valued at over USD 400 million.
          </p>

          <p className=" md:text-lg leading-relaxed p-5 shadow-xs shadow-orange-500 ">
            Since the 1970s, shark and ray populations have plummeted by more
            than 71%, with iconic species like hammerheads, blacktips, and reef
            sharks now listed as endangered or critically endangered.
          </p>

          <p className=" md:text-lg leading-relaxed p-5 shadow-xs shadow-orange-500 ">
            In Kenya, over <strong>80% of native shark and ray species</strong>{" "}
            face extinction threats due to illegal fishing, unregulated bycatch,
            and poor enforcement.
          </p>

          <p className=" md:text-lg leading-relaxed p-5 shadow-xs shadow-orange-500 ">
            Limited public awareness and weak legal safeguards have left the
            country’s marine biodiversity vulnerable to exploitation.
          </p>

          <p className=" md:text-lg leading-relaxed p-5 shadow-xs shadow-orange-500 ">
            WAVES was formed to reverse this. We aim to end illegal shark
            finning, stop trafficking of endangered species, and ensure Kenya’s
            marine ecosystems are governed by{" "}
            <strong>justice, science, and community action</strong>.
          </p>

          <p className=" md:text-lg leading-relaxed p-5 shadow-xs shadow-orange-500 ">
            We unite{" "}
            <strong>
              lawyers, scientists, advocates, and local communities
            </strong>{" "}
            in a rights-based, evidence-driven mission to restore ocean
            integrity and hold violators accountable.
          </p>
        </div>
      </div>
      <div
        className="bg-cover bg-no-repeat h-165 font-bold text-white flex justify-space-between items-center font-serif font-stretch-200% px-3"
        style={{
          backgroundImage: `url(${Shark})`,
        }}
      >
        <div className="flex-1">
          {" "}
          <TypewriterText />
        </div>
        <div className="flex-1 items-center w-full lg:w-1/2 p-4 shadow-md shadow-orange-500">
          <div className=" overflow-hidden shadow-m hover:shadow-lg transition-all p-4">
            <p className="text-lg">{actionItems[currentIndex].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
