import Topsect from "./Componets/Topsect"
import Leftnav from "./Componets/Leftnav"
import Home from "./pages/Home/Home"
import Stacks from "./pages/Stacks/Stacks"
import RegisterSection from "./Componets/RegisterSection"
import Mentors from "./pages/Mentors/Mentors"
import './App.css';
import Footer from "./Componets/Footer"
import 'aos/dist/aos.css';
import AOS from 'aos'
import Loading from "./Componets/Loading"
import { useState,useEffect } from "react"
import FAQ from "./pages/FAQ/FAQ.jsx"

function App() {
  
  AOS.init()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 5600)
  }, [])

  return (
    <>
      {loading&&<Loading/>}
   <div className="min-h-screen scroll-smooth">
      <Topsect />
      <Home />
      <Stacks />
      <Mentors />
      <RegisterSection />
      <FAQ/>
      <Leftnav/>
      <Footer/>
   </div>
    </>
  )
}

export default App
