import { AudioIcon, DocumentIcon, ImageIcon, VideoIcon } from "@components/bank/icons/Icons"
import { ResourceStateType } from "@features/store/slices/resourceSlice"
import Link from "next/link"

interface ResourceItemProps {
  resource: ResourceStateType
}
const ResourceCard = ({ resource }: ResourceItemProps)=>{
  const res = resource.resource
  const icons = {
    video: res.video && res.video !== '',
    audio: res.audio && res.audio !== '',
    image: res.image && res.image !== '',
    doc: res.document && res.document !== ''
  }

  return (
    <Link 
      className="p-1 pb-5 px-4 shadow relative shadow-dark-accent/20 bg-secondary dark:bg-secondary/50 dark:text-secondary min-w-[15rem] flex-1 text-dark-accent rounded-md"
      href={`/user/resources/${resource.resource.id}`}>
      <div className="pt-1 absolute bottom-0.5 right-3 gap-1 z-20 flex">
        {icons.video && <VideoIcon />}
        {icons.audio && <AudioIcon />}
        {icons.image && <ImageIcon />}
        {icons.doc && <DocumentIcon />}
      </div>
      <h3 className="text-lg p-1 font-semibold overflow-hidden text-ellipsis max-h-[5ch] max-w-full whitespace-nowrap">
        {resource.resource.description}
      </h3>
    </Link>
  )
}

export default ResourceCard
