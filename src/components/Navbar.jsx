import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
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

        {/* RIGHT SIDE CONTROLS (ALWAYS VISIBLE) */}
        <div className="flex items-center gap-4">
          {/* THEME TOGGLE (NOW ALWAYS VISIBLE) */}
          <button onClick={toggleTheme} className="text-lg">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* MOBILE MENU BUTTON */}
          <button className="md:hidden text-xl" onClick={() => setOpen(true)}>
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

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 md:hidden z-50 ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        {/* BACKDROP */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* SOLID SIDE PANEL */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white dark:bg-black shadow-xl border-l border-gray-200 dark:border-gray-800 transform transition-transform duration-300 ease-in-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* HEADER */}
          <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-800">
            <h2 className="font-bold text-black dark:text-white">Menu</h2>

            <button onClick={() => setOpen(false)}>
              <FaTimes />
            </button>
          </div>

          {/* LINKS */}
          <div className="flex flex-col gap-6 p-6 text-sm">
            <NavLink
              onClick={() => setOpen(false)}
              to="/"
              className={({ isActive }) =>
                `block py-2 ${
                  isActive
                    ? "text-[#29C87D] font-semibold"
                    : "text-black dark:text-white"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setOpen(false)}
              to="/about"
              className={({ isActive }) =>
                `block py-2 ${
                  isActive
                    ? "text-[#29C87D] font-semibold"
                    : "text-black dark:text-white"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              onClick={() => setOpen(false)}
              to="/services"
              className={({ isActive }) =>
                `block py-2 ${
                  isActive
                    ? "text-[#29C87D] font-semibold"
                    : "text-black dark:text-white"
                }`
              }
            >
              Services
            </NavLink>
            <NavLink
              onClick={() => setOpen(false)}
              to="/projects"
              className={({ isActive }) =>
                `block py-2 ${
                  isActive
                    ? "text-[#29C87D] font-semibold"
                    : "text-black dark:text-white"
                }`
              }
            >
              Projects
            </NavLink>
            <NavLink
              onClick={() => setOpen(false)}
              to="/contact"
              className={({ isActive }) =>
                `block py-2 ${
                  isActive
                    ? "text-[#29C87D] font-semibold"
                    : "text-black dark:text-white"
                }`
              }
            >
              Contact
            </NavLink>

            <button
              onClick={() => onOpenQuote()}
              className="mt-4 px-4 py-2 rounded-lg text-white bg-gradient-to-r from-[#9CE23A] to-[#29C87D]"
            >
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
