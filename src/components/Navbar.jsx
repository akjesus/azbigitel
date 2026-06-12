import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import {
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Logo from "../assets/logo.png";
import QuoteModal from "./QuoteModal";

const Navbar = ({ onOpenQuote }) => {
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const { darkMode, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-transparent bg-clip-text bg-gradient-to-r from-[#9CE23A] to-[#29C87D] font-semibold"
      : "text-gray-700 dark:text-gray-300 hover:text-[#29C87D] transition";
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);
  return (
    <header className="fixed top-0 w-full z-50 bg-white/70 dark:bg-black/60 backdrop-blur-xl border-b border-gray-200/40 dark:border-gray-800/40 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink to="/" className={linkClass}>
          <img src={Logo} alt="Abigzitel Logo" className="h-12 w-auto" />
        </NavLink>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="text-lg p-2 rounded-md bg-white dark:hover:bg-gray-700 transition"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-xl p-2 rounded-md bg-white/80 dark:bg-white hover:bg-gray-200 dark:hover:bg-gray-700 transform transition"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <FaBars />
          </button>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
            <NavLink to="/services" className={linkClass}>
              Services
            </NavLink>
            <NavLink to="/projects" className={linkClass}>
              Projects
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>

            <button
              onClick={() => onOpenQuote()}
              className="bg-gradient-to-r from-[#9CE23A] to-[#29C87D] px-5 py-2 rounded-lg text-white font-medium hover:opacity-90 transition"
            >
              Get Quote
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU - Modern Fullscreen Centered */}
      <div
        className={`fixed inset-0 md:hidden z-10 ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${open ? "opacity-80 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        />

        {/* Centered Panel */}
        <div
          className={`absolute inset-0 flex items-start justify-center transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        >
          <div
            className={`w-full max-w-lg mx-3 bg-white dark:bg-gray-900/95 rounded-xl shadow-2xl p-4 transform transition-all duration-300 ${open ? "translate-y-0" : "-translate-y-2"}`}
          >
            <div className="w-full flex justify-center">
              <div className="h-1 w-12 rounded-full bg-gray-300 dark:bg-gray-700 mb-2" />
            </div>
            <div className="flex items-center justify-between mb-2">
              <NavLink
                to="/"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3"
              >
                <img src={Logo} alt="logo" className="h-10 w-auto" />
                <span className="font-bold text-lg text-black dark:text-white">
                  Abigzitel
                </span>
              </NavLink>
              <button
                onClick={() => setOpen(false)}
                className="text-2xl p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                <FaTimes />
              </button>
            </div>

            <nav className="flex flex-col items-center gap-4">
              <NavLink
                onClick={() => setOpen(false)}
                to="/"
                className={({ isActive }) =>
                  `text-2xl ${isActive ? "text-transparent bg-clip-text bg-gradient-to-r from-[#9CE23A] to-[#29C87D] font-semibold" : "text-black dark:text-white"} hover:text-[#29C87D] transition`
                }
              >
                Home
              </NavLink>
              <NavLink
                onClick={() => setOpen(false)}
                to="/about"
                className={({ isActive }) =>
                  `text-2xl ${isActive ? "text-transparent bg-clip-text bg-gradient-to-r from-[#9CE23A] to-[#29C87D] font-semibold" : "text-black dark:text-white"} hover:text-[#29C87D] transition`
                }
              >
                About
              </NavLink>
              <NavLink
                onClick={() => setOpen(false)}
                to="/services"
                className={({ isActive }) =>
                  `text-2xl ${isActive ? "text-transparent bg-clip-text bg-gradient-to-r from-[#9CE23A] to-[#29C87D] font-semibold" : "text-black dark:text-white"} hover:text-[#29C87D] transition`
                }
              >
                Services
              </NavLink>
              <NavLink
                onClick={() => setOpen(false)}
                to="/projects"
                className={({ isActive }) =>
                  `text-2xl ${isActive ? "text-transparent bg-clip-text bg-gradient-to-r from-[#9CE23A] to-[#29C87D] font-semibold" : "text-black dark:text-white"} hover:text-[#29C87D] transition`
                }
              >
                Projects
              </NavLink>
              <NavLink
                onClick={() => setOpen(false)}
                to="/contact"
                className={({ isActive }) =>
                  `text-2xl ${isActive ? "text-transparent bg-clip-text bg-gradient-to-r from-[#9CE23A] to-[#29C87D] font-semibold" : "text-black dark:text-white"} hover:text-[#29C87D] transition`
                }
              >
                Contact
              </NavLink>
            </nav>

            <div className="mt-8 flex flex-col gap-3">
              <button
                onClick={() => {
                  setOpen(false);
                  onOpenQuote && onOpenQuote();
                }}
                className="w-full px-4 py-3 rounded-md bg-gradient-to-r from-[#9CE23A] to-[#29C87D] text-white font-medium"
              >
                Get Quote
              </button>

              <div className="flex items-center justify-center gap-6 text-gray-500 mt-2">
                <a
                  href="#"
                  aria-label="facebook"
                  className="hover:text-[#29C87D]"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  aria-label="instagram"
                  className="hover:text-[#29C87D]"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  aria-label="linkedin"
                  className="hover:text-[#29C87D]"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
