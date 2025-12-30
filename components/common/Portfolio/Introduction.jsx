import React from 'react'
import LongArrowIcon from '../../../src/assets/icons/LongArrowIcon'

const Introduction = () => {
    return (
        <div className='flex flex-col gap-6 my-[120px]'>
            <div className='flex flex-col gap-5'>
                <div className='font-extralight leading-[100%] text-[#1A1A1A] pl-0.5'>Hey, I’m</div>
                <div className="font-poppins font-medium text-[96px] leading-[100%] bg-gradient-to-r from-[#9845E8] via-[#33D2FF] to-[#DD5789] bg-clip-text text-transparent">
                    Mohammad Gauhar
                </div>
            </div>
            <div className='flex flex-col gap-10'>
                <div className='font-extralight leading-[24px] text-[#1A1A1A] text-[18px]'>
                    I’m a Full Stack Developer based in Maghar, India. I enjoy creating things that live on the internet, whether that’s websites, applications, or anything in between. I have over a year of experience and currently work as a Full Stack Engineer (Front-End Focused) at a startup called Evallo Digital Products. I specialize in building modern, responsive, and user-friendly digital solutions, combining technical expertise with creativity to bring ideas to life.
                </div>
                <button className='font-light font-sans text-[24px] leading-[24px] text-[#1A1A1A] flex items-center gap-3'>
                    <span>Say hi</span>
                    <LongArrowIcon />
                </button>
            </div>
        </div>
    )
}

export default Introduction