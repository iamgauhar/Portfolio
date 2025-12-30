import React from 'react'
import Navbar from '../components/layout/Navbar'
import Introduction from '../components/common/Portfolio/Introduction'
import Experience from '../components/common/Portfolio/Experience'

const Portfolio = () => {
    return (
        <div className='w-full md:max-w-[1080px] mx-auto border min-h-screen font-sans'>
            <Navbar />
            <Introduction />
            <Experience />
        </div>
    )
}

export default Portfolio