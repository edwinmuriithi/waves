import { FaSquareXTwitter, FaTiktok } from "react-icons/fa6";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      <div className="-mt-1 overflow-hidden leading-none">
        <svg
          className="w-full h-40 rotate-180"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" style={{stopColor: '#DBEAFE', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#1E3A8A', stopOpacity: 1}} />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient)"
            d="M0,160L80,170.7C160,181,320,203,480,197.3C640,192,800,160,960,160C1120,160,1280,192,1360,208L1440,224L1440,0L0,0Z"
          >
            <animate
              attributeName="d"
              dur="1s"
              repeatCount="indefinite"
              values="
                M0,160L80,170.7C160,181,320,203,480,197.3C640,192,800,160,960,160C1120,160,1280,192,1360,208L1440,224L1440,0L0,0Z;
                M0,180L100,160C200,140,300,190,400,210C500,230,600,200,700,190C800,180,900,200,1000,210C1100,220,1200,200,1300,190L1440,180L1440,0L0,0Z;
                M0,160L80,170.7C160,181,320,203,480,197.3C640,192,800,160,960,160C1120,160,1280,192,1360,208L1440,224L1440,0L0,0Z"
              />
          </path>
        </svg>
      </div>
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
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookSquare />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaSquareXTwitter />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagramSquare />
            </motion.a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
