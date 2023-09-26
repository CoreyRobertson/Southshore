import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { BsArrowDownLeftCircle, BsArrowRight } from 'react-icons/bs'
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

const services = [
    {
        title: "Research",
        imgSrc: "/images/flag1.svg",
        imgAlt: "flag1",
        subtitle: "Anchoring Strategies with Solid Data",
        description: "In the vast landscape of today's market, it's vital to have a clear direction. We delve deep into market analysis, competitor evaluations, and strategic insights, ensuring you're anchored with data-driven decisions.",
        link: '/',
    },
    {
        title: "Branding & Design",
        imgSrc: "/images/flag2.svg",
        imgAlt: "flag2",
        subtitle: "Crafting an Authentic Beacon",
        description: "Just as a well-designed ship combines functionality with aesthetics, we use tools like Figma and Affinity Pro, along with AI insights, to produce sleek and modern UI/UX designs and Brand Aesthetics that resonate with your audience.",
        link: '/',
    },
    {
        title: "Web Development",
        imgSrc: "/images/flag3.svg",
        imgAlt: "flag3",
        subtitle: "Sailing Smoothly with NextJS",
        description: "The digital world is vast and ever-evolving. With the power of NextJS, we ensure your online presence is responsive, adaptable, and ready to take on any current, giving you a streamlined digital journey.",
        link: '/',
    },
    {
        title: "Content Generation & Copywriting",
        imgSrc: "/images/flag4.svg",
        imgAlt: "flag4",
        subtitle: "Captivating Narratives",
        description: "From the depth of research to the breadth of creativity, we generate content that engages and informs. Our expertise spans across industries, producing content that is not only engaging but also optimized for SEO, ensuring your message sails smoothly to its destination.",
        link: '/',
    },
    {
        title: "SEO",
        imgSrc: "/images/flag5.svg",
        imgAlt: "flag5",
        subtitle: "Navigating Digital Waters",
        description: "In the vast ocean of online content, standing out can be a challenge. With our strategic SEO campaigns, we chart the course to prominence. Using cutting-edge techniques and in-depth analysis, we ensure your digital presence sails to the forefront, catching the attention and favor of search engines and audiences alike.",
        link: '/',
    },
];

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

const dropdownVariants = {
    open: { height: "auto" },
    collapsed: { height: 0 }
};



const Solutions = () => {
    const [expanded, setExpanded] = useState(null);

    const toggleDropdown = index => {
        if (expanded === index) {
            setExpanded(null);
        } else {
            setExpanded(index);
        }
    };

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
        <motion.div className='services_right-container' variants={sectionVariants} initial="hidden" animate="visible" ref={ref}>

            <div className='solutions_left-container'>
                <div>
                    <p className='service_heading font-acumin'><Image src='images/flag1.svg' alt='flag1' width={30} height={20} layout='dynamic' />Our Solutions</p>
                </div>
                <p className='font-nimbus'><span> We don’t just build websites—we craft digital experiences.</span> Every pixel we design, every line of code we deploy, is informed by meticulous research and a deep understanding of your brand's unique narrative. <span>Our expertise transcends traditional boundaries.</span> Imagine your brand, amplified by sleek design, powered by the unmatched performance of NextJS, and constantly echoing with engaging content that resonates with your audience. </p>

            </div>
            <div className='solutions_right'>
                {services.map((service, index) => (
                    <div key={index}>
                        <motion.h2
                            onClick={() => toggleDropdown(index)}
                            className='services_card-title font-acumin'
                            variants={cardContentVariants}
                        >
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <Image src={service.imgSrc} height={30} width={40} alt={service.imgAlt} />
                                <span style={{ marginLeft: "10px" }}>{service.title}</span>
                                <BsArrowDownLeftCircle style={{ marginLeft: "10px" }} className='solution_heading-icon' />
                            </div>
                        </motion.h2>

                        <AnimatePresence>
                            {expanded === index && (
                                <motion.div
                                    className='solutions_card-content'
                                    variants={dropdownVariants}
                                    initial="collapsed"
                                    animate="open"
                                    exit="collapsed"
                                    style={{ overflow: 'hidden' }}  // This ensures the content inside doesn't overflow during animation
                                >
                                    <motion.p className='card_subtitle' variants={cardVariants}>
                                        {service.subtitle}
                                    </motion.p>
                                    <motion.p className='service_card-text font-nimbus' variants={cardContentVariants}>
                                        {service.description}
                                    </motion.p>
                                    <Link href={service.link}>
                                        <motion.button variants={cardContentVariants} type='button' className='button_orange'>
                                            EXPLORE
                                        </motion.button>
                                    </Link>
                                </motion.div>

                            )}
                        </AnimatePresence>
                    </div>
                ))}
                <motion.div
                    className='intro_button-container'
                    initial="hidden"
                    animate={controls}  // This is the control from useAnimation and useInView
                    variants={cardContentVariants}
                >
                    <Link href='https://docs.google.com/forms/d/e/1FAIpQLSfAJPWRC7kd7bh4bysLxmK532TPvqER_kYiuBCaU9PhvrrG_A/viewform?usp=sf_link'>
                        <button type='button'>
                            Let's get started!
                            <span><BsArrowRight alt='right-arrow' className='arrow_right' /></span>
                        </button>
                    </Link>

                </motion.div>
            </div>
        </motion.div >

    );
}

export default Solutions;
