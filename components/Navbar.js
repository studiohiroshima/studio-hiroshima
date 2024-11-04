import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='shadow-sm mb-12 fixed z-10 bg-white w-full bg-opacity-70'>
      <div className='flex justify-between w-12/13 mx-auto py-8 items-center'>
        <div><Image src='/img/nav-logo.png' alt='logo' width={250} height={250}/></div>
        <p className='font-lineto tracking-wider text-lg max-sm:font-medium font-semibold max-sm:text-sm'><a href='#contact'>CONTACT</a></p>
      </div>
    </nav>
  )
}

export default Navbar;
