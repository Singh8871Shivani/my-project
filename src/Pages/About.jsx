import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Stats from '../components/Stats'
import img1 from '../assets/about.avif'
import img2 from '../assets/aboutImg.avif'

export default function About() {
  return (
    <div>
      <Navbar/>
      <div className="w-full h-[600px] relative">
         <img src={img1} className='w-full h-full relative' />
         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-5xl">About</div>
      </div>
      <div className="flex flex-row justify-around item-center m-12 p-2 border">
         <div >
            <img src={img2} className='h-[200px] w-[200px] rounded-full object-cover w-1/2'/>
         </div>
         <div className='flex flex-col w-1/2 gap-2'>
            <p className='text-2xl text-black opacity-0.5'>- YUNAS MISSION -</p>
            <p className=''>Bringing <b>smiles</b> to those in need</p>
            <p>There are many ways you can help support our work. You can make a financial contribution, volunteer your time, or donate goods or services. Every little bit helps and we are grateful for your support!</p>
            <span className='p-2 bg-[#910b0b] text-white rounded-full max-w-fit'>Our Mission</span>
         </div>
      </div>
      <div className='mt-24 m-12' >
        <Stats />
      </div>
      <Footer />
    </div>
  )
}
