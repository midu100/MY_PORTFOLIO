import React from 'react'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { PiGithubLogoFill } from 'react-icons/pi'
import { Link } from 'react-router'

const Footer = () => {
  const social = [
    { icon: <FaFacebookF className='text-[20px] md:text-[25px] lg:text-[30px] text-white' /> },
    { icon: <FaLinkedinIn className='text-[20px] md:text-[25px] lg:text-[30px] text-white' /> },
    { icon: <PiGithubLogoFill className='text-[20px] md:text-[25px] lg:text-[30px] text-white' /> },
    { icon: <FaXTwitter className='text-[20px] md:text-[25px] lg:text-[30px] text-white' /> },
  ]

  return (
    <>
      <section id='footer' className='py-[60px] md:py-[80px] lg:py-[91px] bg-[#FFC228]'>
        <div className="container">
          <div className="footerRow flex flex-col lg:flex-row justify-between gap-[40px] lg:gap-0">
            
            {/* Left part */}
            <div className='w-full lg:w-[350px] text-center lg:text-left'>
              <h2 data-aos="fade-up" data-aos-duration="1000"
                className='mb-[20px] md:mb-[30px] text-[35px] md:text-[40px] lg:text-[45px] font-outfit font-bold text-[#000]'>
                KZM
              </h2>
              <p data-aos="fade-up" data-aos-duration="1400"
                className='text-[18px] md:text-[20px] lg:text-[22px] font-outfit font-normal text-[#000]'>
                A personal portfolio.
              </p>

              <div className='flex justify-center lg:justify-between items-center mt-[25px] gap-[15px] flex-wrap'>
                {social.map((item, i) => (
                  <div key={i}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="icons bg-orange-600 w-fit px-[10px] md:px-[15px] py-[10px] md:py-[15px] rounded-[15px] md:rounded-[20px] hover:bg-yellow hover:shadow-[0px_4px_44px_0px_rgba(234,_179,_8,_0.5)] duration-400">
                    <Link to={'#'}>{item.icon}</Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Right part */}
            <div className='flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap gap-[40px] md:gap-[80px] lg:gap-[250px] justify-center text-center lg:text-left w-full'>
              
              {/* Company */}
              <div>
                <h2 data-aos="fade-up" data-aos-duration="1000"
                  className='mb-[20px] md:mb-[30px] text-[24px] md:text-[28px] lg:text-[30px] font-outfit font-medium text-orange-600'>
                  Company
                </h2>
                <p className='text-[18px] md:text-[20px] font-outfit font-normal text-[#000]'>About Me</p>
                <p className='text-[18px] md:text-[20px] font-outfit font-normal text-[#000] mt-[10px] md:mt-[12px]'>Bio</p>
                <p className='text-[18px] md:text-[20px] font-outfit font-normal text-[#000] mt-[10px] md:mt-[12px]'>Work</p>
              </div>

              {/* Social */}
              <div>
                <h2 data-aos="fade-up" data-aos-duration="1000"
                  className='mb-[20px] md:mb-[30px] text-[24px] md:text-[28px] lg:text-[30px] font-outfit font-medium text-orange-600'>
                  Social
                </h2>
                <p className='text-[18px] md:text-[20px] font-outfit font-normal text-[#000]'>Twitter</p>
                <p className='text-[18px] md:text-[20px] font-outfit font-normal text-[#000] mt-[10px] md:mt-[12px]'>LinkedIn</p>
                <p className='text-[18px] md:text-[20px] font-outfit font-normal text-[#000] mt-[10px] md:mt-[12px]'>GitHub</p>
                <p className='text-[18px] md:text-[20px] font-outfit font-normal text-[#000] mt-[10px] md:mt-[12px]'>Facebook</p>
              </div>

              {/* Legal */}
              <div>
                <h2 data-aos="fade-up" data-aos-duration="1000"
                  className='mb-[20px] md:mb-[30px] text-[24px] md:text-[28px] lg:text-[30px] font-outfit font-medium text-orange-600'>
                  Legal
                </h2>
                <p className='text-[18px] md:text-[20px] font-outfit font-normal text-[#000]'>Terms</p>
                <p className='text-[18px] md:text-[20px] font-outfit font-normal text-[#000] mt-[10px] md:mt-[12px]'>Privacy</p>
                <p className='text-[18px] md:text-[20px] font-outfit font-normal text-[#000] mt-[10px] md:mt-[12px]'>Cookies</p>
                <p className='text-[18px] md:text-[20px] font-outfit font-normal text-[#000] mt-[10px] md:mt-[12px]'>Contact</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer
