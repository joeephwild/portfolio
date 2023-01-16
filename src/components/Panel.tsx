import { motion } from "framer-motion";
import { logo } from "../assets";
import { Animations } from "../Animations";

const generateMessage = () => {
    const messages = [
      "Just A Sec...",
      "Any Minute Now...",
      "Loading...",
      "It's Coming...",
      "One Moment...",
      "Almost There...",
      "Hang On...",
      "Easy Does It...",
      "“DeFi has the potential to create equal opportunity through peer-to-peer networks. It's one of the greatest advantages it offers.” - Jordan Kruger, CEO and Co-Founder, Vesper Finance",
      "“Blockchain should be used to address opportunities and problems that lack easier answers.” - Julie Sweet, CEO, Accenture"
    ];
    const randomNum = Math.floor(Math.random() * messages.length);
    return messages[randomNum];
  };

const Panel = () => {
  const { transition } = Animations();
  return (
    <div className="relative">
    <div className="  text-[]  h-screen w-screen fixed z-[8888888] justify-center items-center flex flex-col ">
         <motion.div 
            initial={{height: 0}}
            animate={{height: [window.innerHeight, window.innerHeight, 0, 0], 
                top: [0, 0, window.innerHeight, window.innerHeight], transition: {...transition, duration: 6.7, times: [0, 0.6, 0.99, 1]}}}
            exit={{height: [0,0, window.innerHeight, window.innerHeight], top: [0,0,0,0], transition: {...transition, duration: 2, times: [0, 0,1, 0.9, 1]}}}
            className="h-[100%] w-[50.5%] absolute top-0 z-[8888888] left-0 bg-[#b1dd40] "></motion.div>
            <motion.div 
            initial={{height: 0}}
            animate={{height: [window.innerHeight, window.innerHeight, 0, 0], top: [0,0,0,0], transition: {...transition, duration: 6.7, times: [0, 0.6, 0.99, 1]}}}
            exit={{height: [0,0, window.innerHeight, window.innerHeight], 
                top: [window.innerHeight, window.innerHeight, 0, 0], transition: {...transition, duration: 2, times: [0, 0,1, 0.9, 1]}}}
                className="h-[100%] w-[50.5%] right-0 absolute top-0 z-[8888888] bg-[#b1dd40] "></motion.div>
              <motion.h2 
            initial={{opacity: 0, display: "block", top: "60%", left: "50%", x:"-50%", y:"-50%"}}
            animate={{
                top: ["50%", "50%", "50%", "30%", "40%"],
                left: "50%",
                x: "-50%",
                y:"-50%", 
                opacity: [0, 1, 1, 1, 0],
                transition: {...transition, duration: 6.9, times: [0, 0.5, 0.5, 0.99, 1]}
        }}
            exit={{display: "none", opacity: 0, transition:{duration: 6.9}}}
            className="fixed top-[50%] left-0 w-[100%] text-[12px] text-[#111606] font-Panchang-Semibold z-[8888888] text-center translates">
                { generateMessage()}
            </motion.h2>
    </div>
    </div>
  )
}

export default Panel