import Header from './Component/1- Header/Header'
import About from './Component/2- About/About'
import Project from './Component/3- Project/Project'
import Footer from './Component/5- footer/Footer'
import Contact from './Component/4- Contact/Contact'
import ScrollButton from './Component/ScrollButton/ScrollingButton'



function App() {

  return (
    <div className='container'>


      <ScrollButton />

      <Header />

      <About />
      <div className='divider' />

      <Project />
      <div className='divider' />

      <Contact />
      <div className='divider end' />

      <Footer />
    </div>
  )
}

export default App
