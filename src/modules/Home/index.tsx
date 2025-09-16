import dynamic from 'next/dynamic'
import React from 'react'

const Slider = dynamic(()=>import("./components/Slider"),{ssr:!!false,loading:()=><span>Loading...</span>})
const Home = () => {
  return (
    <div>
        <Slider/>
    </div>
  )
}

export default Home