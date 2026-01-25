import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiGithub, FiLinkedin, } from "react-icons/fi";
import { RiTwitterXFill } from 'react-icons/ri'
import logo from "../assets/MG_W.jpg"

const Navbar = () => {
    return (
        <div className='md:flex flex-col justify-around items-center hidden'>
            <div className='h-11 w-11 rounded-full overflow-hidden hover:scale-110 transition-all duration-200 cursor-pointer'>
                <Image className='w-full h-full' src={logo} />
            </div>
            <div className='flex items-center flex-col gap-20 text-[16px] leading-[100%] text-black font-medium'>
                <button className='-rotate-90 opacity-80 hover:opacity-100'>Home</button>
                <button className='-rotate-90 opacity-80 hover:opacity-100'>About</button>
                <button className='-rotate-90 opacity-80 hover:opacity-100'>Contact</button>
            </div>
            <div className='flex flex-col items-center gap-5'>
                <Link href={"https://github.com/iamgauhar"} target='_blank' className='opacity-80 hover:opacity-100'>
                    <FiGithub size={24} />
                </Link>
                <Link href={"https://www.linkedin.com/in/iamgauhar"} target='_blank' className='opacity-80 hover:opacity-100'>
                    <FiLinkedin size={24} />
                </Link>
                <Link href={"https://x.com/iamgauhar_in"} target='_blank' className='opacity-80 hover:opacity-100'>
                    <RiTwitterXFill size={24} />
                </Link>
            </div>
        </div>
    )
}

export default Navbar