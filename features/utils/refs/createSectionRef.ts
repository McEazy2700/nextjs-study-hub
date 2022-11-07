import React from "react"

export const useCreateSectionRefs = ()=>{
  const nameRef = React.useRef() as React.MutableRefObject<HTMLInputElement>
  const descRef = React.useRef() as React.MutableRefObject<HTMLTextAreaElement>
  const startRef = React.useRef() as React.MutableRefObject<HTMLInputElement>
  const endRef = React.useRef() as React.MutableRefObject<HTMLInputElement>
  return {
    nameRef,
    descRef,
    startRef,
    endRef,
  }
}

