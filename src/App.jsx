import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Qualification from './Components/Qualification/Qualification'

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className='space'>
      <Hero/>
      <About/>
      <Qualification/>
      {/* <Services/> */}
      <Projects/>
      <Contact/>
      </div>
    </div>
  )
}

export default App
