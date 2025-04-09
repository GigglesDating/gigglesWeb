const ContactUs = () => {
  return (
    <section className="flex lg:flex-row flex-col w-full lg:px-30 sm:px-16 px-9 justify-between items-center py-30 max-w-[1800px] text-[#1F2726]">
      <div className="lg:block hidden bg-[#8c999819] pt-[3.3rem] border-[1px] border-[#1F2726] max-w-[470px] max-h-fit w-full">
        <h1 className="lg:px-[3.6rem] px-[2.4rem] quattrocento-regular lg:text-[2rem] text-[1.5rem] pb-[1.5rem] leading-[2.4rem]">
          Have suggestions? <br/>Contact us.
        </h1>
        <form action="" className="flex flex-col gap-[1.2rem] ">
          <div className="flex flex-col gap-[0.3rem] lg:px-[3.6rem] px-[2.4rem]">
            <label htmlFor="" className="font-karla text-[1rem]">
              Name *
            </label>
            <input
              type="text"
              className="pt-[9px] pb-[3px] px-[6px] text-[1rem] border-b-[1px] border-[#1F2726] w-full"
            />
          </div>
          <div className="flex flex-col gap-[0.3rem] lg:px-[3.6rem] px-[2.4rem]">
            <label htmlFor="" className="font-karla text-[1rem]">
              Email address *
            </label>
            <input
              type="text"
              className="pt-[9px] pb-[3px] px-[6px] text-[1rem] border-b-[1px] border-[#1F2726] w-full"
            />
          </div>
          <div className="flex flex-col gap-[0.3rem] lg:px-[3.6rem] px-[2.4rem]">
            <label htmlFor="" className="font-karla text-[1rem]">
              Message
            </label>
            <textarea
              className="pt-[9px] pb-[3px] px-[6px] text-[1rem] border-[1px] border-[#1F2726] w-full"
            />
          </div>
          <input type="submit" value="Let's Talk!" className="mt-[24px] bg-[#4E615F] w-full text-[#EEEBE2] text-[2rem] quattrocento-regular py-[12px]"/>
        </form>
      </div>
      <img src="/assets/contact.svg" alt=""  className="lg:w-[50%] sm:w-[60%] w-[80%]"/>
      <div className="lg:hidden block bg-[#8c999819] pt-[3.3rem] border-[1px] border-[#1F2726] max-w-[470px] max-h-fit w-full">
        <h1 className="lg:px-[3.6rem] px-[2.4rem] quattrocento-regular lg:text-[2rem] text-[1.5rem] pb-[1.5rem] leading-[2.4rem]">
          Have suggestions? <br/>Contact us.
        </h1>
        <form action="" className="flex flex-col gap-[1.2rem] ">
          <div className="flex flex-col gap-[0.3rem] lg:px-[3.6rem] px-[2.4rem]">
            <label htmlFor="" className="font-karla text-[1rem]">
              Name *
            </label>
            <input
              type="text"
              className="pt-[9px] pb-[3px] px-[6px] text-[1rem] border-b-[1px] border-[#1F2726] w-full"
            />
          </div>
          <div className="flex flex-col gap-[0.3rem] lg:px-[3.6rem] px-[2.4rem]">
            <label htmlFor="" className="font-karla text-[1rem]">
              Email address *
            </label>
            <input
              type="text"
              className="pt-[9px] pb-[3px] px-[6px] text-[1rem] border-b-[1px] border-[#1F2726] w-full"
            />
          </div>
          <div className="flex flex-col gap-[0.3rem] lg:px-[3.6rem] px-[2.4rem]">
            <label htmlFor="" className="font-karla text-[1rem]">
              Message
            </label>
            <textarea
              className="pt-[9px] pb-[3px] px-[6px] text-[1rem] border-[1px] border-[#1F2726] w-full"
            />
          </div>
          <input type="submit" value="Let's Talk!" className="mt-[24px] bg-[#4E615F] w-full text-[#EEEBE2] text-[2rem] quattrocento-regular py-[12px]"/>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
