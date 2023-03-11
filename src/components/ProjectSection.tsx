import React from "react";
import { ProjectData } from "../data/ProjectsData";
import Works from "./Works";

const ProjectSection = () => {
  return (
    <div className="my-20 w-screen flex flex-col items-center justify-center h-[600p]">
      <span className="font-Glusp text-[30px] md:text-[50px] tracking-normal font-black">
        SELECTED WORKS
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2  mx-9 gap-5 items-center">
        {ProjectData.map((data, i) => {
          return <Works key={i} style="skill-set" data={data} />;
        })}
      </div>
      <div className="flex items-center justify-center">
  </div>
    </div>
  );
};

export default ProjectSection;
