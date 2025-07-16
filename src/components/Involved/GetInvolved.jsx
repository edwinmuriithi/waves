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
      text: "Support our work by making a donation.Your contribution helps us continue our mission",
      btn: "Donate to Our Course",
    },
    {
      image: "https://lapa.africa/images/elephant.jpg",
      heading: "Partner with Us",
      text: "Become a partner and collaborate with us on projects that promote sustainability and conservation",
      btn: "Become a Partner",
    },
    {
      image: "https://lapa.africa/images/lion.jpg",
      heading: "Leave a gift in your will",
      text: "Find out how you can join thousands worldwide who have left a legacy gift in their Will to LAPA to help continue our essential work.",
      btn: "Leave a Gift",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto">
      {/* Header Image */}
      <div>
        <img
          src="https://lapa.africa/images/support.jpg"
          alt="Crab in Water Bottle"
          className="w-full h-[350px] object-cover"
        />
      </div>

      {/* Intro Text */}
      <div className="text-center mt-12 mb-8 font-medium font-serif text-2xl text-gray-700">
        <p>Discover how you can support Lawyers for Animal Protection in Africa in our</p>
        <p>fight for a better future for animals.</p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.heading}
              className="h-48 w-full object-cover"
            />
            <div className="p-4 flex flex-col justify-between h-[230px]">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{item.heading}</h3>
              <p className="text-sm text-gray-600 mb-4">{item.text}</p>
              <button className="mt-auto bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-md w-fit">
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
