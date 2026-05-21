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

const AvailableCarScroller = ({ cars }) => {
    const { title, image } = tile;

    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                navigation={true}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                loop={true}
            >
                {
                    image.map((img, ind) => {
                        return <SwiperSlide key={ind}>
                            <Image
                                src={img}
                                alt={title}
                                width={1000}
                                height={700}
                                className="w-full h-[400px] object-cover"
                            />
                        </SwiperSlide>
                    })
                }

            </Swiper>
        </div>
    );
};

export default AvailableCarScroller;