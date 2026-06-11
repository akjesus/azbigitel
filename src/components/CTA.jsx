import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";

const CTA = ({ onOpenQuote }) => {
  const [quoteOpen, setQuoteOpen] = useState(false);
  return (
    <section className="relative py-20 bg-white dark:bg-black text-black dark:text-white overflow-hidden">
      {/* BACKGROUND PATTERN */}
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

      <div className="max-w-5xl mx-auto px-6 relative text-center">
        {/* HEADLINE */}
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Ready to Build Your Next{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9CE23A] to-[#29C87D]">
            Dream Project?
          </span>
        </h2>

        {/* SUBTEXT */}
        <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
          Let’s bring your ideas to life with expert construction services,
          modern engineering, and reliable project delivery.
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">

          {/* SECONDARY CTA */}
          <button className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:border-[#29C87D] transition">
            Contact Us
          </button>
        </div>

        {/* TRUST LINE */}
        <p className="text-xs text-gray-500 mt-6">
          No obligation • Fast response within 24 hours • Trusted by 100+
          clients
        </p>
      </div>
    </section>
  );
};

export default CTA;
