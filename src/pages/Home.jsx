import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Choose from "../components/Choose";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import ScrollReveal from "../components/ScrollReveal";
import {
  FaHardHat,
  FaBuilding,
  FaTools,
  FaDraftingCompass,
} from "react-icons/fa";

const Home = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white">
      <Hero />
      <ScrollReveal>
        <Services />
      </ScrollReveal>
      <ScrollReveal>
        <Projects />
      </ScrollReveal>
      <ScrollReveal>
        <Choose />
      </ScrollReveal>
      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>
      <CTA />
    </div>
  );
};

export default Home;
