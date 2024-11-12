import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/projec-bg.webp)] bg-left bg-cover' // Tailwind for background size
    style={{backgroundSize: "35%", backgroundPositionY: "center 100px top 100px"}}>
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[100px] sm:text-[130px] font-bold leading-tight flex justify-center items-center'>
            <div>
                <p><i>HAMDARD</i></p>
                <p><i>WHOLESALER</i></p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
