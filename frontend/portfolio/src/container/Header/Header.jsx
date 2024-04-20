import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import { images } from '../../constants';

const Header = () => {
  const typedEl = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["programmer", "full stack developer"],
      typeSpeed: 50,
      loop: true
    };

    const typed = new Typed(typedEl.current, options);

    // Cleanup function
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className='main flex w-full h-screen justify-center items-center py-10 overflow-hidden'>
      <motion.div className='md:w-full w-[50%]'>
        <span className='block text-[5em] m-10 font-extrabold uppercase text-slate-500'>
          I am a <br />
          <span ref={typedEl} className='multitext text-blue-500'>Programmer</span>
        </span>
        <p className='w-[90%] block text-[1.2em] m-10 text-slate-500'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, placeat Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, ab? Repellendus porro, minus tempore voluptatum fuga inventore totam. Autem sequi veniam nisi cupiditate quaerat facilis, odio obcaecati sapiente assumenda deleniti..
        </p>
        <button className='bg-blue-500 p-2 mx-10 my-2 rounded-md hover:bg-blue-700 hover:text-white shadow-md shadow-blue-300'>
          Hire me
        </button>
        <button className='bg-blue-500 p-2 mx-1 my-2 rounded-md hover:bg-blue-700 hover:text-white shadow-md shadow-blue-300'>
          Download cv
        </button>
      </motion.div>
    </div>
  );
};

export default Header;
