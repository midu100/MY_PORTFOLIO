import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiGithubLogoFill } from "react-icons/pi";
import me2 from '../../assets/img/me2.png'
import { Link } from "react-router";

const MyPart = () => {

    const social = [
        {
            icon: <FaFacebookF className=' text-[30px] text-white'/>,
            pathLink : 'https://www.facebook.com/kajzzi.mridul.al.taimur'
        },
        {
            icon:<FaLinkedinIn className=' text-[30px] text-white'/>,
            pathLink : 'https://www.linkedin.com/in/kazi-mridul-0b0324347?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
        },
        {
            icon:<PiGithubLogoFill className=' text-[30px] text-white'/>,
            pathLink : 'https://github.com/midu100'
        },
        {
            icon:<FaXTwitter className=' text-[30px] text-white'/>,
            pathLink : '#'
        }
    ]
  return (
    <>
      <div className="mypic 
                      w-full sm:w-[300px] md:w-[350px] 
                      h-auto sm:h-[550px] md:h-fit 
                      bg-[#8a7f7f2f] p-4 md:p-[15px] rounded-[20px] 
                      shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]
                      flex flex-col items-center
                      ">
        {/* Image */}
        <div data-aos="zoom-in" data-aos-duration="1000" className="Img w-full h-[450px] sm:h-[300px] md:h-[355px]">
          <img className="w-full h-full rounded-[10px] object-cover" src={me2} alt="Me" />
        </div>

        {/* Info Section */}
        <div id="INFO" className="mt-4 w-full text-center">
          <h2 data-aos="fade-down" data-aos-duration="1000" className="text-[#28E98C] text-[20px] sm:text-[22px] md:text-[25px] font-montserrat font-normal">
            FRONT-END DEVELOPER
          </h2>
          <h2 className="text-[#fff] font-montserrat text-[18px] sm:text-[20px] md:text-[22px] font-bold mt-1">
            Hello, This is <span data-aos="fade-up" data-aos-duration="1000" className="text-[#28E98C] text-[22px] sm:text-[25px] md:text-[28px] inline-block">Kazi Mridul</span>
          </h2>
        </div>

        {/* Social Icons */}
        <div className="flex justify-between items-center mt-4 w-full gap-2 sm:gap-[10px] md:gap-4">
          {social.map((item, i) => {
            return (
              <div
                key={i}
                data-aos="fade-down" data-aos-duration="1000"
                className="icons bg-orange-600 w-fit px-3 sm:px-4 py-3 sm:py-4 rounded-[20px] hover:bg-yellow hover:shadow-[0px_4px_44px_0px_rgba(234,_179,_8,_0.5)] duration-400"
              >
                <Link to={item.pathLink}>{item.icon}</Link>
              </div>
            );
          })}
        </div>

        {/* Resume Button */}
        <div className="resume mt-6 w-full flex justify-center">
          <button className="text-[16px] sm:text-[17px] md:text-[18px] font-outfit font-normal text-black py-[10px] sm:py-[11px] md:py-[12px] px-6 sm:px-8 md:px-[36px] bg-yellow rounded-[8px] cursor-pointer hover:bg-blue-600 hover:shadow-[-1px_-3px_38px_1px_rgba(59,_130,_246,_0.5)] hover:text-white duration-400">
            Download Resume
          </button>
        </div>
      </div>
    </>
  );
};

export default MyPart;
