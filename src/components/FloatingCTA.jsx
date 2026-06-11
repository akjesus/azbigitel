import { useState } from "react";
import { FaPhone, FaTimes } from "react-icons/fa";

const FloatingCTA = () => {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex items-end gap-3">
      {/* CTA CARD */}
      <div className="bg-white dark:bg-gray-900 shadow-xl border border-gray-200 dark:border-gray-800 rounded-xl p-4 w-64 animate-fade-in">
        <p className="text-sm font-semibold">Need a construction quote?</p>

        <p className="text-xs text-gray-500 mt-1">
          Get a free estimate within 24 hours
        </p>

        <button className="mt-3 w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-white bg-gradient-to-r from-[#9CE23A] to-[#29C87D] hover:opacity-90 transition">
          <FaPhone />
          Call Now
        </button>
      </div>

      {/* CLOSE BUTTON */}
      <button
        onClick={() => setOpen(false)}
        className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-2 rounded-full shadow hover:text-red-500 transition"
      >
        <FaTimes />
      </button>
    </div>
  );
};

export default FloatingCTA;
