import { useEffect, useState } from "react";
import marine1 from "../assets/OceanImageBank_AlexMustard_04.jpg";
import marine2 from "../assets/OceanImageBank_AnitaKainrath_MangrovePhotographyAwards_01.jpg";
import marine3 from "../assets/OceanImageBank_CinziaOseleBismarck_02.jpg";
import marine4 from "../assets/OceanImageBank_CinziaOseleBismarck_22.jpg";
import marine5 from "../assets/OceanImageBank_RenataRomeo_41.jpg";
import marine6 from "../assets/OceanImageBank_JordanRobins_01.jpg";
import marine7 from "../assets/OceanImageBank_RenataRomeo_43.jpg";



const items = [
  {
    image: marine1,
    title: "Sometopic",
    description: "Marine imagery with fish and coral.",
  },
  {
    image: marine2,
    title: "Sometopic 1",
    description: "Deep sea life: turtles, jellyfish, and more.",
  },
  {
    image: marine3,
    title: "sometopic 2",
    description: "Colorful reef full of vibrant species.",
  },
  {
    image: marine4,
    title: "Sometopic 3",
    description: "Schools of fish swimming in open water.",
  },
  {
    image: marine5,
    title: "Some topic 4",
    description: "Underwater plants and marine invertebrates.",
  },
  {
    image: marine6,
    title: "Some topic 5",
    description: "A serene ocean scene with marine fauna.",
  },
    {
    image: marine7,
    title: "Some topic 5",
    description: "A serene ocean scene with marine fauna.",
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, 10000);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ position: "relative", height: "400px" }}>
      {items.map((item, i) => (
                <div
                key={i}
                className={`${
                    i === index ? "flex" : "hidden"
                } flex-col justify-center items-center h-full text-white font-bold px-5 transition-opacity duration-500`}
                style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    textShadow: "0 0 5px rgba(0,0,0,0.7)",
                }}
                >

          <h1>{item.title}</h1>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
