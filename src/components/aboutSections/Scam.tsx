import { useEffect, useRef, useState } from "react";

const Scam = () => {
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
    <section className="flex lg:flex-row flex-col justify-between items-center xl:gap-[6rem] gap-[3rem] md:px-20 px-10 max-w-[1800px] sm:py-30 py-10">
      <div className="fadeIn lg:flex hidden flex-col gap-[1rem] text-left">
        <h2            ref={lhsRef}      
className="quattrocento-bold sm:text-[3rem] leading-[3.2rem] text-[2.4rem] text-[#1F2726]">
          Dating Industry is a scam!
        </h2>
        <p className="font-karla text-[1rem] leading-[1.3rem] text-justify">
          Majority of women do not feel safe on online dating platforms, leading
          to an imbalanced ratio of men to women on these apps. Men, who are the
          highest-paying customers, often receive the least value in return. In
          their desperation to find someone, people end up spending money on one
          app after another. 80% of those actively seeking dates across multiple
          platforms lack social skills. Although each app targets a different
          niche, the value they provide to users is largely the same. We aim to
          provide a platform that focuses on improving your social life.<br/>While
          this issue is widely recognized, many believe it's a problem without a
          solution, maybe! but we're here to try.
        </p>
        <button
          // @ts-ignore

          className="sm:mt-[2.4rem] mt-[1.2rem] bg-[#4E615F] w-fit px-[2.4rem] py-[12px] text-[#EEEBE2]
          hover:bg-[#4e615fd1] hover:px-[2.1rem] hover:tracking-[0.5px]
              hover:cursor-pointer"
        >
          Read More
        </button>
      </div>{" "}
      <img
        src="/assets/about2.svg"
        alt=""
        className={` xl:w-[45%] lg:w-[54%] w-[100%] ${
          isVisible ? "rtlAnim " : " md:opacity-0 "
        }`}
      />
            <div className="fadeIn flex lg:hidden flex-col gap-[1rem] text-left">
        <h2 className="quattrocento-bold sm:text-[3rem] sm:leading-[3.2rem] text-[2.4rem] leading-[2.7rem] text-[#1F2726] sm:text-left text-center">
          Dating Industry is a scam!
        </h2>
        <p className="font-karla sm:text-[1rem] sm:leading-[1.3rem] text-[0.9rem] leading-[1.02rem] text-justify">
          Majority of women do not feel safe on online dating platforms, leading
          to an imbalanced ratio of men to women on these apps. Men, who are the
          highest-paying customers, often receive the least value in return. In
          their desperation to find someone, people end up spending money on one
          app after another. 80% of those actively seeking dates across multiple
          platforms lack social skills. Although each app targets a different
          niche, the value they provide to users is largely the same. We aim to
          provide a platform that focuses on improving your social life.<br/>While
          this issue is widely recognized, many believe it's a problem without a
          solution, maybe! but we're here to try.
        </p>
        <button
          className="sm:mt-[2.4rem] mt-[1.2rem] bg-[#4E615F] w-fit px-[2.4rem] py-[12px] text-[#EEEBE2]
          hover:bg-[#4e615fd1] hover:px-[2.1rem] hover:tracking-[0.5px]
              hover:cursor-pointer"
        >
          Read More
        </button>
      </div>{" "}
    </section>
  );
};

export default Scam;
