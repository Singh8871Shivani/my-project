import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faUtensils, faBriefcaseMedical, faPaw, faBroom, faTshirt } from "@fortawesome/free-solid-svg-icons";

function CardCompo({setCurrentPage}) {
  const cardData=[
    {
      title:"Children Education",
      description:"Empower young minds through education",
      link:"education-donation",
      status:"Active",
      icon: faGraduationCap,
    },
    {
      title:"Food Donation",
      description:"Help feed the hungry and bring hope",
      link:"food-donation",
      status:"Active",
      icon: faUtensils,
    },
    {
      title: "Health Support",
      description: "Support medical care for those in need",
      link: "treatment-donation",
      status: "Active",
      icon: faBriefcaseMedical,
    },
    {
      title: "Animal Shelter",
      description: "Provide a safe haven for furry friends",
      link: "animal-donation",
      status: "Closed",
      icon: faPaw,
    },
    {
      title: "Cleanliness",
      description: "Contribute to a cleaner, healthier environment",
      link: "cleanliness-donation",
      status: "Active",
      icon: faBroom,
    },
    {
      title: "Clothes Donation",
      description: "Donate warm clothing for those in need",
      link: "clothes-donation",
      status: "Active",
      icon: faTshirt,
    },
  ]

  return (
    <div>
     <h1 className='p-4 bg-orange-700 text-white text-3xl font-bold'>Our Campaign</h1>
   <div className='max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 p-4'>
    {cardData.map((card,index)=>(
      <div key={index} className={w-100 p-2 rounded-lg shadow-lg text-center relative} 
      onClick={()=> setCurrentPage(card.link)}>
        <div className='w-16 h-16 bg-orange-700 rounded-full flex justify-center items-center mx-auto mb-4'>
          <FontAwesomeIcon icon={card.icon} className='text-3xl text-white-600'/>
          </div>
          <h3 className=' text-orange-700 text-xl font-semibold mb-2'>{card.title}</h3>
          <p className='text-gray-500 mb-4'>{card.description}</p>
          <h3 className='text-orange-700 font-semibold mb-2'>Status : {card.status}</h3>
          <a className='text-orange-700 font-bold' href="#" onClick={(e)=>e.preventDefault()}>Explore</a>
        </div>
    ))}
   </div>
   </div>
  );
};

export default CardCompo;