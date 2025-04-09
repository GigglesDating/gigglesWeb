import FeatCard from "../landing/FeatCard"

const Features = () => {
  return (
    <section className="flex flex-col sm:px-16 px-9 text-[#1F2726] py-20 gap-[3.3rem]">
        <div className="flex flex-row w-full justify-between items-center">
            <h2 className="quattrocento-bold sm:text-[2.7rem] text-[2.1rem]">Features</h2>
            <button className="w-fit bg-[#4E615F] 
            sm:px-[2.4rem] sm:py-[12px] 
            px-[1.8rem] py-[9px]
            text-[#EEEBE2]">
                View All
            </button>
        </div>
        <div className="flex lg:flex-row flex-col gap-[1.8rem] justify-between w-full">
            <FeatCard imageSrc="1.svg" heading="100% Real People" text="All our users are Face ID verified through Aadhaar with OTP and face matching, ensuring genuine and trustworthy profiles."/>
            <FeatCard imageSrc="2.svg" heading="Customer Support" text="Our exclusive membership model enables us to deliver the best customer service experience, including in-app chat support and on-call assistance for escalations."/>
            <FeatCard imageSrc="3.svg" heading="SoS" text="The fear of going on a date with someone you met online ends here. With our in-app SOS button for emergencies, our ground support team will promptly assist you from the nearest hub."/>
        </div>
    </section>
  )
}

export default Features