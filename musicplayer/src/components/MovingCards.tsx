"use client";
import React from 'react'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
function MovingCards() {
    const movingCardData = [
        {
          quote: "The music player has an intuitive interface and provides an incredible listening experience with high-quality sound. It has become my daily companion for enjoying my favorite tunes.",
          name: "Alice Johnson",
          title: "Professional Musician"
        },
        {
          quote: "Joining this music academy was the best decision I made. The instructors are knowledgeable and passionate about music, and their teaching methods are both effective and inspiring.",
          name: "Michael Lee",
          title: "Music Student"
        },
        {
          quote: "I love the diverse selection of music available on the player. It's my go-to app for discovering new artists and genres that keep my playlists fresh and exciting.",
          name: "Samantha Davis",
          title: "Music Enthusiast"
        },
        {
          quote: "The academy's curriculum is well-structured, and I've made significant progress in my piano skills since enrolling. The supportive environment fosters growth and creativity.",
          name: "David Smith",
          title: "Piano Student"
        },
        {
          quote: "The personalized playlists and recommendations on the music player keep me motivated and inspired every day. It's like having a personal DJ who understands my taste in music.",
          name: "Laura Martinez",
          title: "Fitness Instructor"
        },
        {
          quote: "The online classes are very interactive, and the teachers provide great feedback. I highly recommend this academy to anyone looking to improve their musical abilities.",
          name: "James Brown",
          title: "Guitar Student"
        },
        {
          quote: "This music player is fantastic for both casual listening and focused practice sessions. The sound quality is unmatched, and it enhances my overall music experience.",
          name: "Emily White",
          title: "Audio Engineer"
        },
        {
          quote: "The academy offers a variety of courses that cater to all skill levels. I've improved so much since I started taking lessons here, and I feel more confident in my violin playing.",
          name: "Brian Wilson",
          title: "Violin Student"
        },
        {
          quote: "The seamless integration of the music player with my devices makes it easy to enjoy music anytime, anywhere. It's convenient and user-friendly, perfect for my busy lifestyle.",
          name: "Olivia Taylor",
          title: "Tech Enthusiast"
        },
        {
          quote: "The academy's supportive community and expert teachers have made learning music a truly enjoyable experience. The progress I've made in drumming is beyond my expectations.",
          name: "Chris Anderson",
          title: "Drum Student"
        }
      ];
      

  return (
    <div className='container h-[28rem] flex flex-col
     dark:bg-black dark:bg-grid-white/[0.2] 
     bg-grid-small-black/[0.2] mx-auto rounded-md relative my-6'>
       <h1 className="text-4xl font-bold bg-clip-text text-center mt-8">Famous Musions Quotes</h1>
        <InfiniteMovingCards 
        className=' mt-[5%]'
        items={movingCardData}
        direction="right"
        speed="slow"
      />
        </div>
  )
}

export default MovingCards;