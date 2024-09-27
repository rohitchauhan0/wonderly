"use client"
import Navbar from '@/components/Navbar'
import { apiconnector } from '@/config/Apiconnector'
import { Star } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Page = ({ params }) => {
    const id = params.id
    const [exploreData, setexploreData] = useState("")
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await apiconnector('POST', `/api/place-by-id`, { id })
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
                <div className="w-full bg-black  min-h-screen max-w-screen-xl mx-auto" >
                    <div className=" py-20 max-w-[900px] mx-auto lg:grid lg:grid-cols-2 grid-cols-1 gap-2 rounded-xl cursor-pointer hidden">
                        <div className=" w-full grid grid-cols-1 gap-1 ">
                            <Image
                                src={exploreData?.image1}
                                width={200}
                                height={200}
                                className=" min-h-[600px] w-full h-full object-cover hover:scale-105 transition-all duration-20 hover:grayscale"
                            />
                        </div>
                        <div className=" grid lg:grid-cols-2 grid-cols-1 gap-2">
                            <Image
                                src={exploreData?.image2}
                                width={200}
                                height={200}
                                className=" w-full h-full object-cover rounded-sm hover:scale-105 transition-all duration-20 hover:grayscale"
                            />
                            <Image
                                src={exploreData?.image3}
                                width={200}
                                height={200}
                                className=" w-full h-full object-cover rounded-sm hover:scale-105 transition-all duration-20 hover:grayscale"
                            />
                            <Image
                                src={exploreData?.image4}
                                width={200}
                                height={200}
                                className=" w-full h-full object-cover rounded-sm hover:scale-105 transition-all duration-20 hover:grayscale"
                            />
                            <Image
                                src={exploreData?.image5}
                                width={200}
                                height={200}
                                className=" w-full h-full object-cover rounded-sm hover:scale-105 transition-all duration-200 hover:grayscale"
                            />
                        </div>
                    </div>

                    <div className=' max-w-screen-xl mx-auto flex flex-col items-center space-y-4 py-3 min-h-screen'>
                        <h1 className=' font-mono text-7xl bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent py-1 font-semibold' >{exploreData?.name}</h1>


                        <p className=' text-gray-400 text-sm text-center max-w-4xl mx-auto'>----- {exploreData?.address} -----</p>
                        <p className=' text-gray-400 text-sm text-center'> Closing time: {exploreData?.closeTime}</p>
                        <p className=' text-gray-400 text-sm text-center'> Opening time: {exploreData?.openTime}</p>
                        <p className=' text-gray-400 text-sm text-center max-w-4xl mx-auto flex gap-2'>{exploreData?.rating} <Star size={20} color="yellow" /> rating</p>


                        <div className=' flex flex-col items-start justify-start w-full max-w-2xl py-20 '>
                            <h2 className=' font-mono text-3xl bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent py-1 font-semibold'>About {exploreData?.name}</h2>
                            <p className=' text-white text-sm  '>{exploreData?.description}</p>
                            <div className=' w-full h-[1px] bg-white my-4'></div>
                        </div>

                        <div className=' flex flex-col items-start justify-start w-full max-w-2xl pb-10 '>
                            <h2 className=' font-mono text-3xl bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent py-1 font-semibold'>By Air</h2>
                            <p className=' text-white text-sm  '>{exploreData?.byAir}</p>
                            <div className=' w-full h-[1px] bg-white my-4'></div>
                        </div>

                        <div className=' flex flex-col items-start justify-start w-full max-w-2xl pb-10 '>
                            <h2 className=' font-mono text-3xl bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent py-1 font-semibold'>By Train</h2>
                            <p className=' text-white text-sm  '>{exploreData?.byTrain}</p>
                            <div className=' w-full h-[1px] bg-white my-4'></div>
                        </div>

                        <div className=' flex flex-col items-start justify-start w-full max-w-2xl pb-10 '>
                            <h2 className=' font-mono text-3xl bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent py-1 font-semibold'>By Road</h2>
                            <p className=' text-white text-sm  '>{exploreData?.byRoad}</p>
                            <div className=' w-full h-[1px] bg-white my-4'></div>
                        </div>

                        <div className=' flex flex-col items-start justify-start w-full max-w-2xl pb-10 text-white '>
                        <h2 className=' font-mono text-3xl bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent py-1 font-semibold'>Travel Details</h2>
                        <p className=" text-sm">
                            The below are the travel details for the {exploreData?.name}
                        </p>
                        <iframe
                            src={exploreData?.mapLink}
                            style={{ border: 0 }}
                            loading="lazy"
                            height={100}
                            width={100}
                            className=" w-full h-[450px]"
                        ></iframe>
                      </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Page