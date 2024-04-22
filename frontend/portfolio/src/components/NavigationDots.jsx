import React from 'react'

const NavigationDots = ({active}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
         {["Home", "About", "Work", "Skills", "Contacts"].map((item,index) => (
                   
                       
                        <a 
                        className="w-[10px] h-[10px] rounded-full bg-slate-00 flex flex-col justify-center items-center m-3 bg-slate-500 shadow-sm shadow-slate-500" 
                        href={`#${item}`}
                        key={item + index}
                        style={active === item ? {backgroundColor:"#313BAC"}:{}}
                        />
                    
                ))}
    </div>
  )
}

export default NavigationDots