import React from 'react'
import { motion } from 'framer-motion';

const Homescreen = () => {
  return (
    <motion.section className="px-12 max-sm:px-6 font-lineto"
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 2}}
    >
    {/*br tags included to give more spacing based on different devices */}
      <p className="max-sm:hidden"><br/><br/><br/><br /><br/></p>
      <p className="max-sm:visible sm:hidden"><br/><br/><br/></p>

        <p className="font-lineto text-3xl w-9/12 tracking-wide leading-10 font-normal text-pretty">Paris based studio specializing in production, publishing and artists representation. Studio Hiroshima is dedicated in bringing visionary projects to life and provides comprehensive support to artists in the arts and entertainment industry</p><br/>
        <section  id='contact' className="flex justify-between w-9/12 mt-11 text-lg max-sm:flex-col max-sm:gap-8 max-sm:mt-16">
          <div className="font-light font-lineto">
          <p className="text-xl tracking-wide mb-4 font-medium font-lineto">PARIS</p>
            <p className="home-text">39 Rue du Borrégo</p>
            <p className="home-text">75020 Paris</p>
            <p className="home-text">+33 6 70 35 26 76</p>
            <p className="home-text">hello@studiohiroshima.fr</p>
            <div className="mt-6">
              <p className="capitalize text-xl font-normal">Agent</p>
              <p className="capitalize text-2xl poppins-light tracking-wider underline  mt-2">
              <a href="https://www.linkedin.com/in/shivfr/?locale=en_US" target="_blank">
              Edwin Bes</a>
              </p>
            </div>
          </div>
          <div>
            <p className="text-xl tracking-wide mb-4 font-campton font-medium ">LINKEDIN</p>
            <p className="text-xl poppins-light">@studio-hiroshima</p>
          </div>
        </section>
        <br /><br /><br />
    </motion.section>
  )
}

export default Homescreen;
