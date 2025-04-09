import BetaTest from '../components/impactSections/BetaTest'
import ImpactBanner from '../components/impactSections/ImpactBanner'
import ImpactHero from '../components/impactSections/ImpactHero'
import Footer from '../components/layout/Footer'
import Nav from '../components/layout/Nav'

const Impact = () => {
  return (
<main className="bg-[#EEEBE2] w-[100vw] flex flex-col lg:gap-0 gap-6 items-center">
    <Nav />
    <section className="sm:h-fit flex flex-col items-center justify-start gap-[3rem] lg:mt-[0rem] mt-[1.8rem] w-full">
        <ImpactHero />
        <ImpactBanner />
      </section>
      <section className=" flex flex-col items-center justify-center  mt-[3rem] w-full">
        <BetaTest/>
      </section>
    <section className=" flex flex-col items-center justify-center mt-[3rem] w-full">
        <Footer />
      </section>
    </main>
  )
}

export default Impact