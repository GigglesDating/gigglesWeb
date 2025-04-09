const AboutUsLanding = () => {
  return (
    <section className="flex lg:flex-row flex-col justify-between items-center xl:gap-[6rem] gap-[3rem] md:px-20 px-10 max-w-[1800px] py-30">
      <img src="/assets/aboutus.svg" alt="" className="xl:w-[45%] lg:w-[54%] w-[100%]"/>
      <div className="flex flex-col gap-[1rem] text-left">
        <h2 className="quattrocento-bold sm:text-[3rem] text-[2.4rem]">About Us</h2>
        <p className="font-karla text-[1rem] leading-[1.3rem] text-justify">
          Human beings are inherently social creatures, evolving through our
          connections with others. In countries like the US and UK, striking up
          a conversation with a stranger is effortless, but in India, this ease
          is often lacking. This highlights a need for better socialization
          tools, not just dating platforms. Despite the abundance of over 100
          dating apps—ranging from those focused on marriage, casual dating, and
          even hookups—there isn’t a single platform dedicated purely to forming
          platonic companionships.
        </p>
        <button className="sm:mt-[2.4rem] mt-[1.2rem] bg-[#4E615F] w-fit px-[2.4rem] py-[12px] text-[#EEEBE2]
        hover:bg-[#4e615fd1] hover:px-[2.1rem] hover:tracking-[0.5px]
            hover:cursor-pointer">
          Read More
        </button>
      </div>
    </section>
  );
};

export default AboutUsLanding;
