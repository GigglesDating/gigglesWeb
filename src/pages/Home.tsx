import Footer from "../components/layout/Footer"
import Nav from "../components/layout/Nav"
import AboutUsLanding from "../components/landingSections/AboutUsLanding"
import ContactUs from "../components/landingSections/ContactUs"
import Features from "../components/landingSections/Features"
import Hero from "../components/landingSections/Hero"
import LandingDark from "../components/landingSections/LandingDark"

const Home = () => {
  return (
    <main className="bg-[#EEEBE2] w-[100vw] flex flex-col lg:gap-0 gap-6 items-center">
        <Nav/>
        <section className="snap sm:h-screen flex flex-col items-center justify-center pt-6 w-full">
        <Hero/>
        </section>
        <section className="snap sm:h-screen flex flex-col items-center justify-center sm:mt-[15rem] mt-[-3rem] w-full">
        <AboutUsLanding/>        </section>
        <section className="snap sm:h-screen flex flex-col items-center justify-center sm:mt-[18rem] mt-[0rem] w-full">
        <Features/>        </section>
        <section className="snap sm:h-screen flex flex-col items-center justify-center sm:mt-[9rem] mt-[0rem] w-full">
        <LandingDark/>        </section>
        <section className="snap sm:h-screen flex flex-col items-center justify-center xl:mt-30 md:mt-[9rem] mt-[0rem] w-full">
        <ContactUs/>        </section>
        <section className="snap flex flex-col items-center justify-center md:mt-[12rem] sm:mt-[6rem] w-full">
        <Footer/>
        </section>
    </main>
  )
}

export default Home