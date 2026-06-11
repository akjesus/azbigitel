
import { motion } from "framer-motion";
import { FaHardHat, FaBuilding, FaUsers, FaShieldAlt } from "react-icons/fa";

const About = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white">
      {/* HERO SECTION */}
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
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9CE23A] to-[#29C87D]">
              Abigzitel
            </span>
          </h1>

          <p className="text-gray-600 dark:text-gray-400 mt-4">
            We are a modern construction company committed to building safe,
            durable, and innovative structures that shape communities.
          </p>
        </motion.div>
      </section>

      {/* STORY SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold">Our Story</h2>

          <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
            BuildPro started with a simple mission—to deliver high-quality
            construction services with integrity and precision. Over the years,
            we have grown into a trusted partner for residential, commercial,
            and infrastructure projects. Our focus remains on innovation,
            safety, and excellence in every build.
          </p>

          <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
            From small renovations to large-scale developments, we bring the
            same level of dedication and craftsmanship to every project.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="h-[350px] rounded-xl bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900"
        />
      </section>

      {/* STATS SECTION */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { label: "Projects", value: "120+" },
            { label: "Years Experience", value: "15+" },
            { label: "Experts", value: "80+" },
            { label: "Client Satisfaction", value: "100%" },
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="text-2xl font-bold text-[#29C87D]">
                {stat.value}
              </h3>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-6">
        {[
          {
            icon: <FaHardHat />,
            title: "Our Mission",
            desc: "To deliver safe, durable, and innovative construction solutions that exceed client expectations.",
          },
          {
            icon: <FaBuilding />,
            title: "Our Vision",
            desc: "To become a leading construction company known for quality, trust, and innovation.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
          >
            <div className="text-2xl text-[#29C87D] mb-3">{item.icon}</div>

            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* VALUES */}
      <section className="py-20 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <FaShieldAlt />,
                title: "Safety",
                desc: "We prioritize safety in every project we undertake.",
              },
              {
                icon: <FaUsers />,
                title: "Teamwork",
                desc: "Collaboration drives our success and efficiency.",
              },
              {
                icon: <FaBuilding />,
                title: "Quality",
                desc: "We never compromise on quality and standards.",
              },
            ].map((val, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition"
              >
                <div className="text-2xl text-[#29C87D] mb-3">{val.icon}</div>
                <h3 className="font-semibold">{val.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-white dark:bg-black">
        <h2 className="text-3xl font-bold">Ready to Build With Us?</h2>

        <p className="text-gray-600 dark:text-gray-400 mt-3">
          Let’s bring your construction vision to life with expert execution.
        </p>

        <button className="mt-6 px-6 py-3 rounded-lg text-white bg-gradient-to-r from-[#9CE23A] to-[#29C87D] hover:opacity-90 transition">
          Get a Free Quote
        </button>
      </section>
    </div>
  );
};

export default About;