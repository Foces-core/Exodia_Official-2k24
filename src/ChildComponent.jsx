// ChildComponent.jsx

import Topsect from "./Componets/Topsect";
import Home from "./pages/Home/Home";
import Stacks from "./pages/Stacks/Stacks";
import RegisterSection from "./Componets/RegisterSection";
import Mentors from "./pages/Mentors/Mentors";
import FAQ from "./pages/FAQ/FAQ.jsx";
import About from "./pages/About/About.jsx";
import Scope from "./Componets/Scope.jsx";
import Culturals from "./Componets/Culturals.jsx";
import Leftnav from "./Componets/Leftnav";
import Footer from "./Componets/Footer";

const ChildComponent = () => {
  return (
    <div>
      <Topsect />
      <Home />
      <About />
      <Scope />
      <Culturals />
      <Stacks />
      <Mentors />
      <RegisterSection />
      <FAQ />
      <Leftnav />
      <Footer />
    </div>
  );
};

export default ChildComponent;
