const FeatCard = ({imageSrc, heading, text}) => {
  return (
    <div className="flex flex-col gap-[1rem] justify-between items-start 
    border-[1px] rounded-[35px] border-[#1F2726] w-[360px] px-[30px] py-[30px]
    text-[#1F2726]">
        <img src={`/featCards/${imageSrc}`} alt="" />
        <h3 className="quattrocento-regular text-[2.1rem]">{heading}</h3>
        <p className="font-karla text-[1rem] text-justify">{text}</p>
        {/* <button className="w-fit bg-[#4E615F] px-[1rem] py-[6px] text-[#EEEBE2]">
                Know More
            </button> */}
    </div>
  )
}

export default FeatCard