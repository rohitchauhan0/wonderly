import Image from 'next/image'
import React from 'react'

const SliceComp = ({src, heading, para}) => {
  return (
    <div className='min-h-screen sticky top-0 left-0 bg-black z-10'>
    <div className="relative w-full h-screen">
      <Image src={src} alt="Background" layout="fill" objectFit="cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10"></div>
      <div className="relative z-20 flex items-center justify-center h-full flex-col space-y-5">
        <h1 className='text-7xl font-semibold bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent text-center py-2'>
          {heading}
        </h1>
        <p className='text-white text-sm text-center max-w-4xl mx-auto'>{para}</p>
      </div>
    </div>
  </div>
  )
}

export default SliceComp