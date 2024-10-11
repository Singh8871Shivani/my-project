import React from 'react';
import img2 from '../assets/img2.jpg';
import { NavLink, useNavigate } from 'react-router-dom';


const Card = () => {

  const Navigation = useNavigate();
    
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-16 bg-white px-6 md:px-12 mx-auto">
      <div className="md:w-1/2">
        <h3 className="text-sm uppercase tracking-widest text-gray-500">Charity </h3>
        <h1 className="text-4xl font-bold mt-2">
        Empowering  <span className="text-orange-600">communities</span> through support and resource
        </h1>
        <p className="mt-4 text-gray-600">
        Join us in making a positive impact. Whether through financial support, volunteering, or donations of goods and services, 
        your contribution makes a difference in the lives of those who need it most.
        </p>
        <NavLink to='/Projects' >
        <button className="mt-6 px-5 py-3 bg-orange-600 text-white rounded-full shadow hover:bg-orange-500 focus:outline-none" >
          Explore
        </button>
        </NavLink>
        
      </div>

      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <div className="relative w-80 h-80 ">
          <img 
            src={img2}
            alt="Charity Work" 
            className="h-full w-full object-cover rounded-full relative z-10"
          />
        </div>
      </div>
      
    </section>
  );
};

export default Card;