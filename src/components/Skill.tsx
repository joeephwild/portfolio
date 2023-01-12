import { Zoom } from "react-reveal";
import { TechStack } from "../data/TechStack";

const Skill = () => {
  return (
    <div className="flex flex-col items-center">
      <span className="font-Panchang-Semibold text-3xl font-semibold">
        SKILLS I GOT
      </span>
      <div className="md:flex  grid-cols-2 gap-9 grid justify-center space-x-8 items-center mx-auto my-6">
        {TechStack.map((item, i) => {
          return (
            <Zoom>
              <div
                key={i}
                className="bg-[#b1dd40] flex text-[#111606] rounded-2xl flex-col items-center px-9 py-3.5 "
              >
                <div className="flex items-center flex-col">
                  <div className="rounded-full text-xl md:text-3xl">{item.image}</div>
                  <span className="font-Panchang-Semibold text-[9px] items-center flex w-full">
                    {item.name}
                  </span>
                </div>
              </div>
            </Zoom>
          );
        })}
      </div>
      <span className="text-sm font-Panchang-Semibold">
        This aint all i got some more, just email me
      </span>
    </div>
  );
};

export default Skill;
