import { useState } from 'react'
import Button from '../Button/Button'
import './Navbar.css'

const Navbar = () => {
  const [showHamBurgerMenu, setShowHamBurgerMenu] = useState(false)

  const hamBurdgerText = [
    'About',
    'Service',
    'Portfolio',
    'Studio',
    'Foundation',
    'Careers',
    'Blog'
  ]

  return (
    <>
      {showHamBurgerMenu && (
        <div
          className='fixed inset-0 bg-black opacity-0 w-[100%] h-[100%] z-10'
          onClick={() => setShowHamBurgerMenu(false)}
        />
      )}
      <nav className='section-padding flex fixed w-full top-0 backdrop-blur-lg backdrop-filter z-50 left-0 py-[1.8rem] justify-between gap-10 items-center'>
        <div className='flex justify-between w-full'>
          <div className='flex gap-20 items-center text-base'>
            <img
              alt='Forcythe logo'
              width='150'
              height='10'
              decoding='async'
              data-nimg='1'
              className='w-28 sm:w-32 md:w-auto'
              src='/public/assets/logo/forcythe-logo-white.svg'
            />
            <div className='hidden md:flex text-white items-center gap-4 text-base font-light cursor-pointer'>
              <p className='cursor-pointer'>About</p>
              <p className='cursor-pointer'>Service</p>
              <p className='cursor-pointer'>Portfolio</p>
              <p className='cursor-pointer'>Studio</p>
              <p className='cursor-pointer'>Foundation</p>
            </div>
          </div>
          <div className='hidden md:block'>
            <Button showPlay={false} text={'Book a call'} />
          </div>
          <div
            className='menuBtn bg-white bg-opacity-10 rounded-md p-3 md:hidden cursor-pointer'
            onClick={() => setShowHamBurgerMenu(prev => !prev)}
          >
            <img
              src='/public/assets/icons/menu.svg'
              alt=''
              width={18}
              height={18}
              color='transparent'
            />
          </div>
        </div>
        {showHamBurgerMenu && (
          <>
            <div className='flex border-0 transition duration-500 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone z-[999999999] bg-black w-60 rounded-[2rem] fixed md:hidden right-5 top-28'>
              <div className='text-white z-10 bg-transparent rounded-[inherit] w-full'>
                <div
                  className='w-full p-5 py-8 rounded-[2rem]'
                  style={{
                    background:
                      'linear-gradient(0deg, rgba(7, 22, 38, 0) 32%, rgb(7, 22, 38) 85%)'
                  }}
                >
                  {hamBurdgerText.map(text => (
                    <li className='w-full py-2.5 list-none'>{text}</li>
                  ))}
                </div>
              </div>
              <div
                className='flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]'
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  background:
                    'radial-gradient(circle, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)',
                  backgroundSize: '200% 200%',
                  animation: 'rotateGradient 4s linear infinite'
                }}
              ></div>
              <div className='bg-black absolute z-1 flex-none inset-[2px] rounded-[inherit]'></div>
            </div>
          </>
        )}
      </nav>
    </>
  )
}

export default Navbar
