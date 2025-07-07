import { FaSquareXTwitter, FaTiktok } from "react-icons/fa6";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-blue-300 text-gray-800">
      {/* Top wave */}
      <div className="-mt-1 overflow-hidden leading-none">
        <svg
          className="w-full h-24 rotate-180"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            className="fill-blue-100"
            d="M0,160L80,170.7C160,181,320,203,480,197.3C640,192,800,160,960,160C1120,160,1280,192,1360,208L1440,224L1440,0L0,0Z"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
                M0,160L80,170.7C160,181,320,203,480,197.3C640,192,800,160,960,160C1120,160,1280,192,1360,208L1440,224L1440,0L0,0Z;
                M0,180L100,160C200,140,300,190,400,210C500,230,600,200,700,190C800,180,900,200,1000,210C1100,220,1200,200,1300,190L1440,180L1440,0L0,0Z;
                M0,160L80,170.7C160,181,320,203,480,197.3C640,192,800,160,960,160C1120,160,1280,192,1360,208L1440,224L1440,0L0,0Z"
            />
          </path>
        </svg>
      </div>

      {/* Footer content */}
      <div className="flex flex-col items-center px-6 py-8 space-y-6">
        {/* Newsletter Signup */}
        <div className="w-full max-w-md text-center">
          <h3 className="text-xl font-semibold mb-2">Subscribe to our newsletter</h3>
          <p className="text-sm mb-4">Get updates on conservation efforts and legal action.</p>
          <form className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Your email"
              className="w-full flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-green-700 text-white rounded-full hover:bg-green-800 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div className="flex space-x-5 text-2xl">
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

        {/* Copyright */}
        <p className="text-sm text-center">
          &copy; {new Date().getFullYear()} Waves. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
