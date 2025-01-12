import { useState, useEffect } from 'react'
import achievementInfo from '../../../utils/json/achievements.json'
import FadeInText from '../../../component/FadeinText/FadeinText'

const Achievements = () => {
  const achievementIntro =
    'We build solutions that help businesses of all sizes to scale'

  const [currentNumbers, setCurrentNumbers] = useState<number[]>(
    new Array(achievementInfo.achievements.length).fill(0)
  ) // State to store the animated numbers for each achievement

  useEffect(() => {
    // Find the maximum number to determine the total duration for animation

    // Set a total duration for the animation (in milliseconds)
    const totalDuration = 2000 // Total time for the animation (2 seconds)

    // Set the interval duration based on the largest number

    // Set the intervals for each achievement number to increment
    const intervals: ReturnType<typeof setTimeout>[] = []

    achievementInfo.achievements.forEach((achievement, index) => {
      const targetNumber = achievement.number

      // Determine how many steps this number should take to finish in totalDuration
      const steps = targetNumber
      const stepDuration = totalDuration / steps

      const intervalId = setInterval(() => {
        setCurrentNumbers(prevNumbers => {
          const newNumbers = [...prevNumbers]
          if (newNumbers[index] < targetNumber) {
            newNumbers[index] += 1
          } else {
            clearInterval(intervalId) // Stop the interval once the target number is reached
          }
          return newNumbers
        })
      }, stepDuration) // Speed up or slow down based on the target number

      intervals.push(intervalId)
    })

    // Cleanup intervals on unmount
    return () => {
      intervals.forEach(clearInterval)
    }
  }, []) // This effect only runs once on component mount

  return (
    <div className="max-w-[52rem] mx-auto bg-[url('/assets/images/arc.svg')] lg:bg-[url('/assets/images/arc-L.svg')] bg-cover md:bg-contain lg:bg-contain bg-top bg-no-repeat">
      <div className='pt-20 sm:pt-40 lg:pt-60 pb-10 md:pb-14 lg:pb-20 max-w-xl mx-auto text-center px-5'>
        <div className='mb-14 lg:mb-20 max-w-[19rem] md:max-w-md mx-auto'>
          <div>
            <p className='text-xl md:text-2xl lg:text-3xl font-medium'>
              <FadeInText
                text={achievementIntro}
                highlightWords={['scale', 'businesses']}
              />
            </p>
          </div>
        </div>

        {/* Render dynamic achievements */}
        <div className='flex justify-evenly sm:justify-between items-center gap-3'>
          {achievementInfo.achievements.map((achievement, index) => (
            <div key={index} className='flex flex-col text-left w-fit h-fit'>
              <div className='text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-accent font-medium'>
                {currentNumbers[index]}+
              </div>
              <span className='text-[15px] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden text-ellipsis'>
                {achievement.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Achievements
