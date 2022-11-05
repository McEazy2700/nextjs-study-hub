import Link from "next/link";
import Chat from "@components/landing-page/blocks/floating-chat"
const Hero = ()=>{

  return (
    <section className="relative min-w-[100vw] overflow-x-hidden text-black bg-accent p-14 grid md:grid-cols-2">
      <div id="hero-text" className="h-full gap-3 flex flex-col items-start justify-center">
        <h1 className="text-3xl text-tatiary font-bold text-start">
          <span className="text-primary">Sharing </span>Knowledge has never been easier.
        </h1>
        <p className="text-start">Untoil makes finding and sharing academic resources easy.</p>
        <Link className="bg-primary p-3 mt-10 rounded-[6rem] px-5" href="/signup">Join for free</Link>
      </div>
      <div className="relative flex items-center justify-center">
        <div className="">
          <img src="/assets/images/student.png" alt="A group of students studying" />
        </div>
        <div className="absolute top-1/4 right-[60%]">
          <Chat
            width="20rem"
            pointRight
            imageUrl="/assets/images/chat-profile.png"
            text="Yo, checkout this Physics textbook I found online."/>
        </div>
        <div className="absolute top-[15%] left-[55%]">
          <Chat
            width="10rem"
            imageUrl="/assets/images/female-profile.png"
            text="Hey, have you seen this lecture video."/>
        </div>
      </div>
    </section>
  )
}

export default Hero;
