// App.js
import React, { useEffect, useState } from "react";
import ChildComponent from "./ChildComponent.jsx";
import 'aos/dist/aos.css';
import AOS from 'aos';
import Loading from "./Componets/Loading";
import { Helmet } from "react-helmet";
function App() {
  AOS.init();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 5600);
  }, []);

  return (
    <div className="min-h-screen scroll-smooth">
      <Helmet>
    <title>Exodia 2024</title>
    <meta name="description" content="Welcome to EXODIA- where Innovation meets Inspiration! Exodia is an all-Kerala event that brings together tech enthusiasts and creative minds to explore Artificial Intelligence (AI), Augmented Reality (AR), and Game Development. This immersive experience empowers attendees with innovative knowledge, hands-on workshops led by our esteemed mentors, and unparalleled networking opportunities. EXODIA is a joint effort by IEDC, FOCES, and MULEARN -the 3 leading forums of the College Of Engineering Chengannur. Taking place on February 17th and 18th at the prestigious CEC Campus, this extravaganza is a fusion of intellect, talent, and excitement. Join us at EXODIA, where you can fuel your passion for technology, connect with like-minded individuals, and stay at the forefront of the latest AI, AR, and Game Development advancements." />
  </Helmet>
      {loading && <Loading />}
      <ChildComponent />
    </div>
  );
}

export default App;
