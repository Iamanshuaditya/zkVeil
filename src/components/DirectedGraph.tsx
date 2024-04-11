import { FunctionComponent } from "react";
import vector7 from "../../public/imgs/vector-7.svg";
import vector2 from "../../public/imgs/vector-2.svg";
import vector6 from "../../public/imgs/vector-6.svg";
import vector8 from "../../public/imgs/vector-8.svg";
import vector14 from "../../public/imgs/vector-14.svg";
import ouz from "../../public/imgs/ousz8j13-1@2x.png";
import { MdOutlineArrowOutward } from "react-icons/md";
import schema2x from "../../public/imgs/schema@2x.png";

const DirectedGraph: FunctionComponent = () => {
  return (
    <div>
      <div className="absolute top-[130.5rem] left-[calc(50%_-_347px)] [background:linear-gradient(172.65deg,_#000,_#dedbcf)] overflow-hidden flex flex-col items-start justify-center py-[1.625rem] px-[1.563rem] gap-[1.25rem] text-[1.25rem]">
        <div className="[background:linear-gradient(90deg,_#dedbcf,_#f4f3ef)] overflow-hidden flex flex-col items-start justify-start py-[1.625rem] px-[1.875rem] gap-[1.25rem] text-white">
          <div className="w-[36.625rem] flex flex-row items-center justify-center gap-[0.625rem]">
            <div className="rounded-xl bg-gray-100 overflow-hidden flex flex-row items-center justify-start p-[1.313rem] gap-[1.875rem] border-[1px] border-solid border-black">
              <b className="relative">From</b>
              <div className="rounded-smi bg-gainsboro-200 overflow-hidden flex flex-row items-center justify-start py-[0.938rem] px-[1.563rem] gap-[0.938rem] text-black">
                <img
                  className="w-[1.5rem] relative h-[1.5rem]"
                  alt=""
                  src={vector6}
                />
                <b className="relative">ETH</b>
                <img
                  className="w-[0.375rem] relative h-[0.188rem]"
                  alt=""
                  src={vector2}
                />
              </div>
            </div>
            <img
              className="w-[2.125rem] relative h-[2.125rem]"
              alt=""
              src={vector7}
            />
            <div className="rounded-xl bg-gray-100 overflow-hidden flex flex-row items-center justify-start py-[1.313rem] px-[2.125rem] gap-[1.875rem] border-[1px] border-solid border-black">
              <b className="relative">To</b>
              <div className="rounded-smi bg-gainsboro-200 overflow-hidden flex flex-row items-center justify-start py-[0.938rem] px-[1.563rem] gap-[0.938rem] text-black">
                <img
                  className="w-[1.413rem] relative h-[1.413rem]"
                  alt=""
                  src={vector8}
                />
                <b className="relative">ETH</b>
                <img
                  className="w-[0.375rem] relative h-[0.188rem]"
                  alt=""
                  src="/vector-21.svg"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start relative gap-[0.438rem] text-black">
            <b className="relative z-[0]">You pay</b>
            <div className="w-[36.625rem] relative rounded-xl bg-gray-100 box-border h-[4.875rem] z-[1] border-[1px] border-solid border-black" />
            <div className="!m-[0] absolute top-[3.063rem] left-[1.313rem] rounded-lg bg-gainsboro-200 h-[2.625rem] overflow-hidden shrink-0 flex flex-row items-center justify-start p-[0.438rem] box-border gap-[0.375rem] z-[2]">
              <img
                className="w-[1.5rem] relative h-[1.5rem]"
                alt=""
                src={vector6}
              />
              <b className="relative">ETH</b>
              <img
                className="w-[0.375rem] relative h-[0.188rem]"
                alt=""
                src={vector7}
              />
            </div>
            <b className="w-[6rem] absolute !m-[0] top-[2.75rem] left-[9.063rem] text-[2rem] inline-block text-white z-[3]">
              1.902
            </b>
            <b className="w-[3.625rem] absolute !m-[0] top-[2.75rem] left-[31.563rem] text-[2rem] inline-block text-white z-[4]">
              Max
            </b>
            <div className="w-[4.063rem] absolute !m-[0] top-[4.813rem] left-[9.063rem] text-[0.75rem] text-gainsboro-100 inline-block z-[5]">
              $7,018.14
            </div>
            <div className="w-[4.063rem] absolute !m-[0] top-[4.813rem] left-[31.125rem] text-[0.75rem] text-gainsboro-100 inline-block z-[6]">
              $7,018.14
            </div>
          </div>
        </div>
        <div className="w-[21.25rem] [background:linear-gradient(90.5deg,_#d9d9d9,_rgba(115,_115,_115,_0))] overflow-hidden flex flex-row items-center justify-start py-[0.438rem] px-[0.625rem] box-border">
          <b className="relative">You get</b>
        </div>
        <div className="bg-gray-200 overflow-hidden flex flex-col items-start justify-start py-[1.625rem] px-[1.875rem] gap-[0.813rem]">
          <div className="rounded-tl-xl rounded-tr-none rounded-b-xl [background:linear-gradient(90deg,_#dedbcf,_#f4f3ef)] h-[5.438rem] overflow-hidden shrink-0 flex flex-row items-center justify-start py-[1.75rem] px-[1.313rem] box-border gap-[2.438rem]">
            <div className="w-[5.75rem] rounded-lg bg-black h-[2.625rem] overflow-hidden shrink-0 flex flex-row items-center justify-start p-[0.438rem] box-border gap-[0.375rem] text-white">
              <img
                className="w-[1.413rem] relative h-[1.413rem]"
                alt=""
                src={vector8}
              />
              <b className="relative">ETH</b>
              <MdOutlineArrowOutward />
            </div>
            <div className="flex flex-col items-start justify-start text-[2rem]">
              <b className="relative">1.902</b>
              <div className="relative text-[0.75rem] mt-[-0.312rem]">
                $7,003.14
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[0.313rem]">
              <img
                className="w-[1.125rem] relative rounded-2261xl h-[1.125rem] object-cover"
                alt=""
                src={ouz}
              />
              <b className="relative">Across</b>
            </div>
            <div className="bg-black overflow-hidden flex flex-row items-center justify-center p-[0.625rem] text-white">
              <b className="relative">1M</b>
            </div>
            <b className="relative">$5.31</b>
          </div>
          <div className="rounded-tl-xl rounded-tr-none rounded-b-xl [background:linear-gradient(90deg,_#dedbcf,_#f4f3ef)] h-[5.438rem] overflow-hidden shrink-0 flex flex-row items-center justify-start py-[1.75rem] px-[1.313rem] box-border gap-[2.438rem]">
            <div className="w-[5.75rem] rounded-lg bg-black h-[2.625rem] overflow-hidden shrink-0 flex flex-row items-center justify-start p-[0.438rem] box-border gap-[0.375rem] text-white">
              <img
                className="w-[1.413rem] relative h-[1.413rem]"
                alt=""
                src={vector8}
              />
              <b className="relative">ETH</b>
              <MdOutlineArrowOutward />
            </div>
            <div className="flex flex-col items-start justify-start text-[2rem]">
              <b className="relative">1.902</b>
              <div className="relative text-[0.75rem] mt-[-0.312rem]">
                $7,003.14
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[0.313rem]">
              <img
                className="w-[1.125rem] relative rounded-2261xl h-[1.125rem] object-cover"
                alt=""
                src={ouz}
              />
              <b className="relative">Across</b>
            </div>
            <div className="bg-black overflow-hidden flex flex-row items-center justify-center p-[0.625rem] text-white">
              <b className="relative">1M</b>
            </div>
            <b className="relative">$5.31</b>
          </div>
          <div className="rounded-tl-xl rounded-tr-none rounded-b-xl [background:linear-gradient(90deg,_#dedbcf,_#f4f3ef)] h-[5.438rem] overflow-hidden shrink-0 flex flex-row items-center justify-start py-[1.75rem] px-[1.313rem] box-border gap-[2.438rem]">
            <div className="w-[5.75rem] rounded-lg bg-black h-[2.625rem] overflow-hidden shrink-0 flex flex-row items-center justify-start p-[0.438rem] box-border gap-[0.375rem] text-white">
              <img
                className="w-[1.413rem] relative h-[1.413rem]"
                alt=""
                src={vector8}
              />
              <b className="relative">ETH</b>
              <MdOutlineArrowOutward />
            </div>
            <div className="flex flex-col items-start justify-start text-[2rem]">
              <b className="relative">1.902</b>
              <div className="relative text-[0.75rem] mt-[-0.312rem]">
                $7,003.14
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[0.313rem]">
              <img
                className="w-[1.125rem] relative rounded-2261xl h-[1.125rem] object-cover"
                alt=""
                src={ouz}
              />
              <b className="relative">Across</b>
            </div>
            <div className="bg-black overflow-hidden flex flex-row items-center justify-center p-[0.625rem] text-white">
              <b className="relative">1M</b>
            </div>
            <b className="relative">$5.31</b>
          </div>
        </div>
      </div>
      <div className="absolute text-5xl font-normal top-[187rem] left-[calc(50%_-_281px)] flex flex-col items-center justify-center gap-[1.875rem]">
        <div className="relative">
          {`Learn more `}
          <span className="[text-decoration:underline]">here</span>
        </div>
        <div className="w-[35.25rem] relative text-[1rem] text-dimgray flex items-center">
          zkVeil is revolutionizing blockchain interoperability by leveraging
          cutting-edge zkRollup technology and LayerZero.
        </div>
      </div>
      <div className="absolute top-[197.125rem] left-[-10.875rem] w-[92.688rem] h-[4.938rem] overflow-hidden">
        <div className="absolute top-[0rem] left-[10.875rem] [background:linear-gradient(91.14deg,_#000,_rgba(1,_1,_1,_0)_0.01%,_#666)] [backdrop-filter:blur(34.5px)] w-[90rem] h-[4.938rem]" />
        <div className="absolute top-[1.313rem] left-[calc(50%_-_893.5px)] flex flex-row items-center justify-center gap-[3.125rem]">
          <img
            className="w-[7.313rem] relative h-[2.313rem]"
            alt=""
            src={vector14}
          />
          <img
            className="w-[7.313rem] relative h-[2.313rem]"
            alt=""
            src={vector14}
          />
          <img
            className="w-[7.313rem] relative h-[2.313rem]"
            alt=""
            src={vector14}
          />
          <img
            className="w-[7.313rem] relative h-[2.313rem]"
            alt=""
            src={vector14}
          />
          <img
            className="w-[7.313rem] relative h-[2.313rem]"
            alt=""
            src={vector14}
          />
          <img
            className="w-[7.313rem] relative h-[2.313rem]"
            alt=""
            src={vector14}
          />
          <img
            className="w-[7.313rem] relative h-[2.313rem]"
            alt=""
            src={vector14}
          />
          <img
            className="w-[7.313rem] relative h-[2.313rem]"
            alt=""
            src={vector14}
          />
          <img
            className="w-[7.313rem] relative h-[2.313rem]"
            alt=""
            src={vector14}
          />
          <img
            className="w-[7.313rem] relative h-[2.313rem]"
            alt=""
            src={vector14}
          />
          <img
            className="w-[7.313rem] relative h-[2.313rem]"
            alt=""
            src={vector14}
          />
        </div>
      </div>
      <div className="absolute  left-[calc(50%_-_720px)] w-[82rem] h-[49.938rem] top-[202em] md:mx-2">
        <div className="absolute top-[calc(50%_-_399.5px)] left-[calc(50%_-_720px)] [background:linear-gradient(176.44deg,_rgba(102,_102,_102,_0)_20%,_#000)] w-[90rem] h-[49.938rem]" />
        <img
          className="absolute top-[2.75rem] left-[calc(50%_-_526px)] w-[65.75rem] h-[43.938rem] object-cover"
          alt=""
          src={schema2x}
        />
      </div>
    </div>
  );
};

export default DirectedGraph;

{
  /* <div className=" text-black  flex flex-col items-center justify-center gap-[1.875rem]">
<div className="">
  {`Learn more `}
  <span className="[text-decoration:underline]">here</span>
</div>
<div className="w-[35.25rem] relative text-[1rem] text-dimgray flex items-center">
  zkVeil is revolutionizing blockchain interoperability by leveraging
  cutting-edge zkRollup technology and LayerZero.
</div>
</div> */
}
