import { useEffect, useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael Johnson",
      role: "Real Estate Developer",
      image: "/clients/client1.jpg",
      text: "Exceptional work quality and on-time delivery. The team handled our project professionally from start to finish.",
      rating: 5,
    },
    {
      name: "Sarah Williams",
      role: "Business Owner",
      image: "/clients/client2.jpg",
      text: "Highly reliable construction company. Their attention to detail and communication were outstanding.",
      rating: 5,
    },
    {
      name: "David Brown",
      role: "Property Investor",
      image: "/clients/client3.jpg",
      text: "They delivered our commercial building ahead of schedule with excellent craftsmanship.",
      rating: 4,
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const { name, role, image, text, rating } = testimonials[current];

  return (
    <section className="py-20 bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* HEADER */}
        <h2 className="text-3xl md:text-4xl font-bold">
          What Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9CE23A] to-[#29C87D]">
            Clients Say
          </span>
        </h2>

        <p className="text-gray-500 dark:text-gray-400 mt-3">
          Real feedback from our satisfied customers
        </p>

        {/* TESTIMONIAL CARD */}
        <div className="mt-12 relative max-w-3xl mx-auto">
          <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-md transition-all duration-500">
            {/* STARS */}
            <div className="flex justify-center gap-1 text-[#29C87D] mb-4">
              {[...Array(rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            {/* TEXT */}
            <p className="text-gray-700 dark:text-gray-300 text-lg italic">
              "{text}"
            </p>

            {/* CLIENT */}
            <div className="mt-6 flex flex-col items-center">
              <img
                src={image}
                alt={name}
                className="w-16 h-16 rounded-full object-cover border-2 border-[#29C87D] mt-4"
              />

              <h4 className="mt-3 font-semibold">{name}</h4>
              <p className="text-sm text-gray-500">{role}</p>
            </div>
          </div>

          {/* NAV BUTTONS */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white dark:bg-black p-2 rounded-full shadow hover:text-[#29C87D]"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white dark:bg-black p-2 rounded-full shadow hover:text-[#29C87D]"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2.5 h-2.5 rounded-full transition ${
                current === index
                  ? "bg-[#29C87D]"
                  : "bg-gray-300 dark:bg-gray-700"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
