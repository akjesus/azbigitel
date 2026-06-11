import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useCount from "../hooks/count";
import img1 from "../assets/hero/img1.jpg";
import img2 from "../assets/hero/img2.jpg";
import img3 from "../assets/hero/img3.jpg";

const images = [img1, img2, img3];
const Hero = () => {
  const [current, setCurrent] = useState(0);
  const projects = useCount(120, 1800);
  const years = useCount(15, 1800);
  const satisfaction = useCount(100, 1800);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-28 md:pt-32 bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div>
          {/* TAG */}
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Trusted Construction & Engineering Company
          </p>

          {/* HEADING */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-4">
            Building Strong & Modern Structures with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9CE23A] to-[#29C87D]">
              Precision & Excellence
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            We deliver high-quality residential, commercial, and industrial
            construction projects with a focus on durability, safety, and modern
            engineering standards.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-6 flex flex-wrap gap-4">
            <button className="px-6 py-3 rounded-lg text-white bg-gradient-to-r from-[#9CE23A] to-[#29C87D] hover:opacity-90 transition">
              Get a Free Quote
            </button>
            <Link
              to="/projects"
              className="relative inline-block rounded-lg p-[1px] group hover:bg-gradient-to-r hover:from-[#9CE23A] hover:to-[#29C87D] transition"
            >
              <span className="block px-6 py-3 rounded-md bg-white dark:bg-black border border-gray-300 dark:border-gray-700 group-hover:border-transparent group-hover:text-white transition">
                View Projects
              </span>
            </Link>
          </div>

          {/* TRUST STATS */}
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div>
              <h3 className="text-2xl font-bold text-[#29C87D]">{projects}+</h3>
              <p className="text-xs text-gray-500">Projects</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#29C87D]">{years}+</h3>
              <p className="text-xs text-gray-500">Years</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#29C87D]">
                {satisfaction}%
              </h3>
              <p className="text-xs text-gray-500">Satisfaction</p>
            </div>
          </div>
        </div>

        {/* RIGHT VISUAL SECTION */}
        {/* RIGHT IMAGE SLIDER */}
        <div className="relative">
          {/* IMAGE */}
          <div className="h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg relative">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="construction"
                className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
                  index === current ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            {/* DARK OVERLAY FOR TEXT READABILITY */}
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          {/* FLOATING CARD 1 */}
          <div className="absolute top-6 left-6 bg-white dark:bg-black shadow-lg p-3 rounded-lg border border-gray-200 dark:border-gray-800">
            <p className="text-xs text-gray-500">Projects Completed</p>
            <p className="font-bold text-[#29C87D]">120+</p>
          </div>

          {/* FLOATING CARD 2 */}
          <div className="absolute bottom-6 right-6 bg-white dark:bg-black shadow-lg p-3 rounded-lg border border-gray-200 dark:border-gray-800">
            <p className="text-xs text-gray-500">Safety Rating</p>
            <p className="font-bold text-[#29C87D]">A+ Grade</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
