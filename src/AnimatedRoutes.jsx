import { Routes, Route, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import Home from "./pages/Home";
import About from "./pages/About";
import ServicesPage from "./pages/Services";
import ProjectsPage from "./pages/Projects";
import Contact from "./pages/Contact";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -20,
  },
};

const pageTransition = {
  duration: 0.4,
  ease: "easeInOut",
};

const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route
        path="/"
        element={
          <AnimatedPage>
            <Home />
          </AnimatedPage>
        }
      />
      <Route
        path="/about"
        element={
          <AnimatedPage>
            <About />
          </AnimatedPage>
        }
      />
      <Route
        path="/services"
        element={
          <AnimatedPage>
            <ServicesPage />
          </AnimatedPage>
        }
      />
      <Route
        path="/projects"
        element={
          <AnimatedPage>
            <ProjectsPage />
          </AnimatedPage>
        }
      />
      <Route
        path="/contact"
        element={
          <AnimatedPage>
            <Contact />
          </AnimatedPage>
        }
      />
    </Routes>
  );
};

export default AnimatedRoutes;
