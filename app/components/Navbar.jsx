import { assets } from '@/assets/assets'
import { px } from 'motion';
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { FiArrowUpRight } from "react-icons/fi";

const Navbar = () => {
    const [isScroll, setIsScroll] = useState(false)
    const sideMenuRef = useRef();
    const openMenu = () => {
        sideMenuRef.current.style.transform = "translateX(-16rem)"
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = "translateX(16rem)"
    }
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (scrollY > 50) {
                setIsScroll(true)
            }
            else { setIsScroll(false) }
        })
    }, [])
    return (
        <>
            {/* <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] hidden'>
                <Image src={assets.header_bg_color} alt='' className='w-full' />
            </div> */}
            <nav className={`w-full  fixed px-5 lg:px-8 xl:px-[8%]  flex items-center justify-between z-50 text-white   
                ${isScroll ? " bg-[#11001F] bg-opacity-90 backdrop-blur-lg shadow-white/20 border-b-[0.5px] border-gray-500" : ""}`}>
                <a href="#top">
                    <Image src={assets.logo_dark} alt='logo' className='w-28 cursor-pointer mr-14' />
                </a>
                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-md px-12 py-3 ${isScroll ? "" : "bg-transparent shadow-sm bg-opacity-50 border border-white/50"} `}>
                    <li className='hover:text-[#7969c9] transition duration-300 ease-in'><a href="#top">Home</a></li>
                    <li className='hover:text-[#7969c9] transition duration-300 ease-in'><a href="#about">About Me</a></li>
                    <li className='hover:text-[#7969c9] transition duration-300 ease-in'><a href="#skills">Skills</a></li>
                    <li className='hover:text-[#7969c9] transition duration-300 ease-in'><a href="#work">My Works</a></li>
                    <li className='hover:text-[#7969c9] transition duration-300 ease-in'><a href="#contact">Contact Me</a></li>
                </ul>
                <div className='flex items-center gap-4'>
                    {/* <button onClick={()=>setIsDarkMode(prev=>!prev)} className='cursor-pointer'>
                        <Image src={isDarkMode?assets.sun_icon:assets.moon_icon} alt='' className='w-6' />
                    </button> */}
                    <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-white/50 rounded-md ml-4 hover:bg-white hover:text-[#11001F] duration-300 ease-in 
                    transition '>Contact <FiArrowUpRight /> </a>

                    <button className='block md:hidden ml-3 cursor-pointer' onClick={openMenu}>
                        <Image src={assets.menu_white} alt='' className='w-6 ' />
                    </button>
                </div>
                {/* mobile menu */}
                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-[#7969c9] text-white transition duration-500'>
                    <div className='absolute right-6 top-6' onClick={closeMenu}>
                        <Image src={assets.close_white} alt='' className='w-5 cursor-pointer' />
                    </div>
                    <li><a href="#top" onClick={closeMenu}>Home</a></li>
                    <li><a href="#about" onClick={closeMenu}>About Me</a></li>
                    <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
                    <li><a href="#work" onClick={closeMenu}>My Works</a></li>
                    <li><a href="#contact" onClick={closeMenu}>Contact Me</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar