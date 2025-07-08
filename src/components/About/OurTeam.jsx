import { useState } from "react";
import amy from '../../assets/amy.jpg'
import celeste from '../../assets/celeste.png'
import corazon from '../../assets/corazon.jpg'
import gakuo from '../../assets/gakuo.png'
import judy from '../../assets/judy.jpg'
import karani from '../../assets/karani.jpg'
import mwangi from '../../assets/mwangi.png'
import njeri from '../../assets/njeri.jpg'
import rudo from '../../assets/rudo.png'
import situma from '../../assets/situma.png'
import yolanda from '../../assets/yolanda.png'


const OurTeam = () => {
  const board = [
    {
      photo: amy,
      name: "Amy P. Wilson",
      tittle: "Board Member",
      story: "Amy P. Wilson is the co-founder of Lawyers for Animal Protection in Africa. She is currently working as the Brooks Institute for Animal Rights Law and Policy Fellow at UCLA School of Law's Animal Law and Policy Program. Amy is the first South African attorney to graduate with a Master&apos;s degree in Animal Law. She has over ten years of legal experience and her research focuses on the intersection of the rights of animals, humans and the environment in law and policy. Amy is the co-founder and director of the first organization dedicated to animal law in her country - Animal Law Reform South Africa, and holds a number of leadership positions in non-profits throughout Africa. and now works on frontend engineering.",
    },
    {
      photo: situma,
      name: "Prof. F. D. P. Situma",
      tittle: "Board Member",
      story: "Francis D. P. Situma is a distinguished scholar and legal expert in Environmental Law, International Law, and Natural Resource Management. He holds a PhD from the Fletcher School of Law & Diplomacy, with extensive experience in academia, and has served as a senior Professor at the University of Nairobi. He has worked as a consultant for UNEP, UNDP, and other international organizations on environmental law and policy.ical mentorship.",
    },
    {
      photo: yolanda,
      name: "Yolanda Eisenstein",
      tittle: "Board Member",
      story: "Yolanda is a published author and the first president of the Animal Law Commission of the Union Internationale des Avocats, a Paris-based international legal association. She has practiced animal law for more than 10 years and developed the first animal law and wildlife law classes at SMU Dedman School of Law. She has served on the board of the Texas Human Legislation Network and lobbied for pro-animal legislation.",
    },
  ];

  const core = [
    {
      photo: judy,
      name: "Judy Muriithi",
      tittle: "CEO",
      story: "Judy Muriithi is a co-founder of Lawyers for Animal Protection in Africa and the current CEO. She is a passionate environmental conservation attorney with expertise in wildlife forensics, data analysis, and risk assessment. Judy leads capacity-building initiatives to promote sound governance in the fight against illegal wildlife trade.",
    },
    {
      photo: karani,
      name: "Jim Karani",
      tittle: "General Counsel",
      story: "Jim is the co-founder of Lawyers for Animal Protection in Africa and the current General Counsel. He has a decade of experience as an attorney in environmental, criminal, and animal law. He graduated with a Master in Law from Lewis and Clark Law School and is currently pursuing a PhD in Criminal Justice at John Jay College, New York.",
    },
    {
      photo: mwangi,
      name: "Mwange Fils Malangu",
      tittle: "Associate Lawyer",
      story: "Mwange is a legal professional at the Kinshasa Bar specializing in environmental law, wildlife conservation, and sports management. He plays a pivotal role in driving policy initiatives and legal frameworks for wildlife protection in the DRC.",
    },
    {
      photo: rudo,
      name: "Rudo Chasi",
      tittle: "Associate Lawyer",
      story: "Rudo Chasi is an environmental lawyer from Zimbabwe dedicated to sustainable development and environmental justice. She has worked extensively on legal frameworks addressing climate change, conservation, and community rights.",
    },
    {
      photo: corazon,
      name: "Corazon Nafula",
      tittle: "Associate Veterinarian",
      story: "Corazon is the 2024 Veterinary Student of the Year and is engaged with LAPA as both a media and animal health advisor, advancing animal health and promoting sustainable food systems.",
    },
  ];

  const technical = [

    {
      photo: gakuo,
      name: "Githeiya Gakuo",
      tittle: "IWT, Securities Technical Advisor",
      story: "Githeiya Gakuo is a dynamic professional with a strong background in governance, environmental conservation, and security. He has demonstrated leadership in combating illegal wildlife trade and promoting anti-money laundering techniques.",
    },
   {
      photo: njeri,
      name: "Dr. Elynn Njeri",
      tittle: "Animal Welfare Expert",
      story: "Dr. Elynn Njeri is a veterinary medicine professional with a strong focus on animal health and welfare in Africa. Currently pursuing a master’s in Wildlife Health and Management, she is dedicated to wildlife conservation and addressing human-wildlife conflict.She has led habitat protection initiatives, community education programs on bush meat poaching, and coordinated animal health services, including clinical care and disease control. With expertise in wildlife rescue and sustainable development, Dr. Njeri is passionate about advancing animal welfare through advocacy, education, and advisory roles.",
    },
  ];

  const volunteers = [

    {
      photo: celeste,
      name: "Celeste Viljoen",
      tittle: "Associate Lawyer",
      story: "Celeste is a law student at the University of Cape Town, South Africa, and a member of the winning team at the World Moot on International Law and Animal Rights 2024 Sub-Saharan Regional Rounds.",
    },
  ];

  const [openStory, setOpenStory] = useState(null);

  const renderTeam = (team, label) => (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-green-800 px-4 mb-4">{label}</h2>
      <div className="grid md:grid-cols-3 gap-6 px-4">
        {team.map((member, idx) => (
          <div
            key={`${label}-${idx}`}
            className="relative group h-80 rounded-xl overflow-hidden bg-center bg-cover shadow-lg transition-all duration-500"
            style={{ backgroundImage: `url(${member.photo})` }}
          >
            {/* Dim overlay on hover */}
          <div
            className="absolute inset-0 bg-no-repeat bg-cover bg-center 
                      transition-all duration-500 ease-in 
                      group-hover:bg-opacity-70 z-0 h-80 rounded-xl shadow-lg overflow-hidden"
            style={{ backgroundImage: `url(${member.photo})` }}
          ></div>


            {/* Name and Title */}
            <div
              className="absolute bottom-4 left-4 z-10 text-white transition-all duration-500 group-hover:translate-y-10 group-hover:opacity-0"
            >
              <h3 className="text-xl font-bold bg-blue-400 p-1 font-serif">{member.name}</h3>
              <p className="text-sm italic bg-blue-400 p-1">{member.tittle}</p>
            </div>


            {/* Hover Button (Plus Style) */}
            <button
              onClick={() => setOpenStory(member)}
              className={`
                absolute left-1/2 top-[-2rem]
                -translate-x-1/2 
                w-12 h-12 bg-white rounded-full overflow-hidden border border-blue-500 shadow-md
                opacity-0 scale-50 rotate-0
                group-hover:top-1/2 group-hover:translate-y-[-50%]
                group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-[360deg]
                transition-all duration-700 z-10
                text-black font-medium
              `}
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
      <div className="h-60 text-white p-4 font-sans flex justify-center flex-col items-center bg-green-950">
        <h1 className="font-medium text-4xl">Our Team</h1>
        <p className="text-2xl font-serif text-center max-w-2xl">
          Meet our most talented members that are committed to our course
        </p>
      </div>

      {/* All Teams */}
      <div>
        {renderTeam(board, "Board Members")}
        {renderTeam(core, "Core Members")}
        {renderTeam(technical, "Technical Team")}
        {renderTeam(volunteers, "Volunteers")}
      </div>

      {/* Fullscreen Story Overlay */}
      {openStory && (
        <div className="fixed inset-0 bg-white bg-opacity-90 z-50 flex flex-col items-center justify-center text-black px-6 py-8 p-4">
          <button
            onClick={() => setOpenStory(null)}
            className="absolute top-4 right-6 text-3xl hover:text-red-400 transition"
          >
            &times;
          </button>
          <img
            src={openStory.photo}
            alt={openStory.name}
            className="w-40 h-40 object-cover rounded-full shadow-lg mb-4 border-4 border-gray-400"
          />
          <h2 className="text-2xl font-bold mb-2">{openStory.name}</h2>
          <p className="italic text-sm mb-4">{openStory.tittle}</p>
          <p className="max-w-2xl text-center text-lg">{openStory.story}</p>
        </div>
      )}
    </div>
  );
};

export default OurTeam;
