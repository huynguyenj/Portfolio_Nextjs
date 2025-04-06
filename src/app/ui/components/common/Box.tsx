import Image from 'next/image'
import React from 'react'

export default function Box({title, description, image}:{title:string, description?:string,image:string}) {
  return (
    <div className='px-10 bg-gray-900 py-5 flex w-[100%] h-fit rounded-2xl gap-7 justify-center items-center mt-10'>
      <h2 className='w-[15%] sm:text-[1.2em] font-bold'>{title}</h2>
      <div className='w-[0.2rem] h-30 bg-white'></div>
      <p className='w-[70%]  text-[0.8rem] sm:text-[1.1rem]'>{description}</p>
      <div className='w-[25%] flex shadow-[10px_10px_0] border-none'>
            <Image src={image} width={230} height={200} alt={title} className='w-[100px] sm:h-[150px] sm:w-[250px]'/>
      </div>
    </div>
  )
}
