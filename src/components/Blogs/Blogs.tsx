import TitleItem from '@/ui/TitleItem'
import React from 'react'
import BlogsItems from './BlogsItems'

export default function Blogs() {
  return (
    <div className='pt-14 sm:pt-20 lg:pt-[130px]  '>
      <div className='px-8 pb-16 xl:container'>
        <div className='w-full flex items-center justify-center'>
          <TitleItem
          title="BLOGS" 
          subtitle="Recents Articles de notre Blog" 
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus qui voluptate velit, nulla quas magni soluta temporibus iste" 
          />
        </div>

        <div className='-mx-6 flex flex-wrap lg:flex-nowrap justify-center gap-2'>
          <BlogsItems author="Angos Gabain" title="L'hydrogene, la prochaine source d'energie" date="02, Septembre 2024" image="/assets/about-us1.webp"/>
          <BlogsItems author="Yvan Landry" title="L'Intelligence Artificielle plus proche de nous" date="02, Septembre 2024" image="/assets/about-us1.webp"/>
          <BlogsItems author="Ketou Jalil" title="Le fondements de l'Intelligence Artificielle" date="02, Septembre 2024" image="/assets/about-us1.webp"/>          

        </div>
        <div className='w-full h-[1px] bg-gray-600'></div>
        
      </div>
    </div>
  )
}
