import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaHardHat,
  FaClock,
  FaThLarge,
  FaUsers,
  FaHandshake,
} from "react-icons/fa";
import { useEffect, useState } from "react";

// Count-up hook
const useCountUp = (end, duration = 1200) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = null;

    const animate = (t) => {
      if (!start) start = t;
      const progress = Math.min((t - start) / duration, 1);
      setValue(Math.floor(progress * end));

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return value;
};

// Animated stat component
const AnimatedStat = ({ value, suffix }) => {
  const count = useCountUp(value);

  return (
    <p className="text-[#29C87D] font-bold text-lg mt-3">
      {count}
      {suffix}
    </p>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Safety First Approach",
      desc: "Strict safety standards across all construction sites and operations.",
      icon: <FaShieldAlt />,
      stat: 100,
      suffix: "%",
    },
    {
      title: "Expert Engineers",
      desc: "Highly skilled professionals with years of industry experience.",
      icon: <FaHardHat />,
      stat: 15,
      suffix: "+ yrs",
    },
    {
      title: "On-Time Delivery",
      desc: "We complete projects within agreed timelines without compromise.",
      icon: <FaClock />,
      stat: 98,
      suffix: "%",
    },
    {
      title: "Modern Equipment",
      desc: "Advanced machinery and technology for efficient execution.",
      icon: <FaThLarge />,
      stat: 120,
      suffix: "+ units",
      highlight: true,
    },
    {
      title: "Skilled Workforce",
      desc: "Dedicated trained workers and project managers.",
      icon: <FaUsers />,
      stat: 250,
      suffix: "+",
    },
    {
      title: "Trusted Partnerships",
      desc: "Long-term relationships built on transparency and trust.",
      icon: <FaHandshake />,
      stat: 50,
      suffix: "+ clients",
    },
  ];

  // Framer Motion variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative py-20 bg-gray-50 dark:bg-black text-black dark:text-white overflow-hidden">
      {/* BLUEPRINT BACKGROUND */}
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

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9CE23A] to-[#29C87D]">
              Choose Us
            </span>
          </h2>

          <p className="text-gray-500 dark:text-gray-400 mt-3">
            We deliver excellence through experience, safety, and innovation
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
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`group p-6 rounded-xl border shadow-sm transition-all duration-300 hover:-translate-y-2 relative overflow-hidden
              ${
                item.highlight
                  ? "bg-gradient-to-br from-[#9CE23A]/10 to-[#29C87D]/10 border-[#29C87D]/40"
                  : "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800"
              }`}
            >
              {/* ICON */}
              <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-r from-[#9CE23A] to-[#29C87D] flex items-center justify-center text-white text-xl">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold group-hover:text-[#29C87D] transition">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                {item.desc}
              </p>

              {/* COUNTER */}
              <AnimatedStat value={item.stat} suffix={item.suffix} />

              {/* ACCENT LINE */}
              <div className="mt-4 h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-gradient-to-r from-[#9CE23A] to-[#29C87D]" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
