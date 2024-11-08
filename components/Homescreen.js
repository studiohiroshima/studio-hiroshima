import React from 'react'
import { motion } from 'framer-motion';

const Homescreen = () => {
  return (
    <motion.section className="w-11/12 mx-auto"
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 2}}
    >
    {/*br tags included to give more spacing based on different devices */}
      <p className="max-sm:hidden"><br/><br/><br/><br /></p>
      <p className="max-sm:visible sm:hidden mb-4"><br/><br/><br/></p>
      {/* <p className='max-md:visible md:hidden'><br/></p> */}

        <p className="inter-normal max-sm:text-xxl max-sm:leading-7 max-sm:w-12/13 max-sm:text-wrap text-3xl w-2/3 tracking-normal leading-10 xl:text-balance  lg:text-pretty sm:w-10/12 max-md:mt-2 lg:mt-3">Paris based studio specializing in production, publishing and artists representation. Studio Hiroshima is dedicated in bringing visionary projects to life and provides comprehensive support to artists in the arts and entertainment industry.</p>
        <section  id='contact' className="flex justify-between lg:w-9/12 xl:w-10/12 mt-16 text-lg flex-col max-sm:gap-8 max-sm:mt-8 max-lg:gap-10">
          <div className="">
          <p className="text-lg tracking-wide mb-4 roboto-light xl:text-lg">PARIS</p>
          <div className='space-y-2'>
            <p className="home-text">39 Rue du Borrégo</p>
            <p className="home-text ">75020</p>
            <p className="home-text">+33 6 70 35 26 76</p>
            <p className="text-xl subpixel-antialiased poppins-light">hello@studiohiroshima.fr</p></div>
            <div className="mt-10 space-y-2">
              <p className="text-lg tracking-wide mb-4 roboto-light xl:text-lg">AGENT</p>
              <p className="home-text underline underline-offset-2">
              <a href='https://www.linkedin.com/in/shivfr/?locale=en_US' target='_blank'>
              Edwin Bes
              </a>
              </p>
              
            </div>
          </div>
          <div className='mt-6'>
            <p className="text-lg tracking-wide mb-4 roboto-light xl:text-lg"><a target='_blank' href='https://www.instagram.com/studiohiroshima/'>INSTAGRAM</a></p>
          </div>
          <div className='mt-6'>
            <p className="text-lg tracking-wide mb-4 roboto-light xl:text-lg"><a target='_blank' href='https://www.linkedin.com/company/studio-hiroshima/'>LINKEDIN</a></p>
          </div>
        </section>
        <br /><br /><br />
    </motion.section>
  )
}

export default Homescreen;