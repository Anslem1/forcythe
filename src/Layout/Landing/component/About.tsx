import { useState, useRef } from 'react'
import aboutWork from '../../../utils/json/about-our-work.json'
import AboutCard from '../../../component/AboutCard/AboutCard'
import FadeInText from '../../../component/FadeinText/FadeinText'

const About = () => {
  const [selectedAbout, setSelectedAbout] = useState<number | null>(0)
  const aboutRef = useRef<(HTMLDivElement | null)[]>([])

  const handleAboutClick = (i: number) => {
    setSelectedAbout(i)
  }

  const aboutText =
    'From Spark to Spotlight: we take you every step of the way to success.'

  return (
    <>
      <div className='mb-12 xl:mb-0 max-w-[55rem]'>
        <div className=''>
          <p className='text-[2rem] w-fit leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3rem]'>
            <FadeInText
              text={aboutText}
              highlightWords={['Sparks', 'Spotlight']}
            />
          </p>
        </div>
      </div>
      <div className='flex lg:items-center flex-col md:flex-row'>
        <div className='md:flex md:flex-col'>
          <div className='md:pr-10'>
            <div className='border-2 border-accent2 mb-12 rounded-full grid gap-1 grid-cols-4 p-3.5'>
              {aboutWork.about.map((work, i) => (
                <>
                  <div>
                    <div
                      className={`overflow-hidden px-2 md:px-2.5 py-3 md:py-3.5 rounded-full text-center text-base font-medium cursor-pointer transition-all duration-300 bg-transparent    
                      ${selectedAbout === i && 'bg-[#B3D0F2]'}
                      ${selectedAbout === i && 'text-black'}
                      `}
                      onClick={() => handleAboutClick(i)}
                      ref={el => (aboutRef.current[i] = el)}
                    >
                      {work.concepts}
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className='flex items-center'>
            {selectedAbout !== null && (
              <AboutCard
                about={aboutWork.about[selectedAbout]}
                index={selectedAbout}
                key={selectedAbout}
              />
            )}
          </div>
        </div>
        {selectedAbout !== null && (
          <div className='basis-1/2 relative flex justify-start md:justify-end mt-6 md:mt-0'>
            <img
              src={aboutWork.about[selectedAbout].image}
              className='w-full h-[350px] md:w-[95%] md:h-[95%] lg:w-[90%] lg:h-[426px]'
              width={200}
              height={200}
            />
          </div>
        )}
      </div>
    </>
  )
}

export default About
