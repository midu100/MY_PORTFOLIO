import React from 'react'
import CommonHead from '../components/common/CommonHead'
import MyPart from '../components/common/MyPart'
import { MdOutlineHomeRepairService } from "react-icons/md";
import SinglePortfolio from '../components/common/SinglePortfolio';
import Pricing from '../components/Pricing';
import { Link } from 'react-router';

const Portfolio = () => {
  return (
    <div>
      <section id='portfolio' className='py-[70px] bg-[#121212]'>
        <div className="container">
          <CommonHead Heading={'PORTFOLIO'}/>

          <div className="flex flex-col lg:flex-row gap-6 mt-[50px]">
            
            {/* Desktop only MyPart */}
            <div className="hidden lg:block w-[350px]">
              <MyPart />
            </div>

            {/* Portfolio Part */}
            <div className="PortPart flex-1 bg-[#8a7f7f2f] py-[30px] px-[20px] rounded-[20px]">
              
              {/* Head */}
              <div className="head w-fit flex gap-[5px] items-center border-2 rounded-full border-[#3a3737] py-[10px] px-[20px]">
                <MdOutlineHomeRepairService className='text-[25px] text-white'/>
                <p className='text-[16px] sm:text-[18px] font-medium text-white font-outfit select-none'>MY PORTFOLIO</p>
              </div>

              {/* Portfolio Grid */}
              <div className='mt-[30px]'>
                <SinglePortfolio />
              </div>

              {/* See More Button */}
              <div data-aos="fade-up" data-aos-duration="1000" className='mt-[30px] flex justify-center'>
                <Link 
                  className='px-[24px] sm:px-[36px] py-[12px] sm:py-[15px] bg-orange-600 text-white text-[16px] sm:text-[20px] font-outfit font-medium rounded-[20px] hover:bg-yellow hover:shadow-[0px_4px_44px_0px_rgba(234,_179,_8,_0.5)] duration-300' 
                  to={'https://github.com/midu100'}>
                  See More
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Pricing />
    </div>
  )
}

export default Portfolio
