import React, { useEffect } from 'react';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const headerVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.1,
            duration: .5,
            ease: "easeOut"
        }
    }
};

const childVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const Header = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);



    return (
        <motion.header ref={ref}
            initial="hidden"
            animate={controls}
            variants={headerVariants}
            className='header_container'>
            <Image className='header_background' src='/images/background13.png' alt='background white' layout='fill' quality={100} />
            <motion.div className='header_content-container' variants={childVariants}>
                <motion.h1 className='brand' variants={childVariants}>SouthShore<span>Digital</span></motion.h1>
                <motion.h2 variants={childVariants}>Time for a digital sea change?</motion.h2>
                <motion.p variants={childVariants}>Captivating Design, Cutting-edge Web Development and SEO Mastery: Unlock Your Digital Potential </motion.p>
                <motion.button className='button_orange' variants={childVariants} whileHover={{ scale: 1.05 }}>LEARN MORE</motion.button>
            </motion.div>
        </motion.header>
    );
};

export default Header;
