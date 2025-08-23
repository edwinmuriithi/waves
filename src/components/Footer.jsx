import { FaSquareXTwitter, FaTiktok } from "react-icons/fa6";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-blue-100 via-blue-400 to-blue-900 text-gray-900">
      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-8 space-y-6 md:space-y-0">
        <p className=" leading-6 uppercase text-gray-950">
          &copy; {new Date().getFullYear()} Wildlife Advocates for Vital
          Ecosystems and Species
        </p>

        <div className="flex flex-col text-center">
          <p className="text-sm mb-4">
            Get updates on conservation efforts and legal action.
          </p>
          <form className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Subscribe to our newsletter"
              className="w-full flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="flex flex-wrap justify-center space-x-5 text-2xl">
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://m.facebook.com/AnimalLawAfrica/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookSquare />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://www.linkedin.com/company/lawyers-for-animal-protection-in-africa-lapa/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://x.com/AnimalLawAfric"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaSquareXTwitter />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://www.instagram.com/animallawafrica"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagramSquare />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
