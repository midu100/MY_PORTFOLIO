import React from 'react'
import CommonHead from '../components/common/CommonHead'
import me2 from '../assets/img/me2.png'
import { Link } from 'react-router'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiHtml5 } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io5";
import { FaSquareJs } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiNestjs } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiFlutter } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import { Parallax } from 'react-scroll-parallax';
import { SiExpress } from "react-icons/si";

const About = () => {
    const learning = [
        { Learn : <SiNestjs data-aos="fade-down" data-aos-duration="1500" className='text-[30px] text-[#D9224C]'/>, lName : 'NestJS' },
        { Learn : <SiExpress data-aos="fade-down" data-aos-duration="1500" className='text-[30px] text-sky-600'/>, lName : 'ExpressJs' },
        { Learn : <SiMongodb data-aos="fade-down" data-aos-duration="1500" className='text-[30px] text-[#4DA53F]'/>, lName : 'MongoDB' },
        { Learn : <SiFlutter data-aos="fade-down" data-aos-duration="1500" className='text-[30px] text-sky-600'/>, lName : 'Flutter' },
    ];

    const social = [
        { icon: <FaFacebookF className=' text-[30px] text-white'/> },
        { icon:<FaLinkedinIn className=' text-[30px] text-white'/> },
        { icon:<PiGithubLogoFill className=' text-[30px] text-white'/> },
        { icon:<FaXTwitter className=' text-[30px] text-white'/> },
    ];

    const skills = [
        { skill : <FaReact data-aos="fade-up" data-aos-duration="1000" className=' text-[50px] text-[#1584c4] text-center' />, skillName:'REACT' },
        { skill : <SiHtml5 data-aos="fade-up" data-aos-duration="1500" className='text-[50px] text-[#AF4623] text-center'/>, skillName:'HTML' },
        { skill : <IoLogoCss3 data-aos="fade-up" data-aos-duration="1900" className='text-[50px] text-[#4143C2] text-center' />, skillName:'CSS' },
        { skill : <FaSquareJs data-aos="fade-up" data-aos-duration="2400" className='text-[50px] text-yellow text-center' />, skillName:'JavaScript' },
        { skill : <RiTailwindCssFill data-aos="fade-up" data-aos-duration="2600" className='text-[50px] text-[#1584c4] text-center' />, skillName:'TAILWIND' },
        { skill : <FaNodeJs data-aos="fade-up" data-aos-duration="2600" className='text-[50px] text-[#24c60b] text-center' />, skillName:'NodeJS' },
        { skill : <FaBootstrap data-aos="fade-up" data-aos-duration="2600" className='text-[50px]  text-[#780FF1] text-center' />, skillName:'Bootstrap' },
        { skill : <DiJqueryLogo data-aos="fade-up" data-aos-duration="2600" className='text-[50px] text-[#1584c4] text-center' />, skillName:'Jquery' },
        { skill : <FaJava data-aos="fade-up" data-aos-duration="2600" className='text-[50px] text-[#0D6EB6] text-center' />, skillName:'JAVA' },
        { skill : <RiNextjsFill data-aos="fade-up" data-aos-duration="2600" className='text-[50px] text-[#0D6EB6] text-center' />, skillName:'NextJs' },
    ];

    return (
        <div>
            <section id='about' className='bg-[#151515] py-10 md:py-[91px]  overflow-hidden'>
                <div className="container px-4 md:px-0">
                    <CommonHead Heading={'ABOUT ME'}/>
                    <Parallax speed={-10}>
                        <div className="aboutRow mt-10 md:mt-[41px] flex flex-col md:flex-row gap-6 md:gap-6">
                            
                            {/* About Text */}
                            <div data-aos="fade-up" data-aos-duration="1000" className="aboutText w-full md:w-[610px] bg-[#2f2727f7] py-4 md:py-[15px] px-4 md:px-[20px] rounded-[10px]">
                                <h2 data-aos="fade-up" data-aos-duration="1000" className='text-[28px] md:text-[36px] font-bold font-outfit text-yellow '>Howdy</h2>
                                <p className='text-[16px] md:text-[20px] font-outfit font-normal text-white my-4 md:my-[44px] text-left leading-relaxed'>
                                    I’m a passionate and detail-oriented Web Developer with a strong foundation in front-end and back-end development. I specialize in building responsive, user-friendly, and scalable web applications using modern technologies like HTML, CSS, JavaScript, React, and Node.js. 
                                    With a problem-solving mindset and a focus on clean, maintainable code, I enjoy transforming complex ideas into elegant digital solutions. Whether it's a personal project or a client-driven application, I always aim to deliver seamless user experiences. 
                                    Currently, I’m open to new opportunities where I can contribute to dynamic teams, learn continuously, and grow as a developer while helping organizations achieve their digital goals.
                                </p>
                                <button className='text-[16px] md:text-[18px] font-outfit font-normal text-black py-2 md:py-[12px] px-6 md:px-[36px] bg-yellow rounded-[8px] cursor-pointer hover:bg-blue-600 hover:shadow-[-1px_-3px_38px_1px_rgba(59,_130,_246,_0.5)] hover:text-white duration-400'>
                                    Download My CV
                                </button>
                            </div>

                            {/* Skill Part */}
                            <div data-aos="fade-down" data-aos-duration="1300" className="skillPart w-full md:w-[900px] bg-[#2f2727f7] py-4 md:py-[15px] px-4 md:px-[20px] rounded-[10px] flex flex-col md:flex-row gap-4 md:gap-[10px]">
                                
                                {/* myPart - Hide on Mobile */}
                                <div className="mypic hidden md:flex w-full md:w-[350px] bg-[#8a7f7f2f] p-4 md:p-[15px] rounded-[10px] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] flex-col items-center">
                                    <div className="Img w-full h-[250px] sm:h-[300px] md:h-[355px]">
                                        <img className='w-full h-full rounded-[10px] object-cover' src={me2} alt='Me' />
                                    </div>
                                    <div id="INFO" className="mt-2 w-full text-center">
                                        <h2 data-aos="fade-down" data-aos-duration="1000" className="text-[#28E98C] text-[20px] sm:text-[22px] md:text-[25px] font-montserrat font-normal">REACT DEVELOPER</h2>
                                        <h2 className="text-[#fff] font-montserrat text-[18px] sm:text-[20px] md:text-[22px] font-bold mt-1">Hello,This is <span data-aos="fade-up" data-aos-duration="1000" className="text-[#28E98C] text-[22px] sm:text-[25px] md:text-[28px] inline-block">Kazi Mridul</span> </h2>                              
                                    </div>
                                    <div className='flex justify-between items-center mt-4 w-full gap-2 sm:gap-3 md:gap-4'>
                                        {social.map((item,i)=>{
                                            return(
                                                <div key={i} data-aos="fade-down" data-aos-duration="1000" className="icons bg-orange-600 w-fit px-3 sm:px-4 py-3 sm:py-4 rounded-[20px] hover:bg-yellow hover:shadow-[0px_4px_44px_0px_rgba(234,_179,_8,_0.5)] duration-400">
                                                    <Link to={'#'}>{item.icon}</Link>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="resume mt-4 flex justify-center w-full">
                                        <button className='text-[16px] sm:text-[17px] md:text-[18px] font-outfit font-normal text-black py-[10px] sm:py-[11px] md:py-[12px] px-6 sm:px-8 md:px-[36px] bg-yellow rounded-[8px] cursor-pointer hover:bg-blue-600 hover:shadow-[-1px_-3px_38px_1px_rgba(59,_130,_246,_0.5)] hover:text-white duration-400'>
                                            Download Resume
                                        </button>
                                    </div>
                                </div>

                                {/* MY SKILL */}
                                <div className="MY-SKILL w-full md:w-[500px] bg-[#8a7f7f2f] rounded-[10px] py-4 md:py-[10px] px-4 md:px-[10px]">
                                    <div data-aos="zoom-up" data-aos-duration="1000" className='border border-yellow w-fit px-4 py-2 md:px-[36px] md:py-[12px] rounded-full'>
                                        <p className='text-[18px] md:text-[20px] font-bold font-outfit text-yellow'>MY SKILLS</p>
                                    </div>

                                    <div className="skill-icon mt-4 md:mt-[20px] flex justify-between flex-wrap gap-4">
                                        {skills.map((item,i)=>{
                                            return(
                                                <div key={i}  className="skills w-[120px] flex flex-col items-center">
                                                    {item.skill}
                                                    <p className='text-center text-[18px] sm:text-[20px] md:text-[22px] font-outfit font-medium text-white'>{item.skillName}</p>
                                                </div>
                                            )
                                        })}
                                    </div>

                                    <div data-aos="zoom-up" data-aos-duration="1000" className='border border-sky-600 w-fit px-4 py-2 md:px-[36px] md:py-[12px] rounded-full mt-6 md:mt-[60px]'>
                                        <p className='text-[18px] md:text-[20px] font-bold font-outfit text-sky-600'>LEARNING</p>
                                    </div>

                                    <div className="learn mt-4 md:mt-[20px] flex justify-between flex-wrap gap-4">
                                        {learning.map((items,i)=>{
                                            return(
                                                <div key={i} className="learning w-[120px] flex flex-col items-center">
                                                    {items.Learn}
                                                    <p className='text-center text-[18px] sm:text-[20px] md:text-[22px] font-outfit font-medium text-white'>{items.lName}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>

                            </div>

                        </div>
                    </Parallax>
                </div>
            </section>
        </div>
    )
}

export default About
