import { BiVideo } from 'react-icons/bi'
import { IoMusicalNotes } from 'react-icons/io5'
import { HiDocumentText } from 'react-icons/hi'
import { IoImage } from 'react-icons/io5'
export const VideoIcon = ()=>{
  return (
    <span className='bg-red-600 p-1 rounded-xl px-3'><BiVideo /></span>
  )
}

export const AudioIcon = ()=>{
  return (
    <span className='bg-green-500 p-1 rounded-xl px-3'><IoMusicalNotes /></span>
  )
}

export const DocumentIcon = ()=>{
  return (
    <span className='bg-blue-500 p-1 rounded-xl px-3'><HiDocumentText /></span>
  )
}

export const ImageIcon = ()=>{
  return (
    <span className='bg-purple-600 p-1 rounded-xl px-3'><IoImage /></span>
  )
}
