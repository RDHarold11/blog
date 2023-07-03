import React, { useState } from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
import { Fade } from "react-awesome-reveal";

const Banner = () => {
  return (
    <Fade damping>
      <div className='max-w-[1400px] px-[80px] mx-auto pt-10 mb-10'>
          <div className='py-10 w-[100%]  md:h-[350px] mx-auto text-white flex flex-col items-center justify-center gap-3 bg-[#11043A]'>
              <h4 className=' text-[#022af9]'>Got an Idea?</h4>
              <h2 className='max-w-[700px] text-center text-2xl md:text-[50px] md:leading-[70px] font-bold'>Let's level up Your Brand, together</h2>
              <button className='bg-[#0029ff] px-5 text-[15px] rounded-full py-2 flex items-center gap-2'>Get in touch  <AiOutlineArrowRight size={20}/></button>
          </div>
      </div>
    </Fade>
  )
}

export default Banner