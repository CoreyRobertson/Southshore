import { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const navbarRef = useRef(null);
    const controls = useAnimation();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: '0px 0px -100% 0px'
            }
        );

        if (navbarRef.current) {
            observer.observe(navbarRef.current);
        }

        return () => {
            if (navbarRef.current) {
                observer.unobserve(navbarRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            controls.start({
                y: 0,
                opacity: 1,
                transition: {
                    duration: 1.0,  // Slowing the animation down to 1 second
                    ease: [0.23, 1, 0.32, 1]
                }
            });
        }
    }, [controls, isVisible]);

    return (
        <motion.nav
            ref={navbarRef}
            initial={{ y: -100, opacity: 0 }}
            animate={controls}
        >
            <motion.div className='navbar_layout' initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Link href='/'>
                    <Image className='LogoLight' src='/images/logoflaglight.svg' height={60} width={60} alt='BlueFlag' />
                </Link>
                <div className='nav_link-container'>

                    <Link className='font-nimbus' href='/ourSolutions'>Our Solutions</Link>
                    <Link className='font-nimbus' href='/'>Our Work</Link>
                    <Link className='font-nimbus' href='/'>About Us</Link>
                    <Link className='font-nimbus' href='/contactus'>Contact Us</Link>

                </div>
            </motion.div>
        </motion.nav>
    );
};

export default Navbar;
