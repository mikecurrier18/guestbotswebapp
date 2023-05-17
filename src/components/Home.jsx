import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#d8d8d8]'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-center'>
            
            <h1 className='text-9xl sm:text-9xl font-bold text-[#2c2b30] pt-20 italic'>GuestBots</h1>
            <p className='text-[#6d6d6d] text-4xl py-4 max-w-[1000px]'>Property management has never been easier.</p>
            
            
            <Link  to="work" smooth={true}  duration={750} >       
            <div>
                <button className='group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#ee3756] hover:border-[#ee3756]'>See my work 
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3'/>
                </span>
                </button>
            </div>
                </Link>
        </div>

    </div>
  )
}

export default Home