import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Modal, ModalBody, ModalHeader} from "flowbite-react";

const Nav = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const path = location.pathname.split("/");
  const [openModal, setOpenModal] = useState(true);
  // @ts-ignore
  const [email, setEmail] = useState("");

  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
  }

  return (
    <>
      <nav
        className="nav place-self-center ttbAnimNav mt-3 z-50 lg:px-12 md:px-7 px-6 py-[0.3rem] md:flex hidden flex-row justify-between items-center font-karla h-fit backdrop-blur-[9px] fixed lg:w-[93%] w-[99%] md:rounded-full bg-[#eeebe252] max-w-[1800px]
    rounded-2xl"
      >
        <Link to="/">
          <img
            src="/LogoDark.svg"
            className="md:h-[60px] md:w-[105px]
            h-[54px] w-[96px]"
          />
        </Link>
        <div
          className="md:flex hidden flex-row 
        lg:text-[1.2rem] lg:gap-[1.2rem] 
        text-[1.05rem] gap-[0.75rem]"
        >
          <Link
            to="/"
            className={`hover:tracking-wide
            hover:bg-[#1f2726b5] hover:text-[#EEEBE2] px-[15px] py-[3px] rounded-full
              ${path[1] == "" ? "bg-[#1f2726b5] text-[#EEEBE2]" : ""}`}
          >
            Home
          </Link>
          <Link
            to="/aboutus"
            className={`hover:tracking-wide
            hover:bg-[#1f2726b5] hover:text-[#EEEBE2] px-[15px] py-[3px] rounded-full
              ${path[1] == "aboutus" ? "bg-[#1f2726b5] text-[#EEEBE2]" : ""}`}
          >
            About Us
          </Link>
          <Link
            to="/impact"
            className={`hover:tracking-wide
            hover:bg-[#1f2726b5] hover:text-[#EEEBE2] px-[15px] py-[3px] rounded-full
              ${path[1] == "impact" ? "bg-[#1f2726b5] text-[#EEEBE2]" : ""}`}
          >
            Impact
          </Link>
        </div>
        <div className="md:flex hidden flex-row gap-[1rem] text-[0.9rem]">
          <button
            className="bg-[#4E615F] px-[16px] py-[9px] text-[#EEEBE2] 
            hover:bg-[#4e615fd1] hover:px-[12px] hover:tracking-[0.5px]
            hover:cursor-pointer"
          >
            Influencer Registration
          </button>
          <button
          onClick={() => setOpenModal(true)}
            className="bg-[#00000000] border-[1px] border-[#1F2726] 
            px-[16px] py-[9px]
            hover:px-[12px] hover:tracking-[1px] hover:scale-105"
          >
            Sign In
          </button>
        </div>
      </nav>
      <nav
        className={`flex flex-row md:hidden justify-between items-start px-[21px] py-[0.9rem] fadeIn fixed w-full z-[50] 
        ${
          isOpen
            ? "h-[100vh] bg-[#eeebe29a] backdrop-blur-[3px]"
            : "h-[7.5vh] bg-[#eeebe29a] backdrop-blur-[9px]"
        }`}
      >
        <Link to="/">
          <img alt="Home" src={"/LogoDark.svg"} className="h-[45px] w-[90px]" />
        </Link>
        <div className="flex flex-col justify-start gap-6 items-end pt-[18px]">
          <div
            onClick={() => {
              console.log("clicked");
              setIsOpen(!isOpen);
            }}
            className="flex flex-col items-center gap-[4.5px] hover:cursor-pointer"
          >
            <div
              className={` py-[1.5px] rounded-3xl bg-[#1F2726] ${
                isOpen ? "rotate-45 mb-[-15px] w-[30px]" : "w-[18px]"
              }`}
            ></div>
            <div
              className={`w-[24px] py-[1.5px] rounded-3xl bg-[#1F2726] ${
                isOpen ? "scale-0" : " scale-100"
              }`}
            ></div>
            <div
              className={`w-[30px] py-[1.5px] rounded-3xl bg-[#1F2726] ${
                isOpen ? " -rotate-45" : ""
              }`}
            ></div>
          </div>
          <div
            className={`flex flex-col justify-start items-end gap-[1.5rem] text-[#eeeeee] mt-9 text-[1.2rem] tracking-wider text-right
        ${isOpen ? " translate-x-0" : " translate-x-52"}`}
          >
            <Link
              to="/"
              className={`underline-offset-[3px] text-[#4e615f] 
          ${path[1] == "" ? `underline` : ""}`}
            >
              Home
            </Link>
            <Link
              to="/aboutus"
              className={`underline-offset-[3px] text-[#4e615f] 
          ${
            path[1] == "aboutus" ? `underline` : ""
          }`}
            >
              About Us
            </Link>
            <Link
              to="/impact"
              className={`underline-offset-[3px] text-[#4e615f] 
        ${path[1] == "impact" ? `underline` : ""}`}
            >
              Impact
            </Link>{" "}
          </div>
          <div className={`flex flex-row gap-[1rem] text-[0.9rem] ${isOpen ? "fadeIn" : "hidden"} w-full justify-between`}>
          <button
            className="bg-[#4E615F] px-[16px] py-[9px] text-[#EEEBE2] 
            hover:bg-[#4e615fd1] hover:px-[12px] hover:tracking-[0.5px]
            hover:cursor-pointer"
          >
            Influencer Registration
          </button>
          <button
            className="bg-[#00000000] border-[1px] border-[#1F2726] 
            px-[16px] py-[9px]
            hover:px-[12px] hover:tracking-[1px] hover:scale-105"
          >
            Sign In
          </button>
        </div> 
        </div>
      </nav>
      <Modal dismissible show={openModal} size="md" onClose={onCloseModal} popup>
        <ModalHeader className="bg-[#4E615F] rounded-none border-t-[1px] border-r-[1px] border-s-[1px] !border-[#EEEBE2]"/>
        <ModalBody className="bg-[#4E615F] rounded-none border-b-[1px] border-r-[1px] border-s-[1px] !border-[#EEEBE2] !px-[2.1rem]">
          <div className="space-y-3">
            <div>
            <h2 className="quattrocento-regular text-[2rem] text-[#EEEBE2]">Login</h2>
            <h3 className="text-xl font-medium text-[#EEEBE2] quattrocento-regular">New to this site? <span className="underline font-karla">Sign Up</span></h3>
            
            </div>
            <button className="w-full bg-[#EEEBE2] md:px-[1.8rem] md:py-[12px] px-[1.5rem] py-[9px] text-[#1F2726] md:text-[1rem] text-[0.9rem]
        hover:bg-[#EEEBE2d1] hover:px-[1.5rem] hover:tracking-[0.5px] my-[2.4rem]
            hover:cursor-pointer font-karla flex flex-row justify-center items-center gap-3">
          <img src="/socials/google.svg" alt="" /> <span>Login with Google</span>
        </button>
        <form action="" className="flex flex-col gap-[1.2rem] w-full text-[#EEEBE2]">
          <div className="flex flex-col gap-[0.3rem] w-full">
            <label htmlFor="" className="font-karla text-[1rem]">
              Name *
            </label>
            <input
              type="text"
              className="pt-[9px] pb-[3px] px-[6px] text-[1rem] border-b-[1px] border-[#EEEBE2] w-full"
            />
          </div>
          <div className="flex flex-col gap-[0.3rem] w-full">
            <label htmlFor="" className="font-karla text-[1rem]">
              Email address *
            </label>
            <input
              type="text"
              className="pt-[9px] pb-[3px] px-[6px] text-[1rem] border-b-[1px] border-[#EEEBE2] w-full"
            />
          </div>
          <input type="submit" value="Login" className="mt-[24px] bg-[#EEEBE2] w-full text-[#4E615F] text-[2rem] quattrocento-regular py-[12px]"/>
          </form>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default Nav;
