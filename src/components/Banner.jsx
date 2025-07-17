import React, { useEffect } from 'react'
import { Link } from 'react-router'
import Ellipse from '../assets/img/Ellipse.png'
import me from '../assets/img/me.png'
import me1 from '../assets/img/me1.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import bannerPic from '../assets/img/bannerPic.png'
import { useCountUp } from 'react-countup'





const Banner = () => {
    AOS.init();

    useEffect(() => {
    AOS.init({ duration: 1000 }); // duration optional
  }, []);

//   counter
 useCountUp({ ref: 'counterId', end: 10, duration: 5 });
  useCountUp({ ref: 'counterId2', end: 20, duration: 5 });
  useCountUp({ ref: 'counterId3', end: 2, duration: 5 });

  return (
    <div>
        <section id='banner' className='bg-[#040404] pt-[100px] border-b border-[#3b3939]'>
            <div className="container">
                <div className="bannerRow flex justify-between">

                    <div id='bannerText' className='w-[450px]'>
                        <h2 data-aos="fade-down"  data-aos-duration="2000" className='text-[30px] font-bold font-outfit text-white'>Hi, I’m</h2>
                        <div className='flex gap-[24px] items-center mb-[26px]'>
                          {/* <span className='w-[200px] h-[2px] bg-yellow inline-block'></span> */}
                          <h1 data-aos="zoom-in-down" data-aos-duration="2000" className=' text-[86px] font-bold font-outfit text-white leading-[70px]'>Kazi Mridul</h1>
                        </div>

                        <h2 className='text-[24px] font-normal font-outfit text-yellow text-center'>Fullstack</h2>
                        <div className="typewriter"><h1 className='text-[45px] font-medium font-outfit text-white leading-[50px] text-center'>Web Developer</h1></div>

                        {/* <h2 className='text-[45px] font-medium font-outfit text-white leading-[50px] text-center'>Web Developer</h2> */}
                        <p className='mt-[10px] text-[18px] font-outfit text-yellow leading-[20px] font-normal w-340px text-center'>I craft responsive, scalable web apps with clean code and user-focused design. Passionate about solving problems and building end-to-end digital experiences.</p>

                        <div className='flex justify-between items-center mt-[60px]'>
                            <p data-aos="fade-down"  data-aos-duration="1000" className='text-[18px] font-outfit font-normal text-white '>Bio</p>
                            <span data-aos="fade-down"  data-aos-duration="1500" className='h-[20px] w-[2px] bg-yellow inline-block'></span>
                            <p data-aos="fade-down"  data-aos-duration="2000" className='text-[18px] font-outfit font-normal text-white '>my Skills </p>
                            <span data-aos="fade-down"  data-aos-duration="2500" className='h-[20px] w-[2px] bg-yellow inline-block'></span>
                            <p data-aos="fade-down"  data-aos-duration="3000" className='text-[18px] font-outfit font-normal text-white '>my Achievements  </p>
                        </div>

                        <div className='mt-[40px]'>
                            <Link className=' py-[12px] px-[142px] text-[18px] font-outfit font-normal text-white border border-white rounded-[8px] hover:bg-sky-600 hover:text-black hover:border-0 duration-300' to={'#'}>Contact Me</Link>
                        </div>

                        <div className='flex justify-between items-center mt-[50px]'>
                            <div data-aos="fade-right"  data-aos-duration="1500" className='w-[145px]'>
                                
                                <h2 className='text-[35px] font-outfit font-medium text-yellow text-center'><span id='counterId'>10</span>+</h2>
                                <p className='text-[18px] font-normal font-outfit text-white text-center leading-[5px]'>Clients globally</p>
                            </div>

                            <div data-aos="fade-right"  data-aos-duration="2200" className='w-[145px]'> 
                                <h2 className='text-[35px] font-outfit font-medium text-yellow text-center'><span id='counterId2'></span>+</h2>
                                <p className='text-[18px] font-normal font-outfit text-white text-center leading-[5px]'>web projects</p>
                            </div>

                            <div data-aos="fade-right"  data-aos-duration="2500" className='w-[145px]'> 
                                <h2 className='text-[35px] font-outfit font-medium text-yellow text-center'><span id='counterId3'></span>+</h2>
                                <p className='text-[17px] font-normal font-outfit text-white text-center leading-[5px]'>Year of Experience</p>
                            </div>
                        </div>
                    </div>


                    <div className="bannerImg ">
                        {/* <div className="circle relative">
                            <img src={Ellipse} />
                        </div> */}

                        <div className='w-[700px] bg-yellow rounded-full'>
                            <img className='w-[700px] h-[700px] ' src={bannerPic} alt='me' />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </div>
  )
}

export default Banner