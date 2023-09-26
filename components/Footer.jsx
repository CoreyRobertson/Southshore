import React from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { CiInstagram, CiFacebook } from 'react-icons/ci'
import Link from 'next/link';

const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
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

const hrVariants = {
    hidden: { opacity: 0, width: "0%" },
    visible: {
        opacity: 1,
        width: "100%",
        transition: {
            duration: 1.3,
            ease: 'easeInOut'  // Adjusted Cubic Bezier Curve for a stronger decelerating ease-out
        }
    }
};

const Footer = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.1, // Adjust this threshold if needed
    });

    React.useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <motion.footer
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={footerVariants}
        >
            <motion.h1 className='brand' variants={childVariants}>SouthShore<span>Digital</span></motion.h1>
            <motion.hr variants={hrVariants} className='line' />
            <div className='footer_bottom'>
                <div className='footer_icon-container'>
                    <CiInstagram className='footer_icon' size={40} />
                    <CiFacebook className='footer_icon' size={40} />
                </div>
                <form>

                    <label htmlFor="name">Name:</label>
                    <input
                        className='font-nimbus'
                        type="text"
                        id="name"
                        name="name"
                        placeholder='Your Name'
                        required
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        className='font-nimbus'
                        type="email"
                        id="email"
                        name="email"
                        placeholder='Your Email'
                        required
                    />

                    <label htmlFor="message">Your Message:</label>
                    <textarea
                        className='font-nimbus'
                        id="message"
                        name="message"
                        rows="4"
                        placeholder='Your Message'
                        required
                    />

                    <button className='font-nimbus' type="submit">Submit</button>
                </form>
                <div className='footer_legal-links'>
                    <Link href='/' className='font-nimbus'>Privacy Policy</Link>
                    <Link href='/' className='font-nimbus'>Terms</Link>
                </div>
            </div>
        </motion.footer>
    )
}

export default Footer;
