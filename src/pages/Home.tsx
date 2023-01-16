import { About, Contact, Hero, Panel, ProjectSection } from "../components";
import { useEffect, useState } from "react";
import Skill from "../components/Skill";

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
        <div className="w-scre flex flex-col space-y-36">
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
