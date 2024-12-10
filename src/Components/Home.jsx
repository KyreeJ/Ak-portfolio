import React from 'react';
import { TypeAnimation } from 'react-type-animation'; 
import { FaTwitter, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'; 

const Main = () => {
  return (
    <div id="main" className="relative w-full h-screen">
      
      <img
        className="w-full h-full object-cover object-center" 
        src="../src/assets/image/asuanti.jpg"
        alt="Asuanti Jones"
      />
      
      
      <div className="w-full h-full absolute top-0 left-0 bg-black/50 flex flex-col justify-center items-center">
  
        <div className="max-w-[700px] w-full text-center text-white">
          
         
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            I'm Asuanti Jones
          </h1>

     
          <h2 className="text-2xl sm:text-3xl pt-4 mb-4">
            I'm a Junior Software Engineer
          </h2>

        
          <TypeAnimation
            sequence={[
              'Developer', 
              2000,
              'Coder',
              200,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '1.5em', paddingLeft: '5px', color: 'white' }}
            repeat={Infinity}
          />

          <div className="flex justify-center pt-6 space-x-6">
            <a href="https://twitter.com/YourTwitterHandle" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="cursor-pointer text-white hover:text-gray-400" size={24} />
            </a>
            <a href="https://facebook.com/YourFacebookHandle" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="cursor-pointer text-white hover:text-gray-400" size={24} />
            </a>
            <a href="https://github.com/KyreeJ" target="_blank" rel="noopener noreferrer">
              <FaGithub className="cursor-pointer text-white hover:text-gray-400" size={24} />
            </a>
            <a href="https://www.linkedin.com/in/asuanti-jones-a91129202/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="cursor-pointer text-white hover:text-gray-400" size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
