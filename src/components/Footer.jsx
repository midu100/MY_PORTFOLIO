import React from 'react'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { PiGithubLogoFill } from 'react-icons/pi'
import { Link } from 'react-router'

const Footer = () => {
    const social = [
        {
            icon: <FaFacebookF className=' text-[30px] text-white'/>,
            
        },
        {
            icon:<FaLinkedinIn className=' text-[30px] text-white'/>
        },
        {
            icon:<PiGithubLogoFill className=' text-[30px] text-white'/>
        },
        {
            icon:<FaXTwitter className=' text-[30px] text-white'/>
        },
      ]


  return (
    <>
        <section id='footer' className='py-[91px] bg-[#FFC228]'>
            <div className="container">
                <div className="footerRow flex justify-between">
                    <div className='w-[280px]'>
                        <h2 className='mb-[30px] text-[45px] font-outfit font-bold text-[#000]'>KZM</h2>
                        <p className='text-[22px] font-outfit font-normal text-[#000]'>A personal portfolio.</p>

                        <div className='flex justify-between items-center mt-[30px]'>
                            {
                                 social.map((item,i)=>{
                                     return(
                                        <div key={i} className="icons bg-orange-600 w-fit px-[15px] py-[15px] rounded-[20px] hover:bg-yellow hover:shadow-[0px_4px_44px_0px_rgba(234,_179,_8,_0.5)] duration-400">
                                            <Link to={'#'} >{item.icon}</Link>
                                         </div>
                                    )
                                 })
                            }
                                                        
                        </div>
                    </div>

                    <div className='flex gap-[250px]'>
                        <div>
                            <h2 className='mb-[30px] text-[30px] font-outfit font-medium text-orange-600'>Company</h2>
                            <p className='text-[20px] font-outfit font-normal text-[#000]'>About Me</p>
                            <p className='text-[20px] font-outfit font-normal text-[#000] mt-[12px]'>Bio</p>
                            <p className='text-[20px] font-outfit font-normal text-[#000] mt-[12px]'>Work</p>
                        </div>

                        <div>
                            <h2 className='mb-[30px] text-[30px] font-outfit font-medium text-orange-600'>Social</h2>
                            <p className='text-[20px] font-outfit font-normal text-[#000]'>Twitter</p>
                            <p className='text-[20px] font-outfit font-normal text-[#000] mt-[12px]'>Linkedln</p>
                            <p className='text-[20px] font-outfit font-normal text-[#000] mt-[12px]'>GitHub</p>
                            <p className='text-[20px] font-outfit font-normal text-[#000] mt-[12px]'>Facebook</p>
                        </div>

                        <div>
                            <h2 className='mb-[30px] text-[30px] font-outfit font-medium text-orange-600'>Legal</h2>
                            <p className='text-[20px] font-outfit font-normal text-[#000]'>Terms</p>
                            <p className='text-[20px] font-outfit font-normal text-[#000] mt-[12px]'>Privacy</p>
                            <p className='text-[20px] font-outfit font-normal text-[#000] mt-[12px]'>Cookies</p>
                            <p className='text-[20px] font-outfit font-normal text-[#000] mt-[12px]'>Contact</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Footer