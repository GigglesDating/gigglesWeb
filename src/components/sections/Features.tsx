import FeatCard from "../landing/FeatCard"

const Features = () => {
  return (
    <section className="flex flex-col px-20 text-[#1F2726] py-20">
        <div className="flex flex-row w-full justify-between items-center">
            <h2 className="quattrocento-bold text-[2.7rem]">Features</h2>
            <button className="w-fit bg-[#4E615F] px-[1rem] py-[6px] text-[#EEEBE2]">
                View All
            </button>
        </div>
        <div className="flex flex-row gap-[1.8rem] justify-between w-full">
            <FeatCard imageSrc="1.svg" heading="100% Real People" text="All our users are Face ID verified through Aadhaar with OTP and face matching, ensuring genuine and trustworthy profiles."/>
            <FeatCard imageSrc="1.svg" heading="100% Real People" text="All our users are Face ID verified through Aadhaar with OTP and face matching, ensuring genuine and trustworthy profiles."/>
            <FeatCard imageSrc="1.svg" heading="100% Real People" text="All our users are Face ID verified through Aadhaar with OTP and face matching, ensuring genuine and trustworthy profiles."/>
        </div>
    </section>
  )
}

export default Features