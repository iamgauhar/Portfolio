import React from 'react'

const CardContainer = ({ children }) => {
    return (
        <div className='border border-[#CAD9EC] rounded-3xl p-7.5 bg-white'>
            {children}
        </div>
    )
}

export default CardContainer