import Navbar from "@/components/Navbar";
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import React from "react";

const ContactPage = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-black text-white py-12 min-h-screen flex items-center justify-center flex-col">
     
     <div className="container mx-auto px-4 flex flex-col md:flex-row bg-gray-900 rounded-xl">
       <div className="md:w-1/2 w-full p-6 ">
         <h2 className="text-5xl font-bold mb-6 bg-gradient-to-b from-yellow-500 to-yellow-700 bg-clip-text text-transparent text-center uppercase">
           Contact Us
         </h2>

         <form className="space-y-6 " >
           <div>
             <label htmlFor="name" className="block text-sm font-medium mb-2">
               Name
             </label>
             <input
               type="text"
               className="w-full p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
               placeholder="Enter your name"
               required
             />
           </div>

           <div>
             <label htmlFor="email" className="block text-sm font-medium mb-2">
               Email
             </label>

             <input
               type="email"
               className="w-full p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
               placeholder="Enter your email"
               required
             />
           </div>

           <div>
             <label
               htmlFor="message"
               className="block text-sm font-medium mb-2"
             >
               Your Message
             </label>

             <textarea
               rows={5}
               className="w-full p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
               placeholder="Enter your message"
               required
             />
           </div>

           <button
             type="submit"
             className="bg-yellow-500 text-white py-3 px-6 rounded-lg"
           >
             Send Message
           </button>
         </form>
       </div>

       <div className="md:w-1/2 w-full p-6 flex flex-col justify-center">
         <h2 className="text-3xl font-bold mb-6 bg-gradient-to-b from-yellow-500 to-yellow-700 bg-clip-text text-transparent">
           Get In Touch
         </h2>

         <p className="mb-4">
           If you have any questions, please don't hesitate to contact us
         </p>

         <div className="mb-4">
           <h3 className="text-lg font-semibold">Address</h3>

           <p className="text-gray-300">123, Main Street, Anytown</p>
         </div>

         <div className="mb-4">
           <h3 className="text-lg font-semibold">Phone</h3>
           <a href="tel:+1234567890" className="text-yellow-300">
             +1 234 567 890
           </a>
         </div>

         <div className="mb-4">
           <h3 className="text-lg font-semibold">Email</h3>
           <a href="mailto:info@example.com" className="text-yellow-300">
             info@example.com
           </a>
         </div>

         <div className="mb-4">
           <h3 className="text-lg font-semibold">Follow Us</h3>
           <div className="space-x-4 flex flex-wrap">
             <a href="#" className="text-yellow-300 flex items-center ga-x-2">
               <FacebookIcon />
               Facebook
             </a>
             <a href="#" className="text-yellow-300 flex items-center gap-x-2">
               <TwitterIcon /> Twitter
             </a>
             <a href="#" className="text-yellow-300 flex items-center gap-x-2">
               <LinkedinIcon /> LinkedIn
             </a>
           </div>
         </div>
       </div>
     </div>
   </div>
    </>
  );
};

export default ContactPage;