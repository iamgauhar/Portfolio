import React from 'react'
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
const SmoothToggleBtn = ({ setToggle, toggle }) => {
    return (
        <button
            onClick={() => setToggle(!toggle)}
            className="md:hidden fixed top-6 right-6 z-50 w-10 h-10 grid place-items-center"
        >
            <span
                className={`absolute transition-all duration-300 ease-in-out
      ${toggle ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'}`}
            >
                <HiOutlineMenuAlt4 color='#000000e6' size={32} />
            </span>

            <span
                className={`absolute transition-all duration-300 ease-in-out
      ${toggle ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'}`}
            >
                <RxCross2 color='#000000e6' size={32} />
            </span>
        </button>

    )
}

export default SmoothToggleBtn