"use client"
import { apiconnector } from '@/config/Apiconnector'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import BookTour from './book-tour'

const Package = () => {
    const [packageData, setpackageData] = useState([])
  const [payModal, setpayModal] = useState(false)


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await apiconnector('GET', '/api/package')
                setpackageData(response.data.data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchData()

    }, [])
    return (
     <>
        <div className=' max-w-screen-xl mx-auto flex flex-col items-center justify-center space-y-10 py-20'>
            <h1 className=' font-mono text-7xl bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent py-1 font-semibold' >Tour Packages</h1>
            <div className='  grid grid-cols-4 gap-8'>
                {
                    packageData.map((data) => (
                        <div className=' flex flex-col  gap-1 items-center  justify-between border-2 p-3 rounded-xl border-yellow-600 bg-gradient-to-b from-black via-yellow-500/50 to-yellow-700/50 hover:scale-105 transition-all duration-200' key={data._id}>

                          <div>
                          <div className=' h-64 w-64 '>
                           <div className="relative bg-image">
                                <Image src={data.image} alt="Background" layout="fill" objectFit="cover" className=' rounded-xl' />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-xl "></div>
                            </div>
                            
                           </div>
                          <div className=' flex flex-col items-center justify-center'>
                          <p className='  text-white text-lg font-semibold'>{data.name}</p>
                            <p className='  text-gray-400 text-xs text-center'>{data.description.slice(0, 100)}</p>
                            <p className='  text-yellow-500 text-lg font-semibold'>₹ {data.price}</p>
                            <p className='  text-white text-xs text-center'>Only {data?.member} Members are allowed</p>
                            <ul className=' flex flex-col gap-3 items-start w-full mt-9 list-disc px-3'>
                              <li className='  text-white text-xs '>  {data?.additionalPlaceInfo[0]}</li>
                              <li className='  text-white text-xs '>  {data?.additionalPlaceInfo[1]}</li>
                            </ul>
                          </div>
                          </div>
                            <button className=' w-fit h-fit bg-gradient-to-r from-yellow-500 to-yellow-700 px-7 py-1 rounded-lg mt-5' onClick={() => setpayModal({
                                amount: data.price,
                                tourId: data._id

                            })}>Book Now</button>
                        </div>
                    ))
                }
            </div>

        </div>
        {
            payModal && <BookTour setModal={setpayModal} amount={payModal.amount} tourId={payModal.tourId}  />
        }
     </>
    )
}

export default Package