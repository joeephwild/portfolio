import {
  About,
  Contact,
  Hero,
  Panel,
  ProjectSection,
} from "../components";
import { useEffect, useState } from "react";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="relative">
          <Panel />
        </div>
      ) : (
        <div>
          <Hero />
          <About />
          <ProjectSection />
          <Contact />
        </div>
      )}
    </div>
  );
};

export default Home;
