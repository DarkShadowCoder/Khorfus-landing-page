"use client"
import React, { useState } from 'react'
import Image from 'next/image'


export default function Navbar() {
  const [nav, setNav] = useState(false);
  return (
    <header className='m-0 p-0 flex items-center justify-center w-full'>
      <div className='flex w-full flex-wrap px-5 lg:flex-nowrap lg:items-center lg:px-5 xl:px-10 2xl:px-20'>
        <div className=''>
          <div className="fixed z-30 top-[16px] left-[16px] right-[16px] bottom-[16px] pointer-events-none"></div>
        </div>
        <div className='header absolute left-0 top-0 w-full py-8 px-5 lg:flex-nowrap lg:items-center lg:px-5 xl:px-10 2xl:px-20'>
          <div className='flex w-full flex-wrap px-5 lg:flex-nowrap lg:items-center lg:px-5 xl:px-10 2xl:px-20 '>
            <div className='relative z-40 max-w-[250px] pr-4 lg:w-full lg:max-w-[220px] xl:max-w-[280px] flex justify-start items-center gap-2'>
              <Image src={"/assets/khorfus-bleu.png"}
              width={50} 
              height={50} 
              alt='KHORFUS Logo' 
              />
              <a href="/" className='hidden md:block'>
                <h1 className='font-bold text-pretty text-2xl text-white'>Khorfus</h1>
              </a>
            </div>
            <div className='menu-wrapper invisible fixed left-0 top-0 z-50 h-screen w-full justify-center bg-white p-5 dark:bg-dark lg:visible lg:static lg:flex lg:h-auto lg:justify-start lg:bg-transparent lg:p-0 lg:opacity-100 dark:lg:bg-transparent '>
              <div className='w-full self-center'>
                <nav className=''>
                  <ul className='navbar flex flex-col items-center justify-center space-y-5 text-center lg:flex-row lg:justify-start lg:space-x-6 lg:space-y-0 xl:space-x-10'>
                    <li>
                      <a href='#domaines' className='cursor-pointer inline-flex items-center justify-center text-center font-heading text-base text-dark-text hover:text-primary dark:hover:text-white menu-scroll'>
                        Domaines
                      </a>
                    </li>
                    <li>
                      <a href='#about' className='cursor-pointer inline-flex items-center justify-center text-center font-heading text-base text-dark-text hover:text-primary dark:hover:text-white menu-scroll'>
                        A propos
                      </a>
                    </li>
                    <li>
                      <a href='#products' className='cursor-pointer inline-flex items-center justify-center text-center font-heading text-base text-dark-text hover:text-primary dark:hover:text-white menu-scroll'>
                        Produits
                      </a>
                    </li>
                    <li>
                      <a href='#testimonials' className='cursor-pointer inline-flex items-center justify-center text-center font-heading text-base text-dark-text hover:text-primary dark:hover:text-white menu-scroll'>
                        Temoignages
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className='absolute z-50 invisible xl:visible bottom-0 left-0 flex w-full items-center justify-between space-x-5 self-end p-5 lg:static lg:w-auto lg:self-center lg:p-0'>
              <a href="#start" className='w-full whitespace-nowrap rounded bg-primary px-6 py-3 text-center font-heading text-white hover:bg-opacity-90 lg:w-auto'>
                Se connecter
              </a>
              <a href="" className='w-full whitespace-nowrap rounded bg-[#222C40] px-6 py-3 text-center font-heading text-white hover:bg-opacity-90 lg:w-auto'>
                S&apos;inscrire
              </a>
            </div>
            <div className='text-slate-50 absolute right-5 top-1/2 z-50 flex -translate-y-1/2 items-center lg:static lg:ml-4 lg:translate-y-0 xl:ml-6'>
              <div className='flex visible items-center justify-end '>
                <button className='hidden h-10 w-10 items-center justify-center  text-dark-text hover:bg-slate-300 sm:flex rounded-full p-2 hover:transform duration-500 ease-in-out'>
                  <svg width="24" height="24" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_369_1884)"><path d="M16.9347 15.3963L12.4816 11.7799C14.3168 9.26991 14.1279 5.68042 11.8338 3.41337C10.6194 2.19889 9.00003 1.52417 7.27276 1.52417C5.54549 1.52417 3.92617 2.19889 2.71168 3.41337C0.201738 5.92332 0.201738 10.0256 2.71168 12.5355C3.92617 13.75 5.54549 14.4247 7.27276 14.4247C8.91907 14.4247 10.4574 13.804 11.6719 12.6975L16.179 16.3409C16.287 16.4219 16.4219 16.4759 16.5569 16.4759C16.7458 16.4759 16.9077 16.3949 17.0157 16.26C17.2316 15.9901 17.2046 15.6122 16.9347 15.3963ZM7.27276 13.2102C5.86935 13.2102 4.5739 12.6705 3.57532 11.6719C1.52418 9.62076 1.52418 6.30116 3.57532 4.27701C4.5739 3.27843 5.86935 2.73866 7.27276 2.73866C8.67617 2.73866 9.97162 3.27843 10.9702 4.27701C13.0213 6.32815 13.0213 9.64775 10.9702 11.6719C9.99861 12.6705 8.67617 13.2102 7.27276 13.2102Z" fill="currentColor"></path></g><defs><clipPath id="clip0_369_1884"><rect width="17.2727" height="17.2727" fill="white" transform="translate(0.363647 0.363647)"></rect></clipPath></defs></svg>
                </button>

                <div className='relative flex h-10 w-10 items-center justify-center'>
                  <button className=' dark:text-white p-2 rounded-full hover:bg-slate-300 hover:transform duration-500 ease-in-out'>
                    <svg viewBox="0 0 23 23" className="h-5 w-5 stroke-current dark:hidden md:h-6 md:w-6" fill="none"><path d="M9.55078 1.5C5.80078 1.5 1.30078 5.25 1.30078 11.25C1.30078 17.25 5.80078 21.75 11.8008 21.75C17.8008 21.75 21.5508 17.25 21.5508 13.5C13.3008 18.75 4.30078 9.75 9.55078 1.5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    <svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden h-5 w-5 dark:block md:h-6 md:w-6"><mask id="path-1-inside-1_977:1934" fill="white"><path d="M12.0508 16.5C10.8573 16.5 9.71271 16.0259 8.8688 15.182C8.02489 14.3381 7.55078 13.1935 7.55078 12C7.55078 10.8065 8.02489 9.66193 8.8688 8.81802C9.71271 7.97411 10.8573 7.5 12.0508 7.5C13.2443 7.5 14.3888 7.97411 15.2328 8.81802C16.0767 9.66193 16.5508 10.8065 16.5508 12C16.5508 13.1935 16.0767 14.3381 15.2328 15.182C14.3888 16.0259 13.2443 16.5 12.0508 16.5ZM12.0508 18C13.6421 18 15.1682 17.3679 16.2934 16.2426C17.4186 15.1174 18.0508 13.5913 18.0508 12C18.0508 10.4087 17.4186 8.88258 16.2934 7.75736C15.1682 6.63214 13.6421 6 12.0508 6C10.4595 6 8.93336 6.63214 7.80814 7.75736C6.68292 8.88258 6.05078 10.4087 6.05078 12C6.05078 13.5913 6.68292 15.1174 7.80814 16.2426C8.93336 17.3679 10.4595 18 12.0508 18ZM12.0508 0C12.2497 0 12.4405 0.0790176 12.5811 0.21967C12.7218 0.360322 12.8008 0.551088 12.8008 0.75V3.75C12.8008 3.94891 12.7218 4.13968 12.5811 4.28033C12.4405 4.42098 12.2497 4.5 12.0508 4.5C11.8519 4.5 11.6611 4.42098 11.5205 4.28033C11.3798 4.13968 11.3008 3.94891 11.3008 3.75V0.75C11.3008 0.551088 11.3798 0.360322 11.5205 0.21967C11.6611 0.0790176 11.8519 0 12.0508 0V0ZM12.0508 19.5C12.2497 19.5 12.4405 19.579 12.5811 19.7197C12.7218 19.8603 12.8008 20.0511 12.8008 20.25V23.25C12.8008 23.4489 12.7218 23.6397 12.5811 23.7803C12.4405 23.921 12.2497 24 12.0508 24C11.8519 24 11.6611 23.921 11.5205 23.7803C11.3798 23.6397 11.3008 23.4489 11.3008 23.25V20.25C11.3008 20.0511 11.3798 19.8603 11.5205 19.7197C11.6611 19.579 11.8519 19.5 12.0508 19.5ZM24.0508 12C24.0508 12.1989 23.9718 12.3897 23.8311 12.5303C23.6905 12.671 23.4997 12.75 23.3008 12.75H20.3008C20.1019 12.75 19.9111 12.671 19.7705 12.5303C19.6298 12.3897 19.5508 12.1989 19.5508 12C19.5508 11.8011 19.6298 11.6103 19.7705 11.4697C19.9111 11.329 20.1019 11.25 20.3008 11.25H23.3008C23.4997 11.25 23.6905 11.329 23.8311 11.4697C23.9718 11.6103 24.0508 11.8011 24.0508 12ZM4.55078 12C4.55078 12.1989 4.47176 12.3897 4.33111 12.5303C4.19046 12.671 3.99969 12.75 3.80078 12.75H0.800781C0.601869 12.75 0.411103 12.671 0.270451 12.5303C0.129799 12.3897 0.0507813 12.1989 0.0507812 12C0.0507813 11.8011 0.129799 11.6103 0.270451 11.4697C0.411103 11.329 0.601869 11.25 0.800781 11.25H3.80078C3.99969 11.25 4.19046 11.329 4.33111 11.4697C4.47176 11.6103 4.55078 11.8011 4.55078 12ZM20.5363 3.5145C20.6769 3.65515 20.7559 3.84588 20.7559 4.04475C20.7559 4.24362 20.6769 4.43435 20.5363 4.575L18.4153 6.6975C18.3455 6.76713 18.2628 6.82235 18.1717 6.86C18.0806 6.89765 17.983 6.91699 17.8845 6.91692C17.6855 6.91678 17.4947 6.83758 17.354 6.69675C17.2844 6.62702 17.2292 6.54425 17.1915 6.45318C17.1539 6.36211 17.1345 6.26452 17.1346 6.16597C17.1348 5.96695 17.214 5.77613 17.3548 5.6355L19.4758 3.5145C19.6164 3.3739 19.8072 3.29491 20.006 3.29491C20.2049 3.29491 20.3956 3.3739 20.5363 3.5145ZM6.74678 17.304C6.88738 17.4446 6.96637 17.6354 6.96637 17.8342C6.96637 18.0331 6.88738 18.2239 6.74678 18.3645L4.62578 20.4855C4.48433 20.6221 4.29488 20.6977 4.09823 20.696C3.90158 20.6943 3.71347 20.6154 3.57442 20.4764C3.43536 20.3373 3.35648 20.1492 3.35478 19.9526C3.35307 19.7559 3.42866 19.5665 3.56528 19.425L5.68628 17.304C5.82693 17.1634 6.01766 17.0844 6.21653 17.0844C6.4154 17.0844 6.60614 17.1634 6.74678 17.304ZM20.5363 20.4855C20.3956 20.6261 20.2049 20.7051 20.006 20.7051C19.8072 20.7051 19.6164 20.6261 19.4758 20.4855L17.3548 18.3645C17.2182 18.223 17.1426 18.0336 17.1443 17.8369C17.146 17.6403 17.2249 17.4522 17.3639 17.3131C17.503 17.1741 17.6911 17.0952 17.8877 17.0935C18.0844 17.0918 18.2738 17.1674 18.4153 17.304L20.5363 19.425C20.6769 19.5656 20.7559 19.7564 20.7559 19.9552C20.7559 20.1541 20.6769 20.3449 20.5363 20.4855ZM6.74678 6.6975C6.60614 6.8381 6.4154 6.91709 6.21653 6.91709C6.01766 6.91709 5.82693 6.8381 5.68628 6.6975L3.56528 4.575C3.49365 4.50582 3.43651 4.42306 3.39721 4.33155C3.3579 4.24005 3.33721 4.14164 3.33634 4.04205C3.33548 3.94247 3.35445 3.84371 3.39216 3.75153C3.42988 3.65936 3.48557 3.57562 3.55598 3.5052C3.6264 3.43478 3.71014 3.37909 3.80232 3.34138C3.89449 3.30367 3.99325 3.2847 4.09283 3.28556C4.19242 3.28643 4.29083 3.30712 4.38233 3.34642C4.47384 3.38573 4.5566 3.44287 4.62578 3.5145L6.74678 5.6355C6.81663 5.70517 6.87204 5.78793 6.90985 5.87905C6.94766 5.97017 6.96712 6.06785 6.96712 6.1665C6.96712 6.26515 6.94766 6.36283 6.90985 6.45395C6.87204 6.54507 6.81663 6.62783 6.74678 6.6975Z"></path></mask><path d="M12.0508 16.5C10.8573 16.5 9.71271 16.0259 8.8688 15.182C8.02489 14.3381 7.55078 13.1935 7.55078 12C7.55078 10.8065 8.02489 9.66193 8.8688 8.81802C9.71271 7.97411 10.8573 7.5 12.0508 7.5C13.2443 7.5 14.3888 7.97411 15.2328 8.81802C16.0767 9.66193 16.5508 10.8065 16.5508 12C16.5508 13.1935 16.0767 14.3381 15.2328 15.182C14.3888 16.0259 13.2443 16.5 12.0508 16.5ZM12.0508 18C13.6421 18 15.1682 17.3679 16.2934 16.2426C17.4186 15.1174 18.0508 13.5913 18.0508 12C18.0508 10.4087 17.4186 8.88258 16.2934 7.75736C15.1682 6.63214 13.6421 6 12.0508 6C10.4595 6 8.93336 6.63214 7.80814 7.75736C6.68292 8.88258 6.05078 10.4087 6.05078 12C6.05078 13.5913 6.68292 15.1174 7.80814 16.2426C8.93336 17.3679 10.4595 18 12.0508 18ZM12.0508 0C12.2497 0 12.4405 0.0790176 12.5811 0.21967C12.7218 0.360322 12.8008 0.551088 12.8008 0.75V3.75C12.8008 3.94891 12.7218 4.13968 12.5811 4.28033C12.4405 4.42098 12.2497 4.5 12.0508 4.5C11.8519 4.5 11.6611 4.42098 11.5205 4.28033C11.3798 4.13968 11.3008 3.94891 11.3008 3.75V0.75C11.3008 0.551088 11.3798 0.360322 11.5205 0.21967C11.6611 0.0790176 11.8519 0 12.0508 0V0ZM12.0508 19.5C12.2497 19.5 12.4405 19.579 12.5811 19.7197C12.7218 19.8603 12.8008 20.0511 12.8008 20.25V23.25C12.8008 23.4489 12.7218 23.6397 12.5811 23.7803C12.4405 23.921 12.2497 24 12.0508 24C11.8519 24 11.6611 23.921 11.5205 23.7803C11.3798 23.6397 11.3008 23.4489 11.3008 23.25V20.25C11.3008 20.0511 11.3798 19.8603 11.5205 19.7197C11.6611 19.579 11.8519 19.5 12.0508 19.5ZM24.0508 12C24.0508 12.1989 23.9718 12.3897 23.8311 12.5303C23.6905 12.671 23.4997 12.75 23.3008 12.75H20.3008C20.1019 12.75 19.9111 12.671 19.7705 12.5303C19.6298 12.3897 19.5508 12.1989 19.5508 12C19.5508 11.8011 19.6298 11.6103 19.7705 11.4697C19.9111 11.329 20.1019 11.25 20.3008 11.25H23.3008C23.4997 11.25 23.6905 11.329 23.8311 11.4697C23.9718 11.6103 24.0508 11.8011 24.0508 12ZM4.55078 12C4.55078 12.1989 4.47176 12.3897 4.33111 12.5303C4.19046 12.671 3.99969 12.75 3.80078 12.75H0.800781C0.601869 12.75 0.411103 12.671 0.270451 12.5303C0.129799 12.3897 0.0507813 12.1989 0.0507812 12C0.0507813 11.8011 0.129799 11.6103 0.270451 11.4697C0.411103 11.329 0.601869 11.25 0.800781 11.25H3.80078C3.99969 11.25 4.19046 11.329 4.33111 11.4697C4.47176 11.6103 4.55078 11.8011 4.55078 12ZM20.5363 3.5145C20.6769 3.65515 20.7559 3.84588 20.7559 4.04475C20.7559 4.24362 20.6769 4.43435 20.5363 4.575L18.4153 6.6975C18.3455 6.76713 18.2628 6.82235 18.1717 6.86C18.0806 6.89765 17.983 6.91699 17.8845 6.91692C17.6855 6.91678 17.4947 6.83758 17.354 6.69675C17.2844 6.62702 17.2292 6.54425 17.1915 6.45318C17.1539 6.36211 17.1345 6.26452 17.1346 6.16597C17.1348 5.96695 17.214 5.77613 17.3548 5.6355L19.4758 3.5145C19.6164 3.3739 19.8072 3.29491 20.006 3.29491C20.2049 3.29491 20.3956 3.3739 20.5363 3.5145ZM6.74678 17.304C6.88738 17.4446 6.96637 17.6354 6.96637 17.8342C6.96637 18.0331 6.88738 18.2239 6.74678 18.3645L4.62578 20.4855C4.48433 20.6221 4.29488 20.6977 4.09823 20.696C3.90158 20.6943 3.71347 20.6154 3.57442 20.4764C3.43536 20.3373 3.35648 20.1492 3.35478 19.9526C3.35307 19.7559 3.42866 19.5665 3.56528 19.425L5.68628 17.304C5.82693 17.1634 6.01766 17.0844 6.21653 17.0844C6.4154 17.0844 6.60614 17.1634 6.74678 17.304ZM20.5363 20.4855C20.3956 20.6261 20.2049 20.7051 20.006 20.7051C19.8072 20.7051 19.6164 20.6261 19.4758 20.4855L17.3548 18.3645C17.2182 18.223 17.1426 18.0336 17.1443 17.8369C17.146 17.6403 17.2249 17.4522 17.3639 17.3131C17.503 17.1741 17.6911 17.0952 17.8877 17.0935C18.0844 17.0918 18.2738 17.1674 18.4153 17.304L20.5363 19.425C20.6769 19.5656 20.7559 19.7564 20.7559 19.9552C20.7559 20.1541 20.6769 20.3449 20.5363 20.4855ZM6.74678 6.6975C6.60614 6.8381 6.4154 6.91709 6.21653 6.91709C6.01766 6.91709 5.82693 6.8381 5.68628 6.6975L3.56528 4.575C3.49365 4.50582 3.43651 4.42306 3.39721 4.33155C3.3579 4.24005 3.33721 4.14164 3.33634 4.04205C3.33548 3.94247 3.35445 3.84371 3.39216 3.75153C3.42988 3.65936 3.48557 3.57562 3.55598 3.5052C3.6264 3.43478 3.71014 3.37909 3.80232 3.34138C3.89449 3.30367 3.99325 3.2847 4.09283 3.28556C4.19242 3.28643 4.29083 3.30712 4.38233 3.34642C4.47384 3.38573 4.5566 3.44287 4.62578 3.5145L6.74678 5.6355C6.81663 5.70517 6.87204 5.78793 6.90985 5.87905C6.94766 5.97017 6.96712 6.06785 6.96712 6.1665C6.96712 6.26515 6.94766 6.36283 6.90985 6.45395C6.87204 6.54507 6.81663 6.62783 6.74678 6.6975Z" fill="black" stroke="white" stroke-width="2" mask="url(#path-1-inside-1_977:1934)"></path></svg>
                  </button>
                </div>
              </div>
              <button 
              onClick={()=>setNav(true)}
              type="button" className='relative z-50 flex h-10 w-10 items-center justify-center text-white lg:hidden'>
                <svg width="22" height="22" viewBox="0 0 22 22" className="fill-current"><path d="M2.75 3.66666H19.25V5.49999H2.75V3.66666ZM2.75 10.0833H19.25V11.9167H2.75V10.0833ZM2.75 16.5H19.25V18.3333H2.75V16.5Z"></path></svg>
              </button>
            </div>
          </div>
        </div>  
      </div>
      {nav&&
      <div className="z-50 top-0 left-0 w-screen h-screen bg-black/30 backdrop-blur-sm flex-col  transition-transform justify-center items-center">
        <div className='flex-col justify-between w-full h-full items-center content-center  transition-transform'>
        <a href="" className='relative z-50 my-9 hover:bg-slate-800 shadow-md ease-linear duration-300 transition-all hover:transform flex h-10 w-full p-5 text-pretty text-xl rounded-md items-center justify-center text-white lg:hidden'>Domaines</a>
          <a href="" className='relative z-50 my-9 hover:bg-slate-800 shadow-md ease-linear duration-300 transition-all hover:transform flex h-10 w-full p-5 text-pretty text-xl rounded-md items-center justify-center text-white lg:hidden'>A propos</a>
          <a href="" className='relative z-50 my-9 hover:bg-slate-800 shadow-md ease-linear duration-300 transition-all hover:transform flex h-10 w-full p-5 text-pretty text-xl rounded-md items-center justify-center text-white lg:hidden'>Produits</a>
          <a href="" className='relative z-50 my-9 hover:bg-slate-800 shadow-md ease-linear duration-300 transition-all hover:transform flex h-10 w-full p-5 text-pretty text-xl rounded-md items-center justify-center text-white lg:hidden'>Temoignages</a>
        </div>
      </div>
      ||
      <div className="z-50 hidden top-0 left-0 w-screen h-screen bg-black/30 backdrop-blur-sm transition-transform justify-center items-center">
        <div className='flex-col justify-between w-full h-full items-center content-center  transition-transform'>
          <a href="" className='relative z-50 my-9 hover:bg-slate-800 shadow-md ease-linear duration-300 transition-all hover:transform flex h-10 w-full p-5 text-pretty text-xl rounded-md items-center justify-center text-white lg:hidden'>Domaines</a>
          <a href="" className='relative z-50 my-9 hover:bg-slate-800 shadow-md ease-linear duration-300 transition-all hover:transform flex h-10 w-full p-5 text-pretty text-xl rounded-md items-center justify-center text-white lg:hidden'>A propos</a>
          <a href="" className='relative z-50 my-9 hover:bg-slate-800 shadow-md ease-linear duration-300 transition-all hover:transform flex h-10 w-full p-5 text-pretty text-xl rounded-md items-center justify-center text-white lg:hidden'>Produits</a>
          <a href="" className='relative z-50 my-9 hover:bg-slate-800 shadow-md ease-linear duration-300 transition-all hover:transform flex h-10 w-full p-5 text-pretty text-xl rounded-md items-center justify-center text-white lg:hidden'>Temoignages</a>
        </div>
      </div>
      }
      
    </header>
  )
}
