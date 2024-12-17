import React from 'react'
import styles from '../style'
import { discount } from '../assets'
import { robot } from '../assets'
import GetStarted from './GetStarted'
import robotMagic from '../assets/robotMagic.png'

const Hero = () =>  (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>

      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-16 px-6`}>
        
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img src={discount} alt="discount" className='w-[32px] h-[32px]'/>
          <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white'>20%</span> Off your 1st {" "}
            <span className='text-white'> Website</span> Click Here.
          </p>
        </div>

        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[46px] text-white ss:leading-100px] leading-[75px] mt-10'>The Next <br className='sm:block hidden'/> {" "} 
          <span className='text-gradient'>Generation </span> {" "} </h1>

          <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted />
          </div>
        </div>

        <h1 className='font-poppins mt-2 font-semibold ss:text-[68px] text-[46px] text-white ss:leading-100px] leading-[75px] w-full'>
        of Web Developement.</h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>As a next-generation web delevloper I focus on speed, interactivity, and seamless user experiences. I leverage modern frameworks, micro frontends, and AI-driven personalization to revolutionize web development.</p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robotMagic} alt="billing" className='w-[100%] h-[100%] relative z-[5]'/>

        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'/>
        <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient'/>
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'/>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted/>
      </div>
    </section>
  )


export default Hero