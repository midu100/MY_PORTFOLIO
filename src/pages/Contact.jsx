import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationPin } from "react-icons/fa6";

const Contact = () => {
  const contact = [
    {
      icon: <FaPhoneAlt className='text-white text-[35px] md:text-[40px]' />,
      Name: "Call",
      service: "+8801767982982"
    },
    {
      icon: <MdEmail className='text-white text-[35px] md:text-[40px]' />,
      Name: "Email",
      service: "kazimridulwebdev@gmail.com"
    },
    {
      icon: <FaLocationPin className='text-white text-[35px] md:text-[40px]' />,
      Name: "Location",
      service: "Bashundhara R/A, Dhaka, Bangladesh"
    },
  ];

  return (
    <div>
      <section id='contact' className='bg-[#121212] py-[80px] md:py-[100px]'>
        <div className="container mx-auto px-5 md:px-10">
          <div className="row flex flex-col lg:flex-row gap-[40px] lg:gap-[50px]">
            
            {/* Left Side - Info */}
            <div data-aos="fade-down" data-aos-duration="1000" className='flex-1'>
              <h2 data-aos="zoom-in" data-aos-duration="1000" className='text-[26px] md:text-[30px] font-outfit font-bold text-white'>
                <span className='border-b-4 border-yellow'>Let’s</span> Work Together
              </h2>
              <h2 data-aos="fade-up" data-aos-duration="1000" className='text-[26px] md:text-[30px] font-outfit font-bold text-white mt-2'>
                Get In Touch
              </h2>

              <p className='mb-[40px] md:mb-[50px] text-[16px] md:text-[18px] font-outfit text-white font-normal leading-[24px] md:leading-[26px] max-w-[480px]'>
                Have a project in mind or want to discuss potential collaborations? 
                Feel free to reach out. I'm always open to new opportunities and challenges.
              </p>

              <div className='flex flex-col gap-[20px]'>
                {contact.map((item, i) => (
                  <div key={i} data-aos="fade-up" data-aos-duration="1000" className='flex gap-[15px] items-center'>
                    {item.icon}
                    <div>
                      <p className='text-[16px] md:text-[18px] font-bold font-outfit text-white'>{item.Name}</p>
                      <p className='text-[16px] md:text-[18px] font-normal font-outfit text-white'>{item.service}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Message Form */}
            <div data-aos="fade-up" data-aos-duration="1000" className="msg bg-[#191919] py-[30px] md:py-[40px] px-[20px] md:px-[30px] rounded-[20px] flex-1">
              
              <div className="head w-fit flex gap-[5px] items-center border-2 rounded-full border-[#3a3737] py-[8px] md:py-[10px] px-[24px] md:px-[36px] select-none mx-auto lg:mx-0">
                <MdEmail className='text-[22px] md:text-[25px] text-white' />
                <p className='text-[16px] md:text-[18px] font-medium text-white font-outfit select-none'>Message Me</p>
              </div>

              <h2 data-aos="fade-down" data-aos-duration="1000" className='text-[28px] md:text-[40px] font-semibold font-outfit text-white mt-[15px] text-center lg:text-left'>
                Where creativity meets brand excellence.
              </h2>

              {/* Inputs */}
              <div className='flex flex-col md:flex-row justify-between gap-[15px] mt-[30px]'>
                <input 
                  data-aos="fade-right" 
                  data-aos-duration="1000" 
                  className='border border-[#353434] w-full md:w-[48%] rounded-[10px] text-[16px] md:text-[20px] font-outfit text-white outline-0 pl-[10px] py-[10px] bg-transparent'
                  type='text' 
                  placeholder='Your Name' 
                />
                <input 
                  data-aos="fade-left" 
                  data-aos-duration="1000" 
                  className='border border-[#353434] w-full md:w-[48%] rounded-[10px] text-[16px] md:text-[20px] font-outfit text-white outline-0 pl-[10px] py-[10px] bg-transparent'
                  type='email' 
                  placeholder='Example@gmail.com' 
                />
              </div>

              <div className='mt-[20px]'>
                <textarea 
                  data-aos="fade-down" 
                  data-aos-duration="1000" 
                  className='border border-[#353434] w-full rounded-[10px] text-[16px] md:text-[20px] font-outfit text-white pl-[10px] py-[10px] bg-transparent h-[150px] md:h-[200px] resize-none' 
                  placeholder='Message'
                />
              </div>

              {/* Button */}
              <div data-aos="fade-up" data-aos-duration="1000" className='contactBtn flex justify-center mt-[25px]'>
                <button className='relative overflow-hidden px-[30px] py-[10px] bg-yellow text-black font-outfit font-semibold text-[16px] md:text-[18px] rounded-full transition-all duration-300 hover:bg-white flex items-center gap-[8px]'>
                  <div className="svg-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22">
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="currentColor"
                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 
                        19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                      ></path>
                    </svg>
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
