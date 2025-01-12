import { useState } from 'react'

const FooterContact = () => {
  const images = [
    '/src/assets/icons/socials/facebook.svg',
    '/src/assets/icons/socials/instagram.svg',
    '/src/assets/icons/socials/x.svg',
    '/src/assets/icons/socials/linkedin.svg',
    '/src/assets/icons/socials/youtube.svg',
    '/src/assets/icons/socials/Icon.svg'
  ]

  const footerText = [
    'About Us',
    'Services',
    'Portfolio',
    'Studio',
    'Foundations',
    'Careers',
    'Blog'
  ]

  const [agree, setAgree] = useState(false)
  return (
    <>
      <div className='section-padding py-10 bg-[#071626]'>
        <div className='lg:grid lg:grid-cols-3 my-10'>
          <div className='max-w-lg mb-10 lg:mb-0'>
            <div className='w-full grid grid-cols-4'>
              <input
                type='text'
                className='py-3 col-span-3 bg-transparent outline-none border border-white rounded-s-full px-4 text-sm placeholder:text-[#79767D]'
              />
              <button className='py-3 h-full bg-white text-black hover:bg-[#064386] hover:text-white custom-animate rounded-e-full text-sm font-medium border border-l-0 border-white'>
                Subscribe
              </button>
            </div>
            <div className='flex gap-3 mt-5 items-center'>
              <div className='w-5 h-5 border-2 rounded-full bg-transparent border-white cursor-pointer flex items-center justify-center'>
                <div
                  onClick={() => setAgree(prev => !prev)}
                  className={`${agree && ' bg-white'} rounded-full w-2 h-2`}
                ></div>
              </div>
              <label htmlFor=''>
                I agree to receive other notifications from Forcythe
              </label>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:col-span-2 gap-10 md:gap-0'>
            <div className='lg:pl-14 md:col-span-2 md:pr-10'>
              <img
                src='/src/assets/logo/forcythe-logo-white.svg'
                alt='forcythe logo'
                className='mb-5 md:mb-8'
              />
              <p className='text-base text-[#AEA9B1] leadin font-normal'>
                We are the growth company for businesses looking to scale. We
                are dedicated to transforming businesses with bespoke digital
                solutions that drive growth.
              </p>
              <div className='mt-10 hidden md:flex items-center gap-2'>
                {images.map((image, index) => (
                  <div className='w-9 h-9 cursor-pointer rounded-full border-[1px] border-accent flex justify-center items-center'>
                    <img
                      key={index}
                      src={image}
                      width={20}
                      height={20}
                      className=''
                      loading='lazy'
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className='lg:pl-10'>
              <h3 className='mb-8 text-2xl font-bold'>Company</h3>
              <ul className='flex flex-col gap-2'>
                {footerText.map(text => (
                  <li className='text-base text-[#B3D0F2] font-light'>
                    {text}
                  </li>
                ))}
              </ul>
              <div className='mt-10 flex md:hidden items-center gap-2 w-fit mx-auto'>
                {images.map((image, index) => (
                  <div className='w-9 h-9 cursor-pointer rounded-full border-[1px] border-accent flex justify-center items-center'>
                    <img
                      key={index}
                      src={image}
                      width={20}
                      height={20}
                      className=''
                      loading='lazy'
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='copyright border-t-[1px] border-accent mb-10'>
          <p className='text-accent2 text-sm mt-5 text-center md:text-left'>
            Copyright © 2024 Forcythe. All rights reserved.
          </p>
        </div>
      </div>
    </>
  )
}

export default FooterContact
