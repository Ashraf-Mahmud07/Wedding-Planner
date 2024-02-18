import './App.css'
import Footer from './Components/Footer/Footer'
import BannerVideo from './Components/Header/BannerVideo'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'

function App() {

  return (
    <div className='bg-[#F2F2F2]'>
      <Header />
      <BannerVideo />
      <Main />
      <div className='w-[1400px] mx-auto bg-[#F2F2F2]'>
        <Footer />
      </div>
    </div>
  )
}

export default App
