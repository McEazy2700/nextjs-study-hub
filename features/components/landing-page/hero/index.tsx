import Link from "next/link";

const Hero = ()=>{

  return (
    <section className="grid grid-cols-2">
      <div id="hero-text" className="h-full gap-3 flex flex-col items-start justify-center">
        <h1 className="text-3xl font-bold text-start dark:text-secondary">
          <span className="text-primary">Sharing </span>Knowledge has never been easier.
        </h1>
        <p>Untoil makes finding and sharing academic resources easy.</p>
        <Link className="bg-primary p-3 mt-5 rounded-[6rem] px-5" href="/signup">Join for free</Link>
      </div>
      <div>
        <div>
          <img src="/assets/images/student.png" alt="A group of students studying" />
        </div>
      </div>
    </section>
  )
}

export default Hero;
