import { useEffect, useState } from 'react'
import Button from '../../../component/Button/Button'

const BookACall = () => {
  const bookACallIntro =
    'Ready to Scale? Join successful brands that chose us as their growth accelerator'
  const [fadebookACallText, setFadeBookACallText] = useState<boolean[]>([])

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = []
    timeouts.push(
      setTimeout(() => {
        setFadeBookACallText(bookACallIntro.split(' ').map(() => true))
      })
    )
    return () => timeouts.forEach(clearTimeout)
  }, [bookACallIntro])

  return (
    <div
      className='section-padding py-10 text-center bg-opacity-0'
      style={{
        background:
          'linear-gradient(0deg, rgb(7, 22, 38) 20%, rgb(3, 5, 22) 69%)'
      }}
    >
      <div className='max-w-[45rem] mx-auto flex flex-col items-center'>
        <div className='text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-6 font-light '>
          {bookACallIntro.split(' ').map((word, i) => (
            <span
              key={i}
              style={{
                opacity: fadebookACallText[i] ? 1 : 0,
                transition: `opacity 0.5s ease-in-out ${i * 200}ms`,
                color: ['Ready', 'to', 'Scale?', 'growth'].includes(word)
                  ? '#60A6E7'
                  : ''
              }}
              className='inline-block'
            >
  
                {word}
             
              <span>&nbsp;</span>
            </span>
          ))}
        </div>
        <Button showPlay={false} text={'Book a Call'} />
      </div>
    </div>
  )
}

export default BookACall
