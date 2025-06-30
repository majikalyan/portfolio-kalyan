import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
import { FaArrowRightLong } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";

const Header = () => {
    return (
        <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 '>
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}>
                <Image src={assets.profile_img} alt='' className='rounded-full w-32 mt-20'/>
            </motion.div>
            <motion.h3 initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }}
                className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-serif'>Hi! I'm Kalyan  <Image src={assets.hand_icon} alt='' className=' w-6' />
            </motion.h3>
            <motion.h1 initial={{ y: -30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}
                className='text-3xl sm:text-6xl lg:text-[66px] '>Frontend Web Developer 
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.7 }}
                className='max-w-2xl mx-auto '>I am a frontend developer from Kolkata with professional training in the relevant field.
            </motion.p>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <motion.a initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 1 }}
                    href="#contact" className='px-10 py-3 border border-white rounded-md bg-transparent text-white flex items-center gap-2 hover:bg-white hover:text-[#11001F] transition group duration-300 ease-in'>Contact me <FaArrowRightLong className='group-hover:translate-x-1/2 transition duration-300 ease-in' />
                </motion.a>
                <motion.a initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 1.2 }}
                    href="/sample-resume.pdf" download className='px-10 py-3 border rounded-md border-grey-500 flex items-center gap-2 text-black bg-white hover:bg-transparent hover:border-white hover:text-white transition duration-300 ease-in '>My resume 
                    <LuDownload  />
                </motion.a>
            </div>
        </div>
    )
}

export default Header