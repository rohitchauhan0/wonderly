"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import Image from "next/image";
import "./swiper.css";

const ImageSwiper = ({ places }) => {
    console.log(places);
  return (
    <div className="h-full flex items-center justify-center lg:mt-0 mt-20">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        loopedSlides={true}
        loading="lazy"

        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          stopOnLastSlide: false,
        }}
        navigation={true}
        pagination={{ clickable: true }}
        className="mySwiper  lg:max-h-[400px] flex items-center justify-center "
      >
        <SwiperSlide className=" max-h-[400px] min-h-[400px]">
          <Image
            src={ places?.image1}
            alt=""
            width={500}
            height={500}
            loading="lazy"
            className="w-full h-full lg:object-cover object-contain lg:min-h-[350px] min-h-[300px] max-h-[300px] lg:max-h-[350px] rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide className=" max-h-[400px] min-h-[400px]">
          <Image
            width={500}
            height={500}
            src={ places?.image2}
            loading="lazy"

            alt=""
            className="w-full h-full lg:object-cover object-contain lg:min-h-[350px] min-h-[300px] max-h-[300px] lg:max-h-[350px] rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide className=" max-h-[400px] min-h-[400px]">
          <Image
            width={500}
            height={500}
            src={ places?.image3}
            loading="lazy"

            alt=""
            className="w-full h-full lg:object-cover object-contain lg:min-h-[350px] min-h-[300px] max-h-[300px] lg:max-h-[350px] rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide className=" max-h-[400px] min-h-[400px]">
          <Image
            width={500}
            height={500}
            src={ places?.image4}
            alt=""
            className="w-full h-full lg:object-cover object-contain lg:min-h-[350px] min-h-[300px] max-h-[300px] lg:max-h-[350px] rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide className=" max-h-[400px] min-h-[400px]">
          <Image
            width={100}
            height={100}
            src={ places.image5}
            alt=""
            className="w-full h-full lg:object-cover object-contain lg:min-h-[350px] min-h-[300px] max-h-[300px] lg:max-h-[350px] rounded-xl"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImageSwiper;