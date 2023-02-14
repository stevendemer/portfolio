import { Montserrat } from "@next/font/google";
import { RxDoubleArrowDown } from "react-icons/rx";

const montserrat = Montserrat({ subsets: ["latin"] });

const Hero = () => {
  return (
    <div className=" w-full min-h-[680px] border-t-[1px] border-slate-100 relative bg-black ">
      <div className="h-full left-1/3 absolute m-auto flex items-center justify-around">
        <div className={`space-y-8 ${montserrat.className} w-full `}>
          <div className="relative w-full space-y-6">
            <h2 className="text-white leading-4 text-xl lg:text-5xl font-medium">
              Welcome to my portfolio
            </h2>
            <h2 className="text-white leading-4 text-lg lg:text-2xl ">
              My name is Steven and i am a web developer
            </h2>
            <div className="relative group cursor-pointer ">
              <div className="absolute flex  justify-center  mx-auto  -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 group-hover:animate-none animate-pulse"></div>
              <div className="relative w-full  bg-black flex flex-col px-7 py-6 rounded-sm leading-none items-center">
                <div className=" text-slate-50 text-2xl font-regular flex items-center ">
                  Check out my work
                  <RxDoubleArrowDown className="mx-10 text-2xl group-hover:animate-bounce" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
