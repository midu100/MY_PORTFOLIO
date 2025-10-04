import React, { useRef } from 'react'
import Banner from '../components/Banner'
import About from './About'
import Services from '../pages/Services'
import Portfolio from './Portfolio'
import Contact from './Contact'


const Home = () => {


  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default Home