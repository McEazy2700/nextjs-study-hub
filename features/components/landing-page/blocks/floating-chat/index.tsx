type ChatType = {
  imageUrl?: string;
  text?: string;
  pointRight?: boolean
  width?: `${string}rem`
}
const Chat = ({ imageUrl, text, pointRight, width }: ChatType)=>{

  return (
    <article className={`bg-white/40 p-3 text-xs md:text-sm max-w-[${width}] min-w-[15rem] items-center ${pointRight ? `rounded-br-none` : `rounded-bl-none`} rounded-2xl flex gap-3`}>
      {imageUrl&& 
      <div className="max-w-[1.5rem] md:max-w-[2rem] w-full overflow-hidden rounded-full">
        <img className="w-full" src={imageUrl} alt="Placeholder user Image" />
      </div>}
      <h1 className="text-start">{text}</h1>
    </article>
  )
}

export default Chat
