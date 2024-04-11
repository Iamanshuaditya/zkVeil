const GraphSection = () => {
  return (
    <div className="flex items-center justify-between gap-x-8 w-585px bg-gradient-to-r from-gray-300 to-gray-100 rounded-br-xl rounded-tr-xl rounded-bl-xl p-8">
      <button type="button" className="flex items-center gap-x-7xs">
        <img className="h-22.6 w-22.6" alt="" src="/vector-9.svg" />
        <b className="text-xl font-aber-mono text-white min-w-36">ETH</b>
        <img className="h-3 w-6" alt="" src="/vector-2-3.svg" />
      </button>
      <div className="flex flex-col gap-y-8xs">
        <b className="self-stretch">1.902</b>
        <div className="text-xs">7003.14</div>
      </div>
      <div className="flex items-center gap-x-8xs">
        <img
          className="h-18 w-18 rounded-2261xl"
          alt=""
          src="/ousz8j13-1@2x.png"
        />
        <b className="flex-1">Across</b>
      </div>
      <button className="flex items-center justify-center w-44 h-9 bg-black overflow-hidden">
        <b className="text-xl font-aber-mono text-white">1M</b>
      </button>
      <b className="inline-block whitespace-nowrap">$5.31</b>
    </div>
  );
};

export default GraphSection;
