import React from 'react'
import Img1 from "../../assets/shous1.png"

const Hero = () => {
  return (
   
    <div className=' bg-gradient-to-t from-purple-300 to-blue-500 w-72  h-80 rounded-2xl ml-10 text-white mt-8'>
        <div className=' flex items-center justify-center '>
           <img src={Img1} alt='' className='h-20 w-20 rounded-full mt-8'/>
        </div>
         <div className=' flex ml-7 mt-2 text-2xl font-bold'>
          Kamariza Esther
         </div>
         <div>
          <ul>
            <li className='ml-7'>
              ISEZERANO Choir
            </li>
            <li className='ml-7'>
              Kigali-Rwanda
            </li>
            <li className='ml-7'>
              Tel: 0788-288-122
            </li>
          </ul>
          <button className='bg-purple-200 mt-14 h-10 w-36  flex items-center justify-center ml-16 rounded-t-2xl'>
             Click Edit Profile
          </button>
         </div>
    
    </div>
    
  )
}

export default Hero