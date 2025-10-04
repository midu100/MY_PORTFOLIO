import React, { useEffect } from 'react'
import { Link } from 'react-router'
import Ellipse from '../assets/img/Ellipse.png'
import me from '../assets/img/me.png'
import me1 from '../assets/img/me1.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import bannerPic from '../assets/img/bannerPic.png'
import { useCountUp } from 'react-countup'
import MyPart from './common/MyPart'

const Banner = () => {
  AOS.init();

  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  useCountUp({ ref: 'counterId', end: 10, duration: 5 });
  useCountUp({ ref: 'counterId2', end: 20, duration: 5 });
  useCountUp({ ref: 'counterId3', end: 2, duration: 5 });

  return (
    <div>
      <section id='banner' className='bg-[#040404] md:pt-[100px] pb-[20px] border-b border-[#3b3939]'>
        <div className="container">
          {/* ✅ Responsive Flex Control */}
          <div className="bannerRow flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-0">

            {/* ===== Text Section ===== */}
            <div id='bannerText' className='w-full md:w-[450px] text-center md:text-left'>
              <h2 data-aos="fade-down" data-aos-duration="2000" className='text-[28px] md:text-[30px] font-bold font-outfit text-white'>
                Hi, I’m
              </h2>

              <div className='flex flex-col md:flex-row md:gap-[24px] items-center md:items-start mb-[26px]'>
                <h1 data-aos="zoom-in-down" data-aos-duration="2000" className='text-[55px] md:text-[86px] font-bold font-outfit text-white leading-[60px] md:leading-[70px]'>
                  Kazi Mridul
                </h1>
              </div>

              <h2 className='text-[20px] md:text-[24px] font-normal font-outfit text-yellow text-center md:text-left'>
                Fullstack
              </h2>
              <div className="typewriter">
                <h1 className='text-[32px] md:text-[45px] font-medium font-outfit text-white leading-[40px] md:leading-[50px] text-center md:text-left'>
                  Web Developer
                </h1>
              </div>

              <p className='mt-2 md:mt-[10px] text-[16px] md:text-[18px] font-outfit text-yellow leading-[1] md:leading-[20px] font-normal text-center md:text-left px-4 md:px-0 md:w-[340px]'>
                   I craft responsive, scalable web apps with clean code and user-focused design. Passionate about solving problems and building end-to-end digital experiences.
              </p>


              <div className='flex px-[10px] md:flex-row justify-between items-center mt-[40px] md:mt-[60px] gap-3 md:gap-0'>
                <p data-aos="fade-down" data-aos-duration="1000" className='text-[16px] md:text-[18px] font-outfit font-normal text-white'>Bio</p>
                <span data-aos="fade-down" data-aos-duration="1500" className='h-[20px] md:h-[20px] w-[2px] md:w-[2px] bg-yellow inline-block'></span>
                <p data-aos="fade-down" data-aos-duration="2000" className='text-[16px] md:text-[18px] font-outfit font-normal text-white'>My Skills</p>
                <span data-aos="fade-down" data-aos-duration="2500" className='h-[20px] md:h-[20px] w-[2px] md:w-[2px] bg-yellow inline-block'></span>
                <p data-aos="fade-down" data-aos-duration="3000" className='text-[16px] md:text-[18px] font-outfit font-normal text-white'>My Achievements</p>
              </div>

              <div className='mt-[30px] md:mt-[40px]'>
                <Link
                  className='py-[12px] px-[80px] md:px-[142px] text-[16px] md:text-[18px] font-outfit font-normal text-white border border-white rounded-[8px] hover:bg-sky-600 hover:text-black hover:border-0 duration-300'
                  to={'#'}
                >
                  Contact Me
                </Link>
              </div>

              <div className='flex  md:flex-row justify-between items-center mt-[40px] md:mt-[50px] gap-6 md:gap-0'>
                <div data-aos="fade-right" data-aos-duration="1500" className='w-[145px]'>
                  <h2 className='text-[30px] md:text-[35px] font-outfit font-medium text-yellow text-center md:text-left'>
                    <span id='counterId'>10</span>+
                  </h2>
                  <p className='text-[16px] md:text-[18px] font-normal font-outfit text-white text-center md:text-left leading-[15px]'>Clients globally</p>
                </div>

                <div data-aos="fade-right" data-aos-duration="2200" className='w-[145px]'>
                  <h2 className='text-[30px] md:text-[35px] font-outfit font-medium text-yellow text-center md:text-left'>
                    <span id='counterId2'></span>+
                  </h2>
                  <p className='text-[16px] md:text-[18px] font-normal font-outfit text-white text-center md:text-left leading-[15px]'>Web projects</p>
                </div>

                <div data-aos="fade-right" data-aos-duration="2500" className='w-[145px]'>
                  <h2 className='text-[30px] md:text-[35px] font-outfit font-medium text-yellow text-center md:text-left'>
                    <span id='counterId3'></span>+
                  </h2>
                  <p className='text-[16px] md:text-[17px] font-normal font-outfit text-white text-center md:text-left leading-[15px]'>Years of Experience</p>
                </div>
              </div>
            </div>

            {/* ===== Image Section ===== */}
            <div className="bannerImg w-full flex justify-center md:justify-end">
            {/* Desktop Image */}
            <div className="hidden md:block w-[700px] h-[700px] bg-yellow rounded-full overflow-hidden">
              <img className='w-full h-full object-cover' src={bannerPic} alt='me' />
            </div>

            {/* Mobile MyPart */}
            <div className="block md:hidden w-full">
              <MyPart />
            </div>
          </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Banner
