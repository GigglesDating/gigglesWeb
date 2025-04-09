import { useEffect, useRef, useState } from "react";

const MissionStatement = () => {
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
    <>
    <section className="flex flex-col justify-start items-center gap-[2.4rem] md:px-10 px-10 max-w-[1800px] w-full sm:pt-30">
        <h2           // @ts-ignore
          className="quattrocento-bold sm:text-[2.4rem] leading-[2.7rem] text-[2.4rem] text-center text-[#1F2726]">
          Vision and Mission Statement
        </h2>
        <p className='text-center font-karla text-[0.9rem]'>As India increasingly embraces aspects of Western culture, such as fashion, live-in relationships, and social activities, there is a tendency to overlook the value of everyday, open interactions. In many parts of India, engaging with strangers remains relatively uncommon. Our vision is to encourage a society where casual conversations and spontaneous greetings are more widely accepted, contributing to a safer and more socially connected environment. We aspire to bridge the gap between our evolving cultural landscape and the growing need for authentic, everyday human interactions.</p>
        <p className='text-center font-karla text-[0.9rem]'>Our mission is to bridge the gap between social isolation and genuine companionship. We strive to create an inclusive and safe environment where members can connect, share experiences, and build lasting memories, all while preserving the platonic nature of their interactions. Our platform facilitates meeting new people, fostering meaningful interactions, and creating cherishable memories. And if love happens to blossom along the way, that’s your success story.</p>
</section>
<section className="flex lg:flex-row flex-col justify-between items-center lg:gap-[4.5rem] gap-[0rem] md:px-20 px-10 max-w-[1800px] pb-20">
      <img
        src="/assets/about4.svg"
        alt=""
        className={` xl:w-[45%] lg:w-[54%] w-[100%] ${
          isVisible ? "ltrAnim " : " md:opacity-0 "
        }`}
      />
      <div className="fadeIn flex flex-col gap-[1rem] text-left">
        <h2 className="quattrocento-regular sm:text-[2rem] text-[1.8rem]">
        India is estimated to be the 2nd largest dating industry in the world by 2027.
        </h2>
        <p className="font-karla text-[1rem] leading-[1.3rem] text-justify">Giggles is reshaping the billion-dollar industry by placing a greater emphasis on fostering meaningful, platonic connections at its core.</p>
        <button
        // @ts-ignore
          ref={lhsRef}
          className="sm:mt-[2.4rem] mt-[1.2rem] bg-[#4E615F] w-fit px-[2.4rem] py-[12px] text-[#EEEBE2]
        hover:bg-[#4e615fd1] hover:px-[2.1rem] hover:tracking-[0.5px]
            hover:cursor-pointer"
        >
          Get Started
        </button>
      </div>
    </section>
    </>
  )
}

export default MissionStatement