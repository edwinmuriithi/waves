import { useState } from "react";
import amy from "../../assets/amy.jpg";
import celeste from "../../assets/celeste.png";
import corazon from "../../assets/corazon.jpg";
import gakuo from "../../assets/gakuo.png";
import judy from "../../assets/judy.jpg";
import karani from "../../assets/karani.jpg";
import mwangi from "../../assets/mwangi.png";
import njeri from "../../assets/njeri.jpg";
import rudo from "../../assets/rudo.png";
import situma from "../../assets/situma.png";
import yolanda from "../../assets/yolanda.png";

const OurTeam = () => {
  const [openStory, setOpenStory] = useState(null);
  const board = [
    {
      photo: amy,
      name: "Amy P. Wilson",
      tittle: "Board Member",
      story:
        "Amy P. Wilson is the co-founder of Lawyers for Animal Protection in Africa. She is a licensed attorney of the High Court of South Africa with over 14 years of professional legal experience. She is the co-founder and Executive Director of Animal Law Reform South Africa, the first dedicated animal law non-profit in the country. She is a Lecturer, Doctoral Candidate and Research Associate with the University of Johannesburg and a Senior Adjunct Lecturer with the University of the Western Cape, South Africa. She holds bachelor's degrees in business management and law, a Master's degree in Animal Law and is currently working towards her Doctorate."
    },
    {
      photo: situma,
      name: "Prof. F. D. P. Situma",
      tittle: "Board Member",
      story:
        "Francis D. P. Situma is a distinguished scholar and legal expert in Environmental Law, International Law, and Natural Resource Management. He holds a PhD from the Fletcher School of Law & Diplomacy, with extensive experience in academia, and has served as a senior Professor at the University of Nairobi. He has worked as a consultant for UNEP, UNDP, and other international organizations on environmental law and policy."
    },
    {
      photo: yolanda,
      name: "Yolanda Eisenstein",
      tittle: "Board Member",
      story:
        "Yolanda is a published author and the first president of the Animal Law Commission of the Union Internationale des Avocats, a Paris-based international legal association. She has practiced animal law for more than 10 years and developed the first animal law and wildlife law classes at SMU Dedman School of Law. She has served on the board of the Texas Human Legislation Network and lobbied for pro-animal legislation."
    },
  ];

  const core = [
    {
      photo: judy,
      name: "Judy Muriithi",
      tittle: "CEO",
      story:
        "Judy Muriithi is a co-founder of Lawyers for Animal Protection in Africa and the current CEO. She is a passionate environmental conservation attorney with expertise in wildlife forensics, data analysis, and risk assessment. Judy leads capacity-building initiatives to promote sound governance in the fight against illegal wildlife trade."
    },
    {
      photo: karani,
      name: "Jim Karani",
      tittle: "General Counsel",
      story:
        "Jim is the co-founder of Lawyers for Animal Protection in Africa and the current General Counsel. He has a decade of experience as an attorney in environmental, criminal, and animal law. He graduated with a Master in Law from Lewis and Clark Law School and is currently pursuing a PhD in Criminal Justice at John Jay College, New York."
    },
    {
      photo: mwangi,
      name: "Mwange Fils Malangu",
      tittle: "Associate Lawyer",
      story:
        "Mwange is a legal professional at the Kinshasa Bar specializing in environmental law, wildlife conservation, and sports management. He plays a pivotal role in driving policy initiatives and legal frameworks for wildlife protection in the DRC."
    },
    {
      photo: rudo,
      name: "Rudo Chasi",
      tittle: "Associate Lawyer",
      story:
        "Rudo Chasi is an environmental lawyer from Zimbabwe dedicated to sustainable development and environmental justice. She has worked extensively on legal frameworks addressing climate change, conservation, and community rights."
    },
    {
      photo: corazon,
      name: "Corazon Nafula",
      tittle: "Associate Veterinarian",
      story:
        "Corazon is the 2024 Veterinary Student of the Year and is engaged with LAPA as both a media and animal health advisor, advancing animal health and promoting sustainable food systems."
    },
  ];

  const technical = [
    {
      photo: gakuo,
      name: "Githeiya Gakuo",
      tittle: "IWT, Securities Technical Advisor",
      story:
        "Githeiya Gakuo is a dynamic professional with a strong background in governance, environmental conservation, and security. He has demonstrated leadership in combating illegal wildlife trade and promoting anti-money laundering techniques."
    },
    {
      photo: njeri,
      name: "Dr. Elynn Njeri",
      tittle: "Animal Welfare Expert",
      story:
        "Dr. Elynn Njeri is a veterinary medicine professional with a strong focus on animal health and welfare in Africa. Currently pursuing a master’s in Wildlife Health and Management, she is dedicated to wildlife conservation and addressing human-wildlife conflict. She has led habitat protection initiatives, community education programs on bush meat poaching, and coordinated animal health services, including clinical care and disease control."
    },
  ];

  const volunteers = [
    {
      photo: celeste,
      name: "Celeste Viljoen",
      tittle: "Associate Lawyer",
      story:
        "Celeste is a law student at the University of Cape Town, South Africa, and a member of the winning team at the World Moot on International Law and Animal Rights 2024 Sub-Saharan Regional Rounds."
    },
  ];

  const renderTeam = (team, label) => (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-blue-800 px-4 mb-4">{label}</h2>
      <div className="grid md:grid-cols-3 gap-6 px-4">
        {team.map((member, idx) => (
          <div
            key={`${label}-${idx}`}
            className="relative group h-[500px] rounded-xl overflow-hidden shadow-lg transition-all duration-500 bg-white"
          >
            <img
              src={member.photo}
              alt={member.name}
              onClick={() => setOpenStory(member)}
              className="w-full h-full object-fit transition-all duration-500 group-hover:brightness-75 cursor-pointer hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 z-10 text-white transition-all duration-500 group-hover:translate-y-10 group-hover:opacity-0 opacity-80">
              <h3 className="text-xl font-bold bg-blue-400 p-1 font-serif">{member.name}</h3>
              <p className="text-sm italic bg-blue-400 p-1">{member.tittle}</p>
            </div>
            <button
              onClick={() => setOpenStory(member)}
              className="hidden sm:block absolute left-1/2 top-[-2rem] -translate-x-1/2 w-12 h-12 bg-white rounded-full overflow-hidden border border-blue-500 shadow-md opacity-0 scale-50 rotate-0 group-hover:top-1/2 group-hover:translate-y-[-50%] group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-[360deg] transition-all duration-700 z-10 text-black font-medium"
            >
              +
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="relative">
      {/* Header */}
      <div className="h-60 text-white p-4 font-sans flex justify-center flex-col items-center bg-blue-950">
        <h1 className="font-medium text-4xl">Our Team</h1>
        <p className="text-2xl font-serif text-center max-w-2xl">
          Meet our most talented members that are committed to our cause
        </p>
      </div>

      {/* All Teams */}
      {renderTeam(board, "Board Members")}
      {renderTeam(core, "Core Members")}
      {renderTeam(technical, "Technical Team")}
      {renderTeam(volunteers, "Volunteers")}

      {/* Fullscreen Story Overlay */}
      {openStory && (
        <div className="fixed inset-0 bg-transparent opacity-100 z-50 flex items-center justify-center">
          <div className="bg-white w-[85%] max-w-5xl max-h-[calc(100%-80px)] my-10 overflow-y-auto rounded-lg shadow-2xl px-8 py-6 relative">
            <button
              onClick={() => setOpenStory(null)}
              className="absolute top-4 right-6 text-3xl text-gray-600 hover:text-red-400 transition"
            >
              &times;
            </button>
            <div className="flex flex-col items-center">
              <img
                src={openStory.photo}
                alt={openStory.name}
                className="w-40 h-40 object-fit rounded-full shadow-lg mb-4 border-4 border-gray-400"
              />
              <h2 className="text-2xl font-bold mb-2">{openStory.name}</h2>
              <p className="italic text-sm mb-4">{openStory.tittle}</p>
              <p className="max-w-3xl text-center text-lg">{openStory.story}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurTeam;
