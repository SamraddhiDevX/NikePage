import React from 'react'
import Button from './Button'
import ShoeCard from './ShoeCard'
import { arrowRight } from '../assets/icons'
import { bigShoe1 } from '../assets/images'
import { useState } from 'react'

const Hero = () => {
  const[bigShoeImg,setBigShoeImg]=useState(bigShoe1)
  
  return (
    <section    id='home'
    className='w-full flex xl:flex-row flex-col justify-start min-h-screen max-container mt-[40px] ml-[20px]'
  >
      <div className='relative xl:w-2/5 flex flex-col justify-start items-start ml-10  max-xl:padding-x mt-10'>
     <h1 className=' font-anton text-8xl max-sm:text-[50px] max-sm:leading-[50px] font-bold'>
          <span className=' relative z-10 '>
            The New Arrival
          </span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes
        </h1>
        <p className='font-montserrat text-slate-gray text-bold mt-6 mb-10 sm:max-w-sm'>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
      <Button className="text-bold" label='Shop now' iconURL={arrowRight} />

       
      </div>

     <div className='relative flex-1 flex justify-center items-center  mr-[10px] mb-[300px]'>
        <img
          src={bigShoeImg}
          alt='shoe colletion'
          className='relative z-10 '
        />
        {/* <div className='flex sm:gap-6 gap-4 absolute
        -bottom-[5%] sm:left-[10%] max-sm:px-6 '>
          {shoes.map((shoe,index) => (
            <div key={shoe}>
              <ShoeCard 
              imgURL={shoe}
              changeBigShoeImage={(shoe)=>
                setBigShoeImg(shoe)}
              bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div> */}
    </div>

   
  
    </section>
  )
}

export default Hero
