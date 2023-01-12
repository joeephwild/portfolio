import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import { Animations } from "../Animations";
import Skill from "./Skill";

const Hero = () => {
  const {
    textReveal,
    transition,
    worksTitleParent,
  } = Animations();
  return (
    <motion.div 
    variants={worksTitleParent}
    initial="initial"
    animate="animate"
     className=" my-44 w-screen h-[400px] leading-tight">
      <div>
        <motion.div
          className="flex  space-y-5 justify-center items-center mx-2  flex-col"
        >
          <motion.span
            variants={textReveal}
            initial="initial"
            animate="animate"
            transition={{ ...transition, duration: 0.6, delay: 0.8 }}
            className="font-Panchang-Semibold overflow-hidden tracking-widest text-5xl"
          >
            CREATIVE
          </motion.span>
          <motion.span
            variants={textReveal}
            initial="initial"
            animate="animate"
            transition={{ ...transition, duration: 0.6, delay: 0.9 }}
            className="text-[44px] overflow-hidden lg:text-8xl font-Panchang-Semibold"
          >
            BLOCKCHAIN
          </motion.span>
          <motion.span
            variants={textReveal}
            initial="initial"
            animate="animate"
            transition={{ ...transition, duration: 0.6, delay: 1 }}
            className="text-[44px] overflow-hidden lg:text-8xl font-Panchang-Semibold"
          >
            DEVELOPER
          </motion.span>
         
        </motion.div>
      </div>
      <motion.div 
            variants={textReveal}
            initial="initial"
            animate="animate"
            transition={{ ...transition, duration: 0.6, delay: 1.2 }}
       className="flex-col flex items-center space-y-9 mt-6 mx-4 ">
      <motion.span
            className="text-[13px] md:w-[60%] w-[80%] text-center overflow-hidden font-Panchang-Semibold"
          >
            Interactive front-end/blockchain developer striving to craft
            memorable experience on a digital canvas, with skills of a frontend
            developer but still fullstack capable, based in Lagos, Nigeria.
          </motion.span>
        <motion.button
             className="border-[#b1dd40] border-2 px-4 py-2 ml-16 rounded-full font-Panchang-Semibold">
          CONTACT ME
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
