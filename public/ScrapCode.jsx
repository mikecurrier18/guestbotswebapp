// login page code

import React from 'react'
import {useRef, useState, useEffect } from 'react'

const Login = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect (() => {
        setErrMsg('');
    }, [user, pwd])

  return (
    <section>
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        <h1>Sign in</h1>
        <form>
            <label htmlFor="username">Username:</label>
            <input 
            type="text" 
            id="username"
            ref={userRef}
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
            />
            <label htmlFor="password">Password:</label>
            <input 
            type="text" 
            id="password"
            ref={userRef}
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
            />
        </form>
    </section>
  )
}

export default Login

// end login page code

{/* Social icons */}
<div className='hidden lg:flex fixed flex-col top-[35%] left-0'> 
<ul className={!nav ?'true': 'flex fixed flex-col top-[35%] left-0'}>

<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
        <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/mikecurrier18/">
            GitHub <FaGithub size={30} />
        </a>
    </li>


    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
        <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/michael-currier-26ba77185/">
            Linkedin <FaLinkedin size={30} />
        </a>
    </li>

    
        <Link  to="contact" smooth={true}  duration={500} >
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#4a235a]'>
        <a className='flex justify-between items-center w-full text-gray-300' href="/">
            Email <HiOutlineMail size={30} />
        </a>
    </li>
    </Link>

    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#ee3756]'>
        <a className='flex justify-between items-center w-full text-gray-300' href="/">
            Resume <BsFillPersonLinesFill size={30} />
        </a>
    </li>
</ul>
</div>

// end social icons