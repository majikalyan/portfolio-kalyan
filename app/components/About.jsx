import { assets, infoList } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = () => {
    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}
            id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.h4 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg '>Introduction
            </motion.h4>
            <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center  text-5xl '>About me
            </motion.h2>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}
                className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}
                    className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={assets.user_image} alt='user' className='w-full  rounded-3xl ' />
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex-1">
                    <p className='mb-10 max-w-2xl'>Dynamic and detail-oriented Front-end Developer with a educational background in Physics and extensive experience in web technologies including HTML, CSS,JavaScript,TypeScript and modern frameworks like React.js,Next.js etc.  </p>
                    <motion.ul initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1 }}
                        className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {
                            infoList.map(({ icon, iconDark, title, description }, index) => (
                                <motion.li whileInView={{ scale: 1.05 }}
                                    key={index} className='border-[0.5px] border-white rounded-md p-6 cursor-pointer 
                                hover:bg-[#7969c9]/50 hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#fff]'>
                                    <Image src={iconDark} alt='title' className='w-7 mt-3' />
                                    <h3 className=' font-semibold my-4'>{title}</h3>
                                    <p className='text-sm '>{description}</p>
                                </motion.li >
                            ))
                        }
                    </motion.ul>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default About