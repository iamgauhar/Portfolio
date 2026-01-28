import React from 'react'
import SectionTitle from '../SectionTitle'
import CardContainer from '../CardContainer'
import Image from 'next/image'
import { education } from '@/app/myBio'

const EduCard = ({ edu }) => {
    return (
        <CardContainer>
            <div className='p-4 pb-6 flex flex-col gap-4'>
                <div className="md:h-13 h-10 md:w-13 w-10 rounded-full object-cover"
                    style={{
                        ...(edu.university.includes("Masai") && { background: "black", padding: "6px" })
                    }}
                >
                    <Image
                        className="w-full h-full object-contain"
                        src={edu.logo}
                        alt="evallo.ai"
                    />
                </div>
                <div className='font-normal text-[18px] leading-[100%] text-[#0A0614]'>
                    <div>{edu.course}</div>
                    <div>{edu.degree}</div>
                </div>
                <div className='font-light text-[14px] leading-[100%] text-[#6A6F8E] flex flex-col gap-1'>
                    <div>{edu.university}</div>
                    <div>{edu.duration}</div>
                </div>
            </div>
        </CardContainer>
    )
}

const Education = () => {
    return (
        <div className='grid gap-4 h-fit' >
            <SectionTitle title={"Education"} />
            <div className='grid md:grid-cols-2 gap-7.5'>
                {
                    education.map((edu, i) => {
                        return <EduCard edu={edu} key={i} />
                    })
                }
            </div>
        </div >
    )
}

export default Education