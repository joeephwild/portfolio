import Spline from "@splinetool/react-spline";
import React from "react";
import { logo } from "../assets";

const About = () => {
  return (
    <div className="flex flex-col mt-12 mx-7 items-center">
      <div className="lg:flex  mx-6 items-center">
        <span className="font-Panchang-Semibold text-[9px] leading-loose mx-3 mt-6 text-center">
          <span className="text-xl font-Glusp">HELLO, I AM JOSEPH </span>
          Over the past few months, I've been building projects ranging from
          marketing websites to complex solutions and enterprise apps with focus
          on fast, elegant and accessible user experiences. Currently, In my
          spare time, I enjoy experimenting with new Web3 development tools,
          while vibing to some cool afrobeats music or playing basketball at the
          local basketball court with my teammates, I also enjoy socializing on
          twitter and speaking on twitter spaces . So please feel free to send
          me a message on any of my social media accounts or send me an email.
        </span>
        <div className="">
          <Spline scene="https://prod.spline.design/K9kzwdXjVRchIdrf/scene.splinecode" />
          <span>Scroll Down</span>
        </div>
      </div>
    </div>
  );
};

export default About;
