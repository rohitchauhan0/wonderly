"use client"
import Footer from '@/components/Footer'
import ImageSwiper from '@/components/ImageSwiper'
import Navbar from '@/components/Navbar'
import { apiconnector } from '@/config/Apiconnector'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Page = () => {
    const [exploreData, setexploreData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await apiconnector('GET', '/api/place')
                setexploreData(response.data.data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchData()

    }, [])
  return (
    <>
    <div className="font-geist-sans h-full bg-black relative overflow-visible">
        <Navbar />
        <div className="w-full bg-black h-screen">
          <div className="relative bg-image">
            <Image src="/explore.jpg" alt="Background" layout="fill" objectFit="cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
          </div>
        </div>
        
        <div className=' max-w-screen-xl mx-auto flex flex-col items-center justify-center space-y-10 py-20 min-h-screen'>
        
        <h1 className=' font-mono text-7xl bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent py-1 font-semibold' >Explore</h1>


        <div className='  grid grid-cols-4 gap-8'>
            {
                exploreData.map((data) => (
                    <Link href={`/explore/${data._id}`} key={data._id}>
                        <ImageSwiper places={data} />
                        <p className=' text-center text-white'>{data.name}</p>
                    </Link>
                )
                )
            }
        </div>

    </div>
        
        </div>
        <Footer />
    </>
  )
}

export default Page