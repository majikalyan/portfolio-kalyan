import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='mt-20'>
            <div className="text-center">
                <Image src={assets.logo_dark} alt='logo' className='w-36 mx-auto mb-2' />
                <div className='w-max flex items-center gap-2 mx-auto'>
                    <Image src={assets.mail_icon_dark} alt='logo' className='w-6 ' />
                    kalyanmaji86@gmail.com
                </div>
            </div>
            <div className='text-center sm:flex items-center justify-between border-t border-gray-500 mx-[10%] mt-12 py-6'>
                <p>©2025 Kalyan Kumar Maji.All rights reserved.</p>
                <ul className='flex items-center gap-6  justify-center mt-4 sm:mt-0'>
                    <li className='hover:text-[#7969c9] transition duration-200 ease-in'><a target='_blank' href="https://github.com/majikalyan">Github</a></li>
                    <li className='hover:text-[#7969c9] transition duration-200 ease-in'><a target='_blank' href="https://www.linkedin.com/in/kalyanmaji/">Linkedin</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer