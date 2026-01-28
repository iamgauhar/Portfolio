import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='border-t border-[#CCCCCC] w-full font-light text-[12px] leading-none text-[#626161] flex flex-col md:flex-row gap-3 items-center justify-between pt-4'>
            <div>Made with 💗 by Mohammad Gauhar / @iamgauhar</div>
            <div className='flex items-center gap-4'>
                <Link href={"https://github.com/iamgauhar"} target='_blank'>GitHub</Link>
                <Link href={"https://www.linkedin.com/in/iamgauhar"} target='_blank'>LinkedIn</Link>
                <Link href={"https://x.com/iamgauhar_in"} target='_blank'>X(Twitter)</Link>
            </div>
        </div>
    )
}

export default Footer