import { useEffect, useRef, useState } from "react";

const BetaTest = () => {
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
    <section className="flex lg:flex-row flex-col justify-between items-center lg:gap-[4.5rem] gap-[0rem] md:px-20 px-10 max-w-[1800px] pb-20">
      <img
        src="/assets/impact2.svg"
        alt=""
        className={` xl:w-[45%] lg:w-[54%] w-[100%] ${
          isVisible ? "ltrAnim " : " md:opacity-0 "
        }`}
      />
      <div className="fadeIn flex flex-col gap-[1rem] text-left">
        <h2 className="quattrocento-regular sm:text-[2rem] text-[1.8rem]">Apply to our Beta test launch</h2>
        <p className="font-karla text-[1rem] leading-[1.3rem] text-justify">Early access at 40% off. Enjoy exclusive access to our moderators and feedback system. Be part of the change—make an impact from the start.</p>
        <button
        // @ts-ignore
          ref={lhsRef}
          className="sm:mt-[2.4rem] mt-[1.2rem] bg-[#4E615F] w-fit px-[2.4rem] py-[12px] text-[#EEEBE2]
        hover:bg-[#4e615fd1] hover:px-[2.1rem] hover:tracking-[0.5px]
            hover:cursor-pointer"
        >
          Apply Now
        </button>
      </div>
    </section>
  )
}

export default BetaTest