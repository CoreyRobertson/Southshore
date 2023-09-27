import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';

const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.2,
            duration: 0.4,
            ease: "easeOut"
        }
    }
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,  // Delay between child animations
        }
    }
};

const childVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};


const contactus = () => {

    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.5,
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);
    return (
        <motion.section ref={ref}
            initial="hidden"
            animate={controls}
            variants={sectionVariants}
            className='contact_container'>
            <Image className='intro_image' src='/images/background12.png' layout='fill' alt='BlueBackground12' quality={100} />

            <motion.div className='contact_card-container'
                variants={containerVariants}
                initial="hidden"
                animate="visible">
                <div className='contact_form-container'>
                    <div>
                        <p className='contact_heading'><Image src='images/flag5.svg' alt='flag5' width={30} height={20} layout='dynamic' />Contact Us</p>
                    </div>
                    <motion.h1 className='brand' variants={childVariants}>SouthShore<span>Digital</span></motion.h1>

                    <form>

                        <label htmlFor="name">Name:</label>
                        <motion.input
                            variants={childVariants}
                            className='font-nimbus'
                            type="text"
                            id="name"
                            name="name"
                            placeholder='Your Name'
                            required
                        />

                        <label htmlFor="email">Email:</label>
                        <motion.input
                            variants={childVariants}
                            className='font-nimbus'
                            type="email"
                            id="email"
                            name="email"
                            placeholder='Your Email'
                            required
                        />

                        <label htmlFor="topic">Your Topic:</label>
                        <motion.input
                            variants={childVariants}
                            className='font-nimbus'
                            type="email"
                            id="topic"
                            name="topic"
                            placeholder='Your Topic'
                            required
                        />

                        <label htmlFor="message">Your Message:</label>
                        <motion.textarea
                            variants={childVariants}
                            className='font-nimbus'
                            id="message"
                            name="message"
                            rows="4"
                            placeholder='Your Message'
                            required
                        />

                        <motion.button className='font-nimbus' type="submit" variants={childVariants}>Submit</motion.button>
                    </form>
                </div>
            </motion.div >
        </motion.section >
    )
}

export default contactus