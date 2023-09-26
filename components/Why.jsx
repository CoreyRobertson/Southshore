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
            ease: "easeOut",
            staggerChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
            staggerChildren: 0.2
        }
    }
};

const cardContentVariants = {
    hidden: { opacity: 0, y: 20 },
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
            duration: 0.8,
            ease: [0.19, 1, 0.22, 1]  // Adjusted Cubic Bezier Curve for a stronger decelerating ease-out
        }
    }
};

const Why = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.3,
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
            className='why_container'>
            <div className='why_left-container'>
                <div >

                    <p className='why_heading'><Image src='images/flag1.svg' alt='flag1' width={30} height={20} layout='dynamic' /> Why work with us?</p>
                </div>
                <p className='font-nimbus'>Chart a course with us towards digital excellence. We specialize in <span>tailored web solutions</span> that reflect your brand's unique identity. <span>Beyond just design,</span> our expertise in SEO and eCommerce ensures your brand remains buoyant amidst industry challenges. With collaboration as our compass, <span>we aim for a partnership that exceeds typical digital boundaries.</span></p>
                <Link href='https://docs.google.com/forms/d/e/1FAIpQLSfAJPWRC7kd7bh4bysLxmK532TPvqER_kYiuBCaU9PhvrrG_A/viewform?usp=sf_link'>
                    <button type='button' className='font-nimbus_bold why_button1'>
                        Get Started<BsArrowRight alt='right-arrow' />
                    </button>
                </Link>
                <Link href='/'>
                    <button type='button' className='font-nimbus_bold why_button2'>
                        Our Pricing<BsArrowRight alt='right-arrow' />
                    </button>
                </Link>
            </div>
            <motion.div className='why_right-container' variants={sectionVariants}>
                <motion.div className='why_card' variants={cardVariants}>
                    <motion.p className='years-1 font-acumin' variants={cardContentVariants}>6+<span>Years</span></motion.p>
                    <motion.p className='card1_text font-nimbus' variants={cardContentVariants}>Software Development, Data Analytics & Project Management.</motion.p>
                </motion.div>
                <motion.div className='why_card' variants={cardVariants}>
                    <motion.p className='years-2 font-acumin' variants={cardContentVariants}>2+<span>Years</span></motion.p>
                    <motion.p className='card2_text font-nimbus' variants={cardContentVariants}>UI/UX Design, React & NextJS Development.</motion.p>
                </motion.div>
                <motion.div className='why_card' variants={cardVariants}>
                    <motion.div className='mac_image-container' variants={cardContentVariants}>
                        <Image className='mac' src='/images/mac.jpg' alt='Mac' fill objectFit='cover' />
                    </motion.div>
                    <motion.p className='font-nimbus' variants={cardContentVariants}>New digital horizons, new solutions.</motion.p>
                    <motion.hr className='line' variants={hrVariants} />
                </motion.div>
            </motion.div>
        </motion.section>
    )
}

export default Why;
