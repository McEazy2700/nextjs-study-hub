import React from "react"

type emailRef = React.MutableRefObject<HTMLInputElement>

export const emailValidator = (ref:emailRef)=>{
  if (ref.current){
    if (ref.current.value.includes('@') && ref.current.value.endsWith('.com')){
      return true
    }else {
      return false
    }
  }
}
