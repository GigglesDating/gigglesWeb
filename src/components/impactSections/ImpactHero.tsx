import { useEffect, useRef, useState } from "react";


const ImpactHero = () => {
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
    <section className='max-w-[1800px] flex flex-col justify-start items-center gap-[1rem] w-full md:px-30 px-9'>
    <img src="/assets/impactHero.svg" alt="" className={`lg:w-[45%] mt-[4.5rem] ${
          isVisible ? "ttbAnimSm " : " md:opacity-0 "
        }`}/>
    <h2 
            // @ts-ignore
            ref={lhsRef}
          className="fadeIn quattrocento-bold sm:text-[2.4rem] leading-[2.7rem] text-[2.4rem] text-center text-[#1F2726]">
          Solving the "Silent Epidemic"
        </h2>    <p className='fadeIn text-center font-karla text-[0.9rem]'>The Silent Epidemic: A term coined by India Today in 2023, the silent epidemic refers to the various mental health illnesses caused by loneliness. Indian men between the ages of 15 to 29 are prone to suicides at twice the global average. The third most common reason for suicides in India is loneliness. While several organizations focus on providing mental health support and care, the root cause can be targeted primarily by creating a friendly and socially inclusive environment.</p>
</section>)
}

export default ImpactHero