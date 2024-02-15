import React, { useState } from 'react'
import { statistics } from '../Constants'
import Button from './Button'
import { arrowRight } from '../assets/icons'

const SuperQuality = () => {
  const [shoePage, setShoePage]=useState(false);

   const newShoePage = () => (
     setShoePage(!shoePage)
   );

  return (

    <section id='about-us' className=' relative flex-col items-center justify-center' >
  <div className=' flex-col pt-20 text-center'>
    <div className='font-anton text-[120px] font-black leading-none'>
      THE NEW SUMMER
    </div>
    <div className='text-coral-red font-anton text-[120px] font-black leading-none'>
      COLLECTION
    </div>
   
    </div>

    <div className='-z-10 absolute bg-coral-red rounded-full pt-4 pl-9 w-[140px] h-[140px] top-[-40px] left-[650px]'>
      <div className='text-[55px] font-palanquin font-bold text-white  w-fit h-[70px]'>
        {statistics[0].value}
      
      </div>
      <p className='text-[20px] font-montserrat text-white  w-fit h-fit'>
        {statistics[0].label}
      </p>
    </div>

  
    <div className='-z-10 absolute border-solid border-2 border-coral-red rounded-full pt-8 pl-7 w-[180px] h-[180px] top-[230px] left-[250px]'>
      <div className='text-[57px] font-palanquin font-bold text-coral-red  w-fit h-[70px]'>
        {statistics[1].value}
      
      </div>
      <p className='text-[22px] font-montserrat text-coral-red  w-fit h-fit'>
        {statistics[1].label}
      </p>
    </div>


    <div className='-z-10 absolute bg-coral-red rounded-full pt-10 pl-10 w-[200px] h-[200px] top-[150px] right-[200px]'>
      <div className='text-[55px] font-palanquin font-bold text-white  w-fit h-[70px]'>
        {statistics[2].value}
      
      </div>
      <p className='text-[20px] font-montserrat text-white  w-fit h-fit'>
        {statistics[2].label}
      </p>
    </div>
    <div className='pt-[100px] pl-[630px]'>
    <Button className="text-bold " label='Learn More' iconURL={arrowRight} onclick={newShoePage} />

    </div>
   

</section>

   
  )
}


export default SuperQuality;
