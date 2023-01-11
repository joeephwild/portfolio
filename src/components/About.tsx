import Spline from "@splinetool/react-spline";
import React from "react";
import { logo } from "../assets";

const About = () => {
  return (
    <div className="flex w-scree h-screen bg-[#b1dd40] rounded-lg px-4 py-2 flex-col my-36  text-black md:mx-7 items-center">
      <div className="lg:flex  mx-16 items-center">
        <span className="font-Panchang-Semibold text-[12px] mx-3 flex flex-col items-center text-center">
          <span className="text-xl font-Panchang-Semibold">HELLO, I AM JOSEPH </span>
          Over the past few months, I've been building projects ranging from
          marketing websites to complex solutions and enterprise apps with focus
          on fast, elegant and accessible user experiences. Currently, In my
          spare time, I enjoy experimenting with new Web3 development tools,
          while vibing to some cool afrobeats music or playing basketball at the
          local basketball court with my teammates, I also enjoy socializing on
          twitter and speaking on twitter spaces . So please feel free to send
          me a message on any of my social media accounts or send me an email.
        </span>
        <div className="flex items-center justify-center">
          <Spline scene="https://prod.spline.design/K9kzwdXjVRchIdrf/scene.splinecode" />
        </div>
      </div>
    </div>
  );
};

export default About;
