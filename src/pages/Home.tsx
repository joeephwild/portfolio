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
        <div>
          <Hero />

          <Skill />
          <About />
          <ProjectSection />
          <Contact />
        </div>
      )}
    </div>
  );
};

export default Home;
