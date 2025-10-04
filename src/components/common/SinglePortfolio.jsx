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
        {  Img: Port1, portName: 'Weather App', 
            portLink: 'https://midu100.github.io/Weather_App/', 
            tik: 'https://midu100.github.io/Input_Counter/' 
        },
        {   Img: Port2, portName: 'Scooter Shop',
             portLink: 'https://midu100.github.io/AnimateProject/', 
             tik: 'https://midu100.github.io/Student-Form-Management/' 
        },
        {   Img: Port3, portName: 'Todo List',
             portLink: 'https://midu100.github.io/TODO_with-done-edit-delete/', 
             tik: 'https://midu100.github.io/Discount-condition/' 
        },
        {   Img: Port4, portName: 'Guessing Game', 
            portLink: 'https://midu100.github.io/GuessingGame/', 
            tik: 'https://midu100.github.io/Character-Type-Checker/' 
        },
        {   Img: Port5, portName: 'Furniture',
            portLink: 'https://midu100.github.io/Responsive-Simple-Web/', 
            tik: 'https://midu100.github.io/Withdrawal_System/' 
        },
        {   Img: Port6, portName: 'Password Generator', 
            portLink: 'https://midu100.github.io/Random_Password_Generator/', 
            tik: 'https://midu100.github.io/GradingSystem/' 
        },
        {   Img: Port7, portName: 'Planty X', 
            portLink: 'https://midu100.github.io/DemoProject/', 
            tik: 'https://midu100.github.io/Day-Condition/' 
        },
        {   Img: Port8, portName: 'Quiz App', 
            portLink: 'https://midu100.github.io/QUIZ_WEB_APP/', 
            tik: 'https://midu100.github.io/Moder_SignUp/' 
        }
    ]

    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    Portfolio.map((item, i) => (
                        <div key={i} data-aos="fade-up" data-aos-duration="1000" className='bg-[#0e0d0d] py-[20px] px-[15px] rounded-[20px] shadow-lg hover:shadow-2xl duration-300'>
                            <div data-aos="zoom-in" data-aos-duration="1000" className="img">
                                <img className='w-full h-[250px] sm:h-[300px] lg:h-[350px] object-cover rounded-[20px]' src={item.Img} alt={item.portName} />
                            </div>

                            <h2 data-aos="fade-up" data-aos-duration="1000" className='text-[20px] sm:text-[22px] lg:text-[24px] font-montserrat font-semibold text-white my-4 text-center sm:text-left'>{item.portName}</h2>

                            <div className='flex justify-between items-center mt-2'>
                                <Link to={item.portLink} className='px-4 py-2 rounded-full bg-[#131212] text-[16px] sm:text-[18px] font-montserrat font-medium text-white border border-gray-500 shadow hover:scale-105 hover:text-[#28E98C] duration-300 text-center'>Visit</Link>
                                <Link to={item.tik}>
                                    <GoArrowUpRight className='text-white text-[30px] sm:text-[35px] p-[5px] border border-gray-500 rounded-full hover:scale-105 hover:text-[#28E98C] duration-300' />
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default SinglePortfolio
