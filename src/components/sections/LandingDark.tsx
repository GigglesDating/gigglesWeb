const LandingDark = () => {
  return (
    <section className="bg-[#4E615F] text-[#EEEBE2] h-[93vh] py-20 w-full">
      <div className="flex flex-col gap-[0.6rem] text-left pl-30">
        <h2 className="quattrocento-bold text-[2.7rem] max-w-[600px]">Experience India's first platonic dating app</h2>
        <p className="font-karla text-[1.2rem]">Apply to our Beta test program. Get Early Access</p>
        <h1 className="quattrocento-bold text-[2.7rem]">@ 40% off.</h1>
        <button className="w-fit bg-[#EEEBE2] px-[1rem] py-[6px] text-[#1F2726]">
          Join Waitlist
        </button>
      </div>
      <div className="flex flex-col mt-[-33rem]">
        <img src="/assets/RHS.svg" alt="" className="mb-[-4.5rem] w-[48%] place-self-end z-20"/>
        <img src="/assets/mid.svg" alt="" className="mr-[-12rem] w-[39%] place-self-center mb-[-12rem] mt-[-15rem] z-10"/>
        <img src="/assets/LHS.svg" alt="" className="mt-[-4.5rem] w-[50%] place-self-start z-20"/>
      </div>
    </section>
  );
};

export default LandingDark;
