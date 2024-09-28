"use client";
import { Facebook, Link, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-gradient-to-t from-yellow-500 via-yellow-700 to-black text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="mb-4 flex items-center space-x-5">
            <Image src="/logo.jpeg" alt="Logo" width={200} height={200} className=" h-20 w-20 rounded-full" />
          <h3 className="text-xl font-bold mb-4">Wonderly</h3>
          </div>
          <p className="text-gray-400 rounded-t-sm">
            We offer amazing travel packages and experiences across the world.
            Explore, discover, and embark on unforgettable journeys with us.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="cursor-pointer sp-y-2">
            <li className="mb-2 hover:text-yellow-500">Home</li>
            <li className="mb-2 hover:text-yellow-500">Tours and Packages</li>
            <li className="mb-2 hover:text-yellow-500">About Us</li>
            <li className="mb-2 hover:text-yellow-500">Contact US</li>
            <li className="mb-2 hover:text-yellow-500">Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Contact US</h3>

          <ul className="cursor-pointer sp-y-2">
            <li className="mb-2 hover:text-yellow-500">
              123 Main Street, Anytown, USA
            </li>
            <li className="mb-2 hover:text-yellow-500">123-456-7890</li>
            <li className="mb-2 hover:text-yellow-500">Uqg5k@example.com</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Social Media</h3>

          <ul className="cursor-pointer sp-y-2">
            <li className="mb-2 hover:text-yellow-500">
              <div className="flex items-center gap-x-2">
                <Facebook />
                Facebook
              </div>
            </li>
            <li className="mb-2 hover:text-yellow-500">
              <div className="flex items-center gap-x-2">
                <Twitter /> Twitter
              </div>
            </li>
            <li className="mb-2 hover:text-yellow-500">
              <div className="flex items-center gap-x-2">
                <Linkedin /> LinkedIn
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;