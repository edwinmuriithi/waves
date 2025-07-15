import React from "react";

const OurProgram = () => {
  return (
    <section className="bg-blue-50 text-blue-900 py-16 px-6 md:px-16">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-blue-800">
          Our Program
        </h1>

        {/* Marine Justice & Legal Advocacy */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center gap-4 mb-4">
            {/* Scroll/Law Icon */}
            <svg className="w-8 h-8 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 3H7a2 2 0 0 0-2 2v14a3 3 0 1 0 6 0h10a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM7 5h13v12H11a3 3 0 0 0-2 2H7V5z" />
            </svg>
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-800">
              Marine Justice & Legal Advocacy Program
            </h2>
          </div>
          <p className="text-lg mb-4">
            <strong>Objective:</strong> To strengthen Kenya’s legal and institutional frameworks for marine biodiversity protection by promoting robust, enforceable laws and accountability mechanisms that safeguard endangered marine species and ensure justice within the Blue Economy.
          </p>
          <p className="text-base leading-relaxed">
            <strong>Why It Matters:</strong> Kenya’s laws often lack enforcement or alignment with global best practices. Gaps in regulation, poor compliance, and low public participation make marine ecosystems vulnerable. This program ensures marine protection laws are implemented, enforced, and evolve with ecological threats.
          </p>
        </div>

        {/* Operation JAWS */}
        <div className="bg-blue-100 rounded-2xl shadow-md p-8 border-l-4 border-blue-600">
          <div className="flex items-center gap-4 mb-4">
            {/* Shark Fin Icon */}
            <svg className="w-8 h-8 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2 13s2.29-8.59 11-11c0 0 3.88 2.63 5 7 0 0-3.42-.76-7.08 3.44C7.26 16.4 6.91 18 6.91 18H2v-5z" />
            </svg>
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-800">
              Operation JAWS (Justice Against Wildlife Smugglers)
            </h2>
          </div>
          <p className="text-lg mb-4">
            A bold investigative intervention to expose and dismantle criminal networks trafficking shark fins and other endangered marine species. It combines covert investigations, legal action, and public advocacy to hold high-level wildlife criminals accountable.
          </p>
          <h3 className="text-xl font-semibold mb-2 text-blue-700">Goals of Operation JAWS:</h3>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Disrupt organized shark fin trafficking in Kenya and the WIO.</li>
            <li>Document environmental and economic crimes tied to illegal exports.</li>
            <li>Prosecute high-profile traffickers.</li>
            <li>Build pressure for governance reform and international cooperation.</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2 text-blue-700">Theory of Change: <em>Document → Inform → Disrupt</em></h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Document:</strong> Collect admissible evidence on illegal finning operations.</li>
            <li><strong>Inform:</strong> Share findings via media and public briefings.</li>
            <li><strong>Disrupt:</strong> Take legal and enforcement action to dismantle networks.</li>
          </ul>
        </div>

        {/* Education & Community Engagement */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center gap-4 mb-4">
            {/* People/Community Icon */}
            <svg className="w-8 h-8 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zM8 11c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V20h14v-3.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V20h6v-3.5c0-2.33-4.67-3.5-7-3.5z" />
            </svg>
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-800">
              Education & Community Engagement
            </h2>
          </div>
          <p className="text-lg mb-4">
            <strong>Objective:</strong> To build a culture of marine stewardship among Kenya’s coastal communities, especially youth and artisanal fishers, through education, outreach, and empowerment.
          </p>
          <p className="text-base leading-relaxed">
            <strong>Why It Matters:</strong> Many coastal communities are excluded from marine governance. Misconceptions about sharks, economic pressures, and lack of access to knowledge often lead to unsustainable practices. This program bridges the gap between awareness and action through campaigns, schools, and local partnerships.
          </p>
        </div>

      </div>
    </section>
  );
};

export default OurProgram;
