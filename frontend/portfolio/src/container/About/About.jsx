import {React,useEffect,useRef} from 'react'
import {motion} from "framer-motion"
import { images } from '../../constants';




const abouts =[
  {title :"frontend development",
  description: "Crafting seamless user experiences, I specialize in frontend development, transforming designs into captivating websites with smooth interactions.",imgURL:images.about01},
  {title :"backend development",
  description: "I build the engine powering websites, focusing on robust architecture and efficient data handling for seamless user experiences.",imgURL:images.about02},
  {title :"MERN Stack",
  description: "Bridging frontend and backend, I craft end-to-end solutions, ensuring every aspect harmonizes to deliver exceptional digital experiences.",imgURL:images.about03}
];

const About = () => {
  return (
    <>
    {/* ----------thought----------- */}
    <h1 className='text-center font-bold sm:text-2xl  leading-8  flex-1 w-full flex-col'>
    Developers don't just 
    <span className=' text-blue-500'> write code</span>
    <br />
    They craft solutions that drive  <span className='text-blue-500'> business success</span>
    </h1>

{/* ---------------main about div------------- */}

    <div className=" flex flex-wrap justify-center items-start  mt-10">
      {abouts.map((about,index) =>(

        <motion.div
        className='w-[190px] xl:w-[320px] xl:mt-8 xl:mx-16 flex flex-col justify-start items-start m-[2rem] shadow-lg shadow-blue-200 bg-white rounded-md'

          whileInView={{opacity:1}}
          whileHover = {{scale:1.1}}
          transition = {{duration :0.5,type : "tween"}}
          key = {about.title + index}
          >
          <img className='w-full h-[170px] bg-cover rounded-md shadow-md shadow-slate-300' src={about.imgURL} alt={about.title} />
          <h2 className='font-bold mt-[20px] text-center w-full'>{about.title}</h2>
          <p className='font-bold mt-[10px]  text-center text-slate-500 m-2 text-sm'>{about.description}</p>
        </motion.div>
      ))}

    </div>

    

    
    </>
  )
}

export default About