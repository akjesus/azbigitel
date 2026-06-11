import { motion } from "framer-motion";
import {
  FaHardHat,
  FaTools,
  FaBuilding,
  FaDraftingCompass,
  FaTruck,
  FaProjectDiagram,
} from "react-icons/fa";

const Services = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  const services = [
    {
      icon: <FaBuilding />,
      title: "Residential Construction",
      desc: "We build modern, durable, and beautiful residential homes tailored to your lifestyle.",
    },
    {
      icon: <FaHardHat />,
      title: "Commercial Projects",
      desc: "Office buildings, retail spaces, and large-scale commercial developments.",
    },
    {
      icon: <FaTools />,
      title: "Renovation & Remodeling",
      desc: "Upgrade and transform existing structures with modern design and efficiency.",
    },
    {
      icon: <FaDraftingCompass />,
      title: "Architectural Design",
      desc: "Creative and functional designs that bring your vision to life.",
    },
    {
      icon: <FaTruck />,
      title: "Project Management",
      desc: "End-to-end project coordination ensuring timely and cost-effective delivery.",
    },
    {
      icon: <FaProjectDiagram />,
      title: "Infrastructure Development",
      desc: "Roads, bridges, and public infrastructure built to the highest standards.",
    },
  ];

  const steps = [
    {
      title: "Consultation",
      desc: "We understand your needs, goals, and project requirements.",
    },
    {
      title: "Planning & Design",
      desc: "We create detailed plans, blueprints, and cost estimates.",
    },
    {
      title: "Construction",
      desc: "Our skilled team executes the project with precision and safety.",
    },
    {
      title: "Delivery",
      desc: "We ensure timely completion and final quality inspection.",
    },
  ];

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white">
      {/* HERO */}
      <section className="py-24 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 dark:opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, #9CE23A 1px, transparent 1px),
              linear-gradient(to bottom, #29C87D 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="relative max-w-3xl mx-auto px-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9CE23A] to-[#29C87D]">
              Services
            </span>
          </h1>

          <p className="text-gray-600 dark:text-gray-400 mt-4">
            We provide full-cycle construction solutions from design to delivery
            with precision, safety, and innovation.
          </p>
        </motion.div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-xl transition"
            >
              <div className="text-2xl text-[#29C87D] mb-3">{service.icon}</div>

              <h3 className="font-semibold text-lg">{service.title}</h3>

              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Our Working Process</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
              >
                <div className="text-[#29C87D] font-bold text-xl mb-2">
                  0{i + 1}
                </div>

                <h3 className="font-semibold">{step.title}</h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold">
          Need a Custom Construction Solution?
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mt-3">
          Let’s discuss your project and bring it to life with expert execution.
        </p>

        <button className="mt-6 px-6 py-3 rounded-lg text-white bg-gradient-to-r from-[#9CE23A] to-[#29C87D] hover:opacity-90 transition">
          Request a Quote
        </button>
      </section>
    </div>
  );
};

export default Services;
