import React from 'react'
import Cards from './components/Cards'
import Slider from './components/Slider'
import HeroUI from './components/HeroSection'
const Home = () => {
  return (
    <div >
        <Slider/>
        <Cards/>
        <HeroUI/>
    </div>
  )
}

export default Home