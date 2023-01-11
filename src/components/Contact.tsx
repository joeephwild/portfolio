import { Link } from "react-router-dom";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {

  return (
    <div className="flex flex-col mt-9 mx-9 items-center">
      <span className="text-3xl font-Panchang-Semibold border-b-2  border-[#b1dd40] w-full py-8 text-center">
        Let's collaborate <br /> and make good stuff together
      </span>
      <div className="flex flex-col items-start mt-6">
        <span className="font-Panchang-Semibold text-sm">Send me an Email</span>
        <Link 
        to="mailto:omotadetobiloba@gmail.com" 
        >
          <button className="text-2xl mt-9 font-Panchang-Semibold font-bold">
            omotadetobiloba@gmail.com
          </button>
        </Link>
        <div className="bg-[#b1dd40] max-2-[400px] flex flex-col items-enter px-4 py-2">
          <form action="">
            <div className="my-5">

            </div>
          </form>
          <div className="grid grid-cols-2 gap-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
