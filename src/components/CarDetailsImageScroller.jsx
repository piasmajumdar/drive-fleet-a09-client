"use client";

import React from "react";

// Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import CarCardAvailable from "./CarCardAvailable";

const CarDetailsImageScroller = ({ car }) => {

    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                navigation={true}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                loop={true}
            >
                {
                    car?.imageURL.map((img, ind) => {
                        return <SwiperSlide key={ind}>
                            <Image
                                src={img &&
                                    img.startsWith("http")
                                    ? img
                                    : "/fallback-image.png"}
                                alt={"Car Image"}
                                width={700}
                                height={500}
                                className="w-full h-[380px] object-cover"
                            />
                        </SwiperSlide>
                    })
                }

            </Swiper>
        </div>
    );
};

export default CarDetailsImageScroller;