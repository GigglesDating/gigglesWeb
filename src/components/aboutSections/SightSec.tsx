import { useEffect, useRef, useState } from "react";

const SightSec = () => {
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
    <section className=" flex flex-col justify-start items-center gap-[0rem] md:px-10 px-2 max-w-[1800px] py-12 w-full ">
<h2           // @ts-ignore
          ref={lhsRef} className="quattrocento-bold sm:text-[2.4rem] sm:leading-[2.7rem] text-[1.5rem] leading-[1.8rem] text-center text-[#EEEBE2] xl:pt-10 pt-10">
          A Sight to See
         <br/>  The Epitome of Healthy Social Life
        </h2>
        <img
        src="/assets/about3.svg"
        alt=""
        className={` xl:w-[75%] lg:w-[54%] w-[100%] ${
          isVisible ? "ttbAnim " : " md:opacity-0 "
        }`}
      />
    </section> 
  )
}

export default SightSec