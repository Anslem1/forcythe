import Button from '../../../component/Button/Button'
import blogs from '../../../utils/json/blog.json'

const Blog = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row md:justify-between md:items-center mb-12'>
        <p className='text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-6 sm:mb-4 md:mb-0'>
          Read our articles, news and product blog
        </p>
        <Button showPlay={true} text={'Visit Blog'} />
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12'>
        {blogs.blogs.map((blog, index) => (
          <>
            <div className='w-full pb-5 rounded-[1.3rem] relative overflow-hidden cursor-pointer group hover:shadow-sm hover:shadow-accent transition-all duration-500' key={index}>
              <div className='h-60 sm:h-56 relative mb-6'>
                <div className='bg-accent z-0 w-full h-full absolute top-0 left-0 bg-opacity-10 rounded-[1.3rem] animate-pulse'></div>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className='w-full h-full rounded-[1.3rem] transition-transform duration-300 transform group-hover:scale-105'
                  style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    inset: '0px',
                    objectFit: 'cover',
                    color: 'transparent'
                  }}
                />
              </div>
              <div className='pl-5 relative before:absolute before:w-[1px] before:h-[90%] before:bg-white before:left-0 before:top-[50%] before:-translate-y-[50%] group-hover:translate-x-4 custom-animate'>
                <p className='text-lg font-semibold mb-1'>Blog</p>
                <div className='text-base text-gray-400 flex items-center mb-6'>
                  <span>{blog.blogger}</span>
                  <div className='h-2 w-2 rounded-full bg-white mx-[6px] '></div>
                  <span>{blog.time}</span>
                </div>
                <h6 className='text-xl md:text-2xl font-semibold line-clamp-2 text-white'>
                  {blog.title}
                </h6>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  )
}

export default Blog
