import React from 'react'
import CommonHead from '../components/common/CommonHead'
import MyPart from '../components/common/MyPart'
import { MdOutlineHomeRepairService } from "react-icons/md";
import SinglePortfolio from '../components/common/SinglePortfolio';


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

                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Portfolio