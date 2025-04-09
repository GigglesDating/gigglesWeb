const Hero = () => {
  return (
    <section className="flex lg:flex-row flex-col w-full lg:h-[96vh] xl:justify-between lg:pl-20 justify-end max-w-[1800px] lg:items-center">
      <div className="lg:flex hidden flex-col gap-[1rem] text-left text-[#1F2726] justify-center items-start max-w-[630px]">
        <h1
          className="quattrocento-bold 
            xl:text-[3.9rem] xl:leading-[4.2rem] xl:max-w-[465px]
             md:text-[3rem] md:leading-[3.3rem] md:max-w-[360px] min-w-[360px]"
        >
          Women Focused or Men Focused?
        </h1>
        <h4 className="quattrocento-regular text-[1.5rem]">
          Safety Focused Dating App
        </h4>
        <div className="flex flex-row gap-[1.5rem]">
        <button className="bg-[#00000000] border-[1px] border-[#1F2726] 
          sm:px-[2.4rem] sm:py-[9px]
          px-[1.5rem] py-[6px]
          hover:px-[2.1rem] hover:tracking-[1px] hover:scale-105">
            Know More
          </button>
          <button className="bg-[#4E615F] sm:px-[2.7rem] sm:py-[6px] 
          px-[1.8rem] py-[6px]
          text-[#EEEBE2] hover:bg-[#4e615fd1] hover:px-[2.4rem] hover:tracking-[0.5px]
            hover:cursor-pointer">
            Join Us
          </button>
        </div>
        <div className="flex flex-row items-center justify-center mb-10">
        <img
            src="/favicon.svg"
            className="-mr-5 relative h-14 w-14 rounded-full border-2 border-white object-cover object-top !p-0"
          />
          <img
            src="/favicon.svg"
            className="-mr-5 relative h-14 w-14 rounded-full border-2 border-white object-cover object-top !p-0"
          /></div> 
      </div>
      <img
        src="/assets/hero.svg"
        alt=""
        className="fadeIn xl:h-full xl:w-[60%] lg:w-[60%] w-full lg:mt-0 md:mt-[-4.5rem] sm:mt-[-2.1rem] mt-[2.1rem]"
      />
      <div className="sm:pl-20 xs:px-9 px-6 md:mt-[-3rem] flex lg:hidden flex-col md:gap-[1rem] gap-[0.3rem] text-left text-[#1F2726] justify-start items-start
      w-full">
        <h1
          className="quattrocento-bold md:w-[75%] w-90%
            xl:text-[3.9rem] xl:leading-[4.2rem]
             sm:text-[3rem] sm:leading-[3.3rem] 
             text-[2.1rem] leading-[2.4rem] "
        >
          Women Focused or Men Focused?
        </h1>
        <h4 className="quattrocento-regular sm:text-[1.5rem] text-[1.2rem]">
          Safety Focused Dating App
        </h4>
        <div className="flex flex-row sm:gap-[1.5rem] gap-[0.9rem] font-karla mt-3 sm:text-[1rem] text-[0.75rem]">
          <button className="bg-[#00000000] border-[1px] border-[#1F2726] 
          sm:px-[2.4rem] sm:py-[9px]
          px-[1.5rem] py-[6px]">
            Know More
          </button>
          <button className="bg-[#4E615F] sm:px-[2.7rem] sm:py-[6px] 
          px-[1.8rem] py-[6px]
          text-[#EEEBE2]
          ">
            Join Us
          </button>
        </div>
        <div className="flex flex-row items-center justify-center mb-10">
        <img
            src="/favicon.svg"
            className="-mr-5 relative h-14 w-14 rounded-full border-2 border-white object-cover object-top !p-0"
          />
          <img
            src="/favicon.svg"
            className="-mr-5 relative h-14 w-14 rounded-full border-2 border-white object-cover object-top !p-0"
          /></div>
      </div>
    </section>
  );
};

export default Hero;
