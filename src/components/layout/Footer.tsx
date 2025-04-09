import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1F2726] w-full border-t-[1px] border-[#212121]">
      <div className="mx-auto w-full py-6 lg:py-8 max-w-[1800px]">
        <div className="md:flex md:justify-between sm:px-20 px-9">
          <div className="mb-6 md:mb-0 flex flex-col justify-start sm:items-start items-center gap-[3rem]">
            <a href="" className="flex items-center">
              <img src="/LogoLight.svg" className="h-[45px] me-3" alt="Logo" />
            </a>
            <div className="sm:flex sm:items-center sm:justify-between w-full">
              <div className="flex flex-row md:gap-[33px] gap-[18px] items-center justify-between pt-[9px]">
                <Link to="" target="_blank">
                  <img
                    src="/socials/instaCTA.svg"
                    alt=""
                    className="w-[27px] h-[27px]"
                  />
                </Link>
                <Link to="" target="_blank">
                  <img
                    src="/socials/twitterCTA.svg"
                    alt=""
                    className="w-[27px] h-[27px]"
                  />
                </Link>
                <Link to="" target="_blank">
                  <img
                    src="/socials/googlePlusCTA.svg"
                    alt=""
                    className="w-[27px] h-[27px]"
                  />
                </Link>
                <Link to="" target="_blank">
                  <img
                    src="/socials/linkedinCTA.svg"
                    alt=""
                    className="w-[27px] h-[27px]"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 sm:gap-6 lg:grid-cols-4 text-center sm:text-left">
            <div>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="" target="_blank" className="hover:underline">
                    Services
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="" target="_blank" className="hover:underline">
                    Community
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="" target="_blank" className="hover:underline">
                    Testimonial
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              {/* <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2> */}
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link
                    to="https://discord.gg/uSR7KWhx9F"
                    target="_blank"
                    className="hover:underline "
                  >
                    Invest @ Giggles
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to="https://hashnode.com/@Veritas-ao"
                    target="_blank"
                    className="hover:underline"
                  >
                    For Investors
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:underline">
                    Advisory Council
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              {/* <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2> */}
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link
                    to="https://discord.gg/uSR7KWhx9F"
                    target="_blank"
                    className="hover:underline"
                  >
                    Secure Hubs
                  </Link>
                </li>
                <li className="mb-4">
                  <a
                    href="https://veritas-ao.dev/about"
                    className="hover:underline"
                  >
                    Safe Dating Policy
                  </a>
                </li>
                <li>
                  <div className="relative sm:max-w-xl sm:mx-auto">
                    <div className="group cursor-pointer relative inline-block text-center">
                      <span className="text-gray-500 dark:text-gray-400 font-medium">
                        Mission Statement
                      </span>
                      <div className="opacity-0 w-[120px] bg-[#244549] text-[#46B1BC] text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full -left-1/2 ml-14 px-[9px] pointer-events-none">
                        <div className="min-h-[3px] min-w-[3px] rounded-full bg-[#46B1BC] mr-[3px] inline">
                          ....
                        </div>
                        Coming Soon
                        <svg
                          className="absolute text-[#244549] h-2 w-full left-0 top-full"
                          x="0px"
                          y="0px"
                          viewBox="0 0 255 255"
                        >
                          <polygon
                            className="fill-current"
                            points="0,0 127.5,127.5 255,0"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* <a href="https://veritas-ao.dev/" className="hover:underline">Security & Compliance</Link> */}
                </li>
              </ul>
            </div>
            <div>
              {/* <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2> */}
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="" target="_blank" className="hover:underline ">
                    Press Inquiries
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="" target="_blank" className="hover:underline">
                    Media Kit
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:underline">
                    Get in Touch
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-[#DFDFDF] sm:mx-auto lg:my-8" />
        <div className="flex sm:flex-row flex-col justify-between items-center gap-[1rem] lg:px-20 px-6 text-[#EEEBE2]">
          <span className="lg:text-[0.9rem] text-[0.75rem]">
            © 2024 Giggles Platonic Dating Services Private Limited ®
          </span>
          <ul className="flex flex-row lg:gap-[1rem] lg:text-[0.9rem] gap-[0.9rem] text-[0.75rem]">
            <li className="font-karla hover:underline hover:cursor-pointer">
              Privacy Policy
            </li>
            <li className="font-karla hover:underline hover:cursor-pointer">
              Terms of Use
            </li>
            <li className="font-karla hover:underline hover:cursor-pointer">
              Refund Policy
            </li>
            <li className="font-karla hover:underline hover:cursor-pointer">
              CSAE
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
