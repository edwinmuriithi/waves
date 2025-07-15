import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-blue-50 text-blue-900 py-16 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Wildlife Advocates for Vital Ecosystems and Species (WAVES)
        </h1>
        <p className="text-lg md:text-xl text-center max-w-3xl mx-auto mb-12">
          We are an open and dynamic partnership committed to protecting Kenya’s endangered marine species and their ecosystems.
          Together, we are united by a shared vision: oceans where marine wildlife thrives, laws are enforced, and communities are at the heart of conservation.
        </p>

        {/* Marine Habitat Illustration */}
        <div className="flex justify-center mb-8">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=200&q=80"
            alt="Ocean illustration"
            className="w-32 h-32 object-cover rounded-full shadow-lg"
          />
        </div>


        {/* Mission Section */}
        <div className="bg-white shadow-lg rounded-2xl p-6 md:p-10 mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-800">Our Mission</h2>
          <p className="text-base md:text-lg leading-relaxed">
            Through legal advocacy, science, strategic litigation, and grassroots action, WAVES aims to dismantle the networks
            that threaten marine biodiversity and to ensure a sustainable future for our oceans.
          </p>
        </div>

        {/* Why We Exist */}
        <div className="bg-blue-100 border-l-4 border-blue-600 rounded-2xl p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-800">Why We Exist</h2>

          {/* Shark Icon */}
          <div className="flex items-center gap-4 mb-4">
            <img
              src="https://www.svgrepo.com/show/492988/shark.svg"
              alt="Shark icon"
              className="w-10 h-10"
            />
            <p className="text-base md:text-lg leading-relaxed">
              Each year, over <strong>97 million sharks</strong> are slaughtered, many for the cruel and unsustainable shark fin trade,
              a global market valued at over USD 400 million.
            </p>
          </div>

          <p className="text-base md:text-lg leading-relaxed mb-4">
            Since the 1970s, shark and ray populations have plummeted by more than 71%, with iconic species like hammerheads, blacktips,
            and reef sharks now listed as endangered or critically endangered.
          </p>

          {/* Ray Icon */}
          <div className="flex items-center gap-4 mb-4">
            <img
              src="https://www.svgrepo.com/download/258522/stingray.svg"
              alt="Ray icon"
              className="w-10 h-10"
            />

            <p className="text-base md:text-lg leading-relaxed">
              In Kenya, over <strong>80% of native shark and ray species</strong> face extinction threats due to illegal fishing,
              unregulated bycatch, and poor enforcement.
            </p>
          </div>

          <p className="text-base md:text-lg leading-relaxed mb-4">
            Limited public awareness and weak legal safeguards have left the country’s marine biodiversity vulnerable to exploitation.
          </p>

          <p className="text-base md:text-lg leading-relaxed">
            WAVES was formed to reverse this. We aim to end illegal shark finning, stop trafficking of endangered species,
            and ensure Kenya’s marine ecosystems are governed by <strong>justice, science, and community action</strong>.
          </p>

          <p className="text-base md:text-lg leading-relaxed mt-4">
            We unite <strong>lawyers, scientists, advocates, and local communities</strong> in a rights-based, evidence-driven mission
            to restore ocean integrity and hold violators accountable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
