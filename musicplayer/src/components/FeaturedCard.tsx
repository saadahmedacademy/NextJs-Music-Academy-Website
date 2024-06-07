'use client';
import React from 'react'
import Link from 'next/link'
import { BackgroundGradient } from "./ui/background-gradient";
import songsLibarary from "../data/music_player.json";
// import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
function FeaturedCard() {
interface songsDataType {
    id: string;
    name: string;
    title: string;
    slug: string;
    description: string;
    audio_price: number;
    instructor: string;
    isFeatured: boolean;
    image: string;
}
    let fetchSongsdata = songsLibarary.songs.filter((song) => song.isFeatured)

  return (
    <div className='w-full flex flex-wrap flex-col justify-center py-5 px-3 '>
        
        <div className="w-full text-center"> 
            <p className='text-3xl text-green-500'>FANCY SONGS </p>
            <h2 className=' font-bold bg-clip-text
             sm:text-6xl text-3xl'>Enjoy the best songs</h2>
        </div>

        <div className="grid grid-cols-1 sm-grid-cols-2 md:grid-cols-3 
        justify-center gap-6 my-9">
         {
            fetchSongsdata.map((songs:songsDataType,index:number) => {
               return(
                <div key={index} className="flex justify-center  ">
                  <BackgroundGradient className="
                  rounded-[22px] h-full bg-black
                  p-4 sm:p-6 flex
                   itmes-center text-center 
                   flex-grow  " >
                    <div className="w-full h-full flex flex-col gap-2 ">
                      <h1 className='text-2xl'>{songs.title}</h1>
                      <img src={`${songs.image}`} className='rounded-xl' alt="" />
                      <p>{songs.description}</p>
                      <Link className='text-xl font-bold' href={songs.slug}>Listen</Link>
                    </div>
                   </BackgroundGradient>
                </div>
               )
         })
        }
        </div>

        <div className="text-center my-5 rounded-lg border border-gray-300
         w-19 mx-auto bg-white px-5 py-3">
            <Link className='text-xl font-bold text-black' href='/audio-songs'>View All Songs</Link>
        </div>
    </div>
  )
}

export default FeaturedCard