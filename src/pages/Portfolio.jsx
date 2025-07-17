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

                <div className="ROW flex gap-[15px] mt-[81px]">
                    <MyPart />

                    <div className="PortPart bg-[#8a7f7f2f] py-[30px] px-[20px] rounded-[20px] w-[1200px]">

                        <div  className="head w-fit flex gap-[5px] items-center border-2 rounded-full border-[#3a3737] py-[10px] px-[36px]">
                            <MdOutlineHomeRepairService className='text-[25px] text-white'/>
                            <p className='text-[18px] font-medium text-white font-outfit select-none'>MY PORTFOLIO</p>
                        </div>

                        <div className='flex mt-[30px]'>
                            <SinglePortfolio />
                        </div>

                        <div data-aos="fade-up" data-aos-duration="1000" className='mt-[39px] flex justify-center'>
                            <Link className='px-[36px] py-[15px] bg-orange-600 text-[#fff] text-[20px] font-normal font-outfit rounded-[20px] hover:bg-yellow hover:shadow-[0px_4px_44px_0px_rgba(234,_179,_8,_0.5)] duration-400' to={'https://github.com/midu100'}>See More</Link>
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