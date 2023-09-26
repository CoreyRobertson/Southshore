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

const cardVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};


const Intro = () => {

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
            className='intro_container'>
            <Image className='intro_image' src='/images/background5.png' layout='fill' alt='BlueBackground5' quality={100} />
            <motion.div
                className='intro_button-container'
                initial="hidden"
                animate={controls}  // This is the control from useAnimation and useInView
                variants={cardVariants}
            >
                <Link href='/ourSolutions'>
                    <button type='button'>
                        How can we help you chart a course towards success?
                        <span><BsArrowRight alt='right-arrow' className='arrow_right' /></span>
                    </button>
                </Link>
            </motion.div>
            <motion.div className='intro_card-container'
                variants={containerVariants}
                initial="hidden"
                animate="visible">

                <motion.div className='intro_card' variants={cardVariants}>

                    <div className='card_heading'>
                        <Image src='images/flag1.svg' alt='flag1' width={30} height={20} layout='dynamic' />
                        <h2 className='font-nimbus'>Research</h2>
                    </div>
                </motion.div>
                <motion.div className='intro_card' variants={cardVariants}>
                    <div className='card_heading'>
                        <Image src='images/flag2.svg' alt='flag2' width={30} height={20} layout='dynamic' />
                        <h2 className='font-nimbus'>Design</h2>
                    </div>
                </motion.div>
                <motion.div className='intro_card' variants={cardVariants}>
                    <div className='card_heading'>
                        <Image src='images/flag3.svg' alt='flag3' width={30} height={20} layout='dynamic' />
                        <h2 className='font-nimbus'>Development</h2>
                    </div>
                </motion.div>
                <motion.div className='intro_card-dark' variants={cardVariants}>
                    <div className='card_dark-content'>
                        <p className='font-nimbus_bold'>Need a <span>new website</span> for your business? Searching for growth online? With our tailored Web Design solutions, <span>we can help you </span> chart a course towards success.</p>
                        <Link href='/ourSolutions'>
                            <button type='button' className='button_orange'>LEARN MORE</button>
                        </Link>
                    </div>
                </motion.div>
            </motion.div >
        </motion.section >
    )
}

export default Intro