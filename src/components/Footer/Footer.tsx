import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <footer className='pt-14 sm:pt-20 lg:pt-[130px]'>
      <div className='px-4 xl:container'>
          <div className='-mx-4 flex flex-wrap'>
            <div className='w-full px-4 sm:w-1/2 md:w-5/12 lg:w-3/12 xl:w-3/12'>
              <div className='mb-20 max-w-[330px]'>
                <a href="" className='mb-6 inline-flex gap-2 items-center'>
                  <Image 
                  alt='Khorfus logo'
                  src={"/assets/khorfus-medium.png"}
                  width={50}
                  height={50}
                />
                <span className='text-3xl font-extrabold text-white'> Khorfus</span>
                </a>
                <p className='mb-10 text-md'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </p>
                <div className='flex items-center space-x-5'>
                  <a href="" className='text-dark-text hover:text-primary dark:hover:text-white'>
                    <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"></path></svg>
                  </a>
                  <a href="" className='text-dark-text hover:text-primary dark:hover:text-white'>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.9831 19.25L9.82094 13.3176L4.61058 19.25H2.40625L8.843 11.9233L2.40625 2.75H8.06572L11.9884 8.34127L16.9034 2.75H19.1077L12.9697 9.73737L19.6425 19.25H13.9831ZM16.4378 17.5775H14.9538L5.56249 4.42252H7.04674L10.808 9.6899L11.4584 10.6039L16.4378 17.5775Z" fill="currentColor"></path></svg>
                  </a>
                  <a href="" className='text-dark-text hover:text-primary dark:hover:text-white'>
                    <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M6.93994 5.00002C6.93968 5.53046 6.72871 6.03906 6.35345 6.41394C5.97819 6.78883 5.46938 6.99929 4.93894 6.99902C4.40851 6.99876 3.89991 6.78779 3.52502 6.41253C3.15014 6.03727 2.93968 5.52846 2.93994 4.99802C2.94021 4.46759 3.15117 3.95899 3.52644 3.5841C3.9017 3.20922 4.41051 2.99876 4.94094 2.99902C5.47137 2.99929 5.97998 3.21026 6.35486 3.58552C6.72975 3.96078 6.94021 4.46959 6.93994 5.00002ZM6.99994 8.48002H2.99994V21H6.99994V8.48002ZM13.3199 8.48002H9.33994V21H13.2799V14.43C13.2799 10.77 18.0499 10.43 18.0499 14.43V21H21.9999V13.07C21.9999 6.90002 14.9399 7.13002 13.2799 10.16L13.3199 8.48002Z"></path></svg>
                  </a>
                </div>
              </div>
            </div>
            <div className='w-1/2 px-4 md:w-3/12 lg:w-3/12 xl:w-2/12'>
              <div className='mb-20'>
                <h3 className='mb-9 font-heading text-2xl font-medium text-dark text-white'>Company</h3>
                <ul className='space-y-4'>
                  <li className='font-heading text-base text-dark-text hover:text-primary dark:hover:text-white'>Home</li>
                  <li className='font-heading text-base text-dark-text hover:text-primary dark:hover:text-white'>Products</li>
                  <li className='font-heading text-base text-dark-text hover:text-primary dark:hover:text-white'>Features</li>
                  <li className='font-heading text-base text-dark-text hover:text-primary dark:hover:text-white'>Team</li>
                </ul>
              </div>
            </div>
            <div className='w-1/2 px-4 md:w-3/12 lg:w-3/12 xl:w-2/12'>
              <div className='mb-20'>
                <h3 className='mb-9 font-heading text-2xl font-medium text-dark text-white'>Support</h3>
                <ul className='space-y-4'>
                  <li className='font-heading text-base text-dark-text hover:text-primary dark:hover:text-white'>Company</li>
                  <li className='font-heading text-base text-dark-text hover:text-primary dark:hover:text-white'>Actuality</li>
                  <li className='font-heading text-base text-dark-text hover:text-primary dark:hover:text-white'>Our Blog</li>
                  <li className='font-heading text-base text-dark-text hover:text-primary dark:hover:text-white'>Account</li>
                </ul>
              </div>
            </div>
            <div className='w-full px-4 sm:w-1/2 md:w-5/12 lg:w-3/12 xl:w-2/12'>
              <div className='mb-20'>
                  <h3 className='mb-9 font-heading text-2xl font-medium text-dark text-white'>Get In Touch</h3>
                  <div className='space-y-7'>
                    <div>
                      <p className='font-heading text-base text-dark-text'>
                        Contacter nous à ce numero
                      </p>
                      <a href="tel: +(237) 698076337" className='font-heading text-base text-dark  text-white hover:text-primary'>
                        +237 698076337
                      </a>
                    </div>
                    <div>
                      <p className='class="font-heading text-base text-dark-text"'>
                        Besoin d{"'"}un support en ligne ?
                      </p>
                      <a href="mailto:mbohoumounpouyvanlandry@gmail.com" className='font-heading text-base text-dark  text-white hover:text-primary'>
                        angos@khorfus.com
                      </a>
                    </div>
                  </div>
              </div>
            </div>
            <div className='w-full px-4 sm:w-1/2 md:w-5/12 lg:w-5/12 xl:w-3/12'>
              <div className='mb-20'>
                <h3 className='mb-9 font-heading text-2xl font-medium text-dark text-white'> Newsletter</h3>
                <p className='mb-6 text-lg'>Subscribe to receive future updates</p>
                <form action="" className='relative'>
                  <input 
                  type="email"
                  name='email'
                  placeholder='Email address' 
                  className='pladeholder-opacity-40 w-full rounded border py-3 pl-5 pr-12 text-base text-dark-text outline-none focus:border-primary border-transparent bg-[#2C3443]' 
                  />

                  <button className='absolute right-0 top-0 flex h-full w-12 items-center justify-center border-l text-dark-text hover:text-white border-[#1F2633]'>
                    <svg width="20" height="20" viewBox="0 0 20 20" className="fill-current "><path d="M3.1175 1.17367L18.5025 9.63533C18.5678 9.6713 18.6223 9.72414 18.6602 9.78834C18.6982 9.85255 18.7182 9.92576 18.7182 10.0003C18.7182 10.0749 18.6982 10.1481 18.6602 10.2123C18.6223 10.2765 18.5678 10.3294 18.5025 10.3653L3.1175 18.827C3.05406 18.8619 2.98262 18.8797 2.91023 18.8785C2.83783 18.8774 2.76698 18.8575 2.70465 18.8206C2.64232 18.7838 2.59066 18.7313 2.55478 18.6684C2.51889 18.6056 2.50001 18.5344 2.5 18.462V1.53867C2.50001 1.46626 2.51889 1.39511 2.55478 1.33222C2.59066 1.26934 2.64232 1.21689 2.70465 1.18005C2.76698 1.1432 2.83783 1.12324 2.91023 1.12212C2.98262 1.121 3.05406 1.13877 3.1175 1.17367ZM4.16667 10.8337V16.3478L15.7083 10.0003L4.16667 3.65283V9.167H8.33333V10.8337H4.16667Z"></path></svg>
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className='border-[#2E333D] md:border-t'>
            <div className='-mx-4 flex flex-wrap py-5 md:py-7'>
              <div className='w-full px-4 md:w-1/2 lg:w-2/3'>
                <div className='flex gap-3'>
                  <a href="" className='font-heading  hover:text-primary'>English</a>
                  <a href="" className='font-heading text-base text-dark-text hover:text-primary'>Privacy Policy</a>
                  <a href="" className='font-heading text-base text-dark-text hover:text-primary'>Support</a>
                </div>
              </div>
              <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
                <div>
                  <p className='text-center font-heading text-base text-dark-text lg:text-right'>
                    © 2024 Khorfus. All rights reserved.
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
    </footer>
  )
}
