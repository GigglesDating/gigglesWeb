const ContactUs = () => {
  return (
    <section className="flex flex-row justify-between items-center py-30">
      <div className="bg-[#8c999819] pt-[3.3rem] border-[1px] border-[#1F2726]">
        <h1 className="px-[4.5rem] quattrocento-regular text-[2.1rem] max-w-[420px] pb-[3rem] leading-[2.4rem]">
          Have suggestions? Contact us.
        </h1>
        <form action="" className="flex flex-col gap-[1.2rem] ">
          <div className="flex flex-col gap-[0.6rem] px-[4.5rem]">
            <label htmlFor="" className="font-karla text-[1.2rem]">
              Name *
            </label>
            <input
              type="text"
              className="pt-[12px] pb-[3px] px-[6px] text-[1rem] border-b-[1px] border-[#1F2726] w-full"
            />
          </div>
          <div className="flex flex-col gap-[0.6rem] px-[4.5rem]">
            <label htmlFor="" className="font-karla text-[1.2rem]">
              Email address *
            </label>
            <input
              type="text"
              className="pt-[12px] pb-[3px] px-[6px] text-[1rem] border-b-[1px] border-[#1F2726] w-full"
            />
          </div>
          <div className="flex flex-col gap-[0.6rem] px-[4.5rem]">
            <label htmlFor="" className="font-karla text-[1.2rem]">
              Message
            </label>
            <input
              type="textarea"
              className="pt-[12px] pb-[3px] px-[6px] text-[1rem] border-[1px] border-[#1F2726] w-full"
            />
          </div>
          <input type="submit" value="Let's Talk" className="mt-[24px] bg-[#4E615F] w-full text-[#EEEBE2] text-[2.1rem] quattrocento-regular py-[12px]"/>
        </form>
      </div>
      <img src="/assets/contact.svg" alt="" />
    </section>
  );
};

export default ContactUs;
