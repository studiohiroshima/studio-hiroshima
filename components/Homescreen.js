import React from 'react'
import { motion } from 'framer-motion';

const Homescreen = () => {
  return (
    <motion.section className="sm:px-6 lg:px-10 max-sm:px-4 lg:w-2/3 xl:w-3/4"
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 2}}
    >
    {/*br tags included to give more spacing based on different devices */}
      <p className="max-sm:hidden"><br/><br/><br/><br /></p>
      <p className="max-sm:visible sm:hidden mb-4"><br/><br/><br/></p>
      <p className='max-md:visible md:hidden'><br/></p>

        <p className="inter-normal max-sm:text-xxl max-sm:leading-7 max-sm:w-12/13 max-sm:text-wrap text-3xl w-2/3 tracking-normal leading-10 text-balance lg:text-pretty sm:w-10/12 max-md:mt-2 lg:text-justify lg:mt-3">Paris based studio specializing in production, publishing and artists representation. Studio Hiroshima is dedicated in bringing visionary projects to life and provides comprehensive support to artists in the arts and entertainment industry</p>
        <section  id='contact' className="flex justify-between lg:w-9/12 xl:w-10/12 mt-11 text-lg max-lg:flex-col max-sm:gap-8 max-sm:mt-8 max-lg:gap-10">
          <div className="">
          <p className="text-lg tracking-wide mb-4 roboto-light xl:text-base xl:font-normal max-sm:font-normal">PARIS</p>
            <p className="home-text xl:font-normal max-sm:font-normal">39 Rue du Borrégo</p>
            <p className="home-text xl:font-normal max-sm:font-normal">75020 Paris</p>
            <p className="home-text xl:font-normal max-sm:font-normal">+33 6 70 35 26 76</p>
            <p className="home-text xl:font-normal max-sm:font-normal">hello@studiohiroshima.fr</p>
            <div className="mt-6">
              <p className="max-sm:text-lg text-xl roboto-light xl:text-base xl:font-normal max-sm:font-normal">AGENT</p>
              <p className="capitalize text-base roboto-regular tracking-wider underline underline-offset-2 max-sm:mt-1 mt-2 xl:text-lg xl:font-medium max-sm:font-normal">
              <a href="https://www.linkedin.com/in/shivfr/?locale=en_US" target="_blank">
              Edwin Bes</a>
              </p>
            </div>
          </div>
          <div>
            <p className="max-sm:text-base text-xl tracking-widest max-sm:mb-1 mb-4 roboto-light max-sm:text-balance xl:text-base xl:font-normal max-sm:font-normal">LINKEDIN</p>
            <p className="home-text xl:font-normal max-sm:font-normal"><a href='https://www.linkedin.com/company/studio-hiroshima/' target='_blank'>@studio-hiroshima</a></p>
          </div>
        </section>
        <br /><br /><br />
    </motion.section>
  )
}

export default Homescreen;
