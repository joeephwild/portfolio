import { useRef, useState, useEffect } from "react";
import { BsArrow90DegRight } from "react-icons/bs";
import { Animations } from "../Animations";
import { useNavigate } from "react-router-dom";
import { ProjectDataType } from "../data/ProjectsData";
import { AiOutlineGithub } from "react-icons/ai";
import { motion } from "framer-motion";

type Prop = {
  data: ProjectDataType;
  style: string;
};
type Param = {
  substr(arg0: number, arg1: number): unknown;
  length: Param;
  str: string;
  n: number;
};
const Works = ({ data, style }: Prop) => {
  const { title, text, githubLink, liveLink, image } = data;
  const { transition, maskAnimation, textReveal } = Animations();

  const navigate = useNavigate();

  function truncate(str: string | string[] | any, n: number) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <motion.div
      className="bg-[#b1dd40]  rounded-lg  max-w-2xl"
    >
      <img
        src={image}
        alt=""
        className="w-full h-[300px] hover:scale-100 transition-all ease-in-out object-cover"
      />
      <div className="bg-[#b1dd40] flex px-4 flex-col rounded-lg md:h-28 h-fit max-w-2xl">
        <div className="flex justify-between w-full ">
          <span className="text-black font-Panchang-Semibold text-sm md:text-2xl">
            {title}
          </span>
          <div className="flex items-center">
            <a href={githubLink} target="_blank" rel="noreferrer">
              <AiOutlineGithub size={26} className="text-black" />
            </a>
            <a href={liveLink} target="_blank" rel="noreferrer">
              <BsArrow90DegRight size={26} className="text-black" />
            </a>
          </div>
        </div>

        <span className="truncat text-[10px] font-Panchang-Semibold text-black">
          {truncate(text, 50)}
        </span>
      </div>
    </motion.div>
  );
};
//connection, grattitud, love and money
export default Works;
