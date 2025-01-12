import B2bInfo from '../../../utils/json/B2B-info.json'
import FadeInText from '../../../component/FadeinText/FadeinText'

const B2B = () => {
  const b2bIntro = 'Your best call for B2B/B2C product innovation'

  return (
    <>
      <div className='text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-10 text-accent2 text-center text-[#B3D0F2]'>
        <FadeInText text={b2bIntro} highlightWords={undefined} />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-8'>
        {B2bInfo.B2B.map(b2b => (
          <div className='relative flex border-0 transition duration-500 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit rounded-2xl text-left'>
            <div className='w-auto text-white z-10 bg-transparent rounded-[inherit]'>
              <div className='w-full bg-[#030516] rounded-2xl p-8 sm:p-10 hover:shadow-gray-400 custom-animate'>
                <div className='w-fit p-2 bg-[#60A6E7] bg-opacity-60 rounded-md mb-5'>
                  <img src={b2b.icon} alt='' width={30} height={30} />
                </div>
                <h4 className='text-2xl font-medium mb-5'>{b2b.intro}</h4>
                <div className='mb-0 text-gray-400 text-[17.5px]'>
                  <FadeInText text={b2b.text} highlightWords={undefined} textSpeed={50} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default B2B
