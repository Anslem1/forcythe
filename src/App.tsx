import './App.css'
import Navbar from './component/Navbar/Navbar'
import Footer from './Layout/Footer/Footer'
import Landing from './Layout/Landing/Landing'

function App () {
  return (
    <>
      <Navbar />
      <main className='w-full mt-[6.3rem] md:mt-[7.8rem] bg-primary-background text-light-grey'>
        <div className="md:min-h-screen bg-[url('/assets/images/header-background.svg')] bg-no-repeat bg-top">
          <Landing />
        </div>
        <Footer />
      </main>
      <div className='w-[60px] max-w-[60px] h-[60px] fixed bottom-[10px] right-[10px] rounded-full bg-[#0066cc] z-[9999]'>
        <div className='flex items-center justify-center h-full w-full cursor-pointer'>
          <img
            src='/public/assets/icons/message-solid.svg'
            alt=''
            className='w-[30px] h-[30px]'
          />
        </div>
      </div>
    </>
  )
}

export default App
