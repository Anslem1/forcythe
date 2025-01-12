import Marquee from 'react-fast-marquee'
import companyProjects from '../../../utils/json/company-projects.json'
import Button from '../../../component/Button/Button'
import FadeInText from '../../../component/FadeinText/FadeinText'

const HeroIntro = () => {
  const heroHeader = 'We build products that shape a better future'
  const heroSubHeading =
    'We’re the architects of digital excellence across industries. We redefine business with cutting-edge digital strategies that invoke sector-wide transformation.'
  const subHeroIntro = 'Success in Motion – Our clients’ journey'

  return (
    <>
      <div className='section-padding'>
        <div className='w-full bg-white bg-opacity-10 p-5 py-8 md:p-8 lg:p-10 my-10 rounded-[2rem] sm:rounded-[3rem]'>
          <div className='max-w-[56rem]'>
            <div className='min-h-[180px]'>
              <h1 className='text-[3.5rem] sm:text-[4rem] lg:text-[5rem] font-normal leading-[1] mb-7 font-lexend'>
                <FadeInText
                  text={heroHeader}
                  highlightWords={['products']}
              
                />
              </h1>
            </div>
            <div className='mb-8 max-w-3xl'>
              <p className='text-gray-400 text-base md:text-lg mb-8 leading-7'>
                <FadeInText
                  text={heroSubHeading}
                  highlightWords={undefined}
                  delay={6000}
                  textSpeed={50}
                />
              </p>
            </div>
            <Button showPlay={true} text={'Visit Blog'} />
          </div>
        </div>
      </div>

      <div className='py-10'>
        <div className='min-h-[60px]'>
          <p className='text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-12 max-w-[90%] mx-auto text-center'>
            <FadeInText
              text={subHeroIntro}
              highlightWords={['Motion']}
              delay={3000}
          
            />
          </p>
        </div>
        <div className='flex flex-col gap-5'>
          {[false, true].map(direction => (
            <Marquee
              key={direction.toString()}
              direction={direction ? 'right' : 'left'}
            >
              <div className='flex'>
                {companyProjects.projects.map((src, index) => (
                  <img key={index} src={src} className='mx-4' />
                ))}
              </div>
            </Marquee>
          ))}
        </div>
      </div>
    </>
  )
}

export default HeroIntro
