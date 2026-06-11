import { useState } from "react";
import AnimatedRoutes from "./AnimatedRoutes";
import ScrollProgress from "./components/ScrollProgress";
import FloatingCTA from "./components/FloatingCTA";
import Scroll from "./components/Scroll";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import QuoteModal from "./components/QuoteModal";

const App = () => {
  const [isQuoteOpen, setQuoteOpen] = useState(false);

  return (
    <>
      <Navbar onOpenQuote={() => setQuoteOpen(true)} />
      <ScrollProgress />
      <AnimatedRoutes />
      <FloatingCTA />
      <Scroll />
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setQuoteOpen(false)} />
      <Footer />
    </>
  );
};

export default App;