import { useEffect, useRef, useState } from "react";

const LandingDark = () => {
  const [isVisible, setVisible] = useState(false);
  const lhsRef = useRef<HTMLDivElement>(null); // Specify the element type

  useEffect(() => {
    const currentElement = lhsRef.current;
    if (currentElement) {
      // Check if the ref is attached to an element
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      });

      observer.observe(currentElement);

      // Cleanup function to disconnect the observer when the component unmounts
      return () => {
        observer.disconnect();
      };
    }
  }, []);
  return (
    <section className="bg-[#4E615F] text-[#EEEBE2] h-[90%] pt-10 w-full max-w-[1800px]">
      <div className={`${
          isVisible ? "fadeIn " : " md:opacity-0 "
        } flex flex-col lg:gap-[0.6rem] gap-[0.3rem] text-left lg:pl-30 md:pl-20 sm:pl-10 pl-6 lg:mt-10 mt-6 lg:mb-[-12rem] sm:mb-[-9rem] mb-[-3rem]`}>
        <h2 className="quattrocento-bold lg:text-[2.7rem] lg:leading-[3rem] sm:text-[2.1rem] sm:leading-[2.4rem] text-[1.8rem] leading-[2.1rem]">Experience India's first <br/>platonic dating app</h2>
        <p className="font-karla lg:text-[1.2rem] sm:text-[1.05rem] text-[0.9rem]">Apply to our Beta test program. Get Early Access</p>
        <h1 className="quattrocento-bold lg:text-[2.7rem] lg:leading-[3rem] sm:text-[2.25rem] sm:leading-[2.4rem] text-[1.8rem] leading-[2.1rem]">@ 40% off.</h1>
        <button ref={lhsRef} className="w-fit bg-[#EEEBE2] md:px-[1.8rem] md:py-[12px] px-[1.5rem] py-[9px] text-[#1F2726] md:text-[1rem] text-[0.9rem]
        hover:bg-[#EEEBE2d1] hover:px-[1.5rem] hover:tracking-[0.5px]
            hover:cursor-pointer">
          Join Waitlist
        </button>
      </div>
      <div className="flex flex-col w-full xl:mt-[-33rem] lg:mt-[-21rem] md:mt-[-18rem] sm:mt-[-9rem] mt-[-3rem]">
        <img src="/assets/RHS.svg" alt="" className={`${
          isVisible ? "rtlAnim " : " md:opacity-0 "
        } xl:mb-[-4.5rem] md:mb-[-4.2rem] sm:mb-[-2.4rem] mb-[-1.5rem] w-[48%] place-self-end z-20`}/>
        <img src="/assets/mid.svg" alt="" className={`${
          isVisible ? "fadeIn " : " md:opacity-0 "
        } xl:mr-[-12rem] md:mr-[-9rem] mr-[-3rem] w-[39%] place-self-center xl:mb-[-12rem] xl:mt-[-15rem] md:mb-[-6rem] lg:mt-[-13rem] md:mt-[-9rem] mb-[-3.6rem] sm:mt-[-6.6rem] mt-[-3.6rem] z-10`}/>
        <img src="/assets/LHS.svg" alt="" className={`${
          isVisible ? "ltrAnim " : " md:opacity-0 "
        } xl:mt-[-4.5rem] md:mt-[-2.1rem] mt-[-1.2rem] mb-[-3rem] w-[50%] place-self-start z-20`}/>
      </div>
    </section>
  );
};

export default LandingDark;
