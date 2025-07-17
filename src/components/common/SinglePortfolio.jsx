import React from 'react'
import Port1 from '../../assets/img/Port1.png'
import { Link } from 'react-router'
import { GoArrowUpRight } from "react-icons/go";
import Port2 from '../../assets/img/Port2.png'
import Port3 from '../../assets/img/Port3.png'
import Port4 from '../../assets/img/Port4.png'
import Port5 from '../../assets/img/Port5.png'
import Port6 from '../../assets/img/Port6.png'
import Port7 from '../../assets/img/Port7.png'
import Port8 from '../../assets/img/Port8.png'

const SinglePortfolio = () => {

    const Portfolio = [
        {
            Img : <img className='h-[350px] w-[100%] rounded-[20px]' src={Port1} alt='Portfolio' />,
            portName : 'Weather App',
            portLink : 'https://midu100.github.io/Weather_App/',
            tik :'https://midu100.github.io/Input_Counter/'
        },
        {
            Img : <img className='h-[350px] w-[100%] rounded-[20px]' src={Port2} alt='Portfolio' />,
            portName : 'Scooter Shop',
            portLink : 'https://midu100.github.io/AnimateProject/',
            tik :'https://midu100.github.io/Student-Form-Management/'
        },
        {
            Img : <img className='h-[350px] w-[100%] rounded-[20px]' src={Port3} alt='Portfolio' />,
            portName : 'Todo List',
            portLink : 'https://midu100.github.io/TODO_with-done-edit-delete/',
            tik :'https://midu100.github.io/Discount-condition/'
        },
        {
            Img : <img className='h-[350px] w-[100%] rounded-[20px]' src={Port4} alt='Portfolio' />,
            portName : 'Guessing Game',
            portLink : 'https://midu100.github.io/GuessingGame/',
            tik :'https://midu100.github.io/Character-Type-Checker/'
        },
        {
            Img : <img className='h-[350px] w-[100%] rounded-[20px]' src={Port5} alt='Portfolio' />,
            portName : 'Furniture',
            portLink : 'https://midu100.github.io/Responsive-Simple-Web/',
            tik :'https://midu100.github.io/Withdrawal_System/'
        },
        {
            Img : <img className='h-[350px] w-[100%] rounded-[20px]' src={Port6} alt='Portfolio' />,
            portName : 'Password Generator',
            portLink : 'https://midu100.github.io/Random_Password_Generator/',
            tik :'https://midu100.github.io/GradingSystem/'
        },
        {
            Img : <img className='h-[350px] w-[100%] rounded-[20px]' src={Port7} alt='Portfolio' />,
            portName : 'Planty X',
            portLink : 'https://midu100.github.io/DemoProject/',
            tik :'https://midu100.github.io/Day-Condition/'
        },
        {
            Img : <img className='h-[350px] w-[100%] rounded-[20px]' src={Port8} alt='Portfolio' />,
            portName : 'Quiz App',
            portLink : 'https://midu100.github.io/QUIZ_WEB_APP/',
            tik :'https://midu100.github.io/Moder_SignUp/'
        }
    ]


  return (
    <>   
         
         <div className='flex justify-between flex-wrap'>
            {
                Portfolio.map((item,i)=>{
                    return(
                        <div key={i} data-aos="fade-up" data-aos-duration="1000" className='bg-[#0e0d0d] py-[30px] px-[20px] w-[500px] rounded-[20px] mt-[10px]'>
                            <div  data-aos="zoom-in" data-aos-duration="1000" className="img">
                                {item.Img}
                            </div>

                            <h2 data-aos="fade-up" data-aos-duration="1000" className='text-[22px] font-montserrat font-semibold text-white my-6'>{item.portName}</h2>
                            <div className='flex justify-between items-center'>
                                <Link to={`${item.portLink}`} className='px-[25px] py-[10px] rounded-full bg-[#131212] text-[20px] font-montserrat font-medium text-white border border-gray-500 shadow-[-2px_3px_100px_3px_rgba(149,_157,_165,_0.2)] hover:scale-[1.1] hover:text-[#28E98C]  hover:tracking-[1px] duration-400' >Visit</Link>
                                <Link to={`${item.tik}`}><GoArrowUpRight  className='text-white text-[40px] p-[5px] border border-gray-500 rounded-full hover:scale-[1.1] hover:text-[#28E98C] font-bold duration-300'/></Link>
                            </div>
                       </div>
                    )
                })
            }
               

         </div>



    </>
  )
}

export default SinglePortfolio