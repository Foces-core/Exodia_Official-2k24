// App.js
import { useEffect, useState } from "react";
import ChildComponent from "./ChildComponent.jsx";
import 'aos/dist/aos.css';
import AOS from 'aos';
import Loading from "./Componets/Loading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init();
    const loadingTimer = window.setTimeout(() => setLoading(false), 5600);

    return () => window.clearTimeout(loadingTimer);
  }, []);

  return (
    <div className="min-h-screen scroll-smooth">


      {loading && <Loading />}
      <ChildComponent />
    </div>
  );
}

export default App;
