const AboutUsLanding = () => {
  return (
    <section className="flex flex-row justify-between items-center gap-[6rem] px-20">
      <img src="/assets/aboutus.svg" alt="" className="w-[600px] h-[900px]"/>
      <div className="pr-40 flex flex-col gap-[1rem] text-left">
        <h2 className="quattrocento-bold text-[3rem]">About Us</h2>
        <p className="font-farla text-[1rem]">
          Human beings are inherently social creatures, evolving through our
          connections with others. In countries like the US and UK, striking up
          a conversation with a stranger is effortless, but in India, this ease
          is often lacking. This highlights a need for better socialization
          tools, not just dating platforms. Despite the abundance of over 100
          dating apps—ranging from those focused on marriage, casual dating, and
          even hookups—there isn’t a single platform dedicated purely to forming
          platonic companionships.
        </p>
        <button className="bg-[#4E615F] px-[1rem] py-[6px] text-[#EEEBE2]">
          Read More
        </button>
      </div>
    </section>
  );
};

export default AboutUsLanding;
