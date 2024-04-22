import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialMedia = () => {
  return (
    <div className=' flex flex-col justify-end items-center p-[1rem]'>
        <div className='w-[40px] h-[40px] rounded-full bg-white m-1 border flex justify-center items-center transition-all ease-in hover:bg-blue-500 hover:text-white'>
            <FaLinkedin/>
        </div>
        <div className='w-[40px] h-[40px] rounded-full bg-white m-1 border flex justify-center items-center transition-all ease-in hover:bg-blue-500 hover:text-white'>
            <FaGithub/>
        </div>
        <div className='w-[40px] h-[40px] rounded-full bg-white m-1 border flex justify-center items-center transition-all ease-in hover:bg-blue-500 hover:text-white'>
            <FaXTwitter/>
        </div>
    </div>
  )
}

export default SocialMedia