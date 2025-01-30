import React from 'react'

function TitleItem(props:any) {
  return (
    <div className='relative z-40 mx-auto mb-12 max-w-[800px] w-full pt-6 text-center md:mb-20 lg:pt-16 flex flex-col items-center'>
        <div className='absolute z-0 top-[45px] text-wrap w-full h-fit text-center font-extrabold text-[40px] leading-[1] md:text-[95px] transform -translate-y-8  bg-gradient-to-t to-primary/80 from-black/30 text-transparent bg-clip-text'>
            <h1 className='text-center text-wrap'>{props.title}</h1>
            <h1 className='text-center text-wrap'> {props.title2} </h1>
        </div>
        <div className='mb-5 z-40 max-w-[620px] text-3xl text-center relative font-semibold text-white sm:text-4xl md:text-[50px] md:leading-[60px] '>
            {props.subtitle}
        </div>
        <div className='leading-6 max-w-[620px] z-50 relative text-md'>
            {props.description}
        </div>
    </div>
  )
}

export default TitleItem;