import { useState, useEffect, useRef } from 'react'

interface FadeInTextProps {
  text: string
  highlightWords?: string[]
  delay?: number
  textSpeed?: number
}

const FadeInText = ({
  text,
  highlightWords = [],
  delay = 0,
  textSpeed = 200
}: FadeInTextProps) => {
  const [fadeIn, setFadeIn] = useState<boolean[]>([])
  const [isVisible, setIsVisible] = useState(false)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect() // Stop observing after animation starts
        }
      },
      { threshold: 0.1 } // Adjust as needed
    )

    if (textRef.current) {
      observer.observe(textRef.current)
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const timeouts = text.split(' ').map((_, i) =>
      setTimeout(() => {
        setFadeIn(prev => {
          const newState = [...prev]
          newState[i] = true
          return newState
        })
      }, i * textSpeed + delay)
    )
    return () => timeouts.forEach(clearTimeout)
  }, [text, delay, textSpeed, isVisible])

  return (
    <div ref={textRef}>
      {text.split(' ').map((word, i) => (
        <span
          key={i}
          style={{
            opacity: fadeIn[i] ? 1 : 0,
            transition: `opacity 0.5s ease-in-out ${i * textSpeed}ms`,
            color: highlightWords.some(highlight => word.includes(highlight))
              ? '#60A6E7'
              : undefined
          }}
          className='inline-block'
        >
          {word}
          <span>&nbsp;</span>
        </span>
      ))}
    </div>
  )
}

export default FadeInText
