import React, { useState } from 'react';
// import { a } from 'react-router-dom';
import './css/Navbar.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navClass = isOpen ? 'block' : 'hidden';

  return (
    <nav className="w-[100vw] flex items-center justify-center h-[10vw] shadow-md ">
      <div className="container mx-auto flex items-center justify-between">
      {/* <Link to="/" className="navbar-brand w-[80px] h-[20px] ">
  <img src={'/src/images/logo.png'} alt="Logo" />
       </Link> */}

        <div className="lg:hidden">
          <button className="text-stone-950 text-2xl" onClick={toggleMenu}>
            &#8801;
          </button>
        </div>

        <ul className={`lg:flex ${navClass} space-x-8 text-stone-950 font-light justify-center mt-3`}>
          <li>
            <Link to="#" className="hover:text-emerald-600 text-[13px] transition">
              HOME
            </Link>
          </li>
          <li>
            <Link to="#" className="hover:text-emerald-600 text-[13px]  transition">
              SERVICES
            </Link>
          </li>
          <li>
            <Link to="#" className="hover:text-emerald-600 text-[13px]  transition">
              JOBS
            </Link>
          </li>
          <li>
            <Link to="#" className="hover:text-emerald-600 text-[13px]  transition">
              COMPANIES
            </Link>
          </li>
          <li className='w-[7vw]' >
            <Link to="#" className="hover:text-emerald-600 text-[13px]  transition">
              ABOUT US
            </Link>
          </li>
          <li>
            <Link to="#" className="hover:text-emerald-600 text-[13px]  transition">
              BLOGS
            </Link>
          </li>

          <li className='w-[10vw]' >
            <Link to="#" className="hover:text-emerald-600 text-[13px]  transition">
              CONTACT US
            </Link>
          </li>

          <li className='w-[12vw]'>
           
            <a className="Signin text-[13px] bg-emerald-600 text-black hover:bg-emerald-700  ml-12 py-2 px-4 rounded-full cursor-pointer transition">
              Sign In
          
          </a>
          </li>

          <li  className='h-[fit-content] ' > 
           
            <a className="register text-[13px]   bg-orange-600 text-black hover:bg-emerald-700 py-2 px-4 rounded-full cursor-pointer transition">
              Register
          
          </a>
          </li>

          <li>
            <Link to='#'>

            <div className="flex space-x-3 mb-3 " >
              <div className="w-1 h-[6vw] bg-black bg-opacity-20" />
              <div className='w-[7.5vw] ' >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/eee71dca-fdd5-4fab-9e98-78d30d543d80?apiKey=98c2e51ab1a04825837c41320a839326&"
                  alt="Employer"
                  className="w-full h-10"

                  />
                <div className="text-stone-950 text-[10px]  font-light">Employer Login</div>
              </div>
            </div>
                  </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
