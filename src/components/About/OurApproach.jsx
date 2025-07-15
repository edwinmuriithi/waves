import React from "react";

const OurApproach = () => {
  return (
    <section className="bg-blue-50 text-blue-900 py-16 px-6 md:px-16">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">Our Approach</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            At WAVES, we confront the complex threats facing Kenya’s marine species through a multi-disciplinary and justice-driven
            approach that blends science, law, advocacy, and community empowerment. Our interventions are designed not only to protect
            endangered species but also to transform the systems and behaviors that enable their exploitation.
          </p>
        </div>

        {/* Strategy Blocks */}
        <div className="space-y-12">
          
          {/* Policy Reform */}
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 border-l-4 border-blue-600">
            <div className="flex items-center gap-4 mb-4">
              {/* Ocean Scroll/Policy Icon */}
              <svg className="w-8 h-8 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 3H7a2 2 0 0 0-2 2v14a3 3 0 1 0 6 0h10a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM7 5h13v12H11a3 3 0 0 0-2 2H7V5z" />
              </svg>
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-800">Policy Reform</h2>
            </div>
            <p className="text-base md:text-lg leading-relaxed">
              We work to influence and strengthen Kenya’s legislative and regulatory frameworks governing marine biodiversity.
              This includes advocating for evidence-based policy development, closing legal loopholes, and promoting the adoption
              of science-driven fisheries management plans. By engaging with lawmakers, regulatory bodies, and civil society, we push
              for policies that prioritize conservation, accountability, and the long-term sustainability of marine ecosystems.
            </p>
          </div>

          {/* Strategic Litigation */}
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 border-l-4 border-blue-600">
            <div className="flex items-center gap-4 mb-4">
              {/* Gavel / Legal Icon */}
              <svg className="w-8 h-8 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.71 4.63l-1.34-1.34a1 1 0 0 0-1.41 0l-4.88 4.88-1.42-1.42 4.88-4.88a1 1 0 0 0 0-1.41L13.88.29a1 1 0 0 0-1.41 0L5.29 7.47a1 1 0 0 0 0 1.41l7.78 7.78a1 1 0 0 0 1.41 0l6.23-6.23a1 1 0 0 0 0-1.41z" />
              </svg>
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-800">Strategic Litigation</h2>
            </div>
            <p className="text-base md:text-lg leading-relaxed">
              Through impact litigation, we hold governments, corporations, and individuals accountable for violations of environmental
              and wildlife protection laws. We utilise legal mechanisms, including judicial reviews, constitutional petitions, and
              consumer protection lawsuits, to challenge unlawful licensing practices, expose false sustainability claims, and drive
              systemic change. Litigation becomes a tool not just for redress, but for reform.
            </p>
          </div>

          {/* Public Awareness & Community Engagement */}
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 border-l-4 border-blue-600">
            <div className="flex items-center gap-4 mb-4">
              {/* Community / People Icon */}
              <svg className="w-8 h-8 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zM8 11c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V20h14v-3.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V20h6v-3.5c0-2.33-4.67-3.5-7-3.5z" />
              </svg>
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-800">Public Awareness & Community Engagement</h2>
            </div>
            <p className="text-base md:text-lg leading-relaxed">
              We believe that conservation must be inclusive and locally anchored. WAVES partners with grassroots organizations and
              initiatives to run targeted education campaigns, school programs, and community outreach efforts. Our goal is to build
              a culture of marine stewardship by informing, inspiring, and mobilizing communities, youth, and consumers to protect ocean
              life while exploring sustainable alternatives.
            </p>
          </div>

          {/* Investigations & Intelligence Gathering */}
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 border-l-4 border-blue-600">
            <div className="flex items-center gap-4 mb-4">
              {/* Search/Spyglass Icon */}
              <svg className="w-8 h-8 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.71 20.29l-3.388-3.388A8.928 8.928 0 0 0 19 11a9 9 0 1 0-9 9 8.928 8.928 0 0 0 5.902-1.678L20.29 21.71a1 1 0 0 0 1.42-1.42zM11 18a7 7 0 1 1 7-7 7.008 7.008 0 0 1-7 7z" />
              </svg>
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-800">Investigations & Intelligence Gathering</h2>
            </div>
            <p className="text-base md:text-lg leading-relaxed">
              Combating illegal, unreported, and unregulated (IUU) fishing and wildlife trafficking requires evidence and bold action.
              We support investigative journalism, crime science methodologies, and frontline data collection to uncover hidden
              trafficking routes, identify key actors, and map out illicit supply chains. We collaborate with law enforcement agencies
              and global watchdogs to ensure that intelligence leads to action, from local arrests to international pressure.
            </p>
          </div>
        </div>

        {/* Closing Summary */}
        <div className="text-center mt-8 max-w-3xl mx-auto">
          <p className="text-lg md:text-xl">
            Together, these interventions reinforce each other to form a holistic model for defending marine life,
            restoring ecological integrity, and advancing environmental justice in Kenya and the region.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
