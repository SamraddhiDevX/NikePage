import React from 'react'
import ShoeCard from './ShoeCard'
import { products } from '../Constants'
import leftarrow from '../assets/images/leftarrow.png'
import rightarrow from '../assets/images/rightarrow.png'
import { star } from '../assets/icons'
import shoe9 from '../assets/images/shoe9.jpg'
import Button from './Button'
function PopularProducts() {

  const handleleftclick =() =>{
     var slider= document.getElementById('slider')
     slider.scrollLeft=slider.scrollLeft-700
  }
  const handlerightclick =() =>{
    var slider= document.getElementById('slider')
    slider.scrollLeft=slider.scrollLeft+700
 }

  return (
    <section id="products" 
          className='padding-x  ml-[20px]'>
             <h2  className='font-anton
               font-black text-4xl 
                    leading-none'>Our 
                    <span className="text-coral-red fill-[#ff4040]"> Popular </span>
                   Products
              </h2 >
              <p className='font-montserrat text-slate-gray text-bold mt-6 mb-10 w-[500px]'>
               Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design and value.
              </p>
        

      <div className="flex items-center">
         <div onClick={handleleftclick} className="w-[70px] h-[70px] mr-[10px] mt-[-80px] opacity-70 cursor-pointer hover:opacity-100">
           <img src={leftarrow} alt="" />
         </div>    
        <div id="slider" className='flex overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>

         {products.map((index)=>
         (
           <div className='m-4 hover:scale-110 ease-in-out duration-300'>
            <ShoeCard imgURL={index.imgURL}/>
             <div className='flex m-2'>
              <img src={star} alt="rating" /> 
                <p className='font-montserrat text-slate-gray text-bold p-2'>(4.5)</p>
             </div>
             <div className='font-montserrat text-bold pb-2'>Nike Jordan-011 </div>
               <p className='font-montserrat text-slate-gray text-bold '>$233.67</p>
         
              </div>

          ))}
        </div>
            <div onClick={handlerightclick} className="w-[70px] h-[70px] m-10  mt-[-70px] opacity-50 cursor-pointer hover:opacity-100">
              <img src={rightarrow} alt="" />
            </div>
      </div>
      
      
      <div className='flex mt-20'>
        <div >
          <h2  className='font-anton
                            text-4xl 
                             leading-normal'>
                              We Provide You <span className="text-coral-red 
                            fill-[#ff4040]">  
                             Super</span>
            <br />
            <span className="text-coral-red 
                            fill-[#ff4040]"> 
                            Quality
            </span> Shoes
          </h2 >
          <p className='font-montserrat text-slate-gray  mt-10 w-[500px]'>
            Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
            <br />
            <br />

            Our dedication to detail and excellence ensures your satisfaction.
          </p>
        </div>
        <div className='flex justify-between items-center ml-[40px] w-[600px] h-[500px] bg-[#f6f6f6] rounded-md'>
         <img src={shoe9} alt="" width={550} height={400}/>
        </div>
      </div>
    <div className='mt-[-100px]'>
    <Button className="text-bold " label='View Details' />

    </div>
    </section>
  )
}

export default PopularProducts
