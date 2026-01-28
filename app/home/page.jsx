import Education from '@/components/Education/Education'
import Experience from '@/components/experience/Experience'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import Skills from '@/components/skills/Skills'
import Tools from '@/components/skills/Tools'
import ThankYou from '@/components/ThankYou/ThankYou'
import React from 'react'

const HomePage = () => {
    return (
        <div className='grid md:grid-cols-[140px_auto] gap-3 h-screen '>
            <Navbar />
            <div className='max-h-screen grid md:grid-cols-[66%_auto] gap-7.5 overflow-y-auto p-4 md:pb-10 md:pr-20 auto-rows-max'>
                <div className='col-span-full'>
                    <HeroSection />
                </div>
                <div className='grid gap-7.5 h-fit'>
                    <Experience />
                    <Education />
                </div>
                <div className='grid gap-7.5 h-fit'>
                    <Skills />
                    <Tools />
                </div>
                <div className='col-span-full flex flex-col gap-20 pt-4 md:pt-0'>
                    <ThankYou />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default HomePage