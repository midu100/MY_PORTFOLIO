import React from 'react'
import Banner from '../components/Banner'
import About from './About'
import Services from '../pages/Services'
import Portfolio from './Portfolio'

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Portfolio />
    </div>
  )
}

export default Home