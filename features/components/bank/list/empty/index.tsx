import React from 'react'

interface NothingHereProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}
const messages = [
  {
    src: '/assets/images/whistling.png',
    text: "There's nothing to see here.",
    cta: "Add now!",
    alt: "whistling refree"
  },
  {
    src: '/assets/images/chilling.png',
    text: "ahh.. it's quite peacefull here Go on.. ",
    cta: "Do it!",
    alt: "Dude relaxing"
  },
  {
    src: '/assets/images/excited.png',
    text: "So empty... Haaa..",
    cta: "Let's add some...",
    alt: "Excited lady"
  },
]
const randomMessage = ()=>{
  return messages[Math.floor(Math.random() * messages.length)]
}
const NothingHere = ({ onClick }: NothingHereProps)=>{
  const message = randomMessage()
  return (
  <div className="w-full p-2 flex flex-col items-center justify-center gap-2">
    <div className="max-w-[10rem]">
      <img className="w-full" src={message.src} alt={message.alt} />
    </div>
    <div className="text-black/30 dark:text-secondary/30 font-semibold flex flex-col items-center justify-center">
      <p className="">{message.text}</p>
      <button onClick={onClick}>{message.cta}</button>
    </div>
  </div>
  )
}

export default NothingHere
