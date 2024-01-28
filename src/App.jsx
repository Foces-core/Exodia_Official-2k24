// App.js
import React, { useEffect, useState } from "react";
import ChildComponent from "./ChildComponent.jsx";
import 'aos/dist/aos.css';
import AOS from 'aos';
import Loading from "./Componets/Loading";

function App() {
  AOS.init();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 5600);
  }, []);

  return (
    <div className="min-h-screen scroll-smooth">
      {loading && <Loading />}
      <ChildComponent />
    </div>
  );
}

export default App;
