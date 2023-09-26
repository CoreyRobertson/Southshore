import Image from 'next/image'
import React from 'react'

const Cta = () => {
    return (
        <section className='cta'>
            <Image className='cta_background' src='/images/background6.png' layout='fill' alt='Background6' quality={100} />
            <h1 className='brand'>SouthShore<span>Digital</span></h1>
            <h3>Ready to chart a course?</h3>

            <p className='font-acumin'>Don't let your website get lost at sea - Discover how we can enhance your online presence today.</p>
            <button className='button_orange'><a href='https://docs.google.com/forms/d/e/1FAIpQLSfAJPWRC7kd7bh4bysLxmK532TPvqER_kYiuBCaU9PhvrrG_A/viewform?usp=sf_link' target='_blank' rel="noopener noreferrer">ANCHOR UP</a></button>
        </section >
    )
}

export default Cta