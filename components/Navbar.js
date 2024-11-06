"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false)
  const handleClick = (e) => {
    e.preventDefault()
    setShowMenu(!showMenu)
  }
  return (
    <nav className='mb-12 fixed z-10 w-full  max-sm:mx-auto bg-opacity-100 bg-whitish'>
      <div className='flex justify-between w-12/13 mx-auto py-8 items-center max-sm:w-11/12 max-md:items-start max-md:mt-2'>
        <div className='max-sm:w-4/6'><Image src='/img/nav-logo.png' alt='logo' width={255} height={255}
          priority className='object-cover w-full h-auto'
        /></div>
        <ul className='flex max-md:flex-col gap-10 max-md:items-end max-md:w-2/6 max-md:gap-0 max-md:justify-center max-md:-mt-55'>
        <li className='inter-thin text-base tracking-widest subpixel-antialiased  max-sm:text-xv visible md:hidden cursor-pointer' onClick={handleClick}>{showMenu ? 'CLOSE' : 'MENU'}</li>

    {/* Mobile Device*/}
        {showMenu &&
        <motion.ul
        initial={{opacity: 0, y: -1000}}
        animate={{y: 0}}
        transition={{delay: 0, delayChildren:0.0001, ease: "easeInOut", duration: 0.02, type: 'spring', mass: 0.2}}
        whileInView={{opacity: 1}}
        exit={{opacity: 0}}

        className='flex flex-col gap-8 mt-8 max-md:items-end max-md:visible md:hidden max-md:w-fit'>
        <li className='inter-thin text-base tracking-widest subpixel-antialiased  max-sm:text-xv text-black-30 text-end'>STUDIO HIROSHIMA</li>
        <li className='inter-thin text-base tracking-widest subpixel-antialiased  max-sm:text-xv '><a href='#contact'>CONTACT</a></li>
        </motion.ul>
        }
    {/* Mobile Device*/}

        <li className='inter-thin text-base tracking-widest subpixel-antialiased max-sm:font-medium max-sm:text-sm max-md:hidden md:visible'><a href='#contact'>CONTACT</a></li>
        <li className='inter-thin text-base tracking-widest subpixel-antialiased max-sm:font-medium max-sm:text-sm max-md:hidden md:visible text-black-30'>STUDIO HIROSHIMA</li>
        
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
