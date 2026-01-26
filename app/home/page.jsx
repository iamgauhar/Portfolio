import Experience from '@/components/experience/Experience'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import React from 'react'

const HomePage = () => {
    return (
        <div className='grid md:grid-cols-[140px_auto] gap-3 h-screen'>
            <Navbar />
            <div className='max-h-screen overflow-y-auto'>
                <HeroSection />
                <Experience />
            </div>
        </div>
    )
}

export default HomePage