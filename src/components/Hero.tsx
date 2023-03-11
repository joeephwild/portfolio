import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import { Animations } from "../Animations";
import { netflix } from "../assets";

const Hero = () => {
  const { textReveal, transition, worksTitleParent } = Animations();
  return (
    <motion.div
      variants={worksTitleParent}
      initial="initial"
      animate="animate"
      className=" w-screen h-screen mb-16 leading-tigh"
    >
      <div className="absolute mt-28  top-0">
        <motion.div className="flex  space-y-5 justify-center items-center mx-2  flex-col">
          <motion.span
            variants={textReveal}
            initial="initial"
            animate="animate"
            transition={{ ...transition, duration: 0.6, delay: 0.8 }}
            className="font-Panchang-Semibold overflow-hidden tracking-widest sm:text-[44px] text-[37px] md:text-4xl lg:text-[150px]"
          >
            FULLSTACK
          </motion.span>
          <motion.span
            variants={textReveal}
            initial="initial"
            animate="animate"
            transition={{ ...transition, duration: 0.6, delay: 0.9 }}
            className="sm:text-[44px] text-[37px] md:text-4xl overflow-hidden lg:text-[150px] font-Panchang-Semibold"
          >
            ETHEREUM
          </motion.span>
          <motion.span
            variants={textReveal}
            initial="initial"
            animate="animate"
            transition={{ ...transition, duration: 0.6, delay: 1 }}
            className="sm:text-[44px] text-[37px] overflow-hidden lg:text-8xl xl:text-[100px] font-Panchang-Semibold"
          >
            DEVELOPER
          </motion.span>
        </motion.div>
        <motion.div
          variants={textReveal}
          initial="initial"
          animate="animate"
          transition={{ ...transition, duration: 0.6, delay: 1.2 }}
          className="flex-col flex justify-center items-center space-y-9 mt-6 mx-4 "
        >
          <motion.span className="md:text-[24px] text-[17px] md:w-[60%] w-[90%] text-center overflow-hidden font-Panchang-Semibold">
            Interactive front-end/blockchain developer striving to craft
            memorable experience on a digital canvas, with skills of a frontend
            developer but still fullstack capable, based in Lagos, Nigeria.
          </motion.span>
          <a href="mailto:omotadetobiloba@gmail.com">
            <motion.button className="bg-[#b1dd40] text-[#111606] px-4 py-2 rounded-full font-Panchang-Semibold">
              CONTACT ME
            </motion.button>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
