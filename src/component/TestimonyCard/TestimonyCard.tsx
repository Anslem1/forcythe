import React, { useEffect, useState, useRef } from 'react'

interface TestimonyCardProps {
  testimony: {
    name: string
    testimony: string
    representative: string
    representativeImage: string
    position: string
    logo: string
  }
  index: number
}

const TestimonyCard: React.FC<TestimonyCardProps> = ({ testimony, index }) => {
  const [fadeName, setFadeName] = useState(false)
  const [fadeTestimony, setFadeTestimony] = useState<boolean[]>([]) // Array to track fade state of each word
  const [fadeRepresentative, setFadeRepresentative] = useState(false)
  const [fadePosition, setFadePosition] = useState(false)

  // Create a reference for the card element
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Initialize IntersectionObserver
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // When the element is in view, start the animation
            const timeouts: ReturnType<typeof setTimeout>[] = []

            const testimonyAnimationDuration = 5000 // 5 seconds
            const halfwayPoint = testimonyAnimationDuration / 1 // Halfway point of the animation

            // Step 1: Fade in the name after a slight delay
            timeouts.push(
              setTimeout(() => {
                setFadeName(true)
              }, 100)
            )

            // Step 2: Fade in each word in the testimony after the name fades in
            timeouts.push(
              setTimeout(() => {
                setFadeTestimony(testimony.testimony.split(' ').map(() => true)) // Set fade state for each word to true
              }, 700) // Starts fading the testimony after the name
            )

            // Step 3: Trigger representative fade-in at halfway point of the testimony animation
            timeouts.push(
              setTimeout(() => {
                setFadeRepresentative(true) // Fade in the representative name
              }, halfwayPoint) // Trigger at halfway point of the animation
            )

            // Step 4: Fade in position slightly after the representative fades in
            timeouts.push(
              setTimeout(() => {
                setFadePosition(true) // Fade in the position after representative name fades in
              }, halfwayPoint + 200) // Trigger 200ms after representative fades in
            )

            // Cleanup timeouts on unmount
            return () => timeouts.forEach(clearTimeout)
          }
        })
      },
      {
        threshold: 0.5 // Trigger when 50% of the element is in view
      }
    )

    // Start observing the card element when it's rendered
    const currentCardRef = cardRef.current;
    if (currentCardRef) {
      observer.observe(currentCardRef)
    }

    // Cleanup observer on component unmount
    return () => {
      if (currentCardRef) {
        observer.unobserve(currentCardRef)
      }
    }
  }, [testimony])

  return (
    <div
      ref={cardRef}
      className='mt-5 w-full md:w-[70%] lg:w-[50%] rounded-[1.8rem] flex flex-col sm:flex-row p-5 sm:p-7 bg-[#0C2645] lg:relative'
      style={{ left: ['0%', '20%', '40%', '30%', '50%'][index] }}
    >
      <div className='sm:basis-[58%] pr-3'>
        {/* Fade in the name */}
        <p
          className={`text-base font-bold mb-4 transition-opacity duration-500 ${
            fadeName ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span>{testimony.name}</span>
        </p>

        {/* Fade in each word of the testimony individually */}
        <div className='text-base leading-7 mb-3'>
          {testimony.testimony.split(' ').map((word, i) => (
            <span
              key={i}
              style={{
                opacity: fadeTestimony[i] ? 1 : 0,
                transition: `opacity 0.5s ease-in-out ${i * 200}ms`
              }}
              className='inline-block'
            >
              {word}
              <span>&nbsp;</span>
            </span>
          ))}
        </div>

        {/* Fade in the representative */}
        <p>
          <span
            className={`text-[15px] font-semibold mb-4 transition-opacity duration-500 ${
              fadeRepresentative ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {testimony.representative}
            {', '}
          </span>
          {/* Fade in the position smoothly after the representative */}
          <span
            className={`text-[15px] font-semibold mb-4 transition-opacity duration-500 ${
              fadePosition ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {testimony.position}
          </span>
        </p>
      </div>

      {/* Right Section - Representative Image */}
      <div className='w-full h-[24rem] sm:w-auto sm:h-auto sm:basis-[42%] relative object-top mt-3 sm:mt-0'>
        <div className='bg-accent z-0 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse rounded-xl'></div>
        <img
          alt={testimony.representative}
          className='rounded-xl relative object-top'
          src={testimony.representativeImage}
          loading='lazy'
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            inset: '0px',
            objectFit: 'cover'
          }}
        />
      </div>
    </div>
  )
}

export default TestimonyCard
