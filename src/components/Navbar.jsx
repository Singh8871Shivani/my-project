import React, { useState } from 'react';
import { IoIosCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { IoLogoTwitter } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {

  const Navigation = useNavigate();
  

  return (
    <nav className="m-0 p-0 text-white">
        <div className='bg-white text-black text-sm flex justify-evenly items-center'>
            <div className='flex inline'>
                <IoIosCall className='mt-1'/>
                <span>+123 986 8764</span>
                <CiMail className='mt-1 ml-3'/>
                <pre> yuna@domain.com</pre>
            </div>
            <div className='flex inline gap-2'> 
                <a><CiFacebook /></a>
                <a><CiInstagram /></a>
                <a><CiYoutube /></a>
                <a><IoLogoTwitter /></a>
            </div>
            <div className='flex inline'>
              <button className=' text-blue-950 font-bold p-1 rounded'>
                <NavLink to='/login'>Login</NavLink>
              </button>
              <NavLink to='/Dashboard'>
              <CgProfile className='ml-3 h-6 w-10'/>
              </NavLink>
              
            </div>

        </div>    
      <div className="bg-[#910b0b] flex justify-evenly items-center p-4">
        <NavLink to='/'><div className="text-2xl font-bold">Yuna</div></NavLink>
        <div className="hidden md:flex space-x-6">
          <div className="relative group">
            <NavLink to='/'><button className="focus:outline-none">Home</button></NavLink>
          </div>
          <div className="relative group">
            <NavLink to='/About'> <button className="focus:outline-none">About</button> </NavLink>
            <div className="absolute left-0 hidden group-hover:block bg-white text-black rounded shadow-lg mt-2">
              <a href="#" className="block px-4 py-2">Our Team</a>
              <a href="#" className="block px-4 py-2">Our Mission</a>
            </div>
          </div>
          <div className="relative group">
            <NavLink to='/Projects'> <button className="focus:outline-none">Projects</button></NavLink>
            <div className="absolute left-0 hidden group-hover:block bg-white text-black rounded shadow-lg mt-2">
              <a href="#" className="block px-4 py-2">Children Education</a>
              <a href="#" className="block px-4 py-2">Food Donation</a>
              <a href="#" className="block px-4 py-2">Health Support</a>
              <a href="#" className="block px-4 py-2">Animal Shelter</a>
              <a href="#" className="block px-4 py-2">Cleanliness</a>
              <a href="#" className="block px-4 py-2">Clothes Donation</a>
            </div>
          </div>
          <div className="relative group">
            <NavLink to='/Blog'><button className="focus:outline-none">Blog</button></NavLink>
            <div className="absolute left-0 hidden group-hover:block bg-white text-black rounded shadow-lg mt-2">
              <a href="#" className="block px-4 py-2">Latest Posts</a>
              <a href="#" className="block px-4 py-2">News</a>
            </div>
          </div>

          <div className='relative group'>
            <NavLink to='/contact'><button className='focus:outline-none'>Contact Us</button></NavLink>
          </div>
          
        </div>
        <button className="bg-white text-red-600 px-4 py-2 rounded shadow-md">Donate</button>
      </div>
    </nav>
  );
};

export default Navbar;
