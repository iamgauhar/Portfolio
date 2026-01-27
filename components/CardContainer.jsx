"use client"
import React from 'react'
import { motion } from 'framer-motion'

const CardContainer = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="border border-[#CAD9EC] rounded-3xl bg-white">
                {children}
            </div>
        </motion.div>

    )
}

export default CardContainer