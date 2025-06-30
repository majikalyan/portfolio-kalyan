import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Work = () => {
    return (
        <motion.div initial={{opacity:0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} 
         id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.h4 initial={{opacity:0,y:-20 }} whileInView={{ opacity: 1 ,y:0}} transition={{ duration: 0.5,delay:0.3 }}
            className='text-center mb-2 text-lg '>My Portfolio
            </motion.h4>
            <motion.h2 initial={{opacity:0,y:-20 }} whileInView={{ opacity: 1 ,y:0}} transition={{ duration: 0.5,delay:0.5 }} 
            className='text-center  text-5xl '>My latest works
            </motion.h2>
            <motion.p initial={{opacity:0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5,delay:0.7 }}
            className='text-center max-w-2xl mx-auto mt-5 mb-12 '>Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development
            </motion.p>

            <motion.div initial={{opacity:0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6,delay:0.9 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-black mb-20">
                {
                    workData.map((project, index) => (
                        <a target='_blank' href={project.url}>
                        <motion.div 
                        key={index} style={{ backgroundImage: `url(${project.bgImage})` }} className='aspect-square bg-no-repeat bg-cover bg-center rounded-md relative cursor-pointer group'>
                            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                                <div className="">
                                    <h2 className='font-semibold'>{project.title}</h2>
                                    <p className='text-small text-gray-700'>{project.description}</p>
                                </div>
                                <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-[#7969c9] transition'>
                                    <Image src={assets.send_icon} alt='' className='w-5' />
                                </div>
                            </div>
                        </motion.div>
                        </a>
                    ))
                }
            </motion.div>
            {/* <a href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-md px-10 py-3 mx-auto my-20 hover:bg-[#f0d9f8] duration-500'>Show more <Image src={assets.right_arrow_bold} alt='right-arrow' className='w-4' /></a> */}
        </motion.div>
    )
}

export default Work