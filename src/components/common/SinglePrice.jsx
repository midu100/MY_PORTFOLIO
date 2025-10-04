import React from 'react'
import { Link } from 'react-router'
import { PiArrowCircleRightFill } from "react-icons/pi";

const SinglePrice = ({ Status, price, PathLink }) => {
    const Item = [
        { icon: <PiArrowCircleRightFill className='text-[#28E98C] text-[30px] sm:text-[40px]' />, text: 'Fronted Web Developing' },
        { icon: <PiArrowCircleRightFill className='text-[#28E98C] text-[30px] sm:text-[40px]' />, text: 'Full Responsive' },
        { icon: <PiArrowCircleRightFill className='text-[#28E98C] text-[30px] sm:text-[40px]' />, text: 'Eye Catching Web Design' },
        { icon: <PiArrowCircleRightFill className='text-[#28E98C] text-[30px] sm:text-[40px]' />, text: 'Unlimited Revision' }
    ];

    return (
        <div 
            data-aos="fade-up" 
            data-aos-duration="1000" 
            className='bg-[#090909] py-[30px] sm:py-[40px] px-[15px] sm:px-[20px] rounded-[20px] w-full sm:w-[550px] border border-gray-500 mx-auto sm:mx-0'
        >

            {/* Status Badge */}
            <div className='flex md:justify-end mb-4'>
                <div data-aos="zoom-in" data-aos-duration="1000" className='px-[40px] sm:px-[60px] py-[15px] sm:py-[20px] rounded-[20px] bg-[#28E98C] w-fit'>
                    <p className='text-black text-[20px] sm:text-[25px] font-outfit font-normal select-none'>{Status}</p>
                </div>
            </div>
            
            {/* Price */}
            <h2 className='text-[32px] sm:text-[45px] font-medium font-montserrat text-[#28E98C] md:text-center sm:text-left'>{price}</h2>

            {/* Sign Up Button */}
            <div className='mt-[20px] mb-[30px] flex justify-center sm:justify-start'>
                <Link 
                    className='py-[8px] sm:py-[10px] px-[20px] sm:px-[30px] border-2 border-white rounded-full text-[16px] sm:text-[20px] font-outfit text-white hover:bg-white hover:text-black duration-300' 
                    to={PathLink}
                >
                    Sign Up
                </Link>
            </div>

            {/* Features List */}
            <div className='flex flex-col gap-[12px]'>
                {Item.map((items, i) => (
                    <div key={i} data-aos="fade-up" data-aos-duration="1000" className='flex gap-[10px] items-center'>
                        {items.icon}
                        <p className='text-[16px] sm:text-[20px] text-white font-outfit font-normal'>{items.text}</p>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default SinglePrice;
