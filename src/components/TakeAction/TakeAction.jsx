import { useState } from "react";
import { section } from "framer-motion/client";

const TakeAction = () => {
  const [filter, setFilter] = useState("All");

  const actionItems = [
    {
      id: 1,
      title: "Take Action for Plastic Free July",
      category: "Plastic",
      image:
        "https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1991/SeaLion-DylanDehaas-Advocacy-ActionAlert-1200x1800.png?v=1750080473000",
      description:
        "Call on Congress to phase out harmful, wasteful single-use plastic products.",
    },
    {
      id: 2,
      title: "Take Action for Plastic Free July",
      category: "Plastic",
      image:
        "https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1991/Alert_122x1800_OceanImageBank_GrantThomas.jpg?v=1746032961000",
      description:
        "Call on Congress to phase out harmful, wasteful single-use plastic products.",
    },
    {
      id: 3,
      title: "Take Action for Plastic Free July",
      category: "Plastic",
      image:
        "https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1991/OceanImageBank_LewisBurnett_08.jpg?v=1722543579000",
      description:
        "Call on Congress to phase out harmful, wasteful single-use plastic products.",
    },
    {
      id: 4,
      title: "Take Action for Plastic Free July",
      category: "Plastic",
      image:
        "https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1991/HawaiianGreenSeaTurtle-ShaneMyers-Shutterstock-Advocacy-ActionAlert-1200x1800.jpg?v=1712682436000",
      description:
        "Call on Congress to phase out harmful, wasteful single-use plastic products.",
    },
    {
      id: 5,
      title: "Take Action for Plastic Free July",
      category: "Plastic",
      image:
        "https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1991/OceanImageBank_TomVierus_03.jpg?v=1731093444000",
      description:
        "Call on Congress to phase out harmful, wasteful single-use plastic products.",
    },
    {
      id: 6,
      title: "Take Action for Plastic Free July",
      category: "Plastic",
      image:
        "https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1991/DeepwaterHorizon-USNavy-MassCommunicationSpecialistSecondClassJustin-Stumberg-Released-Advocacy-ActionAlert-1200x1800.jpg?v=1697736076000",
      description:
        "Call on Congress to phase out harmful, wasteful single-use plastic products.",
    },
  ];

  const filteredItems =
    filter === "All"
      ? actionItems
      : actionItems.filter((item) => item.category === filter);

  return (
    <section className="bg-gray-50">
      {/* Main Title */}
      <h1 className="text-center text-4xl font-bold text-blue-900 my-8">
        Take Action!
      </h1>
      <h3 className="text-center text-xl font-bold text-blue-900 my-4">
        Join the movement to protect our ocean
      </h3>

      {/* Filter Buttons */}
      <div className="flex justify-center space-x-4 mb-4">
        <button
          onClick={() => setFilter("All")}
          className={`py-2 px-4 rounded-md ${
            filter === "All"
              ? "bg-blue-900 text-white"
              : "bg-gray-200 text-blue-900"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("Plastic")}
          className={`py-2 px-4 rounded-md ${
            filter === "Plastic"
              ? "bg-blue-900 text-white"
              : "bg-gray-200 text-blue-900"
          }`}
        >
          Plastic
        </button>
        <button
          onClick={() => setFilter("Biodiversity")}
          className={`py-2 px-4 rounded-md ${
            filter === "Biodiversity"
              ? "bg-blue-900 text-white"
              : "bg-gray-200 text-blue-900"
          }`}
        >
          Biodiversity
        </button>
        <button
          onClick={() => setFilter("Climate")}
          className={`py-2 px-4 rounded-md ${
            filter === "Climate"
              ? "bg-blue-900 text-white"
              : "bg-gray-200 text-blue-900"
          }`}
        >
          Climate
        </button>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row gap-8 p-5 md:p-10 items-center w-full max-w-7xl mx-auto">
        <img
          src="https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1991/Crab-WaterBottle-PierNirandara-Advocacy-ActionAlert-1200x1800.png?v=1751045521000"
          alt="Crab trapped in plastic water bottle showcasing ocean pollution"
          className="w-full lg:w-1/2 h-auto object-cover rounded-xl shadow-md hover:shadow-lg transition-all"
        />
        <div className="flex flex-col gap-6 w-full lg:w-1/2 p-0 lg:p-4">
          <span className="bg-gray-700 text-white font-bold py-1 px-3 rounded-md w-fit hover:bg-gray-600 transition">
            Plastic
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Take Action for Plastic Free July
          </h2>
          <p className="text-gray-700 text-lg">
            Call on Congress to phase out harmful, wasteful single-use plastic
            products.
          </p>
          <button className="bg-blue-900 hover:bg-blue-800 text-white text-lg font-bold py-3 px-6 rounded-xl w-fit transition-all hover:shadow-md">
            Take Action
          </button>
        </div>
      </div>

      {/* Filter */}
      <div className="relative w-11/12 md:w-2/3 lg:w-1/2 mx-auto my-8">
        <select
          className="appearance-none border-0 rounded-xl px-6 py-4 bg-blue-200 w-full h-16 text-blue-900 font-bold text-lg"
          defaultValue=""
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="" disabled>
            Filter
          </option>
          <option value="Biodiversity">Biodiversity</option>
          <option value="Climate">Climate</option>
          <option value="Plastic">Plastic</option>
        </select>
        <div className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-blue-900">
          ▼
        </div>
      </div>

      {/* Action Items Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5 py-5 lg:px-10 w-full max-w-7xl mx-auto">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 sm:h-56 object-cover"
            />
            <div className="p-6 space-y-4">
              <span className="bg-gray-700 text-white font-bold py-1 px-3 rounded-md hover:bg-gray-600 transition">
                {item.category}
              </span>
              <h3 className="text-xl font-bold text-blue-900">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
              <button className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg transition-all">
                Take Action
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Highlight Section */}
      <div className="flex flex-col lg:flex-row gap-8 bg-blue-800 rounded-xl overflow-hidden shadow-xl my-10 w-full max-w-7xl mx-auto">
        <div className="lg:w-1/2">
          <img
            src="https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1991/HawaiianGreenSeaTurtle-ShaneMyers-Shutterstock-Advocacy-ActionAlert-1200x1800.jpg?v=1712682436000"
            alt="Endangered Hawaiian Green Sea Turtle swimming in pristine tropical waters"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="lg:w-1/2 p-8 md:p-12 text-white flex flex-col justify-center space-y-6">
          <span className="bg-gray-200 text-blue-900 font-bold py-1 px-3 rounded-md w-fit hover:bg-gray-300 transition">
            Biodiversity
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Safeguard the Endangered Species Act
          </h2>
          <p className="text-blue-100 text-lg">
            Call on your elected officials to protect the Endangered Species Act
            and safeguard endangered and threatened animals and their habitats
            before it's too late.
          </p>
          <button className="bg-white hover:bg-gray-100 text-blue-900 text-lg font-bold py-3 px-6 rounded-xl w-fit transition-all hover:shadow-md">
            Take Action
          </button>
        </div>
      </div>
    </section>
  );
};

export default TakeAction;
