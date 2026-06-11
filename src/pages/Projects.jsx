import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  const projects = [
    {
      id: 1,
      title: "Luxury Residential Villa",
      category: "residential",
      image: "/projects/p1.jpg",
      desc: "Modern 5-bedroom villa with smart home integration.",
    },
    {
      id: 2,
      title: "Corporate Office Tower",
      category: "commercial",
      image: "/projects/p2.jpg",
      desc: "20-floor commercial office building in downtown core.",
    },
    {
      id: 3,
      title: "Highway Expansion Project",
      category: "infrastructure",
      image: "/projects/p3.jpg",
      desc: "Major highway widening and structural reinforcement.",
    },
    {
      id: 4,
      title: "Modern Apartment Complex",
      category: "residential",
      image: "/projects/p4.jpg",
      desc: "120-unit residential apartment development.",
    },
    {
      id: 5,
      title: "Shopping Mall Construction",
      category: "commercial",
      image: "/projects/p5.jpg",
      desc: "Large retail and entertainment complex.",
    },
    {
      id: 6,
      title: "Bridge Engineering Project",
      category: "infrastructure",
      image: "/projects/p6.jpg",
      desc: "Steel bridge connecting major transport routes.",
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

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
              Projects
            </span>
          </h1>

          <p className="text-gray-600 dark:text-gray-400 mt-4">
            A showcase of our completed and ongoing construction projects across
            residential, commercial, and infrastructure sectors.
          </p>
        </motion.div>
      </section>

      {/* FILTERS */}
      <section className="max-w-7xl mx-auto px-6 pb-10 flex justify-center gap-3 flex-wrap">
        {["all", "residential", "commercial", "infrastructure"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm border transition ${
              filter === cat
                ? "bg-gradient-to-r from-[#9CE23A] to-[#29C87D] text-white"
                : "border-gray-300 dark:border-gray-700"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </section>

      {/* GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="cursor-pointer group rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-xl transition"
              onClick={() => setSelected(project)}
            >
              {/* IMAGE */}
              <div className="h-56 bg-gray-200 dark:bg-gray-800 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* INFO */}
              <div className="p-4">
                <h3 className="font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 max-w-xl w-full rounded-xl overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h2 className="text-xl font-bold">{selected.title}</h2>

                <p className="text-sm text-gray-500 mt-2">{selected.desc}</p>

                <button
                  onClick={() => setSelected(null)}
                  className="mt-4 px-4 py-2 rounded-lg text-white bg-gradient-to-r from-[#9CE23A] to-[#29C87D]"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { label: "Completed Projects", value: "120+" },
            { label: "Active Sites", value: "18" },
            { label: "Team Members", value: "80+" },
            { label: "Client Satisfaction", value: "98%" },
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="text-3xl font-bold text-[#29C87D]">
                {stat.value}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-20 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* IMAGE */}
        <div className="rounded-xl overflow-hidden h-[350px] bg-gray-200 dark:bg-gray-800">
          <img
            src="/projects/featured.jpg"
            alt="Featured Project"
            className="w-full h-full object-cover"
          />
        </div>

        {/* CONTENT */}
        <div>
          <h2 className="text-3xl font-bold">Featured Project</h2>

          <h3 className="text-[#29C87D] font-semibold mt-2">
            Luxury Waterfront Residence
          </h3>

          <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
            This high-end residential project showcases our expertise in modern
            architectural design, structural engineering, and premium finishing.
            Completed within 10 months with zero safety incidents.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-500">Duration</p>
              <p className="font-semibold">10 Months</p>
            </div>

            <div>
              <p className="text-gray-500">Location</p>
              <p className="font-semibold">Toronto, Canada</p>
            </div>

            <div>
              <p className="text-gray-500">Budget</p>
              <p className="font-semibold">$2.5M</p>
            </div>

            <div>
              <p className="text-gray-500">Status</p>
              <p className="font-semibold text-[#29C87D]">Completed</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">How We Deliver Projects</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Planning",
                desc: "Site analysis and feasibility studies.",
              },
              {
                title: "Design",
                desc: "Architectural and structural design phase.",
              },
              {
                title: "Execution",
                desc: "Skilled construction and engineering.",
              },
              {
                title: "Handover",
                desc: "Final inspection and client delivery.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900"
              >
                <div className="text-[#29C87D] font-bold text-xl mb-2">
                  0{i + 1}
                </div>

                <h3 className="font-semibold">{step.title}</h3>
                <p className="text-sm text-gray-500 mt-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 bg-gradient-to-r from-[#9CE23A] to-[#29C87D] text-white text-center">
        <h2 className="text-2xl font-bold">
          Trusted by 100+ Clients Across Residential & Commercial Projects
        </h2>

        <p className="text-sm mt-2 opacity-90">
          Quality • Safety • Timely Delivery • Transparency
        </p>
      </section>
    </div>
  );
};

export default Projects;