import dynamic from 'next/dynamic'
import React from 'react'
import Cards from './components/Cards'

const Slider = dynamic(()=>import("./components/Slider"),{ssr:!!false,loading:()=><span>Loading...</span>})
const Home = () => {
  return (
    <div >
        <Slider/>
        <Cards/>
    </div>
  )
}

export default Home