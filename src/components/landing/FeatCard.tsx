// @ts-ignore
const FeatCard = ({imageSrc, heading, text}) => {
  return (
    <div className="ttbAnimNav flex flex-col justify-start items-start 
    border-[1px] rounded-[33px] border-[#1F2726] text-[#1F2726] shadow-[9px_9px_0px_0px_#4E615F]
    xl:w-[330px] px-[30px] py-[30px]
    lg:w-[270px] w-full bg-[#f1f1f1]">
        <img src={`/featCards/${imageSrc}`} alt=""  className="mb-[1.2rem]"/>
        <h3 className="quattrocento-regular xl:text-[2rem] text-[1.5rem]">{heading}</h3>
        <p className="font-karla text-[1rem] leading-[1.14rem] text-justify">{text}</p>
        {/* <button className="w-fit bg-[#4E615F] px-[1rem] py-[6px] text-[#EEEBE2]">
                Know More
            </button> */}
    </div>
  )
}

export default FeatCard