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
    <nav className='mb-12 fixed w-full mx-auto bg-opacity-100 bg-whitish md:bg-transparent'>
      <div className='flex justify-between py-3 items-center max-md:items-start max-md:mt-2 mx-auto w-[92vw] max-md:w-[90vw] max-sm:w-[92vw]'>
        <div className='max-sm:w-4/6 sm:-ml-0 md:ml-2 max-sm:hidden'><Image src='/img/logo.png' alt='logo' width={254} height={254}
          priority quality={100} className='object-cover h-auto w-full'
        /></div>
        <div className='max-sm:visible sm:hidden'><Image src='/img/logo.png' alt='logo' width={225} height={225}
          priority quality={100} className='object-cover h-auto'
        /></div>
        <ul className='flex max-md:flex-col gap-10 max-md:items-end max-md:w-2/6 max-md:gap-0 max-md:justify-center max-md:-mt-55'>
        <li className='inter-thin text-base tracking-widest subpixel-antialiased visible md:hidden cursor-pointer max-sm:pt-2 max-md:pt-[15px] sm:text-[16px] max-md:text-[16.6px] max-sm:text-[14px]' onClick={handleClick}>{showMenu ? 'CLOSE' : 'MENU'}</li>

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

        <li className='inter-thin text-base tracking-widest subpixel-antialiased max-sm:font-medium max-sm:text-sm max-md:hidden md:visible pt-1 xl:text-[16.6px]'><a href='#contact'>CONTACT</a></li>
        <li className='inter-thin text-base xl:text-[16.6px] tracking-widest subpixel-antialiased max-sm:font-medium max-sm:text-sm max-md:hidden md:visible text-black-30 pt-1'>STUDIO HIROSHIMA</li>
        
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
