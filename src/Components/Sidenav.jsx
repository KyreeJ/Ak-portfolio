import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { Link } from 'react-router-dom';  

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    console.log('state change');
  };

  return (
    <div className="relative">
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden cursor-pointer"
      />

      {nav && (
        <div className="fixed top-0 left-0 w-full h-full bg-white/90 z-20 flex flex-col justify-center items-center">
          <Link key={1}
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
            to='/'
            onClick={handleNav}
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </Link>
          <Link key={2}
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
            to='/'
            onClick={handleNav}
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Projects</span>
          </Link>
          <Link key={3}
             
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
            to='/projects'
            onClick={handleNav}
          >
            <BsPerson size={20} />
            <span className="pl-4">About Me</span>
          </Link>
          <Link key= {4}
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
            to="/contact"
            onClick={handleNav}
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </Link>
        </div>
      )}

      <div className="hidden md:flex flex-col items-center fixed top-0 left-0 h-full justify-center z-10">
        <Link
          to="/"  
          className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
        >
          <AiOutlineHome size={20} />
        </Link>
        <Link
          to="/projects"  // Link to Projects page
          className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
        >
          <AiOutlineProject size={20} />
        </Link>
        <Link
          to="/aboutme" 
          className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
        >
          <BsPerson size={20} />
        </Link>
        <Link
          to="/contact"  
          className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
        >
          <AiOutlineMail size={20} />
        </Link>
      </div>
    </div>
  );
};

export default Sidenav;
