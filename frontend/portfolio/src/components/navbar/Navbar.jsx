import React, { useState } from 'react'

import './navbar.css'

import { HiMenuAlt4, HiX } from "react-icons/hi"
import { easeInOut, motion } from "framer-motion"

const Navbar = () => {

    const [toggle, setToggle] = useState(false)
    return (

        
        <nav className='bg-slate-100 flex justify-between items-center p-3 bg-opacity-[50%] border-[1px] border-gray-200 backdrop-blur-sm shadow-md shadow-blue-200 hover:shadow-blue-300 duration-700 hover:shadow-lg '>
           

            <ul className='hidden md:flex justify-center items-center '>
                {["Home", "About", "contact", "Work", "Skills", "Contacts"].map((item) => (
                    <li className='mx-4 ' key={`link-${item}`}>
                        {/* <div className='w-[5px] bg-transparent mb-[50%] rounded-full'/> */}
                        <a className="text-gray-500 p-1 uppercase font-bold  hover:text-blue-500 duration-300" href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>
          


            {/*--------------------- creating mobile navbar ------------------*/}


            <div className=' w-[35px] h-[35px] relative flex justify-center items-center md:hidden '> {/* will put the hidden once styled---------------------- */}
                <HiMenuAlt4
                    onClick={() => setToggle(true)}
                    className=' w-[35px] h-[35px] rounded-full bg-blue-500 p-2 absolute  flex justify-center items-center text-white
                     hover:bg-blue-700 right-0'

             
                    


                />
                {
                    toggle && (

                        <motion.div
                            whileInView={{ x: [300,0] }}
                            transition={{ duration: 0.85, ease: easeInOut }}
                            className="list-none  fixed top-0 bottom-0 w-[50%] flex flex-col justify-end items-end h-screen right-0 z-5 "
                            style={{backgroundImage: 'url("frontend/portfolio/src/assets/bgWhite.png")', backgroundSize: 'cover', backgroundPosition: 'center'}}
                        >
                            <HiX onClick={() => setToggle(false)} 
                            className='w-[35px] h-[35px] text-blue-500'
                            
                            />
                            <ul className='h-[100%] w-[100%] p-0 m-0 flex flex-col justify-start items-start'>
                            {["Home", "About", "contact", "Work", "Skills", "Contacts"].map((item) => (
                                <li className='m-8' key={item}>
                                    <a className="text-gray-500 p-1 uppercase font-bold hover:text-blue-500 duration-300" onClick={() => setToggle(false)} href={`#${item}`}>{item}</a>
                                </li>
                            ))}
                            </ul>
                        </motion.div>

                    )
                }

            </div>
        </nav>

    )
}

export default Navbar