import React from 'react'

interface ListContainerProps {
  addItem?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode,
  title?: string
}
const ListContainer = ({ title, addItem, children }: ListContainerProps)=>{
  return (
      <div className="flex flex-col gap-2 p-2 bg-dark-accent/20 dark:bg-dark-accent/50 rounded-lg m-4 ml-0">
      <div className="relative flex">
        <h2 className="font-semibold text-lg">{title}</h2>
        <button 
        className='bg-primary p-2 max-w-[8rem] rounded-3xl absolute right-2 min-w-[6rem] mt-1' 
        onClick={addItem}>Add +</button>
      </div>
      <ul className="flex flex-wrap gap-2 max-h-[20rem] overflow-y-scroll">
        {children}
      </ul>
    </div>
  )
}

export default ListContainer
