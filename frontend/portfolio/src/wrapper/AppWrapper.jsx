import React from 'react'
import { NavigationDots, SocialMedia } from '../components';

const AppWrapper = (Component,idName,className) => function HOC(){
  return (
    <div id={idName} className={`flex justify-center item-center w-full h-screen ${className}`} >
        <SocialMedia/>

        <div
        >
            <Component/>
        </div>

        <div className='flex flex-col items-center justify-center'>
            <NavigationDots active={idName}/>
        </div>
        
        
        

     </div>
  )
}

export default AppWrapper