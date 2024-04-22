import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import { images } from '../../constants';
import AppWrapper from "../../wrapper/AppWrapper";


const Header = () => {
  const typedEl = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["programmer","frontend developer","backend developer", "full stack developer"],
      typeSpeed: 50,
      loop: false
    };

    const typed = new Typed(typedEl.current, options);

    // Cleanup function
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className='main flex w-full h-screen  overflow-hidden  '>
      <motion.div className='md:w-full w-full'>
        <span className='block text-[2em] sm:text-[2.2em] md:text-[2.6em] lg:text-[3em] m-5 font-extrabold uppercase text-slate-500  w-[60%] sm:w-[70%] h-[30%] md:h-[30%] mb-2leading-10'>
          I am a <br />
          <span ref={typedEl} className='multitext text-blue-500'>Programmer</span>
        </span>
        <p className='w-[70%] block text-[0.7em] sm:text-[0.8em] mx-5 text-slate-500'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, placeat Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, ab? Repellendus porro, minus tempore voluptatum fuga inventore totam. Autem sequi veniam nisi cupiditate quaerat facilis, odio obcaecati sapiente assumenda deleniti..
        </p>
        <button className='bg-blue-500  p-2 mb-2 mx-5 my-3 rounded-md hover:bg-blue-700 hover:text-white shadow-md shadow-blue-300 '>
          Hire me
        </button>
        <button className='bg-blue-500 p-2 mb-2 mx-1  mr -2 my-3 rounded-md hover:bg-blue-700 hover:text-white shadow-md shadow-blue-300 '>
          Download cv
        </button>
      </motion.div>
    </div>
  );
};

export default AppWrapper(Header,'home');
