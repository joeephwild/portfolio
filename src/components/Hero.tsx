import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    <div className=" mt-16 leading-tight">
      <div className="flex font-Unique-SemiBold justify-between px-7  items-center">
        <div className="flex font-Glusp items-center">
          <span className="md:text-[90px] text-[50px]">10</span>
          <div className="flex font-Panchang-Semibold text-xs flex-col items-start">
            <span className="text-xs md:text-xl">Jan</span>
            <span className="text-xs md:text-xl">Available</span>
            <span className="text-xs md:text-xl">for work</span>
          </div>
        </div>
      </div>
    <div className="grid md:grid-cols-2 grid-cols-1 gap-9 mx-auto items-center justify-around">
    <div className="flex space-y-5 mx-2  flex-col">
          <span className="font-Panchang-Semibold text-2xl">creative</span>
          <span className="text-[44px] md:text-7xl font-Panchang-Semibold">
            BLOCKCHAIN
          </span>
          <span className="text-[44px] md:text-7xl font-Panchang-Semibold">
            DEVELOPER
          </span>
        </div>
        <div className="flex justify-center">
          <Spline scene="https://prod.spline.design/HjjOv0jyYJ8kjnaC/scene.splinecode" />
        </div>
    </div>
      <div className="w-[90%] flex text-center items-end mx-auto">
        <span className="font-Panchang-Semibold block text-xs">
          Interactive front-end/blockchain developer striving to craft memorable
          experience on a digital canvas. with skills of a frontend developer
          but still fullstack capable, based in Lagos, Nigeria.
        </span>
      </div>

      <div className="flex justify-end mt-6 mx-4 items-end">
        <button className="border-[#b1dd40] border-2 px-4 py-2 ml-16 rounded-full font-Panchang-Semibold">
          CONTACT ME
        </button>
      </div>
    </div>
  );
};

export default Hero;
