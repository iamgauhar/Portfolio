import React from 'react'
import DarkMoonIcon from '../../src/assets/icons/DarkMoonIcon'

const Navbar = () => {

    function handleDarkModeToggle() {
        const html = document.documentElement;
        html.classList.toggle('dark');
    }

    return (
        <nav className='font-extralight leading-[100%] text-[#1A1A1A] flex items-center justify-between h-[120px]  border-b'>
            <div className='text-[24px]'>MG.</div>
            <div className='text-[18px] flex items-center gap-[30px]'>
                <button>Projects</button>
                <button>Resume</button>
                <button>Contact</button>
                <button onClick={handleDarkModeToggle}><DarkMoonIcon /></button>
            </div>
        </nav>
    )
}

export default Navbar