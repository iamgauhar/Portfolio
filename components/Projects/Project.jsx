import React from 'react'
import SectionTitle from '../SectionTitle'
import CardContainer from '../CardContainer'
import Image from 'next/image'
import { projects } from '@/app/myBio'
import Link from 'next/link'
import { FiExternalLink } from 'react-icons/fi'

const ProCard = ({ pro }) => {
    const Icon = pro.logo
    return (
        <CardContainer>
            <div className="p-7 pb-8 grid gap-4">
                <div>
                    <div className="md:h-13.75 h-10 md:w-13.75 w-10 rounded-full object-cover bg-orange-500 grid place-content-center text-white">
                        < Icon size={24} />
                    </div>

                    {/* Role */}
                    <Link href={"https://sharechef.iamgauhar.in/"} target='_blank' className='flex items-baseline gap-2 hover:text-blue-500 w-fit'>
                        <div className="font-medium text-[clamp(14px,1.8vw,18px)] leading-tight text-[#0A0614] pt-2">
                            {pro.name}
                        </div>
                        <FiExternalLink />
                    </Link>

                    {/* Org + Duration */}
                    <div className="font-normal text-[clamp(13px,1.7vw,15px)] leading-tight text-[#6A6F8E] flex items-center gap-2 pt-1">
                        {pro.about}
                        {/* <span className="font-light text-[clamp(10px,1.4vw,12px)] pt-0.5">|</span> */}
                        {/* {exp.duration} */}
                    </div>
                </div>

                {/* Description */}
                <div className="grid gap-2 md:gap-3">
                    {pro.desc.map((item, i) => (
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

const Project = () => {
    return (
        <div className='grid gap-4 h-fit'>
            <SectionTitle title={"Personal Projects"} />{
                projects.map((pro, i) => <ProCard pro={pro} key={i + 1} />)
            }

        </div>
    )
}

export default Project