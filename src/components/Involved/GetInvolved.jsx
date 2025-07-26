import React from 'react';

function GetInvolved() {
  const data = [
    {
      image: "https://plus.unsplash.com/premium_photo-1679689588082-33cef290be4d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmVhY2glMjBjbGVhbmluZ3xlbnwwfHwwfHx8MA%3D%3D",
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
      image: "https://plus.unsplash.com/premium_photo-1661827154548-827bb8bc5de8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmVjb21lJTIwYSUyMHBhcnRuZXIlMjBtYXJpbmUlMjBsaWZlfGVufDB8fDB8fHww",
      heading: "Partner with Us",
      text: "Become a partner and collaborate with us on projects that promote sustainability and conservation.",
      btn: "Become a Partner",
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1684358604857-407f08e0458d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Leave a Gift in Your Will",
      text: "Find out how you can leave a legacy gift in your will to support marine conservation and justice.",
      btn: "Leave a Gift",
    },
  ];

  return (
    <section className="bg-blue-50 text-blue-900 py-20">
      {/* Header Image */}
      <div className="overflow-hidden hover:shadow-md mb-12 shadow-[inset_-4px_-4px_10px_rgba(0,0,0,0.2)]">
        <img
          src="https://lapa.africa/images/support.jpg"
          alt="Crab in Water Bottle"
         className="w-full h-[350px] object-contain sm:object-cover"
        />
      </div>

      {/* Intro Text */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4 font-serif">
          Get Involved with WAVES
        </h2>
        <p className="text-lg md:text-xl text-blue-700 font-sans">
          Discover how you can support Wildlife Advocates for Vital Ecosystems and Species (WAVES)
          in our fight for ocean justice and marine biodiversity protection.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300  flex flex-col"
          >
            <img
              src={item.image}
              alt={item.heading}
              className="h-100 w-full object-cover transition duration-1000 ease-in-out transform hover:scale-110"
            />
            <div className="p-5 flex flex-col justify-between flex-grow ">
              <h3 className="text-x1 text-2xl font-serif font-semibold text-blue-800 hover:underline decoration-cyan-500 decoration-4 mb-4 transition-all duration-700 ease-in-out">{item.heading}</h3>
              <p className="text-sm text-blue-700 mb-4 font-serif">{item.text}</p>
              <button className="mt-auto bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-md self-start hover:scale-105 hover:cursor-pointer">
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
