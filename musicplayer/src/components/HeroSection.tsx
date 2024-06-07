import React from 'react'
import Link from 'next/link'
import { Spotlight } from '@/components/ui/Spotlight'
import { Button } from '@/components/ui/moving-border'


function HeroSection() {
  return (
    <div  className="h-auto md:h-[42rem] w-full rounded-md
     flex flex-col items-center justify-center relative 
     overflow-hidden mx-auto py-10 md:py-0"
    >

<Spotlight
        className=" left-0 md:left-60 md:-top-20 top-32"
        fill="purple"
      />

    <div className="p-4 relative z-10 w-full text-center sm:my-auto my-[16rem]">

        <h1 className=' className="mt-20 md:mt-0 text-4xl md:text-7xl 
        font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50
         to-neutral-400'>Explore The Music World.</h1>

        <p className="text-center my-3">
        Welcome to Harmonic Horizons Music Academy, where passion meets precision! <br/>
        Our expert instructors provide personalized lessons in a variety of instruments,<br/> 
        helping you fostering a love for music in students of all ages. 
        </p>
        <Link href="/audio-songs" >
        <Button  borderRadius="1.75rem">
            Explore Musics
        </Button>
        </Link>
    </div>
    </div>
  )
}

export default HeroSection