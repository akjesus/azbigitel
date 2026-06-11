import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    let newErrors = {};

    if (!form.name) newErrors.name = "Name is required";
    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!form.message) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);

    try {
      // Simulated API request (replace with real backend or email service)
      await new Promise((res) => setTimeout(res, 1500));

      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

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
          className="relative max-w-3xl mx-auto px-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9CE23A] to-[#29C87D]">
              Us
            </span>
          </h1>

          <p className="text-gray-600 dark:text-gray-400 mt-4">
            Let’s discuss your project and bring your vision to life.
          </p>
        </motion.div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
        {/* FORM */}
        <motion.form
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          onSubmit={handleSubmit}
          className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
        >
          <div className="mb-4">
            <label className="text-sm">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent"
              placeholder="Your Name"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="text-sm">Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="text-sm">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              className="w-full mt-1 p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent"
              placeholder="Tell us about your project..."
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg text-white bg-gradient-to-r from-[#9CE23A] to-[#29C87D] hover:opacity-90 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-green-500 text-sm mt-3">
              Message sent successfully!
            </p>
          )}
        </motion.form>

        {/* INFO */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="space-y-6"
        >
          <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <div className="flex items-center gap-3">
              <FaPhone className="text-[#29C87D]" />
              <span>+234 803 332 8825</span>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#29C87D]" />
              <span>info@abigzitel.com.ng</span>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-[#29C87D]" />
              <span>Enugu, Nigeria</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* MAP */}
      <section className="px-6 pb-20 max-w-7xl mx-auto">
        <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18..."
            className="w-full h-[400px]"
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;