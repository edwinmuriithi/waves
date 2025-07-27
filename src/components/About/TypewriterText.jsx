import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import { actionItems } from "../TakeAction/actions";

export default function TypewriterText() {
  const categories = [...new Set(actionItems.map((item) => item.category))];
  return (
    <>
      <div className="text-5xl font-serif font-extrabold text-white leading-20">
        <span className="mr-4">Join the Movement</span>
        <Typewriter
          options={{
            strings: [
              " Protecting Marine Life...",
              " Fighting Plastic Pollution...",
              " Empowering Coastal Communities...",
            ],
            autoStart: true,
            loop: true,
            delay: 70,
            deleteSpeed: 100,
          }}
        />
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-start">
        <div className="flex flex-col gap-6 lg:w-1/2 p-4">
          <div className="mt-8">
            <ul className="flex flex-wrap justify-start gap-4 mb-4">
              {categories.map((category, index) => (
                <li
                  key={index}
                  className="bg-blue-800 text-white rounded-full px-4 py-2 text-center font-medium"
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-lg font-bold">
            Take action to protect our ocean and its creatures
          </p>

          <Link
            to="/take-action"
            className=" bg-blue-900 hover:bg-orange-600  text-white w-1/2 text-lg font-bold py-2 px-4 rounded-xl transition-all hover:shadow-md text-center"
          >
            Take Action
          </Link>
        </div>
      </div>
    </>
  );
}
