import { useState } from "react";
import img1 from "../assets/projects/1.jpg";
import img2 from "../assets/projects/2.jpg";
import img3 from "../assets/projects/3.jpg";



const Projects = () => {
  const [active, setActive] = useState("All");
  const projectsData = [
    {
      id: 1,
      title: "Modern Luxury Villa",
      category: "Residential",
      image: img3,
    },
    {
      id: 2,
      title: "Corporate Office Tower",
      category: "Commercial",
      image: img1,
    },
    {
      id: 3,
      title: "Highway Expansion",
      category: "Civil",
      image: img2,
    },
    {
      id: 4,
      title: "Shopping Complex",
      category: "Commercial",
      image: img1,
    },
    {
      id: 5,
      title: "Smart Apartment Block",
      category: "Residential",
      image: img2,
    },
    {
      id: 6,
      title: "Bridge Construction",
      category: "Civil",
      image: img1,
    },
  ];

  const categories = ["All", "Residential", "Commercial", "Civil"];
 const filteredProjects =
   active === "All"
     ? projectsData
     : projectsData.filter((p) => p.category === active);
  return (
    <section className="py-20 bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9CE23A] to-[#29C87D]">
              Projects
            </span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            A showcase of our completed construction works
          </p>
        </div>

        {/* FILTER BUTTONS */}
        <div className="flex justify-center flex-wrap gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full border transition ${
                active === cat
                  ? "bg-gradient-to-r from-[#9CE23A] to-[#29C87D] text-white border-transparent"
                  : "border-gray-300 dark:border-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition"
            >
              {/* IMAGE */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                <div>
                  <h3 className="text-white text-lg font-semibold">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-200">{project.category}</p>

                  <div className="mt-2 h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-gradient-to-r from-[#9CE23A] to-[#29C87D]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
