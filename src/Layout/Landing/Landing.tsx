import About from './component/About'
import Achievements from './component/Achievements'
import B2B from './component/B2B'
import Blog from './component/Blog'
import HeroIntro from './component/HeroIntro'
import Testimonies from './component/Testimonies'

const Landing = () => {
  return (
    <div className=''>
      <div className=''>
        <HeroIntro />
      </div>
      <div className='section-padding py-10'>
        <Testimonies />
      </div>
      <div className='section-padding py-20'>
        <About />
      </div>
      <div
        className='section-padding py-14 '
        style={{
          background:
            'linear-gradient(0deg, rgb(12, 38, 69) 20%, rgb(3, 5, 22) 70%)'
        }}
      >
        <B2B />
      </div>
      <div
        className='py-14 md:py-20 xl:py-28'
        style={{
          background: 'linear-gradient(rgb(12, 38, 69) 20%, rgb(3, 5, 22) 60%)'
        }}
      >
        <Achievements />
      </div>
      <div className='section-margin my-10 lg:mb-24'>
        <Blog />
      </div>
    </div>
  )
}

export default Landing
