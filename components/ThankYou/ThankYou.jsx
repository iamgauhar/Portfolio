import React from 'react'

const ThankYou = () => {
    return (
        <div className="grid gap-8 md:gap-12 h-fit">
            <div>
                <div className="font-bold text-[clamp(36px,6vw,70px)] leading-[1.3] text-[#0A0614]">
                    Thank You!
                </div>
                <div className="font-normal text-[clamp(14px,1.8vw,16px)] leading-tight text-[#0A0614]">
                    For sparing some time and review my work.
                </div>
            </div>
            <div className="font-normal text-[clamp(18px,3vw,30px)] leading-[1.2] text-[#0A0614]">
                Do you have great idea and want to share.
                <br /> Let’s make it together
            </div>
            <button className="font-semibold text-[clamp(14px,1.8vw,16px)] leading-tight text-white bg-[#2349FF]/95 rounded-[100px] md:h-15 h-12 px-7.5 hover:bg-[#2349FF] w-fit">
                Get in touch with me
            </button>
        </div>

    )
}

export default ThankYou