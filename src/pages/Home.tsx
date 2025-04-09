import Footer from "../components/layout/Footer"
import Nav from "../components/layout/Nav"
import AboutUsLanding from "../components/sections/AboutUsLanding"
import ContactUs from "../components/sections/ContactUs"
import Features from "../components/sections/Features"
import Hero from "../components/sections/Hero"
import LandingDark from "../components/sections/LandingDark"

const Home = () => {
  return (
    <main className="bg-[#EEEBE2] w-[100vw] flex flex-col gap-0 items-center">
        <Nav/>
        <Hero/>
        <AboutUsLanding/>
        <Features/>
        {/* <LandingDark/> */}
        {/* <ContactUs/> */}
        <Footer/>
    </main>
  )
}

export default Home