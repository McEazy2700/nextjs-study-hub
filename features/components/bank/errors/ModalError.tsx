import React from 'react'

interface ModalErrorProps {
  code?: string;
  message?: string
}
const ModalError = ({ code, message }: ModalErrorProps) => {
  return (
    <div className=''>
      {code && <h2>{code}</h2>}
      <p>
      {message}
      </p>
    </div>
  )
}

export default ModalError
