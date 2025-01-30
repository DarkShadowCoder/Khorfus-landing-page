import React from 'react'
import Image from 'next/image'

export default function FeaturesItems({
  children,
  title,
  description,
}: {
  children: React.ReactNode,
  title: string,
  description: string
}) {
  return (
    <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
      <div className='group mx-auto mb-10 max-w-[380px] text-center md:mb-16'>
        <div className='mx-auto mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-full transition group-hover:text-white bg-white bg-opacity-5 text-white group-hover:bg-primary group-hover:bg-opacity-100 md:mb-9 md:h-[90px] md:w-[90px]'>
          {children}
        </div>
        <div className=''>
          <h3 className='mb-3 font-heading text-xl font-medium text-white sm:text-2xl md:mb-5'>
            {title}
          </h3>
          <p className='text-[1rem] leading-6 '>
            {description}
          </p>
        </div>
      </div>
      
    </div>
  )
}
