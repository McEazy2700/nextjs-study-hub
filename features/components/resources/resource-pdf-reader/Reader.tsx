import React from 'react'
import { PrimaryLink } from '@components/bank/links/Link'
import { Viewer } from '@react-pdf-viewer/core'

interface ReaderProps {
  href: string;
}
const Reader = (props: ReaderProps) => {
  const { href } = props
  return (
    <div className='p-4 md:px-16 flex items-center justify-center w-full relative'>
      <PrimaryLink href={href} download>Download</PrimaryLink>
      <Viewer theme={{theme: 'auto'}} fileUrl={href} />
    </div>
  )
}

export default Reader
