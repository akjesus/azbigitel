import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-black text-black dark:text-white border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* TOP GRID */}
        <div className="grid md:grid-cols-4 gap-10">
          {/* BRAND */}
          <div>
            <img src={Logo} alt="Abigzitel Logo" className="h-12 w-auto" />

            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
              We deliver high-quality construction services with precision,
              safety, and innovation.
            </p>
          </div>

          {/* SITEMAP */}
          <div>
            <h3 className="font-semibold mb-4">Sitemap</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li className="hover:text-[#29C87D] cursor-pointer">Home</li>
              <li className="hover:text-[#29C87D] cursor-pointer">About</li>
              <li className="hover:text-[#29C87D] cursor-pointer">Services</li>
              <li className="hover:text-[#29C87D] cursor-pointer">Projects</li>
              <li className="hover:text-[#29C87D] cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>

            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <FaPhone className="text-[#29C87D]" />
                <span>+234 803 332 8825</span>
              </div>

              <div className="flex items-center gap-2">
                <FaEnvelope className="text-[#29C87D]" />
                <span>info@abigzitel.com.ng</span>
              </div>

              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#29C87D]" />
                <span>Enugu, Nigeria</span>
              </div>
            </div>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Get updates on our latest projects and offers.
            </p>

            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm focus:outline-none focus:border-[#29C87D]"
              />

              <button className="px-4 py-2 rounded-lg text-white bg-gradient-to-r from-[#9CE23A] to-[#29C87D] hover:opacity-90 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Abigzitel. All rights reserved.</p>

          <div className="flex gap-4">
            <span className="hover:text-[#29C87D] cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-[#29C87D] cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
