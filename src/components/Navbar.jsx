import React from 'react'
import { Link } from 'react-router'
import Logo from '../assets/img/Logo.png'

const Navbar = () => {
  const myNav = [
    {
      Name: "Home",
      add:'/'
    },
    {
      Name: "About",
      add : '/about'
    },
    {
      Name: "Portfolio",
      add : '/portfolio'
    },
    {
      Name: "Services",
      add : '/service'
    },
    {
      Name: "Contact",
      add : '#'
    },
  ]
  return (
    <div>
      <nav id='navbar' className='py-[8px] bg-[#121212]'>
        <div className="container bg-[#FFE29866] py-[8px] px-[32px] rounded-[8px]">
           <div className="navRow flex justify-between items-center">

            <div className="Logo w-[113px]">
              <Link to={'#'}><img src={Logo} alt='Logo' /></Link>
            </div>

            <ul className='flex gap-[61px] text-[20px] font-outfit font-normal text-white'>
              {
                myNav.map((item,i)=>{
                  return(
                     <li key={i}><Link className='hover:line-through duration-[.3s]' to={item.add}>{item.Name}</Link></li>
                  )
                })
              }
             
            </ul>

            <Link to={'#'} className='py-[6px] px-[53px] text-[18px] text-[#000] font-outfit font-normal rounded-[8px] bg-[#FEAA00] cursor-pointer hover:bg-sky-600 hover:text-white hover:tracking-[1px] duration-400'>Contact Me</Link>

           </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar