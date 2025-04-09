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
        <section className="snap h-screen flex flex-col items-center justify-center pt-6 w-full">
        <Hero/>
        </section>
        <section className="snap h-screen flex flex-col items-center justify-center pt-6 w-full">
        <AboutUsLanding/>        </section>
        <section className="snap h-screen flex flex-col items-center justify-center pt-6 w-full">
        <Features/>        </section>
        <section className="snap h-screen flex flex-col items-center justify-center pt-6 w-full">
        <LandingDark/>        </section>
        <section className="snap h-screen flex flex-col items-center justify-center pt-6 w-full">
        <ContactUs/>        </section>

        <Footer/>
    </main>
  )
}

export default Home