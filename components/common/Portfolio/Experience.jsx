import React from 'react'

const ExperienceCard = ({ title, description }) => {
    return (
        <div className='flex flex-col gap-3'>
            <div className='flex items-center justify-between gap-6'>
                <div className='font-light text-2xl leading-[100%] text-[#1A1A1A]'>Full Stack Engineer (Remote)</div>
                <div className='font-light text-[16px] leading-[100%] text-[#1A1A1A]'>Feb 2024 - Present</div>
            </div>
            <div className='font-sans font-light text-[14px] leading-[24px] text-[#004E93]'>
                Selfbook / US - New York
            </div>
            <div className='font-light text-[16px] leading-[24px] text-[#1A1A1A]'>
                - Developing screens and UI components for the web application using React and Tailwind.
            </div>
        </div>
    )
}

const Experience = () => {
    return (
        <div className='flex gap-24'>
            <div className='font-light text-[18px] leading-[100%] uppercase text-[#1A1A1A]'>experience</div>
            <div className='w-full'>
                <ExperienceCard />
            </div>
        </div>
    )
}

export default Experience