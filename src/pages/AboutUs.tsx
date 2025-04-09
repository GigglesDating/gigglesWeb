import AboutBanner1 from "../components/aboutSections/AboutBanner1";
import AboutBanner2 from "../components/aboutSections/AboutBanner2";
import AboutHero from "../components/aboutSections/AboutHero";
import MissionStatement from "../components/aboutSections/MissionStatement";
import Scam from "../components/aboutSections/Scam";
import SightSec from "../components/aboutSections/SightSec";
import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

const AboutUs = () => {
  return (
    <main className="bg-[#EEEBE2] w-[100vw] flex flex-col lg:gap-0 gap-6 items-center">
      <Nav />
      <section className="snap sm:h-fit flex flex-col items-center justify-start gap-[3rem] lg:mt-[18rem] mt-[2.4rem] w-full">
        <AboutHero />
        <AboutBanner1 />
      </section>
      <section className="snap sm:h-screen flex flex-col items-center justify-center lg:mt-[18rem] w-full">
        <Scam/>
      </section>
      <section className="bgGrad snap md:h-screen flex flex-col items-center justify-center lg:mt-[18rem] w-full">
        <SightSec/>
        <AboutBanner2/>
      </section>
      <section className="snap md:h-screen flex flex-col items-center justify-center md:mt-[18rem] mt-[3rem] w-full">
        <MissionStatement/>
      </section>
      <section className="snap flex flex-col items-center justify-center md:mt-[12rem] sm:mt-[6rem] w-full">
        <Footer />
      </section>
    </main>
  );
};

export default AboutUs;
