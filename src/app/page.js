"use client"
import Navbar from '@/components/Navbar'
import ChatBot from '@/components/chatbot'
import Package from '@/components/package'
import SliceComp from '@/components/slidecomp'
import Image from 'next/image'
import React, { useState } from 'react'

const Page = () => {
  const [modal, setmodal] = useState(false)

  return (
    <>
      <div className="font-geist-sans h-full bg-black relative overflow-visible">
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

        <div className=' max-w-screen-xl mx-auto min-h-screen flex flex-col items-center justify-center space-y-10'>
          <h1 className=' text-7xl font-semibold bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent text-center'>Why Choose Us?</h1>

          <div className=' flex flex-col items-center justify-center space-y-10 '>
            <Image src="/logo.jpeg" width={500} height={500} alt="Background" objectFit="cover" className=' cursor-pointer hover:scale-105 transition-all duration-200 rounded-full' />
            <p className=' text-white text-center'>Why Choose Us: We offer personalized travel experiences tailored to your preferences, ensuring comfort, convenience, and unforgettable adventures. With expert guides, exceptional customer service, and unique itineraries, we make every journey seamless and stress-free, giving you the freedom to explore the world with confidence and joy.</p>
          </div>

        </div>

        <SliceComp src={"/image1.jpg"} heading={"Having lots of fun"} para={"Immerse yourself in endless fun and excitement with experiences designed to bring joy and laughter. Whether you&#39;re exploring new adventures, enjoying creative activities, or simply relaxing, we ensure every moment is filled with smiles. Let the good times roll as we make every experience unforgettable!"} />

       
       
        <SliceComp src={"/image2.jpg"} heading={"Visiting faboulous hotels"} para={"Discover the charm of staying at fabulous hotels, where luxury meets comfort. From elegant interiors to world-class amenities, each hotel promises an unforgettable experience. Whether you're seeking relaxation or adventure, these hotels provide the perfect backdrop for a memorable stay, offering exceptional service and stunning locations."} />

        <SliceComp src={"/image3.avif"} heading={"Full enjoyment with family"} para={"Experience the joy of full enjoyment with family, where every moment is filled with laughter and love. From fun-filled activities to relaxing retreats, creating lasting memories together is what makes family time special. Embrace adventures, share stories, and strengthen bonds in an atmosphere of warmth and togetherness."} />


        <SliceComp src={"/image4.avif"} heading={"Lots of pictures and moments"} para={"Capture lots of pictures and moments that tell your unique story. Every snapshot is a memory frozen in time, reflecting the joy, laughter, and love shared during your adventures. Whether its a candid laugh or a scenic view, these images are treasures that you can cherish for years to come."} />


        <SliceComp src={"/image6.jpg"} heading={"Giving yourself a break"} para={"Giving yourself a break is essential for rejuvenation. As J.R.R. Tolkien said, Not all those who wander are lost. Sometimes, taking a step back from the hustle allows you to reconnect with yourself, unwind, and come back stronger. It's about embracing the freedom to breathe, relax, and recharge."} />



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
