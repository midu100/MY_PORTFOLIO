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


const About = () => {
    const learning = [
        {
            Learn : <SiNestjs className='text-[30px] text-sky-600'/>,
            lName : 'NestJS'
        },
        {
            Learn : <RiNextjsFill className='text-[30px] text-sky-600'/>,
            lName : 'NextJS'
        },
        {
            Learn : <SiMongodb className='text-[30px] text-sky-600'/>,
            lName : 'MongoDB'
        },
        {
            Learn : <SiFlutter className='text-[30px] text-sky-600'/>,
            lName : 'Flutter'
        },
    ]

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
  const skills = [
    {
        skill : <FaReact className='text-[50px] text-yellow text-center' />,
        skillName:'REACT'
    },
    {
        skill : <SiHtml5 className='text-[50px] text-yellow text-center'/>,
        skillName:'HTML'
    },
    {
        skill : <IoLogoCss3 className='text-[50px] text-yellow text-center' />,
        skillName:'CSS'
    },
    {
        skill : <FaSquareJs className='text-[50px] text-yellow text-center' />,
        skillName:'JavaScript'
    },
    {
        skill : <RiTailwindCssFill className='text-[50px] text-yellow text-center' />,
        skillName:'TAILWIND'
    },
    {
        skill : <FaNodeJs className='text-[50px] text-yellow text-center' />,
        skillName:'NodeJS'
    },
  ]


  return (
    <div>
        <section id='about' className='bg-[#151515] py-[151px]'>
            <div className="container">
                <CommonHead Heading={'ABOUT ME'}/>
                <div className="aboutRow mt-[41px] flex justify-between">

                    <div className="aboutText w-[610px] bg-[#2f2727f7] py-[15px] px-[20px] rounded-[10px]">
                        <h2 className='text-[36px] font-bold font-outfit text-yellow '>Howdy</h2>
                        <p className='text-[20px] font-outfit font-normal text-white my-[44px] text-left'>I’m a passionate and detail-oriented Web Developer with a strong foundation in front-end and back-end development. I specialize in building responsive, user-friendly, and scalable web applications using modern technologies like HTML, CSS, JavaScript, React, and Node.js.
                           With a problem-solving mindset and a focus on clean, maintainable code, I enjoy transforming complex ideas into elegant digital solutions. Whether it's a personal project or a client-driven application, I always aim to deliver seamless user experiences.
                           Currently, I’m open to new opportunities where I can contribute to dynamic teams, learn continuously, and grow as a developer while helping organizations achieve their digital goals.
                        </p>

                        

                        <button className='text-[18px] font-outfit font-normal text-black py-[12px] px-[36px] bg-yellow rounded-[8px] cursor-pointer hover:bg-blue-600 hover:shadow-[-1px_-3px_38px_1px_rgba(59,_130,_246,_0.5)] hover:text-white duration-400'>Download My CV</button>
                    </div>

                    <div className="skillPart w-[900px] bg-[#2f2727f7] py-[15px] px-[20px] rounded-[10px] flex gap-[10px]">
                        <div className="mypic w-[350px] bg-[#8a7f7f2f] p-[15px] rounded-[10px] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
                            <div className="Img w-full h-[355px]">
                                <img className='w-full h-[350px] rounded-[10px]' src={me2} alt='Me' />
                            </div>

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

                            <div className="resume mt-[30px] flex justify-center">
                                <button className='text-[18px] font-outfit font-normal text-black py-[12px] px-[36px] bg-yellow rounded-[8px] cursor-pointer hover:bg-blue-600 hover:shadow-[-1px_-3px_38px_1px_rgba(59,_130,_246,_0.5)] hover:text-white duration-400'>Download Resume</button>
                            </div>

                        </div>


                        <div className="MY-SKILL bg-[#8a7f7f2f] rounded-[10px] py-[10px] px-[10px] w-[500px]">
                            <div className='border border-yellow w-fit px-[36px] py-[12px] rounded-full'>
                                <p className='text-[20px] font-bold font-outfit text-yellow'>MY SKILLS</p>
                            </div>

                            <div className="skill-icon mt-[20px] flex  justify-between flex-wrap">
                                {
                                    skills.map((item,i)=>{
                                        return(
                                            <div key={i} className="skills w-[120px] flex flex-col items-center">
                                                {item.skill}
                                                <p className='text-center text-[22px] font-outfit font-medium text-white'>{item.skillName}</p>
                                            </div>
                                        )
                                    })
                                }
                                

                            </div>

                            <div className='border border-sky-600 w-fit px-[36px] py-[12px] rounded-full mt-[60px]'>
                                <p className='text-[20px] font-bold font-outfit text-sky-600'>LEARNING</p>
                            </div>

                            <div className="learn mt-[20px] flex justify-between flex-wrap">
                                {
                                    learning.map((items,i)=>{
                                        return(
                                            <div key={i} className="learning  w-[120px] flex flex-col items-center">
                                               {items.Learn}
                                               <p className='text-center text-[22px] font-outfit font-medium text-white'>{items.lName}</p>
                                             </div>
                                        )
                                    })
                                }
                                
                            </div>
                        </div>
                    </div>

                </div>

            
            </div>
        </section>
    </div>
  )
}

export default About