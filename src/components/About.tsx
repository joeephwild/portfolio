import Spline from "@splinetool/react-spline";
import { Fade } from 'react-reveal'
import {motion} from 'framer-motion'
import { Animations } from "../Animations";

const About = () => {
  const { textReveal2, textReveal } = Animations()
  return (
    <div className="flex w-scree h-screen bg-[#b1dd40] rounded-lg px-4 py-2 flex-col my-[30%] md:my-44  text-black md:mx-7 items-center">
      <div className="lg:flex  mx-16 items-center">
        <>
        <motion.span variants={textReveal2} initial='initial' whileInView="animate" viewport={{ once: true }} className="font-Panchang-Semibold text-[12px] mx-3 flex flex-col items-center text-center">
          <span className="text-xl font-Panchang-Semibold">HELLO, I AM JOSEPH </span>
          Over the past few months, I've been building projects ranging from
          marketing websites to complex solutions and enterprise apps with focus
          on fast, elegant and accessible user experiences. Currently, In my
          spare time, I enjoy experimenting with new Web3 development tools,
          while vibing to some cool afrobeats music or playing basketball at the
          local basketball court with my teammates, I also enjoy socializing on
          twitter and speaking on twitter spaces . So please feel free to send
          me a message on any of my social media accounts or send me an email.
        </motion.span>
        </>
        <Fade className="flex items-center justify-center">
          <Spline scene="https://prod.spline.design/K9kzwdXjVRchIdrf/scene.splinecode" />
        </Fade>
      </div>
    </div>
  );
};

export default About;
