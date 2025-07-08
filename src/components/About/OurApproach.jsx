const OurApproach = () => {
  return (

    <div className="bg-gray-50">
      {/* Header Section */}
      <div className="h-60 text-white p-4 font-sans flex justify-center flex-col items-center bg-green-950">
        <h1 className="font-medium text-4xl">Our Approach</h1>
        <p className="text-2xl font-serif">How we handle things here at Waves</p>
      </div>

      {/* Background Section */}
      <div
        className="flex flex-col items-center bg-cover bg-center py-10 px-4"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1667149988377-0e326e842beb?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b2NlYW4lMjB3YXZlc3xlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000')",
        }}
      >
        {/* Section Card Template */}
        {[
          {
            title: "Strategic Litigation",
            content:
              "Strategic litigation isn't just about winning cases—it's about setting precedents, creating ripples of change, and making justice work for those who can't speak for themselves. For Lawyers for Animal Protection in Africa (LAPA), it's a powerful scalpel to dissect systemic gaps and a hammer to nail accountability to the wall.",
            points: [
              ["Set Legal Benchmarks", "Precedents establish legal standards that can shield animals across the continent."],
              ["Expose Loopholes", "Litigation highlights cracks in legislation and enforcement, compelling fixes."],
              ["Shift the Narrative", "Media attention turns animal rights into household conversations."],
              ["Hold Power to Account", "Forces corporations and authorities to face consequences."],
            ],
          },
          {
            title: "Legal Advocacy",
            content:
              "Legal advocacy is the cornerstone of LAPA's mission. It ensures marginalized individuals and communities gain equitable access to justice, resources, and representation.",
            points: [
              ["Amplifying Voices", "Ensures the unheard are represented through legal channels."],
              ["Catalyzing Policy Reform", "Drives legislative and policy change."],
              ["Providing Access to Justice", "Bridges the gap between people and the legal system."],
              ["Empowering Communities", "Equips people with legal tools and knowledge."],
            ],
          },
          {
            title: "Science and Research",
            content:
              "Science and research are pivotal to LAPA’s mission. Grounded in evidence, they ensure that our initiatives are data-informed and outcome-driven.",
            points: [
              ["Informed Decision-Making", "Policies are based on real-world data."],
              ["Identifying Root Causes", "Research exposes deep systemic problems."],
              ["Measuring Impact", "Tracks effectiveness of LAPA's programs."],
              ["Driving Innovation", "Fosters bold, data-based solutions."],
              ["Advocating for Change", "Findings support compelling legal arguments."],
            ],
          },
          {
            title: "Legal Assistance",
            content:
              "Legal assistance ensures that everyone has the right tools and representation to face complex legal challenges. LAPA empowers people facing systemic injustice.",
            points: [
              ["Bridging the Justice Gap", "Support for underserved populations."],
              ["Strengthening Communities", "Legal help promotes long-term resilience."],
              ["Advocating for Systemic Change", "Individual cases illuminate wider societal needs."],
            ],
          },
        ].map((section, index) => (
          <div
            key={index}
            className="w-full max-w-5xl backdrop-blur-md bg-white/40 text-gray-900 rounded-3xl shadow-xl p-8 my-6"
          >
            <h2 className="text-3xl font-serif font-bold border-b-2 border-green-700 pb-2 mb-4 text-green-900">
              {section.title}
            </h2>
            <p className="mb-4 text-lg">{section.content}</p>
            <ul className="list-disc list-inside space-y-3 text-base">
              {section.points.map(([title, desc], i) => (
                <li key={i}>
                  <span className="font-semibold">{title}:</span> {desc}
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>
    </div>
  );
};

export default OurApproach;
