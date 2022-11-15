import { AudioIcon, DocumentIcon, ImageIcon, VideoIcon } from "@components/bank/icons/Icons"
import { ResourceType } from "@gql/types/graphql"
import Link from "next/link"

interface ResourceItemProps {
  resource: ResourceType
}
const ResourceCard = ({ resource }: ResourceItemProps)=>{
  const res = resource
  const icons = {
    video: res.video && res.video !== '',
    audio: res.audio && res.audio !== '',
    image: res.image && res.image !== '',
    doc: res.document && res.document !== ''
  }

  return (
    <Link 
      className="bg-dark-accent/10 p-4 min-h-[10rem] hover:bg-secondary/5 hover:border-secondary/20 transition-all flex relative justify-end flex-col max-h-[30rem] rounded-md border border-secondary/5 max-w-[20rem] flex-1 items-center"
      href={`/user/resources/${resource.id}`}>
      <div className="pt-1 absolute bottom-1 right-3 gap-1 z-20 flex">
        {icons.video && <VideoIcon />}
        {icons.audio && <AudioIcon />}
        {icons.image && <ImageIcon />}
        {icons.doc && <DocumentIcon />}
      </div>
      <h3 className="text-lg flex mb-2 self-baseline p-1 font-semibold overflow-hidden text-ellipsis max-h-[5ch] max-w-full whitespace-nowrap">
        {resource.description}
      </h3>
    </Link>
  )
}

export default ResourceCard
