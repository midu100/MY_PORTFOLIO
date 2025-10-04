import React from 'react'
import MyPart from './common/MyPart'
import { IoIosPricetags } from "react-icons/io";
import SinglePrice from './common/SinglePrice';

const Pricing = () => {
  return (
    <div>
      <section id='pricing' className='bg-[#131313] py-[60px] sm:py-[90px]'>
        <div className="container">

          <div className='flex flex-col sm:flex-row gap-[20px]'>

            {/* MyPart: hidden on mobile */}
            <div className='hidden sm:block'>
              <MyPart />
            </div>

            {/* Pricing Cards Section */}
            <div className="Price bg-[#191919] px-[15px] sm:px-[20px] py-[20px] sm:py-[30px] rounded-[20px] flex-1">
              
              {/* Header */}
              <div className="head w-fit flex gap-[5px] items-center border-2 rounded-full border-[#3a3737] py-[8px] px-[25px] sm:py-[10px] sm:px-[36px] select-none">
                <IoIosPricetags className='text-[20px] sm:text-[25px] text-white'/>
                <p className='text-[16px] sm:text-[18px] font-medium text-white font-outfit select-none'>MY PRICING</p>
              </div>

              <h2 data-aos="fade-up" data-aos-duration="1000" className='text-[28px] sm:text-[38px] font-outfit font-bold text-white mt-[15px] sm:mt-[20px]'>
                Amazing Pricing For Your Projects
              </h2>
              <p data-aos="fade-up" data-aos-duration="1000" className='text-[18px] sm:text-[25px] font-normal font-outfit text-white mt-[10px] sm:mt-[10px]'>
                We get involved with clients to solve their design problems and provide more-value™ to them.
              </p>

              {/* Pricing Cards */}
              <div className='row mt-[30px] sm:mt-[50px] flex flex-col sm:flex-row gap-[20px]'>
                <SinglePrice Status={'Standard'} price={'$50'} PathLink={'https://midu100.github.io/Moder_SignUp/'} />
                <SinglePrice Status={'Premium'} price={'$100'} PathLink={'https://midu100.github.io/Moder_SignUp/'} />
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Pricing
