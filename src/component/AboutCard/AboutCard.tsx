import { useEffect, useState } from 'react'
import Button from '../Button/Button'

interface AboutCardProps {
  about: {
    concepts: string
    intro: string
    text: string
    image: string
  }
  index: number
}

const AboutCard: React.FC<AboutCardProps> = ({ about }) => {
  const [fadeAboutText, setFadeAboutText] = useState<boolean[]>([]) // Array to track fade state of each word

  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = []




    timeouts.push(
      setTimeout(() => {
        setFadeAboutText(about.text.split(' ').map(() => true)) // Set fade state for each word to true
      }, 300) // Starts fading the testimony after the name
    )

    // Cleanup timeouts on unmount
    return () => timeouts.forEach(clearTimeout)
  }, [about])

  return (
    <>
      <div className=''>
        <div className=''>
          <p className='text-[1.8rem] sm:text-[2rem] font-[500] leading-8 sm:leading-8 mb-12'>
            <div className='text-[1.8rem] sm:text-[2rem] font-[500] leading-8 sm:leading-8 mb-12'>
              {about.intro.split(' ').map((word, i) => (
                <span
                  key={i}
                  style={{
                    opacity: fadeAboutText[i] ? 1 : 0,
                    transition: `opacity 0.5s ease-in-out ${i * 200}ms`
                  }}
                  className='inline-block'
                >
                  {word}
                  <span>&nbsp;</span>
                </span>
              ))}
            </div>
            <div className='text-gray-400 text-base md:text-lg mb-8 leading-7 w-[95%] md:w-[90%] '>
              {about.text.split(' ').map((word, i) => (
                <p
                  key={i}
                  style={{
                    opacity: fadeAboutText[i] ? 1 : 0,
                    transition: `opacity 0.5s ease-in-out ${i * 200}ms`
                  }}
                  className='inline-block font-light'
                >
                  {word}
                  <span>&nbsp;</span>
                </p>
              ))}
            </div>
            <Button  showPlay={true} text={'Book a call'}/>
          </p>
        </div>
      </div>
    </>
  )
}

export default AboutCard
