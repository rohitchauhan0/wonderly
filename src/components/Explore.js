"use client"
import { apiconnector } from '@/config/Apiconnector'
import React, { useEffect, useState } from 'react'
import ImageSwiper from './ImageSwiper'
import Link from 'next/link'

const Explore = () => {
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
    <div className=' max-w-screen-xl mx-auto flex flex-col items-center justify-center space-y-10 py-20 min-h-screen'>
        
        <h1 className=' font-mono text-7xl bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent py-1 font-semibold' >Explore</h1>


        <div className='  grid grid-cols-4 gap-8'>
            {
                exploreData.slice(0, 4).map((data) => (
                    <Link href={`/explore/${data._id}`} key={data._id}>
                        <ImageSwiper places={data} />
                        <p className=' text-center text-white'>{data.name}</p>
                    </Link>
                )
                )
            }
        </div>

    </div>
  )
}

export default Explore