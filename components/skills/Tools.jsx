
import React from 'react'
import CardContainer from '../CardContainer'
import { skills } from "../../app/myBio"
import SectionTitle from '../SectionTitle'

const Tools = () => {
    return (
        <div className='grid gap-4 h-fit'>
            <SectionTitle title={"Tools"} />
            <CardContainer>
                <div className='p-8 grid grid-cols-3 gap-x-4 gap-y-12'>
                    {
                        skills.tools.map(({ name, Icon, color }, i) => {
                            return <div key={name} className="flex items-center flex-col gap-1">
                                <div className='h-13.75 w-13.75 rounded-full grid place-content-center bg-white/30 border border-[#ffffffaa]'> <Icon size={25} color={color} /></div>
                                <span className="text-[14px] leading-[120%] font-light truncate text-[#0A0614]/80">{name}</span>
                            </div>
                        })
                    }
                </div>
            </CardContainer>
        </div>
    )
}

export default Tools