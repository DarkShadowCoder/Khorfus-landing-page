import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className='relative z-40 overflow-hidden pb-24 pt-28 sm:pt-36 lg:pb-[120px] lg:pt-[70px] px-5 lg:flex-nowrap lg:items-center lg:px-5 xl:px-10 2xl:px-20'>
        <div className='absolute top-0 left-0 w-full '>
          <div className='absolute bottom-0 left-0 -z-10 h-full w-full bg-noise-pattern bg-cover bg-center opacity-10 dark:opacity-40'>
          </div>
          <div className='absolute top-0 xl:right-20 right-0 -z-10 bg-white w-full max-w-[1750px]'>
            <img src="/assets/hero-bg1.jpeg" alt="hero bg 1" className='min-h-96 w-full left-56'/>
          </div>
        </div>
        <div className='relative flex flex-col lg:flex-row justify-center items-center pt-12 gap-4'>
          <div className='container flex flex-col justify-center gap-4 items-center w-full h-full'>
            <div className='px-5 py-2 w-fit h-auto rounded-full backdrop-blur-[200px]  text-white flex flex-row justify-between items-center gap-3'>
              <div className='rounded-full bg-blue-700 w-2 h-2 '></div>
              <h1 className='text-white text-md font-semibold'>Khorfus empowered innovation</h1>
            </div>

            <div className=''>
              <h1 className='lg:text-4xl text-2xl text-white font-bold text-center flex flex-wrap '>
                Developpement de produits
                <span className='use-automation-write overflow-hidden text-nowrap w-[26rem] '> &ensp;d&apos;intelligence Artificielle</span>
                <span className='text-inherit text-slate-400 use-automation-ping'>|</span>
              </h1>
              <p className='text-md mt-8 mb-10 lg:mb-8 text-center lg:text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non debitis reprehenderit voluptatum consequuntur repellendus, necessitatibus eveniet ipsam officia laudantium repellat maiores, nisi ratione!</p>
              <div className='flex gap-0 flex-wrap items-center justify-center lg:justify-start'>
                <a href="" className='text-white font-semibold flex justify-between items-center gap-4 px-6 py-3 border-blue-200 bg-[#4A6CF7] w-fit h-auto rounded-sm hover:text-black'>
                  <div>Commencer</div>
                  <Image src={"/assets/arrow-right.svg"}
                  alt='Get started'
                  width={30}
                  height={20}
                  color='white'
                  className='text-white'
                  />
                </a>

                <a href="https://go.demo.nextjstemplates.com/#about" className="inline-flex items-center rounded px-8 py-[14px] font-heading text-base text-dark hover:text-primary text-white hover:text-primary">
                  <span className="pr-3"><svg width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.376 12.416L8.777 19.482C8.70171 19.5321 8.61423 19.5608 8.52389 19.5652C8.43355 19.5695 8.34373 19.5492 8.264 19.5065C8.18427 19.4639 8.1176 19.4003 8.07111 19.3228C8.02462 19.2452 8.00005 19.1564 8 19.066V4.934C8.00005 4.84356 8.02462 4.75482 8.07111 4.67724C8.1176 4.59966 8.18427 4.53615 8.264 4.49346C8.34373 4.45077 8.43355 4.43051 8.52389 4.43483C8.61423 4.43915 8.70171 4.46789 8.777 4.518L19.376 11.584C19.4445 11.6297 19.5006 11.6915 19.5395 11.7641C19.5783 11.8367 19.5986 11.9177 19.5986 12C19.5986 12.0823 19.5783 12.1633 19.5395 12.2359C19.5006 12.3085 19.4445 12.3703 19.376 12.416Z"></path></svg>
                  </span>
                  Comment ça marche
                </a>
              </div>
            </div>
          </div>
          <div className='w-full px-4 lg:w-1/2 mt-28 lg:mt-0'>
            <div className='wow fadeInRight relative z-30 mx-auto h-[560px] max-w-[700px] min-w-[600px] lg:ml-0'>
              <div className='absolute right-0 top-0 lg:w-11/12'>
                    <Image
                    src="/assets/hero-img1.webp"
                    width="560"
                    height="520"
                    alt='hero image 1'
                    className=''
                    />
                </div>
                
                <div className='absolute bottom-0 left-0 z-10'>
                  <Image src="/assets/hero-img2.webp" alt="hero image 2" width={350} height={420} />
                  <div className='absolute -right-6 -top-6 -z-10 h-full w-full border backdrop-blur-[6px] border-white border-opacity-10 bg-white bg-opacity-10'></div>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}
