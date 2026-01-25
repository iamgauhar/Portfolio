import React from 'react'
import { DecoderText } from './decoder-text'

const HeroSection = () => {
    return (
        <div className='grid place-content-center h-screen'>
            <div className='text-[clamp(14px,2.2vw,22px)] font-medium text-black/60 tracking-wider pb-3'>
                {/* MOHAMMAD GAUHAR */}
                <DecoderText text={"MOHAMMAD GAUHAR"} delay={500} />
            </div>
            <div className='flex items-center gap-1'>
                <div className='text-[clamp(32px,8vw,100px)] font-medium text-black/90 leading-[100%] whitespace-nowrap'>Full-Stack</div>
                <div className='md:h-0.5 h-[1px] bg-black/30 w-full max-w-72'></div>
            </div>
            <div className='text-[clamp(32px,8vw,100px)] font-medium text-black/90 leading-[100%]'>&nbsp; Web Developer</div>
        </div>
    )
}

export default HeroSection