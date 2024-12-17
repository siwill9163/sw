import React from 'react'
import { quotes  } from '../assets'

const FeedbackCard = ({ content, name, title, img, hoc, link}) => (
   <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr10 sm:mr-5 mr-0 my-5 feedback-card'>
      <a href={link}></a>
      {/* <img src={quotes} alt="double_quote " className='w-[42px] h-[42px] object-contain'/> */}
      <h3 className='font-poppins font-semibold text-[24px] text-center text-gradient'>{hoc}</h3>
      <p className='font-poppins font-normal text-[18px] leading-[32px] text-center text-white my-10'>{content}</p>
      <img src={img} alt={name} className='w-[250px] h-[250px] ' />
   
  </div>
  )


export default FeedbackCard