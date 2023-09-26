import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.1,
            duration: 0.4,
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

const Header = () => {
    const videoRef = useRef();
    const router = useRouter();
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    useEffect(() => {
        const playVideo = () => {
            videoRef.current.play();
        };

        const handleRouteChangeStart = () => {
            videoRef.current.pause();
        };

        const handleRouteChangeComplete = () => {
            videoRef.current.play();
        };

        router.events.on('routeChangeStart', handleRouteChangeStart);
        router.events.on('routeChangeComplete', handleRouteChangeComplete);

        // Delay the initial play to ensure the video is ready
        const timeoutId = setTimeout(() => {
            videoRef.current.play();
        }, 500);

        return () => {
            clearTimeout(timeoutId);
            router.events.off('routeChangeStart', handleRouteChangeStart);
            router.events.off('routeChangeComplete', handleRouteChangeComplete);
        };
    }, []);

    return (
        <motion.header ref={ref}
            initial="hidden"
            animate={controls}
            variants={headerVariants}
            className='header_container'>
            <video className='video' ref={videoRef} width="100" loop muted>
                <source src="/images/flagpattern_02_3.mp4" type="video/mp4" />
            </video>
            <motion.div className='header_content-container' variants={childVariants}>
                <motion.h1 className='brand' variants={childVariants}>SouthShore<span>Digital</span></motion.h1>
                <motion.h2 variants={childVariants}>Time for a digital sea change?</motion.h2>
                <motion.p variants={childVariants}>Captivating Design, Cutting-edge Web Development and SEO Mastery: Unlock Your Digital Potential </motion.p>
                <motion.button className='button_orange' variants={childVariants}>LEARN MORE</motion.button>
            </motion.div>
        </motion.header>
    );
};

export default Header;
