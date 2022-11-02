import Hero from "@components/landing-page/hero"
import WhatIs from "@components/landing-page/what-is"

const LandingPage = ()=>{

  return (
    <section className="dark:bg-dark-accent">
      <Hero />
      <WhatIs />
    </section>
  )
}

export default LandingPage
