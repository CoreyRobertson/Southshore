import Image from 'next/image';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

const Work = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.3,  // Adjust this value for the main section
    });

    const cardControls = useAnimation();
    const [cardRef, cardInView] = useInView({
        threshold: 0.6,  // Adjust this value for the card
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    useEffect(() => {
        if (cardInView) {
            cardControls.start('visible');
        }
    }, [cardControls, cardInView]);

    return (
        <motion.section ref={ref}
            initial="hidden"
            animate={controls}
            variants={sectionVariants}
            className='work_summary-container'>
            <Image className='work_background' src='/images/home.png' alt='Iphones' layout='fill' quality={100} />
            <motion.div ref={cardRef}
                initial="hidden"
                animate={cardControls}
                variants={childVariants}
                className='work_summary-card'>
                <div className='work_card-heading'>
                    <Image src='images/flag5.svg' alt='flag5' width={30} height={20} layout='dynamic' />
                    Our Work
                </div>
                <motion.div className='work_card-content' variants={childVariants}>
                    <p className='font-nimbus'>Lorem ipsum dolor sit amet. In inventore eligendi et vero quis ut delectus impedit et veniam culpa non quam dolor vel velit voluptatem id distinctio mollitia!</p>
                    <motion.button className='button_orange' type='button' variants={childVariants}>EXPLORE</motion.button>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}

export default Work;
