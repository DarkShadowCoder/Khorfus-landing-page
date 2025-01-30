import Image from 'next/image'
import React from 'react'

export default function CallAboutUs() {
  return (
    <div className='z-40 relative pt-14 sm:pt-20 lg:pt-[130px]  '>
      <div className='px-8 pb-16 xl:container '>
        <div className='relative overflow-hidden bg-cover bg-center px-10 py-[60px] drop-shadow-light drop-shadow-none sm:px-[70px] w-full'>
          <div className='absolute left-0 top-0 z-10 h-full w-full bg-noise-pattern  bg-cover bg-center  opacity-40'></div>
          <div className='absolute bottom-0 z-10 left-7'>
            <img 
              src={"/assets/hero-bg1.jpeg"} 
              alt='Call Us'
              className='w-full h-full '
            />
          </div>
          <div className='-mx-4 flex flex-wrap items-center z-30 relative'>
            <div className='w-full px-4 lg:w-2/3'>
              <div className='mx-auto mb-10 max-w-[550px] text-center lg:mb-0 lg:ml-0 lg:text-left'>
                <h2 className='mb-4 font-heading text-xl font-semibold leading-tight text-dark text-white sm:text-[38px]'>
                  Recherche de collaboration, Rejoignez nous!
                </h2>
                <p className='text-md'>Collaborer avec Khorfus pour booster l&apos;impact de vos projets </p>
              </div>
            </div>
            <div className='w-full px-4 lg:w-1/3 flex items-end justify-end'>
              <a href="" className='inline-flex items-center rounded bg-primary px-8 py-[14px] font-heading text-base text-white hover:bg-opacity-90'>
                Commencer maintenant
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
