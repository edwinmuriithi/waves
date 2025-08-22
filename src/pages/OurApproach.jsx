import React, { useEffect } from "react";

import ocean from "../assets/ocean-waves.jpg";
import policyImg from "../assets/policy.png";
import litigationImg from "../assets/strategic.jpg";
import communityImg from "../assets/Community.jpg";
import investigationImg from "../assets/litigation-investigations.jpg";

const strategies = [
  {
    title: "Policy Reform",
    img: policyImg,
    icon: (
      <svg
        className="w-8 h-8 text-blue-700"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M21 3H7a2 2 0 0 0-2 2v14a3 3 0 1 0 6 0h10a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM7 5h13v12H11a3 3 0 0 0-2 2H7V5z" />
      </svg>
    ),
    desc: `We work to influence and strengthen Kenya’s legislative and regulatory frameworks governing marine biodiversity.
      This includes advocating for evidence-based policy development, closing legal loopholes, and promoting the adoption
      of science-driven fisheries management plans. By engaging with lawmakers, regulatory bodies, and civil society, we push
      for policies that prioritize conservation, accountability, and the long-term sustainability of marine ecosystems.`,
  },
  {
    title: "Strategic Litigation",
    img: litigationImg,
    icon: (
      <svg
        className="w-8 h-8 text-blue-700"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.71 4.63l-1.34-1.34a1 1 0 0 0-1.41 0l-4.88 4.88-1.42-1.42 4.88-4.88a1 1 0 0 0 0-1.41L13.88.29a1 1 0 0 0-1.41 0L5.29 7.47a1 1 0 0 0 0 1.41l7.78 7.78a1 1 0 0 0 1.41 0l6.23-6.23a1 1 0 0 0 0-1.41z" />
      </svg>
    ),
    desc: `Through impact litigation, we hold governments, corporations, and individuals accountable for violations of environmental
      and wildlife protection laws. We utilise legal mechanisms, including judicial reviews, constitutional petitions, and
      consumer protection lawsuits, to challenge unlawful licensing practices, expose false sustainability claims, and drive
      systemic change. Litigation becomes a tool not just for redress, but for reform.`,
  },
  {
    title: "Public Awareness & Community Engagement",
    img: communityImg,
    icon: (
      <svg
        className="w-8 h-8 text-blue-700"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zM8 11c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V20h14v-3.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V20h6v-3.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    ),
    desc: `We believe that conservation must be inclusive and locally anchored. WAVES partners with grassroots organizations and
      initiatives to run targeted education campaigns, school programs, and community outreach efforts. Our goal is to build
      a culture of marine stewardship by informing, inspiring, and mobilizing communities, youth, and consumers to protect ocean
      life while exploring sustainable alternatives.`,
  },
  {
    title: "Investigations & Intelligence Gathering",
    img: investigationImg,
    icon: (
      <svg
        className="w-8 h-8 text-blue-700"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M21.71 20.29l-3.388-3.388A8.928 8.928 0 0 0 19 11a9 9 0 1 0-9 9 8.928 8.928 0 0 0 5.902-1.678L20.29 21.71a1 1 0 0 0 1.42-1.42zM11 18a7 7 0 1 1 7-7 7.008 7.008 0 0 1-7 7z" />
      </svg>
    ),
    desc: `Combating illegal, unreported, and unregulated (IUU) fishing and wildlife trafficking requires evidence and bold action.
      We support investigative journalism, crime science methodologies, and frontline data collection to uncover hidden
      trafficking routes, identify key actors, and map out illicit supply chains. We collaborate with law enforcement agencies
      and global watchdogs to ensure that intelligence leads to action, from local arrests to international pressure.`,
  },
];

const OurApproach = () => {

  return (
    <section>
      {/* Hero Section */}
      <div
        className="relative h-[350px] md:h-[450px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${ocean})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Our Approach
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto drop-shadow">
            Defending Kenya’s marine life through science, law, advocacy, and
            community empowerment.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-blue-50 text-blue-900 py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Intro */}
          <div className="text-justify">
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              At WAVES, we confront the complex threats facing Kenya’s marine
              species through a multi-disciplinary and justice-driven approach
              that blends science, law, advocacy, and community empowerment. Our
              interventions are designed not only to protect endangered species
              but also to transform the systems and behaviors that enable their
              exploitation.
            </p>
          </div>

          {/* Strategy Blocks */}
          <div className="space-y-16">
            {strategies.map((s, i) => (
              <article
                key={s.title}
                data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
                className={`flex flex-col md:flex-row ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                } items-center bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.01] hover:bg-blue-50/40`}
              >
                <img
                  src={s.img}
                  alt={`${s.title} - ${s.desc.substring(0, 60)}...`}
                  className="w-full md:w-1/3 h-56 md:h-64 object-cover"
                  loading="lazy"
                />
                <div className="flex-1 p-8 md:p-10">
                  <div className="flex items-center gap-4 mb-4">
                    {s.icon}
                    <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 tracking-wide">
                      {s.title}
                    </h2>
                  </div>
                  <p className="text-base md:text-lg leading-relaxed text-justify">
                    {s.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Closing Summary */}
          <div
            className="text-center mt-8 max-w-3xl mx-auto"
            data-aos="fade-up"
          >
            <p className="text-lg md:text-xl">
              Together, these interventions reinforce each other to form a
              holistic model for defending marine life, restoring ecological
              integrity, and advancing environmental justice in Kenya and the
              region.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
