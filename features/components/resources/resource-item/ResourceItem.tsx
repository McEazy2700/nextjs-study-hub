import React, { useState } from 'react'
import Reader from '@components/resources/resource-pdf-reader/Reader'
import Modal from '@features/hocs/modal/Modal';
import { getPDFThumbnail } from '@features/utils/functions/pdfThumbnails'

interface DocumentResourceProps {
  href: string;
}
export const DocumentResource = (props: DocumentResourceProps) => {
  const { href } = props
  const [isOpen, setIsOpen] = useState(false)
  const [thumb, setThumb] = useState('')
  const close = ()=>setIsOpen(false)
  const open = ()=>setIsOpen(true)

  getPDFThumbnail(href).then(thumbnail => setThumb(thumbnail))

  return (
    <div className='hover:bg-secondary/10 hover:border-secondary/50 transition-all bg-dark-accent/20 w-fit rounded-md pb-4 flex p-2 border border-secondary/5' role='button' >
      <button onClick={open} className='max-w-[10rem] hover:scale-105 transition-all rounded-md overflow-hidden'>
        <img className='w-full' src={thumb} alt='Pdf thumbnail' />
      </button>
      <Modal open={isOpen} onClose={close}>
        <Reader close={close} href={href} />
      </Modal>
    </div>
  )
}

