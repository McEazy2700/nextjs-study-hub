import Top from "@bank/waves/Top"

const WhatIs = ()=>{

  return (
    <section className="relative">
      <Top />
      <div className="pt-40 flex items-center justify-center flex-col">
        <div className="max-w-3xl p-5 flex flex-col gap-3">
          <h2 className="text-tatiary font-semibold text-[1.5rem]">What is <span className="text-primary">Untoil?</span></h2>
          <p className="text-center text-fade dark:text-accent flex items-center justify-center">
            Untoil is a platform that allows students and kwnowledge seekers to upload,
            search, find and access academic resources quickly and easily.
            Videos, audio, images, documents, lecture notes, past questions you name it,
            untoil has you covered.
            We put the resources you need to ace that test right at your finger tips.
          </p>
        </div>
      </div>
    </section>
  )
}

export default WhatIs
