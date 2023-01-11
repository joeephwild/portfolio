import { motion } from "framer-motion";
import { logo } from "../assets";
import { Animations } from "../Animations";

const generateMessage = () => {
    const messages = [
      "Bitcoin is a remarkable cryptographic achievement, and the ability to create something that is not duplicable in the digital world has enormous value. – Eric Schmidt",
      "Anything that can conceive of as a supply chain, blockchain can vastly improve its efficiency- it doesn’t matter if its people, numbers, data, money. – Ginni Rometty",
      " “I really like Bitcoin. I own Bitcoins. It’s a store of value, a distributed ledger. It’s also a good investment vehicle if you have an appetite for risk. But it won’t be a currency until volatility slows down. - David Marcus",
      " “The emergence of open Internet protocols for value exchange, today led by the global adoption of Bitcoin's blockchain, paves the way for value to move as freely as information and data move on the Internet today.” - Jeremy Allaire, CEO, Circle",
      "“The power and advantages of decentralization are becoming increasingly clear. We deserve a financial system where no one can be censored or excluded from full participation.” - Silvio Micali, Founder, Algorand",
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
            className="fixed top-[50%] left-0 w-[100%] text-[10px] text-[#111606] font-Panchang-Semibold z-[8888888] text-center translates">{
                window.innerWidth < 500? "Best Viewed on Desktop" : generateMessage()
            }</motion.h2>
    </div>
    </div>
  )
}

export default Panel