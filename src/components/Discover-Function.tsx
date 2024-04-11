function DiscoverFunction() {
  return (
    <div>
      <div
        className="h-[23em] lg:w-[62em] absolute top-[53em] lg:mx-40 flex  gap-96 md:mx-20 mx-2 "
        style={{
          background:
            "linear-gradient(180deg, rgba(161, 161, 161, 0), #fff 35%, #dedbcf)",
        }}
      >
        <div className="flex lg:gap-96 lg:mx-20 lg:flex-row flex-col mx-10  ">
          <h1 className="font-bold md:text-5xl md:w-10 w-full  text-3xl mb-3 ">
            Discover the Features
          </h1>
          <div className="flex flex-col gap-14 md:w-[30rem] ">
            <p className="text-[#696969] leading-5">
              Our innovative platform is engineered to dramatically enhance the
              efficiency, security, and scalability of cross-chain transactions.
              We're not just about facilitating smoother transactions across
              different networks; we're also rewarding our users through a
              points system for their engagement and activity. With zkVeil,
              experience the future of blockchain transactions that are faster,
              safer, and more rewarding.
            </p>
            <div className="flex gap-4">
              <img src={"../../public/vector-2.svg"} alt="vectorsvg2" />
              <img src={"../../public/vector-3.svg"} alt="vectorsvg3" />
              <img src={"../../public/vector-4.svg"} alt="vectorsvg4" />
            </div>
            <div className="translate-x-[-1em]">
              <img src={"../../public/group-5.svg"} alt="group5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscoverFunction;
