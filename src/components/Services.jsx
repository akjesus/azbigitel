import { motion } from "framer-motion";
import {
  FaHome,
  FaBuilding,
  FaTools,
  FaRoad,
  FaClipboardCheck,
  FaComments,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "Residential Construction",
      desc: "High-quality home building with modern architectural standards.",
      icon: <FaHome />,
    },
    {
      title: "Commercial Projects",
      desc: "Office buildings and large-scale commercial infrastructure.",
      icon: <FaBuilding />,
    },
    {
      title: "Renovation & Remodeling",
      desc: "Transform and upgrade existing structures with precision.",
      icon: <FaTools />,
    },
    {
      title: "Civil Engineering",
      desc: "Roads, bridges, drainage systems and infrastructure works.",
      icon: <FaRoad />,
    },
    {
      title: "Project Management",
      desc: "End-to-end supervision ensuring quality and timely delivery.",
      icon: <FaClipboardCheck />,
    },
    {
      title: "Consulting Services",
      desc: "Expert planning, budgeting and construction advisory.",
      icon: <FaComments />,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <section className="py-20 bg-gray-50 dark:bg-black text-black dark:text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9CE23A] to-[#29C87D]">
              Services
            </span>
          </h2>

          <p className="text-gray-500 dark:text-gray-400 mt-3">
            We provide complete construction solutions tailored to your needs
          </p>
        </div>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              variants={item}
              className="group p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* ICON */}
              <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-r from-[#9CE23A] to-[#29C87D] flex items-center justify-center text-white text-xl">
                {service.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold group-hover:text-[#29C87D] transition">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                {service.desc}
              </p>

              {/* UNDERLINE ANIMATION */}
              <div className="mt-4 h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-gradient-to-r from-[#9CE23A] to-[#29C87D]" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
