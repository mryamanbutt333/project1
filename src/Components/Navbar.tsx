import React from 'react'
import { LuMenu } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center'>

            <div className='text-xl font-large'><b><i>Subhan Wholesaler</i></b></div>
            <ul className='gap-10 lg:gap-16 hidden md:flex'>
                <li className='menulink'><a href='#hero'>Home</a></li>
                <li className='menulink'><a href='#about'>About</a></li>
                <li className='menulink'><a href='#medicine'>Medicine</a></li>
                <li className='menulink'><a href='#contact'>Contact</a></li>
        
                
            </ul>
            <LuMenu className='md:hidden' size={30}/>
        </div>
      
    </div>
  )
}

export default Navbar
