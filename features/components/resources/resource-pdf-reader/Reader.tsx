import React from 'react'
import { DownloadLink } from '@components/bank/links/Link'
import { Viewer } from '@react-pdf-viewer/core'
import { thumbnailPlugin } from '@react-pdf-viewer/thumbnail';
import { CloseButton } from '@components/bank/buttons/CloseButton';

interface ReaderProps {
  href: string;
  close?: React.MouseEventHandler
}
const Reader = (props: ReaderProps) => {
  const thumbnailPluginInstance = thumbnailPlugin()
  const { href, close } = props
  return (
    <div className='p-4 min-w-[85vw] max-w-[90vw] overflow-y-scroll max-h-screen md:px-16 top-3 overflow-hidden rounded-xl flex items-center justify-center w-full relative'>
      <CloseButton onClick={close} className='fixed top-1 bg-red-600 text-secondary p-2 font-bold text-lg rounded-full left-3' />
      <DownloadLink href={href} download>Download</DownloadLink>
      <Viewer plugins={[thumbnailPluginInstance]}  theme={{theme: 'auto'}} fileUrl={href} />
    </div>
  )
}

export default Reader
