import React from 'react'
import { Link } from 'react-router';
import { IoIosArrowRoundForward } from "react-icons/io";

const SingleService = ({Icon, Namee, para}) => {
  return (
    <>
      <div 
        data-aos="fade-up" 
        data-aos-duration="1000" 
        className='bg-[#0e0d0d] w-full sm:w-[400px] md:w-[500px] px-4 sm:px-6 md:px-[20px] py-6 sm:py-8 md:py-[30px] rounded-[20px] border border-gray-500 mt-4 sm:mt-5 md:mt-[10px] hover:shadow-[0px_3px_33px_-4px_rgba(234,_179,_8,_0.5)] duration-400'
      >
        <div className='flex gap-2 sm:gap-3 md:gap-[10px] items-center'>
          {Icon}
          <h2 
            data-aos="fade-down" 
            data-aos-duration="1800" 
            className='text-[20px] sm:text-[22px] md:text-[25px] font-semibold font-montserrat text-white'
          >
            {Namee}
          </h2>
        </div>

        <p className='text-[14px] sm:text-[16px] md:text-[19px] font-normal font-montserrat text-white leading-[22px] sm:leading-[26px] md:leading-[30px] my-4 sm:my-5 md:my-[20px]'>
          {para}
        </p>

        <Link 
          className='read-more w-fit text-[16px] sm:text-[18px] md:text-[22px] text-white font-montserrat font-medium flex items-center gap-2 sm:gap-3 md:gap-[5px]' 
          to={"/"}
        >
          READ MORE <IoIosArrowRoundForward className='text-[25px] sm:text-[30px] md:text-[35px]'/>
        </Link>
      </div>
    </>
  )
}

export default SingleService
