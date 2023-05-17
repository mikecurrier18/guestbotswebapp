import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaUser} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/GuestBotsLogoTrans.png'
import { Link } from 'react-scroll'


const Navbar = () => {
    
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)


return (
  <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#2c2d30] text-[#d6d6d6]'>
      <div>
      <Link  to="home" smooth={true}  duration={500} >
          <img src={Logo} alt="Logo" style={{height: '50px'}}/>
       </Link>           
      </div>  

      {/* menu */}
      
          <ul className='hidden md:flex pt-2'>
              <li>
              <Link  to="home" smooth={true}  duration={500} >
                  Home
              </Link>
              </li>
              <li>
              <Link  to="about" smooth={true}  duration={500} >
                  About us
              </Link>
              </li>
              <li>
              <Link  to="skills" smooth={true}  duration={500} >
                  How it works
              </Link>
              </li>
              
              <li>
                <Link  to="work" smooth={true}  duration={500} >
                  Contact
                </Link>
              
              </li>
              <li>
              <Link  to="contact" smooth={true}  duration={500} >
                  Sign in
              </Link>
              </li>
              <li>
              <Link  to="contact" smooth={true}  duration={500} >
                  Register
              </Link>
              </li>
              <li>
              <Link  to="contact" smooth={true}  duration={500} >
              <div className='mb-0'><FaUser size='25' /></div>
              </Link>
              </li>
          </ul>
      

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
          {!nav ? <FaBars /> : <FaTimes/>}
      </div>



      {/* Mobile menu */}
      
          <ul className={!nav ?'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
              <li  className='py-6 text-4xl'>
              <Link onClick={handleClick} to="home" smooth={true}  duration={500} >
                  Home
              </Link>
              </li>
              <li className='py-6 text-4xl'>
              <Link onClick={handleClick} to="about" smooth={true}  duration={500} >
                  About
              </Link>
              </li>
              <li className='py-6 text-4xl'>
              <Link onClick={handleClick} to="skills" smooth={true}  duration={500} >
                  Skills
              </Link>
              </li>
              <li className='py-6 text-4xl'>
              <Link onClick={handleClick} to="work" smooth={true}  duration={500} >
                  Work
              </Link>
              </li>
              <li className='py-6 text-4xl'>
              <Link onClick={handleClick} to="contact" smooth={true}  duration={500} >
                  Contact
              </Link>
              </li>
          </ul>
      


      
  
  </div>
)
}

export default Navbar