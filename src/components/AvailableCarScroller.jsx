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

const AvailableCarScroller = ({ cars }) => {

    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                breakpoints={{
                    500: {
                        slidesPerView: 2,
                    },
                }}
                navigation={true}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                loop={true}
                preventClicks={false}
                preventClicksPropagation={false}
            >
                {
                    cars.map((car, ind) => {
                        return <SwiperSlide key={ind}>
                            <CarCardAvailable car={car}></CarCardAvailable>
                        </SwiperSlide>
                    })
                }

            </Swiper>
        </div>
    );
};

export default AvailableCarScroller;