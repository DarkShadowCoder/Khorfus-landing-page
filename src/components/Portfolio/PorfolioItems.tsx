import Image from 'next/image'
import React from 'react'

function PorfolioItems(props:any) {
  return (
    <div className='grid-item'>
        <div className=' relative overflow-hidden rounded'>
        <div className='old-image static'>
            <Image alt="" src={props.image} className='w-full h-auto text-transparent' width={349} height={322}/>
        </div>
        <div className='absolute bottom-8 left-5 flex translate-y-6 items-center justify-between rounded bg-[#000] bg-opacity-30 px-4 py-5 opacity-30 backdrop-blur-[30px] transition duration-300 hover:translate-y-0 hover:opacity-100 sm:left-8 sm:px-6 lg:left-5 lg:px-4 xl:px-6 2xl:left-8'>
          <div className='border-r border-[#e9e9e9] border-opacity-30 pr-4 sm:pr-5 lg:pr-4 xl:pr-5'>
            <h3 className='font-heading text-base font-medium text-white sm:text-xl lg:text-base xl:text-xl'>Portfolio</h3>
            <p className='text-sm text-[#d9d9d9] sm:text-base lg:text-sm xl:text-base'>Plus de details</p>
          </div>
          <div className='pl-4 sm:pl-5 lg:pl-4 xl:pl-5'>
            <a href="" className='dark:hover:us-bg-primary flex h-10 w-10 items-center justify-center rounded-full bg-[#f8f8f8] bg-opacity-[15%] text-white hover:bg-primary hover:bg-opacity-100 dark:hover:bg-opacity-100'>
              <svg width="20" height="20" viewBox="0 0 20 20" className="fill-current"><path d="M13.4767 9.16689L9.00671 4.69689L10.185 3.51855L16.6667 10.0002L10.185 16.4819L9.00671 15.3036L13.4767 10.8336H3.33337V9.16689H13.4767Z"></path></svg>
            </a>
          </div>
        </div>
        </div>
    </div>
  )
}

export default PorfolioItems