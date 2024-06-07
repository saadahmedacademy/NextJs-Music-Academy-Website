'use client'
import React from 'react'
import { WavyBackground } from './ui/wavy-background'
import { AnimatedTooltip } from './ui/animated-tooltip'

function OurTutors() {

  const tutors = [
    {
        id: 1,
        name: "Alice Johnson",
        designation: "Mathematics Tutor",
        image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
        id: 2,
        name: "Bob Smith",
        designation: "Physics Tutor",
        image: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
        id: 3,
        name: "Catherine Lee",
        designation: "Chemistry Tutor",
        image: "https://randomuser.me/api/portraits/women/3.jpg"
    },
    {
        id: 4,
        name: "David Brown",
        designation: "Biology Tutor",
        image: "https://randomuser.me/api/portraits/men/4.jpg"
    },
    {
        id: 5,
        name: "Eva Green",
        designation: "English Tutor",
        image: "https://randomuser.me/api/portraits/women/5.jpg"
    }
];


  return (
    <>
    <div className='flex justify-center items-center overflow-hidden
      h-[40rem] relative '>
      <WavyBackground  className='mx-auto max-w-7xl w-full block justyfy-center text-white'>
        <h1 className="text-8xl text-center my-2">Our Expert Instructor</h1>
        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae a repellendus, dolorum, est iure provident assumenda possimus molestiae omnis voluptates eveniet, quidem eos veritatis beatae unde 
          explicabo!</p>
        <div className='flex justify-center items-center my-4'>
         <AnimatedTooltip items={tutors} />
          
        </div>
      </WavyBackground>
      </div>

      <footer className='w-full p-10 flex gap-5 items-center justify-center '>
         <div className="p-3 block gap-4 flex-wrap ">
          <h1 className="text-2xl rounded-lg hover:bg-slate-400">About Us</h1>
          <p>Email:saadahme@gamil.com</p>  
          <p>Phone: 0341-388197340</p>
          <p>Address: karachi Share-Faisal Near Airport Karachi Pakistan</p>
         </div>

         <div className="p-3 block gap-4 flex-wrap ">
          <h1 className="text-2xl rounded-lg hover:bg-slate-400">Music Producers</h1>
          <p>Saad Ahmed</p>  
          <p>Nisha Ashraf</p>
          <p>Afridi Khan</p>
         </div>
         
         <div className="p-3 block gap-4 flex-wrap ">
          <h1 className="text-2xl rounded-lg hover:bg-slate-400">Our Brancher</h1>
          <p>Karachi</p>  
          <p>Islamabad</p>
          <p>Lahore</p>
         </div>
      </footer>
      </>
  )
}

export default OurTutors