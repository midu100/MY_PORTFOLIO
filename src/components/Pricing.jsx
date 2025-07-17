import React from 'react'
import MyPart from './common/MyPart'

import { IoIosPricetags } from "react-icons/io";
import { Link } from 'react-router';
import SinglePrice from './common/SinglePrice';

const Pricing = () => {
  return (
    <div>
        <section id='pricicng' className='bg-[#131313] py-[90px]'>
            <div className="container">

                <div className="row flex gap-[15px]">
                    <MyPart />

                    <div className="Price bg-[#191919] px-[20px] py-[30px] rounded-[20px] w-[1200px]">
                        <div  className="head w-fit flex gap-[5px] items-center border-2 rounded-full border-[#3a3737] py-[10px] px-[36px] select-none">
                            <IoIosPricetags  className='text-[25px] text-white'/>
                            <p className='text-[18px] font-medium text-white font-outfit select-none'>MY PRICING</p>
                        </div>
                        <h2 data-aos="fade-up" data-aos-duration="1000" className='text-[38px] font-outfit font-bold text-white mt-[20px]'>Amazing Pricing For Your Projects</h2>
                        <p data-aos="fade-up" data-aos-duration="1000" className='text-[25px] font-normal font-outfit text-white'>We get involved with clients to solve their design problems and provide more-value™ to them.</p>

                        <div className='row mt-[50px] flex justify-between'>
                            <SinglePrice Status={'Standard'} price={'$50'} PathLink={'https://midu100.github.io/Moder_SignUp/'}/>
                            <SinglePrice Status={'Premium'} price={'$100'} PathLink={'https://midu100.github.io/Moder_SignUp/'}/>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </div>
  )
}

export default Pricing