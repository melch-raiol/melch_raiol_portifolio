import './App.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import About from '../../components/About'
import Projects from '../../components/Projects'
import Contacts from '../../components/Contacts'
import Home from '../../components/Home'


function App() {


  return (
    <div className='container-main'>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App
