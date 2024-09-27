"use client"
import { createPayment } from '@/lib/book-tour'
import React, { useState } from 'react'

const BookTour = ({ amount, tourId, setModal }) => {

   const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    amount: amount,
    tourId: tourId
   })

   const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
   }

    const handleSubmit = async(e) => {
        e.preventDefault();
        await createPayment(formData);
    }
    return (
        <div className="fixed top-0 left-0 min-h-screen bg-black/50 backdrop-blur-sm w-screen flex items-center justify-center">
            <div className="h-[600px] w-[500px] bg-slate-50 rounded-xl overflow-y-auto p-3 flex flex-col  space-y-10 relative">

                <div className="absolute top-0 right-0 p-4 cursor-pointer" onClick={() => setModal(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <div>
                    <p className="text-3xl font-bold text-center">Book Tour</p>
                    <p className="text-center">Enter your details</p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
            <label
              htmlFor="name"
              className="block text-left font-semibold text-gray-700 mb-2"
            >
               Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              required
              onChange={handleChange}
            />
          </div>
          <div className="relative">
            <label
              htmlFor="name"
              className="block text-left font-semibold text-gray-700 mb-2"
            >
              Email
            </label>

            <input
              type="text"
              placeholder="Enter your email"
              name="name"
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              required
              onChange={handleChange}
            />
          </div>

          <div className="relative">
            <label
              htmlFor="name"
              className="block text-left font-semibold text-gray-700 mb-2"
            >
              Phone
            </label>

            <input
              type="text"
              placeholder="Enter your phone number"
              name="name"
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              required
              onChange={handleChange}
            />
          </div>
        
          <button
            type="submit"
            className="w-full p-3  bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-lg text-white font-bold hover:bg-yellow-600 transition duration-300"
          >
            Book Now
          </button>

          </form>
            </div>

        </div>
    )
}

export default BookTour