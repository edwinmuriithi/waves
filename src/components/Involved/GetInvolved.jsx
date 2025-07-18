import React from 'react';

function GetInvolved() {
  const data = [
    {
      image: "https://lapa.africa/images/get-involved/volunteer.jpg",
      heading: "Become a Volunteer",
      text: "Join us as a volunteer and help make a difference in our various projects and initiatives.",
      btn: "Become a Volunteer",
    },
    {
      image: "https://lapa.africa/images/get-involved/donate12.jpg",
      heading: "Donate",
      text: "Support our work by making a donation. Your contribution helps us continue our mission.",
      btn: "Donate to Our Cause",
    },
    {
      image: "https://lapa.africa/images/elephant.jpg",
      heading: "Partner with Us",
      text: "Become a partner and collaborate with us on projects that promote sustainability and conservation.",
      btn: "Become a Partner",
    },
    {
      image: "https://lapa.africa/images/lion.jpg",
      heading: "Leave a Gift in Your Will",
      text: "Find out how you can leave a legacy gift in your will to support marine conservation and justice.",
      btn: "Leave a Gift",
    },
  ];

  return (
    <section className="bg-blue-50 text-blue-900 py-16 px-6 md:px-16">
      {/* Header Image */}
      <div className="rounded-xl overflow-hidden hover:shadow-md mb-12 shadow-[inset_-4px_-4px_10px_rgba(0,0,0,0.2)]">
        <img
          src="https://lapa.africa/images/support.jpg"
          alt="Crab in Water Bottle"
          className="w-full h-[350px] object-cover"
        />
      </div>

      {/* Intro Text */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
          Get Involved with WAVES
        </h2>
        <p className="text-lg md:text-xl text-blue-700">
          Discover how you can support Wildlife Advocates for Vital Ecosystems and Species (WAVES)
          in our fight for ocean justice and marine biodiversity protection.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300  flex flex-col"
          >
            <img
              src={item.image}
              alt={item.heading}
              className="h-48 w-full object-cover hover:scale-105"
            />
            <div className="p-5 flex flex-col justify-between flex-grow ">
              <h3 className="text-xl font-semibold text-blue-800 mb-2 hover:underline decoration-cyan-500 decoration-4 mb-4 transition-all duration-700 ease-in-out">{item.heading}</h3>
              <p className="text-sm text-blue-700 mb-4">{item.text}</p>
              <button className="mt-auto bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-md self-start hover:scale-105">
                {item.btn}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GetInvolved;
