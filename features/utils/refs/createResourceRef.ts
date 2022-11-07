import { useRef } from "react"

export const createResourceRefs = ()=>{
  const descRef = useRef() as React.MutableRefObject<HTMLTextAreaElement>
  const documentRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const imageRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const audioRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const videoRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const linkRef = useRef() as React.MutableRefObject<HTMLInputElement>
  return {
    descRef,
    documentRef,
    imageRef,
    audioRef,
    videoRef,
    linkRef
  }
}
