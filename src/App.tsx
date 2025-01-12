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
    </>
  )
}

export default App
