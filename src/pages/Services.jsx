import React from 'react'
import CommonHead from '../components/common/CommonHead'
import MyPart from '../components/common/MyPart'
import { PiBellRingingThin } from "react-icons/pi";
import SingleService from '../components/common/SingleService';
import { CgIfDesign } from 'react-icons/cg';
import { MdOutlineDeveloperMode } from "react-icons/md";
import { DiResponsive } from "react-icons/di";
import { PiPlugsConnectedLight } from "react-icons/pi";


const MyService = () => {
  return (
    <div>
        <section id='myService' className='bg-[#000000] py-[61px]'>
            <div className="container">
                <CommonHead Heading={'MY SERVICES'}/>
                <div className="serviceRow mt-[81px] flex gap-[20px] ">
                    <MyPart />

                    <div className="SERVICE bg-[#8a7f7f2f] p-[20px] rounded-[20px] w-[1200px]">
                        <div className="head w-fit flex gap-[5px] items-center border-2 rounded-full border-[#3a3737] py-[10px] px-[36px]">
                            <PiBellRingingThin className='text-[25px] text-white'/>
                            <p className='text-[18px] font-medium text-white font-outfit select-none'>MY SERVICES</p>
                        </div>

                        <h1 className='text-[36px] font-semibold font-outfit text-white mt-[20px]'>What Services I Provide</h1>

                        <div className='row flex justify-between flex-wrap '>
                            <SingleService Icon={<CgIfDesign className='text-[60px] text-[#28E98C]'/>} Namee={'WEB DESIGN'} para={'I design clean, modern, and responsive websites that offer a smooth user experience across all devices. My focus is on creating visually appealing layouts that align with your brand and convert visitors into customers'} />
                            <SingleService Icon={<MdOutlineDeveloperMode className='text-[60px] text-[#28E98C]'/>} Namee={'WEB DEVELOPMENT'} para={'I build responsive, fast, and user-friendly websites using modern technologies like HTML, CSS, JavaScript, React, and Tailwind CSS. From clean design to smooth functionality — I create web solutions that are both visually appealing and performance-driven.'} />
                            <SingleService Icon={<DiResponsive className='text-[60px] text-[#28E98C]'/>} Namee={'RESPONSIVE'} para={'I create websites that look great and work perfectly on all devices — from desktops to smartphones — ensuring a smooth and consistent user experience.'} />
                            <SingleService Icon={<PiPlugsConnectedLight className='text-[60px] text-[#28E98C]'/>} Namee={'API CONNECTION'} para={'I seamlessly connect applications to external services using APIs, enabling real-time data exchange and enhanced functionality.'} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default MyService