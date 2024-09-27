"use client"
import Navbar from '@/components/Navbar'
import ChatBot from '@/components/chatbot'
import Package from '@/components/package'
import Image from 'next/image'
import React, { useState } from 'react'

const Page = () => {
  const [modal, setmodal] = useState(false)

  return (
    <>
      <div className="font-geist-sans h-full bg-black relative">
        <Navbar />
        <div className="w-full bg-black h-screen">
          <div className="relative bg-image">
            <Image src="/home.jpg" alt="Background" layout="fill" objectFit="cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
          </div>
        </div>

        <div className='  max-w-screen-xl mx-auto flex flex-col items-center justify-center space-y-10 '>
          <h1 className=' text-7xl font-semibold bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent text-center'>Welcome to Your Ultimate Adventure Awaits!</h1>

          <p className=' text-white text-center'>At <span className=' font-mono text-3xl bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent'>Wonderly</span>, we specialize in crafting unforgettable experiences that bring families closer together through adventure and exploration. Our fun-filled family tours are designed to ignite curiosity, foster connections, and create lasting memories for every member of the family, from the youngest adventurers to the wisest travelers.

Imagine embarking on a journey where laughter echoes through the mountains, exciting discoveries await around every corner, and the beauty of nature unfolds before your eyes. Whether it&#39;s hiking through breathtaking landscapes, exploring vibrant cities, or indulging in local cuisines, our curated itineraries ensure that every moment is packed with excitement and joy.

Safety and comfort are our top priorities, so you can focus on enjoying the adventure with your loved ones. Our knowledgeable guides are passionate about sharing their love for travel, culture, and the great outdoors, making each tour not only enjoyable but also educational.</p>
        </div>

        <div>
          <Package />
        </div>
        <button className='w-fit h-fit' onClick={() => setmodal(true)}>
          <Image src="/robot.png" alt="Robot" width={100} height={60} className='fixed bottom-10 right-0 cursor-pointer hover:scale-105 transition-all duration-200 animate-bounce' />
        </button>
      </div>
      {
        modal && <ChatBot setModal={setmodal} />
      }
    </>
  )
}

export default Page
