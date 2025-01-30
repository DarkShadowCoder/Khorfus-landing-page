import TitleItem from '@/ui/TitleItem'
import React from 'react'
import Image from 'next/image'
import PorfolioItems from './PorfolioItems'

export default function Portfolio() {
  return (
    <div className='pt-14 sm:pt-20 lg:pt-[130px]'>
      <div className='px-4 xl:container'>
        <div className='w-full flex items-center justify-center'>
          <TitleItem 
          title="PRODUITS"
          subtitle="Galery, Previews and Portfolio"
          dscription="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse minima sed possimus itaque reprehenderit fugiat ab? Deleniti, quia optio! "
          />
        </div>

        <div className='w-full'>
          <div className='portfolio-btn-wrapper mb-16 flex items-center justify-center overflow-x-auto pb-2'>
            <button className='border-b whitespace-nowrap px-5 font-heading text-base text-dark text-white hover:border-b hover:transform duration-500'>All</button>
            <button className='whitespace-nowrap px-5 font-heading text-base capitalize text-dark text-white hover:border-b hover:transform duration-500 ease-in-out'>Intelligence Artificielle</button>
            <button className=' whitespace-nowrap px-5 font-heading text-base capitalize text-dark text-white hover:border-b hover:transform duration-500 ease-in-out'>Mecatronique</button>
          </div>

          <div>
            <div className='flex flex-row justify-center content-stretch box-border w-full gap-7'>
              <div className='flex flex-col justify-center content-stretch flex-1 w-0 gap-7'>
                <PorfolioItems image="/assets/portfolio-img1.webp"/>

                <PorfolioItems image="/assets/portfolio-img2.webp" />
              </div>

              <div className='flex flex-col place-content-stretch flex-1 justify-start gap-7'>
                <PorfolioItems image={"/assets/portfolio-img3.webp"}/>
                </div>
                <div className='flex flex-col place-content-stretch flex-1 justify-start gap-7'>
                  <PorfolioItems image="/assets/portfolio-img4.webp" />
                </div>
            </div>
          </div>
          <div className='w-full pt-10 text-center'>
            <a href="" className='inline-flex items-center rounded bg-primary px-8 py-[14px] font-heading text-base text-white hover:text-black transition-all'>
              Consulter plus de projets
              <span className='pl-3'>
                <svg width="16" height="16" viewBox="0 0 16 16"  className='fill-current' xmlns="http://www.w3.org/2000/svg"><path d="M12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9H0V7H12.172Z" fill="white"></path></svg>
              </span>
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}
