import './App.css'
import { Element } from 'react-scroll'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Testimonial from './pages/Testimonial'
import Contact from './pages/Contact'
import NavigationBar from './components/NavigationBar'
import TopScroll from './components/TopScroll'

function App() {
  return (
    <>
      <NavigationBar />

      <Element name='home'><Home /></Element>
      <Element name='about'><About /></Element>
      <Element name='skills'><Skills /></Element>
      <Element name='services'><Services /></Element>
      <Element name='portfolio'><Portfolio /></Element>
      <Testimonial />
      <Element name='contact'><Contact /></Element>

      <TopScroll />
    </>
  )
}

export default App