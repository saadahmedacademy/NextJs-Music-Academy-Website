"use client";
import React from 'react';
import Link from 'next/link';
function UpcomingSongs() {
  let NewSongs = [
    {
      region: "Pakistan",
      title: "Emotional Ballad Alert!",
      description: "Rumor has it Atif Aslam is working on a soulful new track. Get ready to swoon!"
    },
    {
      region: "India",
      title: "Bhangra Beats Incoming!",
      description: "Keep an eye on AR Rahman's social media. He might be dropping a high-energy track soon!"
    },
    {
      region: "Pakistan",
      title: "Groove to New Coke Studio?",
      description: "The next Coke Studio season is on the way! Expect fresh collaborations and amazing music."
    },
    {
      region: "India",
      title: "Honey Singh Back in Action?",
      description: "Honey Singh has been teasing new music on his Instagram. Get ready to party!"
    },
    {
      region: "Pakistan",
      title: "Drama OSTs to Steal Your Heart",
      description: "New Pakistani dramas are premiering soon! Be prepared to fall in love with their soundtracks."
    },
    {
      region: "India",
      title: "Independent Spotlight!",
      description: "The Indian indie scene is thriving! Explore platforms like Bandcamp to discover fresh sounds."
    }
  ];

  return (
    <div className="w-full flex-col p-10 my-6 bg-gray-900">
      <h1 className="text-3xl text-center mb-3 text-white">
        Upcoming Songs
      </h1>
      <div className="container mx-auto sm:p-4 p-6 grid grid-cols-1 
      sm:grid-cols-2 md:grid-cols-3 gap-5 text-white">
        {NewSongs.map((song) => (
          <div key={song.title} className="py-3 flex flex-col gap-2 px-4 rounded-lg
           shadow-lg text-center bg-black hover:bg-gray-800 transition duration-300">
            <p className="text-xl font-bold">{song.region}</p>
            <p className="text-xl">{song.title}</p>
            <p className="text-sm mt-2">{song.description}</p>
          </div>
        ))}
      </div>

     
     </div>
  );
}

export default UpcomingSongs;
