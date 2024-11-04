import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='mb-12 fixed z-10 bg-white w-full  max-sm:mx-auto bg-opacity-70'>
      <div className='flex justify-between w-12/13 mx-auto py-8 items-center max-sm:w-11/12'>
        <div><Image src='/img/nav-logo.png' alt='logo' width={212} height={212}/></div>
        <p className='inter-thin text-base tracking-widest subpixel-antialiased max-sm:font-medium max-sm:text-sm'><a href='#contact'>CONTACT</a></p>
      </div>
    </nav>
  )
}

export default Navbar;
