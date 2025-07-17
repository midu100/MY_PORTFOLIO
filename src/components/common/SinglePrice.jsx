import React from 'react'
import { Link } from 'react-router'
import { PiArrowCircleRightFill } from "react-icons/pi";

const SinglePrice = ({Status,price,PathLink}) => {
    const Item = [
        {
            icon : <PiArrowCircleRightFill className='text-[#28E98C] text-[40px] '/>,
            text :'Fronted Web Developing'
        },
        {
            icon : <PiArrowCircleRightFill className='text-[#28E98C] text-[40px] '/>,
            text :'Full Responsive'
        },
        {
            icon : <PiArrowCircleRightFill className='text-[#28E98C] text-[40px] '/>,
            text :'Eye Catching Web Design'
        },
        {
            icon : <PiArrowCircleRightFill className='text-[#28E98C] text-[40px] '/>,
            text :'Unlimited Revision'
        }
    ]
  return (
    <>
        <div data-aos="fade-up" data-aos-duration="1000" className='bg-[#090909] py-[40px] px-[20px] rounded-[20px] w-[550px] border border-gray-500'>

            <div className='flex justify-end'>
                 <div data-aos="zoom-in" data-aos-duration="1000" className='px-[60px] py-[20px] rounded-[20px] bg-[#28E98C] w-fit'>
                     <p className='text-black text-[25px] font-outfit font-normal select-none'>{Status}</p>
                 </div>
            </div>
            
            <h2 className='text-[45px] font-medium font-montserrat text-[#28E98C] '>{price}</h2>
            <div className='mt-[25px] mb-[40px]'>
                <Link className='py-[10px] px-[30px] border-2 border-white rounded-full text-[20px] font-outfit text-white hover:bg-white hover:text-black duration-300 ' to={PathLink}>Sign Up</Link>
            </div>

            {
                Item.map((items,i)=>{
                    return(
                        <div data-aos="fade-up" data-aos-duration="1000" key={i} className='mt-[10px] flex gap-[10px] items-center'>
                            {items.icon}
                            <p className='text-[20px] text-white font-outfit font-normal'>{items.text}</p>
                       </div>
                    )
                })
            }

            


        </div>
    </>
  )
}

export default SinglePrice