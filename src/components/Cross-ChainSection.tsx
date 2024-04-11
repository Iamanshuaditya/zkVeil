import Mask from "../../public/imgs/mask-group.svg";
import Vectr5 from "../../public/imgs/vector-5.svg";
import eth from "../../public/imgs/vector-6.svg";
import subtract from "../../public/imgs/subtract.svg";
import group from "../../public/imgs/group.svg";
function CrossChainSection() {
  return (
    <div className="absolute md:top-[76em] md:mx-52 top-[82em]">
      <div>
        <img src={Mask} alt="mas" className="w-full" />
        <div className="flex flex-col w-1/2 gap-10 absolute left-[25%] top-56">
          <div className="flex">
            <h2 className="font-bold md:text-5xl">Bridge Assets cross-chain</h2>
            <img src={Vectr5} alt="" />
          </div>
          <div>
            <p className="text-[#696969] text-base w-[90%]">
              Cross-chain bridges work by connecting two independent blockchain
              networks, allowing for the transfer of digital assets and data.
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className="md:translate-y-36 translate-y-72 translate-x-[-3em] text-center">
          zkVeil is available on:
        </p>
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(222,219,207,0) 100%)",
          }}
          className="flex px-4 py-10 items-center gap-10 font-bold text-xl justify-center md:translate-y-40 translate-y-80 "
        >
          <span className="flex ">
            {" "}
            <img src={eth} alt="" />
            Ethereum
          </span>
          <span className="flex">
            {" "}
            <img src={subtract} alt="" />
            Base
          </span>
          <span className="flex">
            {" "}
            <img src={group} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default CrossChainSection;
