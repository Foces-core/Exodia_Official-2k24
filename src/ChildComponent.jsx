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
import Contact from "./pages/Contact/Contact.jsx";
import Social from "./pages/Social.jsx";

const ChildComponent = () => {
  return (
    <div className="min-h-screen scroll-smooth">
      <Topsect />
      <Home />
      <About />
      <Scope />
      <Culturals />
      <Stacks />
      <Mentors />
      <RegisterSection />
      <FAQ />
      <Social />
      <Contact />
      <Leftnav />
      <Footer />
    </div>
  );
};

export default ChildComponent;
