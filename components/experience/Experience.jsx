import React from 'react'
import SectionTitle from '../SectionTitle'
import CardContainer from '../CardContainer'
import Image from 'next/image'
import { experience } from '@/app/myBio'

const ExpCard = ({ exp }) => {
    return (
        <CardContainer>
            <div className="p-7.5 grid gap-4">
                <div>
                    <div className="md:h-13.75 h-10 md:w-13.75 w-10 rounded-full object-cover">
                        <Image
                            className="w-full h-full object-cover"
                            src={exp.logo}
                            alt="evallo.ai"
                        />
                    </div>

                    {/* Role */}
                    <div className="font-medium text-[clamp(14px,1.8vw,16px)] leading-tight text-[#0A0614] pt-1.25">
                        {exp.role}
                    </div>

                    {/* Org + Duration */}
                    <div className="font-medium text-[clamp(13px,1.7vw,16px)] leading-tight text-[#6A6F8E] flex items-center gap-2">
                        {exp.orgName}
                        <span className="font-light text-[clamp(10px,1.4vw,12px)] pt-0.5">|</span>
                        {exp.duration}
                    </div>
                </div>

                {/* Description */}
                <div className="grid gap-2 md:gap-3">
                    {exp.desc.map((item, i) => (
                        <div className="flex items-start gap-2" key={i}>
                            <div className="font-light text-[clamp(12px,1.6vw,14px)] leading-tight text-[#0A0614]">
                                –
                            </div>
                            <div className="font-light text-[clamp(14px,1.9vw,16px)] leading-snug text-[#0A0614]/80">
                                {item}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </CardContainer>
    )
}

const Experience = () => {
    return (
        <div className='grid gap-4 h-fit'>
            <SectionTitle title={"Working History"} />{
                experience.map((exp, i) => <ExpCard exp={exp} key={i + 1} />)
            }

        </div>
    )
}

export default Experience