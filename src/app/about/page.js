import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

// const TeamMember = ({ name, title, image, description }) => (
//   <div className="p-6 bg-gradient-to-br from-gray-700 via-gray-800 to-black rounded-lg hover:shadow-xl transition duration-300 hover:scale-105">
//     <Image
//       width={200}
//       height={200}
//       src={image}
//       alt={name}
//       className="w-40 h-40 mx-auto rounded-full mb-4 object-cover"
//     />
//     <h3 className="text-2xl   font-semibold text-yellow-400">{name}</h3>
//     <p className="text-yellow-400  ">{title}</p>
//     <p className="text-lg">{description}</p>
//   </div>
// );

// const Testimonial = ({ name, feedback, image }) => (
//   <div className="p-6 bg-gradient-to-br from-gray-700 via-gray-800 to-black rounded-lg hover:shadow-xl transition duration-300">
//     <Image
//       width={200}
//       height={200}
//       src={image}
//       alt={name}
//       className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
//     />
//     <h4 className="text-xl   font-semibold text-yellow-400">{name}</h4>
//     <p className="text-lg italic text-yellow-300">"{feedback}"</p>
//   </div>
// );

const AboutPage = () => {
  return (
    <>
    <Navbar/>
      <div className="bg-black text-white min-h-screen font-sans">
        <header
          className="w-full h-[80vh] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://wallpaperaccess.com/full/254381.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="text-center px-4">
            <h1 className="text-6xl   font-bold bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent mb-4">
              About Our Journey
            </h1>
            <p className="text-lg font-bold md:text-2xl max-w-2xl mx-auto">
              Explore the world with us. Our tours are designed to give you
              unforgettable experiences while immersing you in different
              cultures, landscapes, and wonders.
            </p>
          </div>
        </header>

        <section className="py-16 bg-black px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl   font-bold text-yellow-400 mb-8">
              Our Vision & Mission
            </h2>
            <div className="md:flex space-y-8 md:space-y-0 md:space-x-12">
              <div className="md:w-1/2 p-6 bg-black rounded-lg hover:shadow-lg transition duration-300 ease-in-out">
                <h3 className="text-2xl   font-semibold text-yellow-400">
                  Our Vision
                </h3>
                <p className="text-lg">
                To be the leading travel service provider, offering the most immersive and enriching tour experiences across the globe. We strive to connect travelers with unique cultures, breathtaking landscapes, and unforgettable adventures that inspire a deeper appreciation for the world around us. Our commitment to exceptional service, sustainability, and innovation drives us to craft personalized itineraries that cater to the diverse interests and preferences of every traveler. We aim to foster meaningful connections between people and places, promoting responsible tourism that benefits local communities while creating lifelong memories for our clients. Together, we envision a world where travel is not just a destination, but a transformative journey that enriches lives and opens hearts.
                </p>
              </div>

              <div className="md:w-1/2 p-6 bg-black rounded-lg hover:shadow-lg transition duration-300 ease-in-out">
                <h3 className="text-2xl   font-semibold text-yellow-400">
                  Our Mission
                </h3>
                <p className="text-lg">
                To create unforgettable travel experiences through meticulously curated tours, exceptional service, and unparalleled attention to detail. We are dedicated to connecting people to diverse cultures and breathtaking destinations around the world, ensuring each journey is not only a trip but a transformative adventure. Our passionate team of travel experts works tirelessly to design personalized itineraries that reflect the unique interests and desires of every traveler, while our commitment to quality and authenticity guarantees a seamless and enriching experience. By fostering genuine connections between our clients and the places they visit, we aim to inspire a deeper understanding and appreciation of the world, creating lasting memories that resonate long after the journey ends.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-black px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl   font-bold text-yellow-400 mb-12">
              What We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="p-6 bg-gradient-to-br from-gray-700 via-gray-800 to-black rounded-lg hover:shadow-xl transition duration-300 hover:scale-105">
                <img
                  src="https://th.bing.com/th/id/OIP.uisab5I1Rk89EC3j9QW1YQHaEK?rs=1&pid=ImgDetMain"
                  alt="Personalized Tours"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl   font-semibold text-yellow-400">
                  Personalized Tour
                </h3>
                <p className="text-lg">
                  We offer customized tours to cater to your preferences,
                  ensuring that you get the most out of every destination.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-gray-700 via-gray-800 to-black rounded-lg hover:shadow-xl transition duration-300 hover:scale-105">
                <img
                  src="https://wallpapercave.com/wp/wp6225612.jpg"
                  alt="Luxury Stays"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl   font-semibold text-yellow-400">
                  Luxury Stays
                </h3>
                <p className="text-lg">
                  We ensure that you enjoy luxury accommodations tailored to
                  your preferences and budget.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-gray-700 via-gray-800 to-black rounded-lg hover:shadow-xl transition duration-300 hover:scale-105">
                <img
                  src="https://wallpaperaccess.com/full/1431673.jpg"
                  alt="Guided Experiences"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl   font-semibold text-yellow-400">
                  Guided Experience
                </h3>
                <p className="text-lg">
                  Our expert guides ensure you explore every hidden gem and get
                  a deeper understanding of the culture.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="py-16 bg-black px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl   font-bold text-yellow-400 mb-12">
              Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <TeamMember
                name="Rohit Chauhan"
                title="Website Developer (Founder)"
                image="https://media.licdn.com/dms/image/v2/D4D35AQEiObQloOpm0g/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1719446155159?e=1728028800&v=beta&t=byudY5vU7Is_2XvGirqfoC5j7BOf2-FTXguh1Q3QBV0"
                description="Rohit is a passionate web developer who founded our company with a vision to connect people through technology and travel."
              />
              <TeamMember
                name="Jane Smith"
                title="Website Developer (Co-Founder)"
                image="https://ajay-portfolio-theta.vercel.app/assets/ajayPfp-BFZUmIeH.jpg"
                description="Ajay is expertise in web development and design has been instrumental in shaping our online presence and user experience."
              />
            </div>
          </div>
        </section> */}

        <section className="py-16 bg-gradient-to-b from-yellow-500 to-yellow-800 text-black text-center">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl   font-bold mb-4">
              Ready for an Adventure?
            </h2>
            <p className="text-lg mb-6">
              Join us for a journey of a lifetime. Book your next tour today and
              create memories that will last forever.
            </p>
            <a
              href="/contact"
              className="px-6 py-3 bg-black text-yellow-400 font-semibold rounded-lg hover:bg-gray-900 transition duration-300  "
            >
              Contact Us
            </a>
          </div>
        </section>

        {/* <section className="py-16 bg-black px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl   font-bold text-yellow-400 mb-12">
              Testimonials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Testimonial
                name="Alice Johnson"
                feedback="I had an amazing experience with this travel company! The personalized tour was everything I hoped for and more."
                image="https://plus.unsplash.com/premium_photo-1688572454849-4348982edf7d?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <Testimonial
                name="Michael Brown"
                feedback="Luxury stays and guided experiences made my trip unforgettable. Highly recommend!"
                image="https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
          </div>
        </section> */}

        {/* FAQ Section */}
        <section className="py-16 bg-black px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl   font-bold text-yellow-400 mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-gray-700 via-gray-800 to-black rounded-lg p-6 hover:shadow-xl transition duration-300">
                <h3 className="text-2xl   font-semibold text-yellow-400">
                  1. What types of tours do you offer?
                </h3>
                <p className="text-lg">
                  We offer a variety of tours including personalized trips,
                  luxury vacations, and guided experiences across numerous
                  destinations.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-700 via-gray-800 to-black rounded-lg p-6 hover:shadow-xl transition duration-300">
                <h3 className="text-2xl   font-semibold text-yellow-400">
                  2. How can I book a tour?
                </h3>
                <p className="text-lg">
                  You can book a tour through our website or by contacting our
                  customer service team who will assist you with the booking
                  process.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-700 via-gray-800 to-black rounded-lg p-6 hover:shadow-xl transition duration-300">
                <h3 className="text-2xl   font-semibold text-yellow-400">
                  3. Are the tours customizable?
                </h3>
                <p className="text-lg">
                  Yes! We offer customizable tours to suit your preferences,
                  ensuring you have the best experience tailored to your
                  desires.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-700 via-gray-800 to-black rounded-lg p-6 hover:shadow-xl transition duration-300">
                <h3 className="text-2xl   font-semibold text-yellow-400">
                  4. What is included in the tour package?
                </h3>
                <p className="text-lg">
                  Each tour package varies, but typically includes
                  accommodation, meals, transportation, and guided services.
                  Please check the specific tour details for more information.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-700 via-gray-800 to-black rounded-lg p-6 hover:shadow-xl transition duration-300">
                <h3 className="text-2xl   font-semibold text-yellow-400">
                  5. Do you offer travel insurance?
                </h3>
                <p className="text-lg">
                  We recommend purchasing travel insurance for your trip, and
                  can provide recommendations for trusted insurance providers.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-700 via-gray-800 to-black rounded-lg p-6 hover:shadow-xl transition duration-300">
                <h3 className="text-2xl   font-semibold text-yellow-400">
                  6. What is your cancellation policy?
                </h3>
                <p className="text-lg">
                  Our cancellation policy varies by tour. Please refer to the
                  specific tour details for cancellation terms, or contact our
                  support for further assistance.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-700 via-gray-800 to-black rounded-lg p-6 hover:shadow-xl transition duration-300">
                <h3 className="text-2xl   font-semibold text-yellow-400">
                  7. How can I contact customer support?
                </h3>
                <p className="text-lg">
                  You can reach our customer support team through the contact
                  form on our website or by emailing support@yourwebsite.com.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <Footer /> */}
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;