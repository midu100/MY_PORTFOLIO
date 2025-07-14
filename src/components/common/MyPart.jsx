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
            
        },
        {
            icon:<FaLinkedinIn className=' text-[30px] text-white'/>
        },
        {
            icon:<PiGithubLogoFill className=' text-[30px] text-white'/>
        },
        {
            icon:<FaXTwitter className=' text-[30px] text-white'/>
        }
    ]
  return (
    <>
      <div className="mypic w-[350px] h-[555px] bg-[#8a7f7f2f] p-[15px] rounded-[20px] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
        <div className="Img w-full h-[355px]">
          <img className="w-full h-[350px] rounded-[10px]" src={me2} alt="Me" />
        </div>

        <div className="flex justify-between items-center mt-[30px]">
          {social.map((item, i) => {
            return (
              <div
                key={i}
                className="icons bg-orange-600 w-fit px-[15px] py-[15px] rounded-[20px] hover:bg-yellow hover:shadow-[0px_4px_44px_0px_rgba(234,_179,_8,_0.5)] duration-400"
              >
                <Link to={"#"}>{item.icon}</Link>
              </div>
            );
          })}
        </div>

        <div className="resume mt-[30px] flex justify-center">
          <button className="text-[18px] font-outfit font-normal text-black py-[12px] px-[36px] bg-yellow rounded-[8px] cursor-pointer hover:bg-blue-600 hover:shadow-[-1px_-3px_38px_1px_rgba(59,_130,_246,_0.5)] hover:text-white duration-400">
            Download Resume
          </button>
        </div>
      </div>
    </>
  );
};

export default MyPart;
