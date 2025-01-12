import { useState, useRef, useEffect } from 'react'
import testimonies from '../../../utils/json/company-testimony.json'
import TestimonyCard from '../../../component/TestimonyCard/TestimonyCard'
import FadeInText from '../../../component/FadeinText/FadeinText'

const Testimonies = () => {
  const [selectedTestimony, setSelectedTestimony] = useState<number | null>(0)
  const [animationFinished, setAnimationFinished] = useState(false) // New state to track if animation is done
  const logosRef = useRef<(HTMLDivElement | null)[]>([])
  const testimonyHeader =
    'Discover the transformative stories of startups that scaled new heights with us'

  const handleLogoClick = (i: number) => {
    setSelectedTestimony(i)
    setAnimationFinished(false) // Reset animation state on new selection
  }

  useEffect(() => {
    // Automatically switch testimony every 10 seconds but only after animation is finished
    const interval = setInterval(() => {
      if (animationFinished) {
        setSelectedTestimony(prevIndex => {
          const nextIndex = (prevIndex! + 1) % testimonies.companies.length
          return nextIndex
        })
        setAnimationFinished(false) // Reset animation state after switching
      }
    }, 12000) // 12000ms = 12 seconds to allow animation time and delay before switching

    return () => clearInterval(interval)
  }, [animationFinished])

  return (
    <div className=''>
      <div className=''>
        <p className='text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3.5rem] mb-12 max-w-4xl mx-auto text-center'>
          <div>
            <FadeInText text={testimonyHeader} highlightWords={['stories']} />
          </div>
        </p>
      </div>

      {/* Logos container */}
      <div className='w-full overflow-x-scroll scrollbar-hidden'>
        <div className='w-full border-[1px] border-[#06438C] rounded-full grid grid-cols-5 min-w-[750px] relative'>
          {testimonies.companies.map((testimony, i) => (
            <div
              key={i}
              className={`w-full p-[1.1rem] cursor-pointer transition-all duration-300 flex items-center justify-center
                ${selectedTestimony === i && 'bg-secondary-background'}
                ${testimony.name.includes('Starks') && 'rounded-s-full'} 
                ${testimony.name.includes('Beaupreneur') && 'rounded-e-full'}`}
              onClick={() => handleLogoClick(i)}
              ref={el => (logosRef.current[i] = el)}
            >
              <div className='w-fit h-full col mx-auto gap-1.5 text-white text-[17px] font-medium min-w-fit flex items-center justify-center'>
                <img
                  src={testimony.logo}
                  alt=''
                  className={`${testimony.name === 'Iwaria' && 'w-20'} ${
                    testimony.name === 'Beaupreneur' && 'w-36'
                  }`}
                />
                {testimony.name.includes('Starks') && <>Stark </>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cards container */}
      <div className='relative'>
        {selectedTestimony !== null && (
          <div
            className='w-full'
            style={{
              right: 0,
              transform: 'translateY(10px)',
              zIndex: 10
            }}
          >
            <TestimonyCard
              key={selectedTestimony}
              testimony={testimonies.companies[selectedTestimony]}
              index={selectedTestimony}
              setAnimationFinished={setAnimationFinished} // Pass down the function to notify when animation finishes
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Testimonies
