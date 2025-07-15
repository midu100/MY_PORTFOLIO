import React from 'react'
import { CgIfDesign } from "react-icons/cg";
import { Link } from 'react-router';
import { IoIosArrowRoundForward } from "react-icons/io";

const SingleService = ({Icon,Namee,para,}) => {
  return (
    <>
        <div className='bg-[#0e0d0d] w-[500px] px-[20px] py-[30px] rounded-[20px] border border-gray-500 mt-[10px] hover:shadow-[0px_3px_33px_-4px_rgba(234,_179,_8,_0.5)] duration-400'>
            <div className='flex gap-[10px] items-center'>
                {Icon}
                <h2 className='text-[25px] font-semibold font-montserrat text-white'>{Namee}</h2>
            </div>

            <p className='text-[19px] font-normal font-montserrat text-white leading-[30px] my-[20px]'>{para}</p>

            <Link className='read-more w-fit text-[22px] text-white font-montserrat font-medium flex items-center gap-[5px]' to={"/"}>READ MORE <IoIosArrowRoundForward className='text-[35px]'/> </Link>
        </div>
    </>
  )
}

export default SingleService