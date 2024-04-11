import bg from "../../public/imgs/background.svg";
import group6 from "../../public/imgs/group-6.svg";

import { MdOutlineArrowOutward } from "react-icons/md";

function HeroSection() {
  return (
    <div className="w-full h-full  ">
      <img src={bg} alt="" className="w-full h-full" />
      <div className="absolute sm:top-52  top-60 flex md:mx-44   mx-10 sm:mx-28   ">
        <div className="flex flex-col gap-10 ">
          <button
            type="button"
            className="cursor-pointer border-0 py-2 px-8 bg-white w-52"
          >
            <div className="flex-1   font-aber-mono text-black text-left">
              Discover zkVeil
            </div>
          </button>
          <h1 className="    lg:text-5xl text-3xl font-bold font-Aber-Mono-Bold lg:w-[12em] ">
            Unlocking cross-chain interoperability with zkRollup bridges &
            LayerZero.
          </h1>
          <p>
            zkVeil is revolutionizing blockchain interoperability by leveraging
            cutting-edge zkRollup technology and LayerZero.
          </p>
          <div className="flex gap-4">
            <button
              type="button"
              className="  bg-white md:py-2 md:px-8 px-2 py-2"
            >
              <span>Buy </span>
              <b>$ZKV</b>
            </button>
            <button
              type="button"
              className="  bg-black md:py-2 md:px-8 px-8   flex items-center   text-white"
            >
              Documentation
              <MdOutlineArrowOutward />
            </button>
          </div>
        </div>
        <div className="hidden md:block w-full h-full  translate-y-[-4em] ">
          <img src={group6} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
