import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationPin } from "react-icons/fa6";
import { IoIosPricetags } from 'react-icons/io';

const Contact = () => {
    const contact = [
        {
            icon : <FaPhoneAlt  className='text-white text-[40px]'/>,
            Name :"call",
            service : "+8801767982982"
        },
        {
            icon : <MdEmail  className='text-white text-[40px]'/>,
            Name :"Email",
            service : "kazimridulwebdev@gmail.com"
        },
        {
            icon : <FaLocationPin  className='text-white text-[40px]'/>,
            Name :"Location",
            service : "Bashundhara R/A,Dhaka,Bangladesh"
        },
    ]
  return (
    <div>
        <section id='contact' className='bg-[#121212] py-[100px]'>
            <div className="container">
                <div className="row flex gap-[50px]">
                    <div data-aos="fade-down" data-aos-duration="1000">
                        <h2 data-aos="zoom-in" data-aos-duration="1000" className='text-[30px] font-outfit font-bold text-white'><span className='border-b-4 border-yellow'>Let’s</span> Work Together</h2>
                        <h2 data-aos="fade-up" data-aos-duration="1000" className='text-[30px] font-outfit font-bold text-white'>Get In Touch</h2>
                        <p className='mb-[50px] text-[18px] font-outfit text-white font-normal w-[482px] leading-[22px]'>Have a project in mind or want to discuss potential collaborations? Feel free to reach out. I'm always open to new opportunities and challenges.</p>

                        {

                            contact.map((item,i)=>{
                                return(
                                 <div key={i} data-aos="fade-up" data-aos-duration="1000" className='flex gap-[20px] items-center mt-[10px]'>
                                    {item.icon}
                                    <div>
                                        <p className='text-[18px] font-bold font-outfit text-white'>{item.Name}</p>
                                        <p className='text-[18px] font-normal font-outfit text-white'>{item.service}</p>
                                    </div>
                                 </div>    
                                )
                            })

                        }


                    </div>


                    <div data-aos="fade-up" data-aos-duration="1000" className="msg bg-[#191919] py-[40px] px-[30px] w-[1100px] rounded-[20px]">
                        <div  className="head w-fit flex gap-[5px] items-center border-2 rounded-full border-[#3a3737] py-[10px] px-[36px] select-none">
                            <MdEmail  className='text-[25px] text-white'/>
                            <p className='text-[18px] font-medium text-white font-outfit select-none'>Message Me</p>
                        </div>
                        <h2 data-aos="fade-down" data-aos-duration="1000" className='text-[40px] font-semibold font-outfit text-white mt-[15px]'>Where creativity meets brand excellence.</h2>
                        <div className='w-full h-[50px] flex justify-between mt-[40px]'>
                            <input data-aos="fade-right" data-aos-duration="1000" className='border border-[#353434] w-[45%] rounded-[10px] text-[20px] font-outfit text-white outline-0 pl-[10px]' type='text' placeholder='Your Name' />
                            <input data-aos="fade-left" data-aos-duration="1000" className='border border-[#353434] w-[45%] rounded-[10px] text-[20px] font-outfit text-white outline-0 pl-[10px]' type='email' placeholder='Example@gmail.com' />
                        </div>
                        <div className='w-full h-[200px] flex mt-[20px]'>
                            <textarea data-aos="fade-down" data-aos-duration="1000" className='border border-[#353434] w-full rounded-[10px] text-[20px] font-outfit text-white pl-[10px]' placeholder='Message' />
                            {/* <input className='border border-[#353434] w-full rounded-[10px] text-[20px] font-outfit text-white outline-0 pl-[10px]' type='text' placeholder='Message' /> */}
                        </div>


                        <div data-aos="fade-up" data-aos-duration="1000" className='contactBtn flex justify-center mt-[20px]'>
                            
                                    <button>
                                    <div className="svg-wrapper-1">
                                        <div className="svg-wrapper">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                         >
                                         <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path
                                             fill="currentColor"
                                            d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                         ></path>
                                        </svg>
                                                                             </div>
                                   </div>
                                    <span>Send</span>
                                   </button>

                        </div>


                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Contact