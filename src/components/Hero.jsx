import React from 'react';
import img1 from '../assets/img1.jpg'
import img4 from '../assets/img4.jpeg'
import img5 from '../assets/img5.png'

const Hero = () => {
  return (
      <div className=" bg-beige text-black max-w-7xl mx-auto px-8 min-h-screen flex flex-col md:flex-row justify-between items-center">
        {/* left section */}
        <div className=" max-w-3xl text-center md:text-left md:pr-10">
          <h1 className="text-5xl font-bold leading-tight">
            Be the <span className="text-red-600">Change</span>
          </h1>
          <p className="mt-4 text-md">
            You can make a difference in your community and help those in need.
            If you are dedicated to your cause, you can make a difference in the world.
          </p>
          <button className="mt-6 bg-[#910b0b] hover:shadow-xl text-white px-6 py-3 rounded shadow-lg transition-transform transform hover:scale-105">
            Our Projects
          </button>
        </div>
        {/* right section */}
        <div className=" relative mt-10 md:mt-0">
          <img src={img1} alt="Pig" className=" h-full w-96 h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform" />
          <div className="absolute h-32 w-32 rounded-full top-0 left-0 hover:scale-95 transition-transform -translate-x-12 -translate-y-12 overflow-hidden">
             <img src={img4} className="h-full w-full object-cover" />
          </div>

         <div className="absolute bottom-0 right-0 hover:scale-95 transition-transform translate-x-12 translate-y-12 h-32 w-32 rounded-full overflow-hidden">
             <img src={img5} className="h-full w-full object-cover" />
         </div>
        </div>
      </div>
  );
};

export default Hero;