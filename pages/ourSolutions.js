
import Solutions from '@/components/Solutions'
import Cta from '@/components/cta'
import React from 'react'
import { motion } from 'framer-motion'

const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.2,
            duration: 0.4,
            ease: "easeOut",
            staggerChildren: 0.2
        }
    }
};




const oursolutions = () => {
    return (
        <motion.section className='ourServices' variants={sectionVariants} initial="hidden" animate="visible">

            <Solutions />

            <Cta />
        </motion.section>
    )
}

export default oursolutions