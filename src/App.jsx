import Topsect from "./Componets/Topsect"
import Leftnav from "./Componets/Leftnav"
import Home from "./pages/Home/Home"
import Stacks from "./pages/Stacks/Stacks"
import RegisterSection from "./Componets/RegisterSection"
import Mentors from "./pages/Mentors/Mentors"
import './App.css';
function App() {

  return (
   <div className="min-h-screen scroll-smooth">
    <Topsect />
    {/* <Leftnav/> */}
     <Home />
     <Stacks />
     <Mentors />
     <RegisterSection />
   </div>
  )
}

export default App
