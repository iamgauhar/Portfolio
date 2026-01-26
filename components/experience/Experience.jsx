import React from 'react'
import SectionTitle from '../SectionTitle'
import CardContainer from '../CardContainer'
import Image from 'next/image'
import evallo from "../../assets/evallo_logo.svg"

const Experience = () => {
    return (
        <div className='grid gap-7'>
            <SectionTitle title={"Working History"} />
            <CardContainer>
                <div>
                    <div className='h-12.75 w-13.75 rounded-full'><Image src={evallo} alt='eallo.ai' /></div>
                    <div className='font-medium text-[16px] leading-[100%] text-[#0A0614] pt-1.25'>UX/UI Designer</div>
                    <div className='font-medium text-[16px] leading-[100%] text-[#6A6F8E] flex items-center gap-2'>Upwork Inc <span className='font-light text-[12px] pt-0.5'>|</span>Sep 2019 - Present</div>
                </div>
            </CardContainer>
        </div>
    )
}

export default Experience