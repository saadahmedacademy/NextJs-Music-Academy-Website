"use client";
import React from 'react'
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

function SrollContent() {


    const musicContent = [
         {
          title: "Pop Hits Playlist",
          description: "A collection of the latest and greatest pop hits to keep you grooving all day long. \
      Discover chart-topping tracks from your favorite artists and enjoy non-stop, upbeat music. \
      Perfect for parties, workouts, or just lifting your spirits.",
      
        },
        {
          title: "Classical Essentials",
          description: "Immerse yourself in the timeless masterpieces of classical music, curated for enthusiasts and newcomers alike. \
      Explore the works of Mozart, Beethoven, and Bach, among others, in this meticulously crafted playlist. \
      Ideal for study sessions, relaxation, or deep contemplation."
        },
        {
          title: "Jazz Vibes",
          description: "Smooth and soulful jazz tunes to set the perfect mood, whether you're relaxing or working. \
      From classic jazz legends to contemporary artists, this playlist covers a wide range of styles. \
      Enjoy the rich, improvisational melodies that define the essence of jazz."
        },
        {
          title: "Rock Anthems",
          description: "An electrifying selection of rock anthems that have defined generations and continue to inspire. \
      Featuring legendary bands and iconic tracks, this playlist is a must for any rock fan. \
      Turn up the volume and let the powerful riffs and vocals energize your day."
        },
        {
          title: "Music Theory 101",
          description: "A beginner-friendly course covering the basics of music theory, perfect for aspiring musicians. \
      Understand the fundamental concepts such as scales, chords, and rhythm through interactive lessons. \
      Gain the foundational knowledge needed to advance in your musical journey."
        },
        {
          title: "Advanced Guitar Techniques",
          description: "Master advanced guitar techniques with our comprehensive lessons designed for intermediate and advanced players. \
      Learn intricate fingerpicking patterns, advanced chord progressions, and soloing techniques. \
      Take your guitar skills to the next level with tips and exercises from professional guitarists."
        },
        {
          title: "Vocal Training",
          description: "Develop your vocal skills with exercises and techniques from professional vocal coaches. \
      Improve your pitch, tone, and range through structured practice routines. \
      Whether you're a beginner or an experienced singer, this course will help you reach your vocal potential."
        },
        {
          title: "Songwriting Workshop",
          description: "Learn the art of songwriting from industry experts, and start creating your own hits. \
      This workshop covers everything from lyrical composition to melody creation and song structure. \
      Get inspired, share your work, and receive feedback to refine your songwriting skills."
        }
      ];
       
  return (
    <div >
        <StickyScroll content={musicContent}>

        </StickyScroll>
    </div>
  )
}

export default SrollContent;