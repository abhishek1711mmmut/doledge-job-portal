import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import userLogo from "../images/userLogo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const overlay = (
    <div
      className={`fixed ${
        isOpen ? "block" : "hidden"
      } w-full h-full top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.5)] z-[2] cursor-pointer`}
    ></div>
  );

  const dropdown = (
    <div className="flex flex-col gap-2 w-full py-5 px-3">
      <div className="flex gap-2 gap-y-3 w-full">
        <button
          className="bg-[#15AA6A] text-white opacity-90 px-3 py-1 rounded-lg flex justify-center items-center w-full"
          onClick={() => setIsOpen(false)}
        >
          Sign In
        </button>
        <button
          className="bg-[#F58634] text-white opacity-90 px-3 py-1 rounded-lg flex justify-center items-center w-full"
          onClick={() => setIsOpen(false)}
        >
          Register
        </button>
      </div>
      <button
        className="bg-[#bf5157] text-white rounded-lg px-3 py-1 flex justify-center items-center"
        onClick={() => setIsOpen(false)}
      >
        Recruiter Login
      </button>
      <div className="flex flex-col gap-3 text-black font-semibold w-full mx-auto">
        <Link
          to="/"
          className="border border-black/50 rounded-md py-1"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/abc"
          className="border border-black/50 rounded-md py-1"
          onClick={() => setIsOpen(false)}
        >
          Jobs
        </Link>
        <Link
          className="border border-black/50 rounded-md py-1"
          onClick={() => setIsOpen(false)}
        >
          Services
        </Link>
        <Link
          className="border border-black/50 rounded-md py-1"
          onClick={() => setIsOpen(false)}
        >
          Companies
        </Link>
        <Link
          className="border border-black/50 rounded-md py-1"
          onClick={() => setIsOpen(false)}
        >
          Blogs
        </Link>
        <Link
          className="border border-black/50 rounded-md py-1"
          onClick={() => setIsOpen(false)}
        >
          Contact Us
        </Link>
      </div>
    </div>
  );

  useEffect(() => {
    const handler = (event) => {
      if (isOpen && ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
    };
  }, [isOpen]);

  return (
    <nav>
      <div className="relative flex justify-between items-center pt-2 pb-4 w-[95%] mx-auto">
        <Link to="/" className="flex justify-center items-center">
          <img src={Logo} alt="" className="w-24 lg:w-32 xl:w-40" />
        </Link>
        <div
          className="hidden md:flex gap-x-3 justify-between items-center lg:gap-4 xl:gap-x-8 md:text-xs lg:text-base xl:text-xl font-light"
          style={{ fontFamily: "Poppins" }}
        >
          <Link to="/">HOME</Link>
          <Link to="">JOBS</Link>
          <Link to="">SERVICES</Link>
          <Link to="">COMPANIES</Link>
          <Link to="">BLOGS</Link>
          <Link to="">CONTACT US</Link>
        </div>
        <div className="hidden md:flex justify-between items-center gap-1 lg:gap-3">
          <div className="flex gap-x-2 text-xs lg:text-base font-bold text-white">
            <button className="bg-[#15AA6A] opacity-90 px-2 py-1 lg:px-3 lg:py-1 xl:px-5 xl:py-2 rounded-2xl flex justify-center items-center">
              Sign In
            </button>
            <button className="bg-[#F58634] opacity-90 px-2 py-1 lg:px-3 lg:py-1 xl:px-5 xl:py-2 rounded-2xl flex justify-center items-center">
              Register
            </button>
          </div>
          <hr className="h-14 lg:h-20 w-[3px] bg-gray-400 opacity-80 rounded-full ml-3" />
          <button className="flex flex-col justify-center items-center">
            <img src={userLogo} alt="" className="w-6 lg:w-8 xl:w-10" />
            <p className="text-sm lg:text-base w-[90%] xl:w-full">
              Recruiter Login
            </p>
          </button>
        </div>
        {overlay}
      </div>
      {!isOpen && (
        <div className="absolute md:hidden right-5 top-3 p-1 rounded-lg">
          <GiHamburgerMenu
            className="text-3xl cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      )}
      <div
        ref={ref}
        className={`absolute w-[70%] ${
          isOpen ? "scale-x-100" : "scale-x-0"
        } origin-right transition-transform ease-in-out duration-300 right-0 top-0 flex flex-col justify-center items-center bg-gray-100 p-2 rounded-lg rounded-tr-none z-10 border border-black`}
      >
        <RxCross2
          className="md:hidden text-4xl mr-3 mt-2 self-end cursor-pointer"
          onClick={toggleMenu}
        />
        {dropdown}
      </div>
    </nav>
  );
};

export default Navbar;
